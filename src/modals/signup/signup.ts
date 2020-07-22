import { Component } from "@angular/core";
import { ModalController, ViewController} from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UsernameValidator } from '../../validators/username'

@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html'
})
export class SignupModal {

    public formData: FormGroup;

    inputErrors = [];

    constructor(public mdlCtrl: ModalController, public vwCtrl: ViewController, public frmBuilder: FormBuilder){

        this.formData = frmBuilder.group({
            firstname: ['', Validators.compose([Validators.maxLength(20), Validators.pattern('[a-zA-Z]*'), Validators.required])],
            lastname: ['', Validators.compose([Validators.maxLength(20), Validators.pattern('[a-zA-Z]*'), Validators.required])],
            email: ['', Validators.compose([Validators.maxLength(100), Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'), Validators.required])],
            phone: ['', Validators.compose([Validators.maxLength(10), Validators.pattern('[0-9]*'), Validators.required])],
            username: ['', Validators.compose([UsernameValidator.checkUsername, Validators.required])],
            password: ['', Validators.compose([Validators.minLength(8), Validators.required])]
        });
    }

    registerUser(){

        if(this.formData.valid){
            //console.log("User Registered!")
            //console.log(this.formData.value)
            // sends this data to the database to be stored
            this.passRegisteredUser();
        }
    }

    passRegisteredUser(){
        //passes valid username and password to login page
        let registeredData = {
            "username": this.formData.controls.username.value,
            "password": this.formData.controls.password.value
        }
        this.vwCtrl.dismiss(registeredData);
    }

    backToLogin(){
        this.vwCtrl.dismiss()
    }
}