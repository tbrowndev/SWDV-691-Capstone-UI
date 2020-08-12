import { Component } from "@angular/core";
import { ToastController, AlertController, ActionSheetController } from 'ionic-angular';
import { Group } from "../objects/objectFactory";
import { Group_DataProvider } from "./service";

@Component({
    template:""
})
export class Share{

    items = {}
    constructor(private toasCtrl: ToastController, private alertCtrl: AlertController, private actionCtrl:ActionSheetController, private groupService: Group_DataProvider){
    }

    /**
     * Displays a message to the user
     * @param toast_message the message to display to the user
     */
    presentToast(toast_message:string){
        let toast = this.toasCtrl.create({
            message: toast_message,
            duration: 3000,
            position: 'bottom'
        });

        toast.present();
    }

    /**
     * Displays the options for a group, edit or delete
     * @param group the group object to perform the action on
     */
    presentGroupOptions(group:Group){
        let options = this.actionCtrl.create({
            title: "Group Options",
            buttons:[
                // {
                //     text: "Edit",
                //     handler: () => {
                //         //handles editing a group
                //     }
                // },
                {
                    text: "Delete",
                    role:"destructive",
                    handler:() => {
                        this.confrmGroupDeletion(group);
                    }
                }
            ]
        });

        options.present();
    }

    /**
     * internal method to confirms deleteion of the group
     * @param group the group object
     */
    private confrmGroupDeletion(group:Group){
        let alert = this.alertCtrl.create({
            title: "Are you Sure?",
            subTitle: "Delete "+ group.name,
            message: "All members, milestones, and posts wil be removed. This action cant be undone",
            buttons: [
                {
                    text: "Delete",
                    role: "cancel",
                    handler:()=>{
                        this.groupService.delete_group(group.id);
                    }
                },
                {
                    text: "Cancel",
                    handler:()=>{
                        //left blacnk intentially
                    }
                }
            ]
        });

        alert.present();
    }

    /**
     * Displays alert to the user
     * @param alert_title the title of the alert to show user ex. Error, Information
     * @param alert_message the message to display ot the user
     */
    presentAlert(alert_title:string, alert_message:string){
        let alert = this.alertCtrl.create({
            title: alert_title,
            message: alert_message,
            buttons: ["Dismiss"]
        });

        alert.present();
    }

    /**
     * gives the time different between the inputted date and time and the urrent date and time
     * @param date a date less than the current date
     */
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