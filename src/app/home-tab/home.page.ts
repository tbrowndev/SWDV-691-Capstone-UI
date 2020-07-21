import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(public modalController: ModalController) {
    this.presentModal();
  }

  async presentModal() {
    let modal = await this.modalController.create({component: LoginPage});
    modal.present();
  }
}

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['home.page.scss']
})
export class LoginPage {

  constructor(public modalController: ModalController) { }

  loginCommand(){
    //console.log("Login Command Selected")
    this.modalController.dismiss()
  }

  signupCommand(){
    //console.log("Login Command Selected")
    this.modalController.dismiss()
  }
}
