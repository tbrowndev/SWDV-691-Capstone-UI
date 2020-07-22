import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController} from 'ionic-angular';
import { LoginModal } from '../../modals/login/login'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any;

  constructor(public navCtrl: NavController, public mdlCtrl: ModalController) {

    this.loginCommand()
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
    this.user = {
      "firstname": "John",
      "lastname": "Smith",
      "email": "jsmith@me.com",
      "phone": 3145550153,
      "username": "admin123"
    }
  }
}
