import { Component } from "@angular/core";
import { ModalController, ViewController } from 'ionic-angular';
import { SignupModal } from '../signup/signup';
//import { anchrEncrypt } from 'anchrSecurity'

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
            }

        });

        signup.present();

    }

    signUpLogin(registeredUser) {

        this.vwCtrl.dismiss(registeredUser);

    }

    login() {

        //get userId based on username
        //let encrypted = this.security.encrypt(key);

        //match password
        // try {

        //     switch (this.security.check(encrypted, key)) {
        //         case true:
        //             //login successfully
        //             // let valid_id = 999;
        //             // this.vwCtrl.dismiss(valid_id);
        //             break;
        //         case false:
        //             this.isValid = true;
        //             break;
        //         default:
        //             this.isValid = true;
        //             break;
        //     }
        // } catch (err) {

        // }
        if (this.user == "admin" && this.key == "123") {
            let valid_id = 999;
            this.vwCtrl.dismiss(valid_id);
        }else{
            this.isValid = true;
        }

    }
}