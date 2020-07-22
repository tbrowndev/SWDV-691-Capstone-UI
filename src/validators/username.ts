import { FormControl } from '@angular/forms';

export class UsernameValidator {
    static checkUsername( control: FormControl): any {
        if (control.value.toLowerCase() == "admin"){
            return{
                "username already taken": true
            };
        }
    }
}