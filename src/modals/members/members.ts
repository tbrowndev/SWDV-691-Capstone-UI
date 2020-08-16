import { Component } from "@angular/core";
import { ModalController, ViewController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-members',
    templateUrl: 'members.html'
})
export class MembersModal {
    members = [];
    constructor(public mdlCtrl: ModalController, public vwCtrl: ViewController, public navParams: NavParams) {

        this.members = navParams.get("members");

    }

    close() {
        this.vwCtrl.dismiss();
    }
}