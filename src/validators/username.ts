import { FormControl } from '@angular/forms';

export class UsernameValidator {
    static checkUsername( control: FormControl): any {
        //send to server to check username
        if (control.value.toLowerCase() == "admin"){
            return{
                "username already taken": true
            };
        }
    }
}