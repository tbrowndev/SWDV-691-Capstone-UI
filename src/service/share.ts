import { Component } from "@angular/core";
import { ToastController, AlertController } from 'ionic-angular';

@Component({
    template:""
})
export class Share{

    items = {}
    constructor(private toasCtrl: ToastController, private alertCtrl: AlertController){
    }

    presentToast(toast_message:string){
        let toast = this.toasCtrl.create({
            message: toast_message,
            duration: 3000,
            position: 'bottom'
        });

        toast.present();
    }

    presentAlert(alert_type:string, alert_message:string){
        let alert = this.alertCtrl.create({
            title: alert_type,
            message: alert_message,
            buttons: [
                {
                    text: "OK"
                }
            ]
        });

        alert.present();
    }

    getDisplayDate(date){
        // Split timestamp into [ Y, M, D, h, m, s ]

        var actiondate = new Date(date);
        var today = new Date();
;        if(today.getDate() === actiondate.getDate() && today.getMonth() === actiondate.getMonth() && today.getFullYear() === actiondate.getFullYear()){
            var hourssince =   today.getHours() - actiondate.getHours();
            var minutessince =   today.getMinutes() - actiondate.getMinutes();
            var secondssince =   today.getSeconds() - actiondate.getSeconds();
            if(hourssince > 0){
                date = hourssince+'h';
            }else if(minutessince > 0){
                date = minutessince+'m';
            }else{
                date = secondssince+'s';
            }
        }else{
            var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
            var diffDays = Math.round(Math.abs((today.getTime() - actiondate.getTime())/(oneDay)));
            if(diffDays >= 7){
                date = Math.round(diffDays / 7)+'w';
            }else{
                if(diffDays == 0){
                    diffDays = 1;
                }
                date = diffDays+'d';
            }
        }
        return date;
    }
}