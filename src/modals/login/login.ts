import { Component } from "@angular/core";
import { ModalController, ViewController} from 'ionic-angular';
import { SignupModal } from '../signup/signup'

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginModal {

    username:string;
    key: string;
    userId: number;

    constructor(public mdlCtrl: ModalController, public vwCtrl: ViewController){}

    startSignup(){

        //console.log("starting Signup Command")
        let signup = this.mdlCtrl.create(SignupModal);
        signup.present();
    }

    login(){
        console.log(this.username);
        console.log(this.key);
    }

    close(){
        this.vwCtrl.dismiss()
    }
}