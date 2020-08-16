import { Component } from "@angular/core";
import { ModalController, ViewController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-milestones',
    templateUrl: 'milestones.html'
})
export class MilestonesModal {

    milestones = [];

    constructor(public mdlCtrl: ModalController, public vwCtrl: ViewController, public navParams: NavParams) {

        this.milestones = navParams.get("milestones");
        
    }

    close() {
        this.vwCtrl.dismiss()
    }
}