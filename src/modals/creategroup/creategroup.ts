import { Component } from "@angular/core";
import { ModalController, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Milestone, Group } from "../../objects/objectFactory";
import { Share } from "../../service/share";
import { Group_DataProvider } from "../../service/service";

@Component({
    selector: 'page-login',
    templateUrl: 'creategroup.html'
})
export class CreateGroupModal {

    public groupData: FormGroup;
    public milestoneData:FormGroup;
    formInValid:boolean = false;
    milestoneInvalid:boolean = false;
    milestones:Milestone[] = [];

    constructor(public mdlCtrl: ModalController, public vwCtrl: ViewController, public frmBuilder: FormBuilder, public shared: Share, public groupServce: Group_DataProvider) {

        this.groupData = frmBuilder.group({
            name: ['', Validators.compose([Validators.maxLength(45), Validators.required])],
            description: ['', Validators.compose([Validators.maxLength(140), Validators.required])],
            goal: ['', Validators.compose([Validators.maxLength(140), Validators.required])]
        });

        this.milestoneData = frmBuilder.group({
            name: ['', Validators.compose([Validators.maxLength(50), Validators.required])],
            order: ['', Validators.compose([Validators.min(1),Validators.max(99), Validators.required])]
        })

    }

    addMilestone(){
        if (this.milestoneData.valid) {
            this.milestones.push(new Milestone(null, null, this.milestoneData.value.name, this.milestoneData.value.order))
        }
        else {
            this.milestoneInvalid = true;
        }
    }

    removeMilestone(index){
        this.milestones.splice(index, 1);
    }

    setupGroup() {

        if (this.groupData.valid) {
            let group = new Group(null, this.groupData.value.name, this.groupData.value.description, this.groupData.value.goal, this.shared.items['userId']);
            this.groupServce.add_new_group(group, this.milestones).subscribe(message => {
                if(message.status == 200){
                    this.shared.presentToast(message.message);
                    this.dismissGroup();
                }
                else{
                    this.shared.presentToast(message.message);
                }
            })
        }
        else {
            this.formInValid = true;
        }
    }

    dismissGroup(){
        this.vwCtrl.dismiss();
    }
}