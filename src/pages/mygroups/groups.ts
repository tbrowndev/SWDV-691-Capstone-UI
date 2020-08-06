import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CreateGroupModal } from '../../modals/creategroup/creategroup';
import { Group } from '../../objects/objectFactory';
import { User_DataProvider } from '../../service/service';
import { Share } from '../../service/share';

@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html'
})
export class GroupsPage {

  groups:Group[] = [];

  constructor(public navCtrl: NavController, public mdlCtrl: ModalController, public userService: User_DataProvider, public shared: Share) {

    this.getUserGroups();

  }

  createGroup() {

    let group = this.mdlCtrl.create(CreateGroupModal, null, { 
      showBackdrop: false, 
      enableBackdropDismiss: true });
    group.present();

  }

  getUserGroups(){
    this.userService.get_user_groups(this.shared.items['userId']).subscribe( res => 
      res => this.groups = res
      
    )
  }

}
