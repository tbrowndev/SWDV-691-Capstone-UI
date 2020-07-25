import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import { NotificationPage } from '../notifications/notifications';
import { HomePage } from '../home/home';
import { GroupsPage } from '../mygroups/groups'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = NotificationPage;
  tab4Root = GroupsPage;

  constructor() {

  }
}
