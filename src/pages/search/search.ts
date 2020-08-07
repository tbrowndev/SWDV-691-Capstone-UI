import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Group } from '../../objects/objectFactory';
import { GroupPage } from '../group/group';
import { Group_DataProvider } from '../../service/service';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  search_term: string;
  groups: Group[] = [];
  errorMessage:any;

  constructor(public navCtrl: NavController, public groupService: Group_DataProvider) {

  }

  onInput() {
    if (this.search_term.length > 0) {
      this.groupService.get_group_search(this.search_term).subscribe(
        res => this.groups = res.found_groups,
        error => this.errorMessage = <any>error
      )
    }
    else{
      this.groups = [];
    }
  }

  groupSelected(group:Group){
    this.navCtrl.push( GroupPage, {"id": group.id})
  }

}
