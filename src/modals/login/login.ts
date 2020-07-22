import { Component } from "@angular/core";
import { ModalController, ViewController } from 'ionic-angular';
import { SignupModal } from '../signup/signup'

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginModal {

    username: string;
    key: string;

    constructor(public mdlCtrl: ModalController, public vwCtrl: ViewController) {
    }

    startSignup() {

        //console.log("starting Signup")
        let signup = this.mdlCtrl.create(SignupModal, null, { showBackdrop: false, enableBackdropDismiss: false });
        signup.onDidDismiss(creds => {

            if (creds !== undefined) {
                this.username = creds["username"];
                this.key = creds["password"];
                this.login();
            }

        })
        signup.present();

    }

    login() {

        //send username and password to database and get the user ID of who is trying to login
        if (this.username) {
            if (this.username == "admin123" && this.key == "admin123") {
                this.username = null;
                this.key = null;
                this.passValidId();
            }
        }

    }

    passValidId() {
        //passes valid id to home page to retrieve user data
        let validId = 9999
        this.vwCtrl.dismiss(validId)
    }
}