import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { LoginModal } from '../../modals/login/login'
import { MenuController } from 'ionic-angular'
import { User, Post } from '../../objects/objectFactory'
import { PostPage } from '../post/post'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: User = new User();

  recentPosts: Post[] = [];

  constructor(public navCtrl: NavController, public mdlCtrl: ModalController, public menuCtrl: MenuController) {
    //console.log(typeof(this.user));
    this.loginCommand();
  }

  showUser() {
    this.menuCtrl.open();
  }

  loginCommand() {

    let login = this.mdlCtrl.create(LoginModal, null, { showBackdrop: false, enableBackdropDismiss: false });

    login.onDidDismiss(userId => {
      this.setUserData(userId);
    });

    login.present();

  }

  getRecentPosts(userId: number) {

    //Go to server and retrieve all recent posts all groups user is associated with
    for (let i = 0; i < 15; i++) {

      let p = new Post();
      p.setId(i);
      p.setGroupId(i);
      p.setMemberId(i);
      p.groupName = "Group " + i;
      p.memberName = "Member " + i;
      p.postData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut felis neque. Cras nec erat euismod, ultricies neque sagittis, gravida magna. Proin nec dignissim ipsum, quis sollicitudin neque. Vestibulum mattis justo turpis, sit amet tristique neque condimentum id. Curabitur ultrices dignissim gravida. Duis id ligula faucibus, blandit risus suscipit, semper sem."
      p.timestamp = new Date();
      this.recentPosts.push(p);

    }
  }

  continueRecentPosts(infiniteScroll){
    setTimeout( () =>{
      for(let i = 0; i< 15; i++){
        let p = new Post();
      p.setId(i);
      p.setGroupId(i);
      p.setMemberId(i);
      p.groupName = "Group " + i;
      p.memberName = "Member " + i;
      p.postData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut felis neque. Cras nec erat euismod, ultricies neque sagittis, gravida magna. Proin nec dignissim ipsum, quis sollicitudin neque. Vestibulum mattis justo turpis, sit amet tristique neque condimentum id. Curabitur ultrices dignissim gravida. Duis id ligula faucibus, blandit risus suscipit, semper sem."
      p.timestamp = new Date();
      this.recentPosts.push(p);
      }
      infiniteScroll.complete();
    }, 500);
  }

  setUserData(userId: number) {

    //Goes to server again and gets the user information that has been stored
    this.user.name = "John Smith";
    this.user.email = "jsmith@gmail.com";
    this.user.phone = 3148675309;
    this.user.username = "jsmith229";
    //calls the next function to get posts for user
    this.getRecentPosts(userId);

  }

  postSelected(post){
    this.navCtrl.push(PostPage, {
      selectedPost: post,
    })
  }

}
