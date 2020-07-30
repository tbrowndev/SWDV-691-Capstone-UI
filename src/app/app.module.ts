import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SearchPage } from '../pages/search/search';
import { GroupsPage } from '../pages/mygroups/groups'
import { GroupPage } from '../pages/group/group'
import { NotificationPage } from '../pages/notifications/notifications';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PostPage } from '../pages/post/post';

import { LoginModal } from '../modals/login/login';
import { SignupModal } from '../modals/signup/signup';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Auth_DataProvider } from '../service/service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    NotificationPage,
    HomePage,
    GroupsPage,
    GroupPage,
    PostPage,
    TabsPage,
    LoginModal,
    SignupModal
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    NotificationPage,
    HomePage,
    GroupsPage,
    GroupPage,
    PostPage,
    TabsPage,
    LoginModal,
    SignupModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Auth_DataProvider
  ]
})
export class AppModule {}
