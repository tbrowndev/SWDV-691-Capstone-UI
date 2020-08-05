import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { LoginModal } from '../../modals/login/login';
import { MenuController } from 'ionic-angular';
import { User, Post } from '../../objects/objectFactory';
import { PostPage } from '../post/post';
import { User_DataProvider } from '../../service/service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user:any = new User(null, null, null, null, null);

  recentPosts: Post[] = [];

  constructor(public navCtrl: NavController, public mdlCtrl: ModalController, private menuCtrl: MenuController, private userService:User_DataProvider) {
    //console.log(typeof(this.user));
    let login = this.mdlCtrl.create(LoginModal, null, { showBackdrop: false, enableBackdropDismiss: false });

    login.onDidDismiss(userId => {
      this.setUserData(userId);
    });

    login.present();
  }

  ionViewDidLoad() {
    console.log(this.user.id)
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
    this.userService.get_user_information(userId).subscribe(
      user = this.user
    )
    console.log(this.user);
    //calls the next function to get posts for user
    //this.getRecentPosts(userId);

  }

  postSelected(post){
    this.navCtrl.push(PostPage, {
      selectedPost: post,
    })
  }

  logout(){
    this.user = new User(null, null, null, null, null);
    this.navCtrl.popToRoot();
    location.reload();
  }

}
