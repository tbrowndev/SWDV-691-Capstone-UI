import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController} from 'ionic-angular';
import { LoginModal } from '../../modals/login/login'
import { MenuController } from 'ionic-angular'
import { User } from '../../objects/objectFactory'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: User = new User();

  constructor(public navCtrl: NavController, public mdlCtrl: ModalController, public menuCtrl: MenuController) {
    //console.log(typeof(this.user));
    this.loginCommand();
  }

  showUser(){
    this.menuCtrl.open();
  }

  loginCommand(){
    
    let login = this.mdlCtrl.create(LoginModal, null, {showBackdrop: false, enableBackdropDismiss: false});
    
    login.onDidDismiss(userId => {
      this.getUserData(userId);
    });
    
    login.present();

  }

  getUserData(userId:number){
    //Goes to server again and gets the user information that has been stored
    this.user.name = "John Smith";
    this.user.email = "jsmith@gmail.com";
    this.user.phone = 3148675309;
    this.user.username = "jsmith229"
  }
}
