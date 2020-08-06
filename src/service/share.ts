import { Component } from "@angular/core";
import { ToastController } from 'ionic-angular';

@Component({
    template:""
})
export class Share{

    items = {}
    constructor(private toasCtrl: ToastController){
    }

    presentToast(toast_message:string){
        let toast = this.toasCtrl.create({
            message: toast_message,
            duration: 3000,
            position: 'bottom'
        });

        toast.present();
    }
}