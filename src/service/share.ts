import { Component } from "@angular/core";
import { ToastController, AlertController, ActionSheetController, NavController } from 'ionic-angular';
import { Group, Post } from "../objects/objectFactory";
import { Group_DataProvider } from "./service";

@Component({
    template: ""
})
export class Share {

    items = {}
    constructor( public toasCtrl: ToastController, public alertCtrl: AlertController, public actionCtrl: ActionSheetController, public groupService: Group_DataProvider) {
    }

    /**
     * Displays a message to the user
     * @param toast_message the message to display to the user
     */
    presentToast(toast_message: string) {
        let toast = this.toasCtrl.create({
            message: toast_message,
            duration: 3000,
            position: 'bottom'
        });

        toast.present();
    }

    /**
     * Displays alert to the user
     * @param alert_title the title of the alert to show user ex. Error, Information
     * @param alert_message the message to display ot the user
     */
    presentAlert(alert_title: string, alert_message: string) {
        let alert = this.alertCtrl.create({
            title: alert_title,
            message: alert_message,
            buttons: ["Dismiss"]
        });

        alert.present();
    }

    /**
     * Displays the options for a group, edit or delete
     * @param group the group object to perform the action on
     */
    presentGroupOptions(group: Group, nav: NavController) {
        let options = this.actionCtrl.create({
            title: "Group Options",
            buttons: [
                {
                    text: "Delete",
                    role: "destructive",
                    handler: () => {
                        this.confrmGroupDeletion(group, nav);
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
    private confrmGroupDeletion(group: Group, nav:NavController) {
        let alert = this.alertCtrl.create({
            title: "Are you Sure?",
            subTitle: "Delete " + group.name,
            message: "All members, milestones, and posts wil be removed. This action cant be undone",
            buttons: [
                {
                    text: "Delete",
                    role: "cancel",
                    handler: () => {
                        this.groupService.delete_group(group.id).subscribe(res => {
                            if (res.status == 200) {
                                this.presentToast(group.name + " has been deleted!");
                                nav.pop();
                            }
                            else {
                                this.presentToast("Group could not be deleted at this time. Please try again later.")
                            }
                        }
                        )
                    }
                },
                {
                    text: "Cancel",
                    handler: () => {
                        //left blank on purpose
                    }
                }
            ]
        });

        alert.present();
    }

    /**
     * Displays the options for a post, edit or delete
     * @param post the post object to perform the action on
     */
    presentPostOptions(post: Post, nav: NavController) {
        let options = this.actionCtrl.create({
            title: "Post Options",
            buttons: [
                {
                    text: "Delete",
                    role: "destructive",
                    handler: () => {
                        this.confrmPostDeletion(post, nav);
                    }
                }
            ]
        });

        options.present();
    }

    /**
     * internal method to confirms deleteion of the post
     * @param post the group object
     */
    private confrmPostDeletion(post: Post, nav:NavController) {
        let alert = this.alertCtrl.create({
            title: "Are you Sure?",
            subTitle: "Delete Post",
            buttons: [
                {
                    text: "Delete",
                    role: "cancel",
                    handler: () => {
                        this.groupService.delete_post(post.id).subscribe(res => {
                            if (res.status == 200) {
                                this.presentToast("Post has been deleted!");
                                nav.pop();
                            }
                            else {
                                this.presentToast("Post could not be deleted at this time. Please try again later.");
                            }
                        });
                    }
                },
                {
                    text: "Cancel",
                    handler: () => {
                        //left blacnk intentially
                    }
                }
            ]
        });

        alert.present();
    }

    

    /**
     * gives the time different between the inputted date and time and the urrent date and time
     * @param date a date less than the current date
     */
    getDisplayDate(date) {

        var actiondate = new Date(date);
        var today = new Date();
        ; if (today.getDate() === actiondate.getDate() && today.getMonth() === actiondate.getMonth() && today.getFullYear() === actiondate.getFullYear()) {
            var hourssince = today.getHours() - actiondate.getHours();
            var minutessince = today.getMinutes() - actiondate.getMinutes();
            var secondssince = today.getSeconds() - actiondate.getSeconds();
            if (hourssince > 0) {
                date = hourssince + 'h';
            } else if (minutessince > 0) {
                date = minutessince + 'm';
            } else {
                date = secondssince + 's';
            }
        } else {
            var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
            var diffDays = Math.round(Math.abs((today.getTime() - actiondate.getTime()) / (oneDay)));
            if (diffDays >= 7) {
                date = Math.round(diffDays / 7) + 'w';
            } else {
                if (diffDays == 0) {
                    diffDays = 1;
                }
                date = diffDays + 'd';
            }
        }
        return date;
    }
}