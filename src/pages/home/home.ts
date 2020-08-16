import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { LoginModal } from '../../modals/login/login';
import { MenuController } from 'ionic-angular';
import { User, Post } from '../../objects/objectFactory';
import { PostPage } from '../post/post';
import { User_DataProvider } from '../../service/service'
import { Share } from '../../service/share';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any = new User(null, null, null, null, null);

  recentPosts: Post[] = [];

  constructor(public navCtrl: NavController, public mdlCtrl: ModalController, private menuCtrl: MenuController, private userService: User_DataProvider, public shared: Share) {

    let login = this.mdlCtrl.create(LoginModal, null, { showBackdrop: false, enableBackdropDismiss: false });

    login.onDidDismiss(userId => {
      this.setUserData(userId);
      this.shared.items['userId'] = userId;
      this.getRecentPosts(userId);
    });
    login.present();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.getRecentPosts(this.shared.items['userId']);
      event.complete();
    }, 2000);
  }

  showUser() {
    this.menuCtrl.open();
  }

  getRecentPosts(userId: number) {
    //Go to server and retrieve all recent posts all groups user is associated with
    this.userService.get_user_homefeed(userId).subscribe(
      res => {
        if (res.status == 200) {
          this.recentPosts = res.posts;
        }
      }
    )
  }

  setUserData(userId: number) {

    //Goes to server again and gets the user information that has been stored
    this.userService.get_user_information(userId).subscribe(
      user => {
        this.user = user;
        this.shared.items["user"] = user;
      },
      error => this.shared.presentAlert("Error", "unable to load profile")
    )
  }

  postSelected(post) {
    this.navCtrl.push(PostPage, {
      selectedPost: post,
    })
  }

  logout() {
    this.user = new User(null, null, null, null, null);
    this.navCtrl.popToRoot();
    location.reload();
  }

}
