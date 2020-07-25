import { Component } from "@angular/core";
import { ModalController, ViewController } from 'ionic-angular';
import { SignupModal } from '../signup/signup';
var anchr_encrypt = require("anchr_encrypt");

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginModal {

    isValid: boolean;

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
        let user = document.getElementById("user");
        let key = document.getElementById("key");
        let encrypted = anchr_encrypt.encrypt(key);
        console.log(user);
        console.log(encrypted);

        //match password
        try{

            switch (anchr_encrypt.verifyKey(encrypted, key)) {
                case true:
                    //login successfully
                    let valid_id = 999;
                    this.vwCtrl.dismiss(valid_id);
                    break;
                case false:
                    this.isValid = false;
                    break;
                default:
                    this.isValid = false;
                    break;
            }
        }catch (err){

        }

    }
}