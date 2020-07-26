webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var search_1 = __webpack_require__(194);
var notifications_1 = __webpack_require__(195);
var home_1 = __webpack_require__(196);
var groups_1 = __webpack_require__(201);
var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = home_1.HomePage;
        this.tab2Root = search_1.SearchPage;
        this.tab3Root = notifications_1.NotificationPage;
        this.tab4Root = groups_1.GroupsPage;
    }
    TabsPage = __decorate([
        core_1.Component({template:/*ion-inline-start:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab4Root" tabIcon="people"></ion-tab>\n  <ion-tab [root]="tab3Root" tabIcon="notifications"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());
exports.TabsPage = TabsPage;
//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ionic_angular_1 = __webpack_require__(13);
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SearchPage = __decorate([
        core_1.Component({
            selector: 'page-search',template:/*ion-inline-start:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/pages/search/search.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <ion-title>\n      Group Search\n    </ion-title>\n  </ion-toolbar>\n  <ion-searchbar class="searchbar" placeholder="Search for group"></ion-searchbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [ionic_angular_1.NavController])
    ], SearchPage);
    return SearchPage;
}());
exports.SearchPage = SearchPage;
//# sourceMappingURL=search.js.map

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ionic_angular_1 = __webpack_require__(13);
var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NotificationPage = __decorate([
        core_1.Component({
            selector: 'page-notifications',template:/*ion-inline-start:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/pages/notifications/notifications.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <ion-title>\n      Notifications\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n</ion-content>\n'/*ion-inline-end:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/pages/notifications/notifications.html"*/
        }),
        __metadata("design:paramtypes", [ionic_angular_1.NavController])
    ], NotificationPage);
    return NotificationPage;
}());
exports.NotificationPage = NotificationPage;
//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ionic_angular_1 = __webpack_require__(13);
var ionic_angular_2 = __webpack_require__(13);
var login_1 = __webpack_require__(197);
var ionic_angular_3 = __webpack_require__(13);
var objectFactory_1 = __webpack_require__(199);
var post_1 = __webpack_require__(200);
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, mdlCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.mdlCtrl = mdlCtrl;
        this.menuCtrl = menuCtrl;
        this.user = new objectFactory_1.User();
        this.recentPosts = [];
        //console.log(typeof(this.user));
        this.loginCommand();
    }
    HomePage.prototype.showUser = function () {
        this.menuCtrl.open();
    };
    HomePage.prototype.loginCommand = function () {
        var _this = this;
        var login = this.mdlCtrl.create(login_1.LoginModal, null, { showBackdrop: false, enableBackdropDismiss: false });
        login.onDidDismiss(function (userId) {
            _this.setUserData(userId);
        });
        login.present();
    };
    HomePage.prototype.getRecentPosts = function (userId) {
        //Go to server and retrieve all recent posts all groups user is associated with
        for (var i = 0; i < 15; i++) {
            var p = new objectFactory_1.Post();
            p.setId(i);
            p.setGroupId(i);
            p.setMemberId(i);
            p.groupName = "Group " + i;
            p.memberName = "Member " + i;
            p.postData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut felis neque. Cras nec erat euismod, ultricies neque sagittis, gravida magna. Proin nec dignissim ipsum, quis sollicitudin neque. Vestibulum mattis justo turpis, sit amet tristique neque condimentum id. Curabitur ultrices dignissim gravida. Duis id ligula faucibus, blandit risus suscipit, semper sem.";
            p.timestamp = new Date();
            this.recentPosts.push(p);
        }
    };
    HomePage.prototype.continueRecentPosts = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            for (var i = 0; i < 15; i++) {
                var p = new objectFactory_1.Post();
                p.setId(i);
                p.setGroupId(i);
                p.setMemberId(i);
                p.groupName = "Group " + i;
                p.memberName = "Member " + i;
                p.postData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut felis neque. Cras nec erat euismod, ultricies neque sagittis, gravida magna. Proin nec dignissim ipsum, quis sollicitudin neque. Vestibulum mattis justo turpis, sit amet tristique neque condimentum id. Curabitur ultrices dignissim gravida. Duis id ligula faucibus, blandit risus suscipit, semper sem.";
                p.timestamp = new Date();
                _this.recentPosts.push(p);
            }
            infiniteScroll.complete();
        }, 500);
    };
    HomePage.prototype.setUserData = function (userId) {
        //Goes to server again and gets the user information that has been stored
        this.user.name = "John Smith";
        this.user.email = "jsmith@gmail.com";
        this.user.phone = 3148675309;
        this.user.username = "jsmith229";
        //calls the next function to get posts for user
        this.getRecentPosts(userId);
    };
    HomePage.prototype.postSelected = function (post) {
        this.navCtrl.push(post_1.PostPage, {
            selectedPost: post,
        });
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'page-home',template:/*ion-inline-start:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/pages/home/home.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <button ion-button (click)="showUser()">\n      <ion-icon name="person" class="ion-icon-large"></ion-icon>\n    </button>\n    <ion-title> {{user.username}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let post of recentPosts" (click)=postSelected(post)>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <ion-icon name="person" class="ion-icon-large"></ion-icon>\n      </ion-avatar>\n      <p readonly>{{post.memberName}} in {{post.groupName}}</p>\n    </ion-item>\n  \n    <ion-card-content>\n      <p readonly>{{post.postData}}</p> \n    </ion-card-content>\n  \n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="heart" class="ion-icon-heart-like"></ion-icon>\n          <div>12 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>4 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  \n  </ion-card>\n  <ion-infinite-scroll (ionInfinite)="continueRecentPosts($event)">\n    <ion-infinite-scroll-content>\n\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n\n<!--Side Menu to display user information-->\n<ion-menu side="left" [content]="userMenu" type="overlay" color="primary">\n  <ion-content class="bg-primary-style">\n    <ion-card no-padding class="card-strd-style">\n      <ion-card-content no-padding>\n        <ion-item padding-left>\n          <ion-avatar item-start>\n            <ion-icon name="person" class="ion-icon-large"></ion-icon>\n          </ion-avatar>\n          <h2>Name</h2>\n          <h3>{{user.name}}</h3>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n    <ion-card no-padding class="card-strd-style">\n      <ion-card-content no-padding>\n        <ion-item padding-left>\n          <ion-avatar item-start>\n            <ion-icon name="mail" class="ion-icon-large"></ion-icon>\n          </ion-avatar>\n          <h2>Email Address</h2>\n          <h3>{{user.email}}</h3>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n    <ion-card no-padding class="card-strd-style">\n      <ion-card-content no-padding>\n        <ion-item padding-left>\n          <ion-avatar item-start>\n            <ion-icon name="call" class="ion-icon-large"></ion-icon>\n          </ion-avatar>\n          <h2>Phone Number</h2>\n          <h3>{{user.phone}}</h3>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n    <button ion-item details-push>\n      <h3>Chat (Coming Soon!)</h3>\n    </button>\n    <button ion-item details-push>\n      <h3>Profile (Coming Soon!)</h3>\n    </button>\n    <button ion-item details-push>\n      <h3>Settings (Coming Soon!)</h3>\n    </button>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #userMenu [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [ionic_angular_1.NavController, ionic_angular_2.ModalController, ionic_angular_3.MenuController])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ionic_angular_1 = __webpack_require__(13);
var signup_1 = __webpack_require__(198);
//import { anchrEncrypt } from 'anchrSecurity'
var LoginModal = /** @class */ (function () {
    //security = new anchrEncrypt();
    function LoginModal(mdlCtrl, vwCtrl) {
        this.mdlCtrl = mdlCtrl;
        this.vwCtrl = vwCtrl;
    }
    LoginModal.prototype.startSignup = function () {
        var _this = this;
        //console.log("starting Signup")
        var signup = this.mdlCtrl.create(signup_1.SignupModal, null, { showBackdrop: false, enableBackdropDismiss: false });
        signup.onDidDismiss(function (registeredUser) {
            if (registeredUser !== undefined) {
                _this.signUpLogin(registeredUser);
            }
        });
        signup.present();
    };
    LoginModal.prototype.signUpLogin = function (registeredUser) {
        this.vwCtrl.dismiss(registeredUser);
    };
    LoginModal.prototype.login = function () {
        //get userId based on username
        //let encrypted = this.security.encrypt(key);
        //match password
        // try {
        //     switch (this.security.check(encrypted, key)) {
        //         case true:
        //             //login successfully
        //             // let valid_id = 999;
        //             // this.vwCtrl.dismiss(valid_id);
        //             break;
        //         case false:
        //             this.isValid = true;
        //             break;
        //         default:
        //             this.isValid = true;
        //             break;
        //     }
        // } catch (err) {
        // }
        if (this.user == "admin" && this.key == "123") {
            var valid_id = 999;
            this.vwCtrl.dismiss(valid_id);
        }
        else {
            this.isValid = true;
        }
    };
    LoginModal = __decorate([
        core_1.Component({
            selector: 'page-login',template:/*ion-inline-start:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/modals/login/login.html"*/'<ion-content class="bg-primary-style">\n    <h1 padding text-center class="std-text-color">Anchr</h1>\n\n    <ion-item no-padding>\n        <ion-input type="text" [(ngModel)]="user" placeholder="Username or Email"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding>\n        <ion-input type="password" [(ngModel)]="key" placeholder="Password"></ion-input>\n    </ion-item>\n\n    <p *ngIf="isValid" class="error-text">Authentication Failed!</p>\n\n    <div padding>\n        <button ion-button block class="bg-secondary-style std-text-color" (click)="login()">Login</button>\n    </div>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col class="align-text-middle std-text-color">Don\'t have an account?<button ion-button clear no-padding\n                    color="secondary" (click)="startSignup()">Create one</button></ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/modals/login/login.html"*/
        }),
        __metadata("design:paramtypes", [ionic_angular_1.ModalController, ionic_angular_1.ViewController])
    ], LoginModal);
    return LoginModal;
}());
exports.LoginModal = LoginModal;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ionic_angular_1 = __webpack_require__(13);
var forms_1 = __webpack_require__(16);
var username_1 = __webpack_require__(276);
var SignupModal = /** @class */ (function () {
    function SignupModal(mdlCtrl, vwCtrl, frmBuilder) {
        this.mdlCtrl = mdlCtrl;
        this.vwCtrl = vwCtrl;
        this.frmBuilder = frmBuilder;
        this.fieldsRequired = false;
        this.formData = frmBuilder.group({
            firstname: ['', forms_1.Validators.compose([forms_1.Validators.maxLength(20), forms_1.Validators.pattern('[a-zA-Z]*'), forms_1.Validators.required])],
            lastname: ['', forms_1.Validators.compose([forms_1.Validators.maxLength(20), forms_1.Validators.pattern('[a-zA-Z]*'), forms_1.Validators.required])],
            email: ['', forms_1.Validators.compose([forms_1.Validators.maxLength(100), forms_1.Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'), forms_1.Validators.required])],
            phone: ['', forms_1.Validators.compose([forms_1.Validators.maxLength(10), forms_1.Validators.pattern('[0-9]*'), forms_1.Validators.required])],
            username: ['', forms_1.Validators.compose([username_1.UsernameValidator.checkUsername, forms_1.Validators.required])],
            password: ['', forms_1.Validators.compose([forms_1.Validators.minLength(8), forms_1.Validators.required])]
        });
    }
    SignupModal.prototype.registerUser = function () {
        if (this.formData.valid) {
            //console.log("User Registered!")
            //console.log(this.formData.value)
            // sends this data to the database to be stored and retrieves user id
            var registered_user_id = 999; // this is the field that is pulled from the database
            this.startRegisteredUser(registered_user_id);
        }
        else {
            this.fieldsRequired = true;
        }
    };
    SignupModal.prototype.startRegisteredUser = function (id) {
        //passes valid username and password to login page
        this.vwCtrl.dismiss(id);
    };
    SignupModal.prototype.backToLogin = function () {
        this.vwCtrl.dismiss();
    };
    SignupModal = __decorate([
        core_1.Component({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/modals/signup/signup.html"*/'<ion-content class="bg-primary-style">\n    <h1 padding text-center class="std-text-color">Anchr</h1>\n    <h3 class="std-text-color">Sign Up</h3>\n\n    <p *ngIf="fieldsRequired" class="error-text">Please complete all fields</p>\n\n    <form [formGroup]="formData">\n\n        <ion-item no-padding>\n            <ion-input formControlName="firstname" type="text" placeholder="First Name" [class.invalid-input]="formData.controls.firstname.invalid && formData.controls.firstname.dirty"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding>\n            <ion-input formControlName="lastname" type="text" placeholder="Last Name" [class.invalid-input]="formData.controls.lastname.invalid && formData.controls.lastname.dirty"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding>\n            <ion-input formControlName="email" type="email" placeholder="Email" [class.invalid-input]="formData.controls.email.invalid && formData.controls.email.dirty"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding>\n            <ion-input formControlName="phone" type="tel" placeholder="Phone" [class.invalid-input]="formData.controls.phone.invalid && formData.controls.phone.dirty"></ion-input>\n        </ion-item>\n\n        <div padding-top>\n\n            <ion-item no-padding>\n                <ion-input formControlName="username" type="text" placeholder="Username" [class.invalid-input]="formData.controls.username.invalid && formData.controls.username.dirty"></ion-input>\n            </ion-item>\n\n            <ion-item no-padding>\n                <ion-input formControlName="password" type="password" placeholder="Password" [class.invalid-input]="formData.controls.password.invalid && formData.controls.password.dirty"></ion-input>\n            </ion-item>\n\n        </div>\n\n    </form>\n\n    <p *ngIf="formData.controls.firstname.invalid && formData.controls.firstname.dirty" class="error-text">*First name must be letters only or length of name is too long</p>\n    <p *ngIf="formData.controls.lastname.invalid && formData.controls.lastname.dirty" class="error-text">*Last name must be letters only or length of name is too long</p>\n    <p *ngIf="formData.controls.email.invalid && formData.controls.email.dirty" class="error-text">*Email is not valid</p>\n    <p *ngIf="formData.controls.phone.invalid && formData.controls.phone.dirty" class="error-text">*Phone invalid. Must be 10 digits long</p>\n    <p *ngIf="formData.controls.username.invalid && formData.controls.username.dirty" class="error-text">*Username is already taken :-(</p>\n    <p *ngIf="formData.controls.password.invalid && formData.controls.password.dirty" class="error-text">*Password must be at least 8 characters</p>\n    \n\n\n    <div padding>\n        <button ion-button block class="bg-secondary-style std-text-color" (click)="registerUser()">Create Account</button>\n    </div>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col class="align-text-middle std-text-color">Already have an account?<button ion-button clear\n                    no-padding color="secondary" (click)="backToLogin()">Login</button></ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/modals/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [ionic_angular_1.ModalController, ionic_angular_1.ViewController, forms_1.FormBuilder])
    ], SignupModal);
    return SignupModal;
}());
exports.SignupModal = SignupModal;
//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
    }
    ;
    User.prototype.setId = function (id) {
        this.id = id;
    };
    User.prototype.getId = function () {
        return this.id;
    };
    return User;
}());
exports.User = User;
var group = /** @class */ (function () {
    function group(id, adminId, name, description, goal) {
        this.id = id;
        this.adminId = adminId;
        this.name = name;
        this.description = description;
        this.goal = goal;
    }
    ;
    group.prototype.getId = function () {
        return this.id;
    };
    group.prototype.getadminId = function () {
        return this.adminId;
    };
    group.prototype.setName = function (newName) {
        this.name = newName;
    };
    group.prototype.setDescription = function (newDesc) {
        this.description = newDesc;
    };
    group.prototype.setGoal = function (newGoal) {
        this.goal = newGoal;
    };
    return group;
}());
exports.group = group;
var Post = /** @class */ (function () {
    function Post() {
    }
    ;
    Post.prototype.setId = function (id) {
        this.id = id;
    };
    Post.prototype.setGroupId = function (id) {
        this.groupId = id;
    };
    Post.prototype.setMemberId = function (id) {
        this.memberId = id;
    };
    Post.prototype.getId = function () {
        return this.id;
    };
    Post.prototype.getGroupId = function () {
        return this.groupId;
    };
    Post.prototype.getMemberId = function () {
        return this.memberId;
    };
    return Post;
}());
exports.Post = Post;
var Comment = /** @class */ (function () {
    function Comment(id, postId, memberId, memberName, commentData, timestamp) {
        this.id = id;
        this.postId = postId;
        this.memberId = memberId;
        this.memberName = memberName;
        this.commentData = commentData;
        this.timestamp = timestamp;
    }
    Comment.prototype.getId = function () {
        return this.id;
    };
    Comment.prototype.getPostId = function () {
        return this.postId;
    };
    Comment.prototype.getmemberId = function () {
        return this.memberId;
    };
    return Comment;
}());
exports.Comment = Comment;
var Subcomment = /** @class */ (function () {
    function Subcomment(id, commentId, memberId, membername, commentData, timestamp) {
        this.id = id;
        this.commentId = commentId;
        this.memberId = memberId;
        this.memberName = membername;
        this.commentData = commentData;
        this.timestamp = timestamp;
    }
    Subcomment.prototype.getId = function () {
        return this.id;
    };
    Subcomment.prototype.getCommentId = function () {
        return this.commentId;
    };
    Subcomment.prototype.getMemberId = function () {
        return this.memberId;
    };
    return Subcomment;
}());
exports.Subcomment = Subcomment;
//# sourceMappingURL=objectFactory.js.map

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ionic_angular_1 = __webpack_require__(13);
var objectFactory_1 = __webpack_require__(199);
var PostPage = /** @class */ (function () {
    function PostPage(navCtrl, navPar) {
        this.navCtrl = navCtrl;
        this.navPar = navPar;
        this.comments = [];
        this.post = navPar.get('selectedPost');
        this.getPostComments(this.post.getId());
    }
    PostPage.prototype.getPostComments = function (id) {
        //Go to server and retrieve comments associated with post
        for (var i = 0; i < 15; i++) {
            var c = new objectFactory_1.Comment(i, this.post.getId(), i, "Member " + i, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut felis neque.", new Date());
            this.comments.push(c);
        }
    };
    PostPage.prototype.continueComments = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            //Go to server and retrieve comments associated with post
            for (var i = 0; i < 15; i++) {
                var c = new objectFactory_1.Comment(i, _this.post.getId(), i, "Member " + i, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut felis neque.", new Date());
                _this.comments.push(c);
            }
            infiniteScroll.complete();
        }, 500);
    };
    PostPage.prototype.getSubComments = function (id) {
        var subComments = [];
        //Go to server and retrieve comments associated with post
        for (var i = 0; i < 2; i++) {
            var sc = new objectFactory_1.Subcomment(i, id, i, "Member " + i, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", new Date());
            subComments.push(sc);
        }
        return subComments;
    };
    PostPage = __decorate([
        core_1.Component({
            selector: 'page-post',template:/*ion-inline-start:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/pages/post/post.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <ion-title>\n      {{post.memberName}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <!-- Post-->\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <ion-icon name="person" class="ion-icon-large"></ion-icon>\n      </ion-avatar>\n      <p readonly>{{post.groupName}}</p>\n    </ion-item>\n\n    <ion-card-content>\n      <p readonly>{{post.postData}}</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="heart" class="ion-icon-heart-like"></ion-icon>\n          <div>12 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>4 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n  <!-- Comments -->\n  <ion-card *ngFor="let comment of comments">\n\n    <ion-card-content>\n      <p>\n        <ion-icon name="person" class="ion-icon-medium"></ion-icon> {{comment.memberName}} {{comment.commentData}}\n      </p>\n      <!-- Sub Comments-->\n      <div *ngFor="let sc of getSubComments(comment.getId())" class="subcomment">\n        <ion-icon name="person" class="ion-icon-small"></ion-icon> {{sc.memberName}} {{sc.commentData}}\n      </div>\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n  <ion-infinite-scroll (ionInfinite)="continueComments($event)">\n    <ion-infinite-scroll-content>\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/pages/post/post.html"*/
        }),
        __metadata("design:paramtypes", [ionic_angular_1.NavController, ionic_angular_1.NavParams])
    ], PostPage);
    return PostPage;
}());
exports.PostPage = PostPage;
//# sourceMappingURL=post.js.map

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ionic_angular_1 = __webpack_require__(13);
var GroupsPage = /** @class */ (function () {
    function GroupsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    GroupsPage = __decorate([
        core_1.Component({
            selector: 'page-groups',template:/*ion-inline-start:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/pages/mygroups/groups.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <ion-title>\n      My Groups\n    </ion-title>\n  </ion-toolbar>\n  <ion-searchbar class="searchbar" placeholder="Search my groups"></ion-searchbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/pages/mygroups/groups.html"*/
        }),
        __metadata("design:paramtypes", [ionic_angular_1.NavController])
    ], GroupsPage);
    return GroupsPage;
}());
exports.GroupsPage = GroupsPage;
//# sourceMappingURL=groups.js.map

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__(203);
var app_module_1 = __webpack_require__(225);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(31);
var ionic_angular_1 = __webpack_require__(13);
var app_component_1 = __webpack_require__(268);
var search_1 = __webpack_require__(194);
var groups_1 = __webpack_require__(201);
var notifications_1 = __webpack_require__(195);
var home_1 = __webpack_require__(196);
var tabs_1 = __webpack_require__(193);
var post_1 = __webpack_require__(200);
var login_1 = __webpack_require__(197);
var signup_1 = __webpack_require__(198);
var status_bar_1 = __webpack_require__(189);
var splash_screen_1 = __webpack_require__(192);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.MyApp,
                search_1.SearchPage,
                notifications_1.NotificationPage,
                home_1.HomePage,
                groups_1.GroupsPage,
                post_1.PostPage,
                tabs_1.TabsPage,
                login_1.LoginModal,
                signup_1.SignupModal
            ],
            imports: [
                platform_browser_1.BrowserModule,
                ionic_angular_1.IonicModule.forRoot(app_component_1.MyApp, {}, {
                    links: []
                })
            ],
            bootstrap: [ionic_angular_1.IonicApp],
            entryComponents: [
                app_component_1.MyApp,
                search_1.SearchPage,
                notifications_1.NotificationPage,
                home_1.HomePage,
                groups_1.GroupsPage,
                post_1.PostPage,
                tabs_1.TabsPage,
                login_1.LoginModal,
                signup_1.SignupModal
            ],
            providers: [
                status_bar_1.StatusBar,
                splash_screen_1.SplashScreen,
                { provide: core_1.ErrorHandler, useClass: ionic_angular_1.IonicErrorHandler }
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ionic_angular_1 = __webpack_require__(13);
var status_bar_1 = __webpack_require__(189);
var splash_screen_1 = __webpack_require__(192);
var tabs_1 = __webpack_require__(193);
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = tabs_1.TabsPage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        core_1.Component({template:/*ion-inline-start:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [ionic_angular_1.Platform, status_bar_1.StatusBar, splash_screen_1.SplashScreen])
    ], MyApp);
    return MyApp;
}());
exports.MyApp = MyApp;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UsernameValidator = /** @class */ (function () {
    function UsernameValidator() {
    }
    UsernameValidator.checkUsername = function (control) {
        //send to server to check username
        if (control.value.toLowerCase() == "admin") {
            return {
                "username already taken": true
            };
        }
    };
    return UsernameValidator;
}());
exports.UsernameValidator = UsernameValidator;
//# sourceMappingURL=username.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map