import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { LoginModal } from '../../modals/login/login';
import { MenuController } from 'ionic-angular';
import { User, Post } from '../../objects/objectFactory';
import { PostPage } from '../post/post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: User = new User();

  recentPosts: Post[] = [];

  constructor(public navCtrl: NavController, public mdlCtrl: ModalController, private menuCtrl: MenuController) {
    //console.log(typeof(this.user));
    let login = this.mdlCtrl.create(LoginModal, null, { showBackdrop: false, enableBackdropDismiss: false });

    login.onDidDismiss(userId => {
      this.setUserData(userId);
    });

    login.present();
  }

  showUser() {
    this.menuCtrl.open();
  }

  getRecentPosts(userId: number) {

    //Go to server and retrieve all recent posts all groups user is associated with
    for(let i = 0; i< 15; i++){
      let p = new Post(i, i, i, "Member " +i, "Group "+i, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut felis neque. Cras nec erat euismod, ultricies neque sagittis, gravida magna.", new Date());
    this.recentPosts.push(p);
    }
  }

  continueRecentPosts(infiniteScroll){
    setTimeout( () =>{
      for(let i = 0; i< 15; i++){
        let p = new Post(i, i, i, "Member " +i, "Group "+i, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut felis neque. Cras nec erat euismod, ultricies neque sagittis, gravida magna.", new Date());
      this.recentPosts.push(p);
      }
      infiniteScroll.complete();
    }, 500);
  }

  setUserData(userId: number) {

    //Goes to server again and gets the user information that has been stored
    this.user = new User(userId, "John Smith", "jsmith@mycloud.com", 3148675309, "_johnjohn")
    //calls the next function to get posts for user
    //this.getRecentPosts(userId);

  }

  postSelected(post){
    this.navCtrl.push(PostPage, {
      selectedPost: post,
    })
  }

  logout(){
    this.user = new User();
    this.navCtrl.popToRoot();
    location.reload();
  }

}
