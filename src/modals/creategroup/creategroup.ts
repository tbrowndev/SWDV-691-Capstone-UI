import { Component } from "@angular/core";
import { ModalController, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Milestone } from "../../objects/objectFactory";

@Component({
    selector: 'page-login',
    templateUrl: 'creategroup.html'
})
export class CreateGroupModal {

    public groupData: FormGroup;
    formValid:boolean = false;
    milestones:Milestone[] = [];
    //milestone data
    name:string;
    order:number;

    constructor(public mdlCtrl: ModalController, public vwCtrl: ViewController, private frmBuilder: FormBuilder) {

        this.groupData = frmBuilder.group({
            name: ['', Validators.compose([Validators.maxLength(45), Validators.required])],
            description: ['', Validators.compose([Validators.maxLength(140), Validators.required])],
            goal: ['', Validators.compose([Validators.maxLength(140), Validators.required])]
        });

    }

    addMilestone(){
        var milestone = new Milestone();
        milestone.name = this.name;
        milestone.order = this.order;
        this.name = null;
        this.order = null;
        this.milestones.push(milestone);
    }

    removeMilestone(index){
        this.milestones.splice(index, 1);
    }

    setupGroup() {

        if (this.groupData.valid) {
            console.log(this.groupData.value)
        }
        else {
            this.formValid = true;
        }
    }

    cancelGroup(){
        this.vwCtrl.dismiss();
    }
}