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
    let login = this.mdlCtrl.create(LoginModal);
    login.present();
  }
}
