import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { Group, User, Post } from '../../objects/objectFactory'
import { PostPage } from '../post/post';

@Component({
  selector: 'page-group',
  templateUrl: 'group.html'
})
export class GroupPage {

  curGroup: Group;
  members: User[] = [];
  posts: Post[] = [];

  constructor(public navCtrl: NavController, public navPar: NavParams, private menuCtrl: MenuController) {
    this.curGroup = this.getGroupInfo(this.navPar.get("id"));
    this.getGroupInfo(this.navPar.get("id"));
    this.getGroupMembers();
    this.getGroupPosts(this.navPar.get("id"));

  }

  getGroupInfo(id:number){
    //got to server and get group informaiton
    let groupData = new Group(17234, 23, "Going back to the Gym", "this group was created to help those get motivated to get in the gym", "Slowly work your way into a routine of hitting the gym");
    return groupData;
  }

  getGroupMembers(){
    //go to server and get group members
    this.members = [
      new User(1, "Jane Doe", "jdoe@yahoo.com", 2243241325, "Jdoe243"),
      new User(2, "James Smith", "jsmith@mycloud.com", 5156542212, "smith324")
    ];
  }

  getGroupPosts(id:number){
    //go to server to get posts of related group
    for(let i = 0; i< 10; i++){
      let p = new Post(i, i, i, "Member " +i, "Group "+i, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut felis neque. Cras nec erat euismod, ultricies neque sagittis, gravida magna.", new Date());
    this.posts.push(p);
    }
  }

  continuePosts(infiniteScroll){
    setTimeout( () =>{
      for(let i = 0; i< 10; i++){
        let p = new Post(i, i, i, "Member " +i, "Group "+i, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut felis neque. Cras nec erat euismod, ultricies neque sagittis, gravida magna.", new Date());
      this.posts.push(p);
      }
      infiniteScroll.complete();
    }, 500);
  }

  postSelected(post){
    this.navCtrl.push(PostPage, {
      selectedPost: post,
    })
  }

  showGroupInfo() {
    
    this.menuCtrl.open('right');
  }

}
