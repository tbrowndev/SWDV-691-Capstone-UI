import { Component } from "@angular/core";
import { ModalController, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UsernameValidator } from '../../validators/username'
import { Auth_DataProvider } from '../../service/service'
import { User } from "../../objects/objectFactory";

@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html'
})
export class SignupModal {

    public formData: FormGroup;

    fieldsRequired: boolean = false;

    registrationIssue: boolean = false;

    constructor(public mdlCtrl: ModalController, public vwCtrl: ViewController, public frmBuilder: FormBuilder, private service: Auth_DataProvider) {

        this.formData = frmBuilder.group({
            firstname: ['', Validators.compose([Validators.maxLength(20), Validators.pattern('[a-zA-Z]*'), Validators.required])],
            lastname: ['', Validators.compose([Validators.maxLength(20), Validators.pattern('[a-zA-Z]*'), Validators.required])],
            email: ['', Validators.compose([Validators.maxLength(100), Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'), Validators.required])],
            phone: ['', Validators.compose([Validators.maxLength(10), Validators.pattern('[0-9]*'), Validators.required])],
            username: ['', Validators.compose([UsernameValidator.checkUsername, Validators.required])],
            password: ['', Validators.compose([Validators.minLength(8), Validators.required])]
        });
    }

    registerUser() {

        if (this.formData.valid) {
            // sends this data to the database to be stored and retrieves user id
            let non_user: User = new User(null, this.formData.value.firstname + " " + this.formData.value.lastname, this.formData.value.email, this.formData.value.phone, this.formData.value.username);
            try {
                this.service.register_new_user(non_user, this.formData.value.password).subscribe( res => {
                    this.startRegisteredUser(res.registered_id)
                })
            } catch (err) {
                //log the error for future reference.
            }
        }
        else {
            this.fieldsRequired = true;
        }
    }

    startRegisteredUser(id: any) {
        //passes valid id to login page
        console.log(id);
        this.vwCtrl.dismiss(id);
    }

    backToLogin() {
        this.vwCtrl.dismiss()
    }
}