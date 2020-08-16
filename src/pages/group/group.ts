import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, ModalController } from 'ionic-angular';
import { Group, Post } from '../../objects/objectFactory'
import { PostPage } from '../post/post';
import { Group_DataProvider, User_DataProvider } from '../../service/service';
import { Share } from '../../service/share';
import { MembersModal } from '../../modals/members/members';
import { MilestonesModal } from '../../modals/milestones/milestones';

@Component({
  selector: 'page-group',
  templateUrl: 'group.html'
})
export class GroupPage {

  curGroup: Group = new Group(null, null, null, null, null);
  members = [];
  milestones = [];
  posts: Post[] = [];
  notAMember: boolean = true;
  errorMessage: any;
  postText: string = "";
  lastPostId: number;

  constructor(public mdlCtrl:ModalController, public navCtrl: NavController, public navPar: NavParams, private menuCtrl: MenuController, public groupService: Group_DataProvider, public shared: Share, public userService: User_DataProvider) {
    this.getGroupInfo(this.navPar.get("id"));
    this.isUserMember(this.shared.items["userId"], this.navPar.get("id"))
    this.getGroupMilestones(this.navPar.get("id"));
    this.getGroupMembers(this.navPar.get("id"));
  }

  isUserAdmin(){
    if(this.curGroup.admin == this.shared.items["userId"]){
      return true;
    }else{
      return false;
    }
  }

  showGroupOptions(){
    this.shared.presentGroupOptions(this.curGroup);
  }

  isUserMember(user: number, group: number) {
    this.userService.is_user_a_member(user, group).subscribe(res => {
      if (res.isMember) {
        this.notAMember = false;
        this.getGroupMembers(this.navPar.get("id"));
        this.getGroupPosts(this.navPar.get("id"));
      }
    })
  }

  joinGroup() {
    this.groupService.add_user_to_group(this.shared.items["userId"], this.curGroup.id).subscribe(res => {
      if (res.status == 200) {
        this.shared.presentToast(res.message);
        this.isUserMember(this.shared.items["userId"], this.curGroup.id);
      }
      else{
        this.shared.presentAlert("Error", "Unable to join "+ this.curGroup.name+" at this time. please try again later. ")
      }
    });
  }


  getGroupInfo(id: number) {
    //got to server and get group informaiton
    this.groupService.get_group_information(id).subscribe(
      res => {
        if(res.status == 200){
          this.curGroup = res.group;
        }
        else{
          this.shared.presentAlert("Error", "Unable to get group information. Try again later.")
        }
      }
    )
  }

  getGroupMembers(id: number) {
    //go to server and get members associated with group
    this.groupService.get_group_members(id).subscribe(res => {
      if (res.status == 200){
        this.members = res.members;
      }
      else{
        this.shared.presentAlert("Error", "Unable to get group members at this time");
      }
    })
  }

  getGroupMilestones(id:number){
    this.groupService.get_group_milestones(id).subscribe( res => {
      if(res.status == 200){
        this.milestones = res.milestones;
      }
      else{
        this.shared.presentAlert("Error", "unable to get group milestones at this time");
      }
    })
  }

  addPost() {
    //add post data to database
    if (this.postText.length > 0) {
      this.groupService.add_new_post(this.curGroup.id, this.shared.items['userId'], this.postText).subscribe(
        res => {
          if (res.status = 200) {
            this.shared.presentToast(res.message);
            this.getGroupPosts(this.curGroup.id);
          }
          else{
            this.shared.presentAlert("Error", "Post coud not be created at this time");
          }
        }
      )
      this.postText = "";
    }
  }

  getGroupPosts(id: number) {
    //pull the most recent 10 posts from database for group
    this.posts = [];
    this.groupService.get_group_top_posts(id).subscribe(res => {
      if( res.status == 200){
        res.posts.forEach(post => {
          this.posts.push(post);
        });
      }
      else{
        this.shared.presentAlert("Error", "Unable to retrieve posts at this time. Try again later.");
      }
    })
  }

  continuePosts(infiniteScroll) {
    setTimeout(() => {
      // pull next 10 posts from daatbase for group
      this.groupService.get_group_next_posts(this.curGroup.id, this.lastPostId).subscribe(res => {
        if( res.status == 200){
          res.posts.forEach(post => {
            this.posts.push(post);
          });
        }
        else{
          this.shared.presentAlert("Error", "Unable to retrieve posts at this time. Try again later.");
        }
      })
      infiniteScroll.complete();
    }, 500);
  }

  postSelected(post) {
    this.navCtrl.push(PostPage, {
      selectedPost: post,
    })
  }

  showGroupInfo() {
    this.menuCtrl.open('right');
  }

  showMilestones(){
    let milestoneModal = this.mdlCtrl.create(MilestonesModal,{"milestones": this.milestones});
    milestoneModal.present();
  }

  showMembers(){
    let membersModal = this.mdlCtrl.create(MembersModal,{"members": this.members});
    membersModal.present();
  }

}
