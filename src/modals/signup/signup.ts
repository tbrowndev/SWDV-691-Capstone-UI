import { Component } from "@angular/core";
import { ModalController, ViewController} from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from "@angular/forms";
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

        if(!this.formData.valid){

            this.inputErrors = []

            Object.keys(this.formData.controls).forEach(key => {

                const controlErrors: ValidationErrors = this.formData.get(key).errors;
                if (controlErrors) {
                  Object.keys(controlErrors).forEach(keyError => {
                    this.inputErrors.push({
                      'control': key,
                      'error': keyError
                    });
                  });
                }
              });

              console.log(this.inputErrors);
        } //stay on page as there are issues with user input
        else{
            //console.log("User Registered!")
            //console.log(this.formData.value)
            this.close()
        }
    }

    close(){
        this.vwCtrl.dismiss();
    }
}