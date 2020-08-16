import { Component } from "@angular/core";
import { ModalController, ViewController } from 'ionic-angular';
import { SignupModal } from '../signup/signup';
import { Auth_DataProvider } from '../../service/service'

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginModal {

    isValid: boolean;
    user: string;
    key: string;

    constructor(public mdlCtrl: ModalController, public vwCtrl: ViewController, private service: Auth_DataProvider) {
    }

    startSignup() {
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
        try {
            this.service.validate_user_cred(this.user, this.key).subscribe( res => {
                if(res.valid){
                    this.vwCtrl.dismiss(res.valid_id);
                }
                else{
                    this.isValid = true;
                }
            })
        } catch (err) {
            console.log(err)
            //handles any error when authenticating user credentials
        }

    }
}