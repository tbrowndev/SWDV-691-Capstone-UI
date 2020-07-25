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

    fieldsRequired: boolean = false;

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
            // sends this data to the database to be stored and retrieves user id
            let registered_user_id = 999; // this is the field that is pulled from the database
            this.startRegisteredUser(registered_user_id);
        }
        else{
            this.fieldsRequired = true;
        }
    }

    startRegisteredUser(id:number){
        //passes valid username and password to login page
        this.vwCtrl.dismiss(id);
    }

    backToLogin(){
        this.vwCtrl.dismiss()
    }
}