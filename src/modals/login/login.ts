import { Component } from "@angular/core";
import { ModalController, ViewController } from 'ionic-angular';
import { SignupModal } from '../signup/signup';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginModal {

    isValid: boolean;
    user: string;
    key: string;

    //security = new anchrEncrypt();

    constructor(public mdlCtrl: ModalController, public vwCtrl: ViewController) {
    }

    startSignup() {

        //console.log("starting Signup")
        let signup = this.mdlCtrl.create(SignupModal, null, { showBackdrop: false, enableBackdropDismiss: false });

        signup.onDidDismiss(registeredUser => {

            if (registeredUser !== undefined) {
                this.signUpLogin(registeredUser);
                registeredUser = null;
            }

        });

        signup.present();

    }

    signUpLogin(registeredUser) {

        this.vwCtrl.dismiss(registeredUser);
        registeredUser = null;

    }

    login() {

        //send to security to check credentials and return if true. 
        if (this.user == "admin" && this.key == "123") {
            this.user = null;
            this.key = null
            let valid_id = 999;
            this.vwCtrl.dismiss(valid_id);
        }else{
            this.isValid = true;
        }

    }
}