import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { Group, User, Post } from '../../objects/objectFactory'
import { PostPage } from '../post/post';
import { Group_DataProvider, User_DataProvider } from '../../service/service';
import { Share } from '../../service/share';

@Component({
  selector: 'page-group',
  templateUrl: 'group.html'
})
export class GroupPage {

  curGroup: Group = new Group(null, null, null, null, null);
  members: User[] = [];
  posts: Post[] = [];
  notAMember: boolean = true;
  errorMessage: any;
  postText:string = "";

  constructor(public navCtrl: NavController, public navPar: NavParams, private menuCtrl: MenuController, public groupService: Group_DataProvider, public shared: Share, public userService: User_DataProvider) {
    this.getGroupInfo(this.navPar.get("id"));
    this.isUserMember(this.shared.items["userId"], this.navPar.get("id"))
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
    });
  }


  getGroupInfo(id: number) {
    //got to server and get group informaiton
    this.groupService.get_group_information(id).subscribe(
      res => this.curGroup = res.group,
      error => this.errorMessage = <any>error
    )
  }

  getGroupMembers(id: number) {
    //go to server and get group members
    this.members = [
      new User(1, "Jane Doe", "jdoe@yahoo.com", 2243241325, "Jdoe243"),
      new User(2, "James Smith", "jsmith@mycloud.com", 5156542212, "smith324")
    ];
  }

  getGroupPosts(id: number) {
    //go to server to get posts of related group
    for (let i = 0; i < 10; i++) {
      let p = new Post(i, i, i, "Member " + i, "Group " + i, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut felis neque. Cras nec erat euismod, ultricies neque sagittis, gravida magna.", new Date());
      this.posts.push(p);
    }
  }

  continuePosts(infiniteScroll) {
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        let p = new Post(i, i, i, "Member " + i, "Group " + i, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut felis neque. Cras nec erat euismod, ultricies neque sagittis, gravida magna.", new Date());
        this.posts.push(p);
      }
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

}
