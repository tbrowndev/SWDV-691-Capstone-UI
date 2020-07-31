import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CreateGroupModal } from '../../modals/creategroup/creategroup';

@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html'
})
export class GroupsPage {

  constructor(public navCtrl: NavController, public mdlCtrl: ModalController) {

  }

  createGroup() {

    let group = this.mdlCtrl.create(CreateGroupModal, null, { 
      showBackdrop: false, 
      enableBackdropDismiss: true });
    group.present();

  }

}
