webpackJsonp([0],{

/***/ 122:
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
var ionic_angular_1 = __webpack_require__(16);
var group_1 = __webpack_require__(65);
var service_1 = __webpack_require__(25);
var share_1 = __webpack_require__(45);
var PostPage = /** @class */ (function () {
    function PostPage(navCtrl, navPar, groupService, shared) {
        this.navCtrl = navCtrl;
        this.navPar = navPar;
        this.groupService = groupService;
        this.shared = shared;
        this.comments = [];
        this.postReply = "";
        this.post = navPar.get('selectedPost');
        this.getPostComments(this.post.id);
    }
    PostPage.prototype.replyToPost = function () {
        var _this = this;
        if (this.postReply.length > 0) {
            this.groupService.add_comment_to_post(this.post.id, this.shared.items["userId"], this.postReply).subscribe(function (res) {
                if (res.status == 200) {
                    _this.postReply = "";
                    _this.shared.presentToast(res.message);
                    _this.getPostComments(_this.post.id);
                }
            });
        }
    };
    PostPage.prototype.getPostComments = function (id) {
        var _this = this;
        //Go to server and retrieve comments associated with post
        this.groupService.get_post_comments(id).subscribe(function (res) { return _this.comments = res.comments; });
    };
    PostPage.prototype.continueComments = function (infiniteScroll) {
        setTimeout(function () {
            //Go to server and retrieve comments associated with post
            infiniteScroll.complete();
        }, 500);
    };
    PostPage.prototype.getSubComments = function (id) {
        var subComments = [];
        //Go to server and retrieve comments associated with post
        return subComments;
    };
    PostPage.prototype.showGroup = function () {
        this.navCtrl.push(group_1.GroupPage, { "id": this.post.groupId });
    };
    PostPage = __decorate([
        core_1.Component({
            selector: 'page-post',template:/*ion-inline-start:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/pages/post/post.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title (click)="showGroup()">\n      {{post.groupName}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <!-- Post-->\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <ion-icon name="person" class="ion-icon-large"></ion-icon>\n      </ion-avatar>\n      <strong>{{post.user}}</strong> @{{post.username}}\n    </ion-item>\n\n    <ion-card-content>\n      <p readonly>{{post.post}}</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="heart-outline" class="ion-icon-heart-like"></ion-icon>\n          <div>12</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>4</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          {{this.shared.getDisplayDate(post.creationDate)}}\n        </ion-note>\n      </ion-col>\n    </ion-row>\n    <ion-row no-padding style="height: 45px;">\n      <ion-col col-10>\n        <ion-textarea style="border-width: 2px;" [(ngModel)]="postReply" maxlength="1000" rows="2" placeholder="Reply to {{post.username}}">\n        </ion-textarea>\n      </ion-col>\n      <ion-col col-2 align-right>\n        <button class="post_button_style" ion-button float-right (click)=replyToPost()>\n          <p class="post_button_text">Reply</p>\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n  <!-- Comments -->\n  <ion-card *ngFor="let comment of comments">\n\n    <ion-card-content no-padding>\n        <ion-row no-padding>\n          <ion-col col-1><ion-icon name="person" class="ion-icon-medium"></ion-icon></ion-col>\n          <ion-col col-11><strong>{{comment.username}}</strong> {{comment.comment}}</ion-col>\n        </ion-row>\n      <!-- Sub Comments-->\n      <!-- <div *ngFor="let sc of getSubComments(comment.getId())" class="subcomment">\n        <ion-icon name="person" class="ion-icon-small"></ion-icon> {{sc.memberName}} {{sc.commentData}}\n      </div>\n      <ion-row class="reply-bg-style" no-padding>\n        <ion-col col-9>\n          <ion-textarea placeholder="Reply to {{comment.username}}" name="comment_reply" class="reply-style"></ion-textarea>\n        </ion-col>\n        <ion-col align-self-right text-right col-3>\n          <button ion-button block small class="reply-style">Reply</button>\n        </ion-col>\n      </ion-row> -->\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-infinite-scroll (ionInfinite)="continueComments($event)">\n    <ion-infinite-scroll-content>\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/pages/post/post.html"*/
        }),
        __metadata("design:paramtypes", [ionic_angular_1.NavController, ionic_angular_1.NavParams, service_1.Group_DataProvider, share_1.Share])
    ], PostPage);
    return PostPage;
}());
exports.PostPage = PostPage;
//# sourceMappingURL=post.js.map

/***/ }),

/***/ 139:
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
webpackEmptyAsyncContext.id = 139;

/***/ }),

/***/ 183:
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
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 227:
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
var search_1 = __webpack_require__(228);
var notifications_1 = __webpack_require__(247);
var home_1 = __webpack_require__(248);
var groups_1 = __webpack_require__(251);
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

/***/ 228:
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
var ionic_angular_1 = __webpack_require__(16);
var group_1 = __webpack_require__(65);
var service_1 = __webpack_require__(25);
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, groupService) {
        this.navCtrl = navCtrl;
        this.groupService = groupService;
        this.groups = [];
    }
    SearchPage.prototype.onInput = function () {
        var _this = this;
        if (this.search_term.length > 0) {
            this.groupService.get_group_search(this.search_term).subscribe(function (res) { return _this.groups = res.found_groups; }, function (error) { return _this.errorMessage = error; });
        }
        else {
            this.groups = [];
        }
    };
    SearchPage.prototype.groupSelected = function (group) {
        this.navCtrl.push(group_1.GroupPage, { "id": group.id });
    };
    SearchPage = __decorate([
        core_1.Component({
            selector: 'page-search',template:/*ion-inline-start:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/pages/search/search.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <ion-title>\n      Group Search\n    </ion-title>\n  </ion-toolbar>\n  <ion-searchbar \n    class="searchbar" \n    placeholder="Search for groups"\n    [(ngModel)]="search_term"\n    (ionInput)="onInput($event)">\n  </ion-searchbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-item details-push *ngFor="let group of groups" (click)="groupSelected(group)">\n    <ion-avatar item-start>\n      <ion-icon name="people" class="ion-icon-large"></ion-icon>\n    </ion-avatar>\n    <h2>{{group.name}}</h2>\n    <p>{{group.description}}</p>\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [ionic_angular_1.NavController, service_1.Group_DataProvider])
    ], SearchPage);
    return SearchPage;
}());
exports.SearchPage = SearchPage;
//# sourceMappingURL=search.js.map

/***/ }),

/***/ 247:
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
var ionic_angular_1 = __webpack_require__(16);
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

/***/ 248:
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
var ionic_angular_1 = __webpack_require__(16);
var ionic_angular_2 = __webpack_require__(16);
var login_1 = __webpack_require__(249);
var ionic_angular_3 = __webpack_require__(16);
var objectFactory_1 = __webpack_require__(66);
var post_1 = __webpack_require__(122);
var service_1 = __webpack_require__(25);
var share_1 = __webpack_require__(45);
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, mdlCtrl, menuCtrl, userService, shared) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.mdlCtrl = mdlCtrl;
        this.menuCtrl = menuCtrl;
        this.userService = userService;
        this.shared = shared;
        this.user = new objectFactory_1.User(null, null, null, null, null);
        this.recentPosts = [];
        //console.log(typeof(this.user));
        var login = this.mdlCtrl.create(login_1.LoginModal, null, { showBackdrop: false, enableBackdropDismiss: false });
        login.onDidDismiss(function (userId) {
            _this.setUserData(userId);
            shared.items['userId'] = userId;
        });
        login.present();
    }
    HomePage.prototype.showUser = function () {
        this.menuCtrl.open();
    };
    HomePage.prototype.getRecentPosts = function (userId) {
        //Go to server and retrieve all recent posts all groups user is associated with
    };
    HomePage.prototype.continueRecentPosts = function (infiniteScroll) {
        setTimeout(function () {
            infiniteScroll.complete();
        }, 500);
    };
    HomePage.prototype.setUserData = function (userId) {
        var _this = this;
        //Goes to server again and gets the user information that has been stored
        this.userService.get_user_information(userId).subscribe(function (user) { return _this.user = user; }, function (error) { return _this.errorMessage = error; });
        //calls the next function to get posts for user
        //this.getRecentPosts(userId);
    };
    HomePage.prototype.postSelected = function (post) {
        this.navCtrl.push(post_1.PostPage, {
            selectedPost: post,
        });
    };
    HomePage.prototype.logout = function () {
        this.user = new objectFactory_1.User(null, null, null, null, null);
        this.navCtrl.popToRoot();
        location.reload();
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'page-home',template:/*ion-inline-start:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/pages/home/home.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <button ion-button (click)="showUser()">\n      <ion-icon name="person" class="ion-icon-large"></ion-icon>\n    </button>\n    <ion-title> {{user.username}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let post of recentPosts" (click)=postSelected(post)>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <ion-icon name="person" class="ion-icon-large"></ion-icon>\n      </ion-avatar>\n      <p readonly>{{post.memberName}} in {{post.groupName}}</p>\n    </ion-item>\n  \n    <ion-card-content>\n      <p readonly>{{post.postData}}</p> \n    </ion-card-content>\n  \n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="heart" class="ion-icon-heart-like"></ion-icon>\n          <div>12 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>4 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  \n  </ion-card>\n  <ion-infinite-scroll (ionInfinite)="continueRecentPosts($event)">\n    <ion-infinite-scroll-content>\n\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n\n<ion-nav #userMenu [root]="rootPage"></ion-nav>\n\n<!--Side Menu to display user information-->\n<ion-menu side="left" [content]="userMenu" type="overlay" color="primary">\n    <ion-content class="bg-primary-style">\n      <ion-card no-padding class="card-strd-style">\n        <ion-card-content no-padding>\n          <ion-item padding-left>\n            <ion-avatar item-start>\n              <ion-icon name="person" class="ion-icon-large"></ion-icon>\n            </ion-avatar>\n            <h2>Name</h2>\n            <h3>{{user != undefined ? user.name: \'\'}}</h3>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n      <ion-card no-padding class="card-strd-style">\n        <ion-card-content no-padding>\n          <ion-item padding-left>\n            <ion-avatar item-start>\n              <ion-icon name="mail" class="ion-icon-large"></ion-icon>\n            </ion-avatar>\n            <h2>Email Address</h2>\n            <h3>{{user != undefined ? user.email: \'\'}}</h3>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n      <ion-card no-padding class="card-strd-style">\n        <ion-card-content no-padding>\n          <ion-item padding-left>\n            <ion-avatar item-start>\n              <ion-icon name="call" class="ion-icon-large"></ion-icon>\n            </ion-avatar>\n            <h2>Phone Number</h2>\n            <h3>{{user != undefined ? user.phone: \'\'}}</h3>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n      <button ion-item details-push>\n        <h3>Chat</h3>\n      </button>\n      <button ion-item details-push>\n        <h3>Profile</h3>\n      </button>\n      <button ion-item details-push>\n        <h3>Settings</h3>\n      </button>\n      <button ion-item details-push (click)="logout()">\n        <h3 class="error-text">Logout</h3>\n      </button>\n    </ion-content>\n  </ion-menu>\n'/*ion-inline-end:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [ionic_angular_1.NavController, ionic_angular_2.ModalController, ionic_angular_3.MenuController, service_1.User_DataProvider, share_1.Share])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 249:
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
var ionic_angular_1 = __webpack_require__(16);
var signup_1 = __webpack_require__(250);
var service_1 = __webpack_require__(25);
var LoginModal = /** @class */ (function () {
    function LoginModal(mdlCtrl, vwCtrl, service) {
        this.mdlCtrl = mdlCtrl;
        this.vwCtrl = vwCtrl;
        this.service = service;
    }
    LoginModal.prototype.startSignup = function () {
        var _this = this;
        //console.log("starting Signup")
        var signup = this.mdlCtrl.create(signup_1.SignupModal, null, { showBackdrop: false, enableBackdropDismiss: false });
        signup.onDidDismiss(function (registeredUser) {
            if (registeredUser !== undefined) {
                _this.signUpLogin(registeredUser);
                registeredUser = null;
            }
        });
        signup.present();
    };
    LoginModal.prototype.signUpLogin = function (registeredUser) {
        this.vwCtrl.dismiss(registeredUser);
        registeredUser = null;
    };
    LoginModal.prototype.login = function () {
        var _this = this;
        //send to security to check credentials and return if true. 
        try {
            this.service.validate_user_cred(this.user, this.key).subscribe(function (res) {
                if (res.valid) {
                    _this.vwCtrl.dismiss(res.valid_id);
                }
                else {
                    _this.isValid = true;
                }
            });
        }
        catch (err) {
            console.log(err);
            //handles any error when authenticating user credentials
        }
    };
    LoginModal = __decorate([
        core_1.Component({
            selector: 'page-login',template:/*ion-inline-start:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/modals/login/login.html"*/'<ion-content class="bg-primary-style">\n    <h1 padding text-center class="std-text-color">Anchr</h1>\n\n    <ion-item no-padding>\n        <ion-input type="text" [(ngModel)]="user" placeholder="Username"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding>\n        <ion-input type="password" [(ngModel)]="key" placeholder="Password"></ion-input>\n    </ion-item>\n\n    <p *ngIf="isValid" class="error-text">Authentication Failed!</p>\n\n    <div padding>\n        <button ion-button block class="bg-secondary-style std-text-color" (click)="login()">Login</button>\n    </div>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col class="align-text-middle std-text-color">Don\'t have an account?<button ion-button clear no-padding\n                    color="secondary" (click)="startSignup()">Create one</button></ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/modals/login/login.html"*/
        }),
        __metadata("design:paramtypes", [ionic_angular_1.ModalController, ionic_angular_1.ViewController, service_1.Auth_DataProvider])
    ], LoginModal);
    return LoginModal;
}());
exports.LoginModal = LoginModal;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 25:
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
var http_1 = __webpack_require__(229);
var Observable_1 = __webpack_require__(9);
var operators_1 = __webpack_require__(310);
var Subject_1 = __webpack_require__(13);
//handles extracting only the body of the server response
function extract_data(res) {
    var body = res;
    return body || {};
}
//handles errors that occur
function handle_error(error) {
    var errMsg;
    if (error instanceof Response) {
        var err = error || '';
        errMsg = error.status + " - " + (error.statusText || '') + " " + err;
    }
    else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable_1.Observable.throw(errMsg);
}
var Auth_DataProvider = /** @class */ (function () {
    function Auth_DataProvider(http) {
        this.http = http;
        this.baseURL = 'http://localhost:6200';
        this.dataChangeSubject = new Subject_1.Subject();
        this.dataChanged$ = this.dataChangeSubject.asObservable();
    }
    Auth_DataProvider.prototype.register_new_user = function (non_user, non_user_key) {
        return this.http.post(this.baseURL + "/auth/users", { "non_user": non_user, "non_user_key": non_user_key }).pipe(operators_1.map(extract_data), operators_1.catchError(handle_error));
    };
    Auth_DataProvider.prototype.validate_user_cred = function (input_name, input_key) {
        return this.http.get(this.baseURL + "/auth/users", { "params": { "input_name": input_name, "input_key": input_key } }).pipe(operators_1.map(extract_data), operators_1.catchError(handle_error));
    };
    Auth_DataProvider = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
    ], Auth_DataProvider);
    return Auth_DataProvider;
    var _a;
}());
exports.Auth_DataProvider = Auth_DataProvider;
var User_DataProvider = /** @class */ (function () {
    function User_DataProvider(http) {
        this.http = http;
        this.baseURL = 'http://localhost:6220';
        this.dataChangeSubject = new Subject_1.Subject();
        this.dataChanged$ = this.dataChangeSubject.asObservable();
    }
    User_DataProvider.prototype.get_user_information = function (id) {
        return this.http.get(this.baseURL + "/users/" + id).pipe(operators_1.map(extract_data), operators_1.catchError(handle_error));
    };
    User_DataProvider.prototype.get_user_groups = function (id) {
        return this.http.get(this.baseURL + "/users/" + id + "/groups").pipe(operators_1.map(extract_data), operators_1.catchError(handle_error));
    };
    User_DataProvider.prototype.is_user_a_member = function (id, group) {
        return this.http.get(this.baseURL + "/users/" + id + "/groups/verify/" + group).pipe(operators_1.map(extract_data), operators_1.catchError(handle_error));
    };
    User_DataProvider = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
    ], User_DataProvider);
    return User_DataProvider;
    var _a;
}());
exports.User_DataProvider = User_DataProvider;
var Group_DataProvider = /** @class */ (function () {
    function Group_DataProvider(http) {
        this.http = http;
        this.baseURL = 'http://localhost:6210';
        this.dataChangeSubject = new Subject_1.Subject();
        this.dataChanged$ = this.dataChangeSubject.asObservable();
    }
    //GROUP SECTION
    Group_DataProvider.prototype.add_new_group = function (group, milestones) {
        return this.http.post(this.baseURL + "/groups", { group: group, milestones: milestones }).pipe(operators_1.map(extract_data), operators_1.catchError(handle_error));
    };
    Group_DataProvider.prototype.get_group_information = function (group) {
        return this.http.get(this.baseURL + "/groups/" + group).pipe(operators_1.map(extract_data), operators_1.catchError(handle_error));
    };
    Group_DataProvider.prototype.get_group_search = function (search) {
        return this.http.get(this.baseURL + "/groups/search/" + search).pipe(operators_1.map(extract_data), operators_1.catchError(handle_error));
    };
    Group_DataProvider.prototype.add_user_to_group = function (user, group) {
        return this.http.post(this.baseURL + "/groups/members", { user: user, group: group }).pipe(operators_1.map(extract_data), operators_1.catchError(handle_error));
    };
    Group_DataProvider.prototype.add_new_post = function (group, user, post) {
        return this.http.post(this.baseURL + "/groups/" + group + "/posts", { user: user, post: post }).pipe(operators_1.map(extract_data), operators_1.catchError(handle_error));
    };
    Group_DataProvider.prototype.get_group_top_posts = function (group) {
        return this.http.get(this.baseURL + "/groups/" + group + "/posts").pipe(operators_1.map(extract_data), operators_1.catchError(handle_error));
    };
    Group_DataProvider.prototype.get_group_next_posts = function (group, lastPost) {
        return this.http.get(this.baseURL + "/groups/" + group + "/posts/" + lastPost).pipe(operators_1.map(extract_data), operators_1.catchError(handle_error));
    };
    //POST SECTION
    Group_DataProvider.prototype.count_post_likes = function (post, user) {
        return this.http.get(this.baseURL + "/posts/" + post + "/likes/" + user).pipe(operators_1.map(extract_data), operators_1.catchError(handle_error));
    };
    Group_DataProvider.prototype.count_post_comments = function (post) {
    };
    Group_DataProvider.prototype.add_comment_to_post = function (post, user, comment) {
        return this.http.post(this.baseURL + "/posts/" + post + "/comments", { user: user, comment: comment }).pipe(operators_1.map(extract_data), operators_1.catchError(handle_error));
    };
    Group_DataProvider.prototype.get_post_comments = function (post) {
        return this.http.get(this.baseURL + "/posts/" + post + "/comments").pipe(operators_1.map(extract_data), operators_1.catchError(handle_error));
    };
    Group_DataProvider = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
    ], Group_DataProvider);
    return Group_DataProvider;
    var _a;
}());
exports.Group_DataProvider = Group_DataProvider;
//# sourceMappingURL=service.js.map

/***/ }),

/***/ 250:
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
var ionic_angular_1 = __webpack_require__(16);
var forms_1 = __webpack_require__(20);
var username_1 = __webpack_require__(408);
var service_1 = __webpack_require__(25);
var objectFactory_1 = __webpack_require__(66);
var SignupModal = /** @class */ (function () {
    function SignupModal(mdlCtrl, vwCtrl, frmBuilder, service) {
        this.mdlCtrl = mdlCtrl;
        this.vwCtrl = vwCtrl;
        this.frmBuilder = frmBuilder;
        this.service = service;
        this.fieldsRequired = false;
        this.registrationIssue = false;
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
        var _this = this;
        if (this.formData.valid) {
            // sends this data to the database to be stored and retrieves user id
            var non_user = new objectFactory_1.User(null, this.formData.value.firstname + " " + this.formData.value.lastname, this.formData.value.email, this.formData.value.phone, this.formData.value.username);
            try {
                this.service.register_new_user(non_user, this.formData.value.password).subscribe(function (res) {
                    _this.startRegisteredUser(res.registered_user);
                });
            }
            catch (err) {
                //log the error for future reference.
            }
        }
        else {
            this.fieldsRequired = true;
        }
    };
    SignupModal.prototype.startRegisteredUser = function (id) {
        //passes valid id to login page
        //console.log(id);
        this.vwCtrl.dismiss(id);
    };
    SignupModal.prototype.backToLogin = function () {
        this.vwCtrl.dismiss();
    };
    SignupModal = __decorate([
        core_1.Component({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/modals/signup/signup.html"*/'<ion-content class="bg-primary-style">\n    <h1 padding text-center class="std-text-color">Anchr</h1>\n    <h3 class="std-text-color">Sign Up</h3>\n\n    <p *ngIf="fieldsRequired" class="error-text">Please complete all fields</p>\n\n    <form [formGroup]="formData">\n\n        <ion-item no-padding>\n            <ion-input formControlName="firstname" type="text" placeholder="First Name" [class.invalid-input]="formData.controls.firstname.invalid && formData.controls.firstname.dirty"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding>\n            <ion-input formControlName="lastname" type="text" placeholder="Last Name" [class.invalid-input]="formData.controls.lastname.invalid && formData.controls.lastname.dirty"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding>\n            <ion-input formControlName="email" type="email" placeholder="Email" [class.invalid-input]="formData.controls.email.invalid && formData.controls.email.dirty"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding>\n            <ion-input formControlName="phone" type="tel" placeholder="Phone" [class.invalid-input]="formData.controls.phone.invalid && formData.controls.phone.dirty"></ion-input>\n        </ion-item>\n\n        <div padding-top>\n\n            <ion-item no-padding>\n                <ion-input formControlName="username" type="text" placeholder="Username" [class.invalid-input]="formData.controls.username.invalid && formData.controls.username.dirty"></ion-input>\n            </ion-item>\n\n            <ion-item no-padding>\n                <ion-input formControlName="password" type="password" placeholder="Password" [class.invalid-input]="formData.controls.password.invalid && formData.controls.password.dirty"></ion-input>\n            </ion-item>\n\n        </div>\n\n    </form>\n\n    <p *ngIf="registrationIssue" class="error-text">Registration failed! Please try again later.</p>\n    <p *ngIf="formData.controls.firstname.invalid && formData.controls.firstname.dirty" class="error-text">*First name must be letters only or length of name is too long</p>\n    <p *ngIf="formData.controls.lastname.invalid && formData.controls.lastname.dirty" class="error-text">*Last name must be letters only or length of name is too long</p>\n    <p *ngIf="formData.controls.email.invalid && formData.controls.email.dirty" class="error-text">*Email is not valid</p>\n    <p *ngIf="formData.controls.phone.invalid && formData.controls.phone.dirty" class="error-text">*Phone invalid. Must be 10 digits long</p>\n    <p *ngIf="formData.controls.username.invalid && formData.controls.username.dirty" class="error-text">*Username is already taken :-(</p>\n    <p *ngIf="formData.controls.password.invalid && formData.controls.password.dirty" class="error-text">*Password must be at least 8 characters</p>\n    \n\n\n    <div padding>\n        <button ion-button block class="bg-secondary-style std-text-color" (click)="registerUser()">Create Account</button>\n    </div>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col class="align-text-middle std-text-color">Already have an account?<button ion-button clear\n                    no-padding color="secondary" (click)="backToLogin()">Login</button></ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/modals/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [ionic_angular_1.ModalController, ionic_angular_1.ViewController, forms_1.FormBuilder, service_1.Auth_DataProvider])
    ], SignupModal);
    return SignupModal;
}());
exports.SignupModal = SignupModal;
//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 251:
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
var ionic_angular_1 = __webpack_require__(16);
var creategroup_1 = __webpack_require__(252);
var service_1 = __webpack_require__(25);
var share_1 = __webpack_require__(45);
var group_1 = __webpack_require__(65);
var GroupsPage = /** @class */ (function () {
    function GroupsPage(navCtrl, mdlCtrl, userService, shared) {
        this.navCtrl = navCtrl;
        this.mdlCtrl = mdlCtrl;
        this.userService = userService;
        this.shared = shared;
        this.groups = [];
        this.getUserGroups();
    }
    GroupsPage.prototype.ionViewWillEnter = function () {
        this.getUserGroups();
    };
    GroupsPage.prototype.createGroup = function () {
        var _this = this;
        var group = this.mdlCtrl.create(creategroup_1.CreateGroupModal, null, {
            showBackdrop: false,
            enableBackdropDismiss: true
        });
        group.onDidDismiss(function (data) { return _this.getUserGroups(); });
        group.present();
    };
    GroupsPage.prototype.getUserGroups = function () {
        var _this = this;
        this.userService.get_user_groups(this.shared.items['userId']).subscribe(function (res) { return _this.groups = res.groups; }, function (error) { return _this.errorMessage = error; });
    };
    GroupsPage.prototype.groupSelected = function (group) {
        this.navCtrl.push(group_1.GroupPage, { "id": group.id });
    };
    GroupsPage = __decorate([
        core_1.Component({
            selector: 'page-groups',template:/*ion-inline-start:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/pages/mygroups/groups.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      My Groups\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="createGroup()">\n        <ion-icon name="add" class="ion-icon-large"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <!--<ion-searchbar class="searchbar" placeholder="Search my groups"></ion-searchbar>-->\n</ion-header>\n\n<ion-content no-padding>\n\n  <p *ngIf="groups.length === 0" class="no-item">Not a member of any groups :(</p>\n\n  <button ion-item details-push *ngFor="let group of groups" (click)="groupSelected(group)">\n    <ion-avatar item-start>\n      <ion-icon name="people" class="ion-icon-large"></ion-icon>\n    </ion-avatar>\n    <h2>{{group.name}}</h2>\n    <p>{{group.description}}</p>\n  </button>\n\n</ion-content>'/*ion-inline-end:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/pages/mygroups/groups.html"*/
        }),
        __metadata("design:paramtypes", [ionic_angular_1.NavController, ionic_angular_1.ModalController, service_1.User_DataProvider, share_1.Share])
    ], GroupsPage);
    return GroupsPage;
}());
exports.GroupsPage = GroupsPage;
//# sourceMappingURL=groups.js.map

/***/ }),

/***/ 252:
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
var ionic_angular_1 = __webpack_require__(16);
var forms_1 = __webpack_require__(20);
var objectFactory_1 = __webpack_require__(66);
var share_1 = __webpack_require__(45);
var service_1 = __webpack_require__(25);
var CreateGroupModal = /** @class */ (function () {
    function CreateGroupModal(mdlCtrl, vwCtrl, frmBuilder, shared, groupServce) {
        this.mdlCtrl = mdlCtrl;
        this.vwCtrl = vwCtrl;
        this.frmBuilder = frmBuilder;
        this.shared = shared;
        this.groupServce = groupServce;
        this.formInValid = false;
        this.milestoneInvalid = false;
        this.milestones = [];
        this.groupData = frmBuilder.group({
            name: ['', forms_1.Validators.compose([forms_1.Validators.maxLength(45), forms_1.Validators.required])],
            description: ['', forms_1.Validators.compose([forms_1.Validators.maxLength(140), forms_1.Validators.required])],
            goal: ['', forms_1.Validators.compose([forms_1.Validators.maxLength(140), forms_1.Validators.required])]
        });
        this.milestoneData = frmBuilder.group({
            name: ['', forms_1.Validators.compose([forms_1.Validators.maxLength(50), forms_1.Validators.required])],
            order: ['', forms_1.Validators.compose([forms_1.Validators.min(1), forms_1.Validators.max(99), forms_1.Validators.required])]
        });
    }
    CreateGroupModal.prototype.addMilestone = function () {
        if (this.milestoneData.valid) {
            this.milestones.push(new objectFactory_1.Milestone(null, null, this.milestoneData.value.name, this.milestoneData.value.order));
            this.milestoneData.reset();
        }
        else {
            this.milestoneInvalid = true;
        }
    };
    CreateGroupModal.prototype.removeMilestone = function (index) {
        this.milestones.splice(index, 1);
    };
    CreateGroupModal.prototype.setupGroup = function () {
        var _this = this;
        if (this.groupData.valid) {
            var group = new objectFactory_1.Group(null, this.groupData.value.name, this.groupData.value.description, this.groupData.value.goal, this.shared.items['userId']);
            this.groupServce.add_new_group(group, this.milestones).subscribe(function (message) {
                if (message.status == 200) {
                    _this.shared.presentToast(message.message);
                    _this.dismissGroup();
                }
                else {
                    _this.shared.presentToast(message.message);
                }
            });
        }
        else {
            this.formInValid = true;
        }
    };
    CreateGroupModal.prototype.dismissGroup = function () {
        this.vwCtrl.dismiss();
    };
    CreateGroupModal = __decorate([
        core_1.Component({
            selector: 'page-login',template:/*ion-inline-start:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/modals/creategroup/creategroup.html"*/'<ion-content class="bg-primary-style">\n    <h2 class="std-text-color" style="text-align: center;">New Group</h2>\n    <h3 class="std-text-color">Enter New Group Informaiton</h3>\n    <p *ngIf="formInValid" class="error-text">Please complete required fields(*)</p>\n\n    <form [formGroup]="groupData">\n\n        <ion-item no-padding>\n            <ion-input formControlName="name" type="text" placeholder="Name*"\n                [class.invalid-input]="groupData.controls.name.invalid && groupData.controls.name.dirty">\n            </ion-input>\n        </ion-item>\n\n        <ion-item no-padding>\n            <ion-textarea formControlName="description" type="text" placeholder="Description*"\n                [class.invalid-input]="groupData.controls.description.invalid && groupData.controls.description.dirty">\n            </ion-textarea>\n        </ion-item>\n\n        <ion-item no-padding>\n            <ion-textarea formControlName="goal" type="text" placeholder="Goal*"\n                [class.invalid-input]="groupData.controls.goal.invalid && groupData.controls.goal.dirty">\n            </ion-textarea>\n        </ion-item>\n    </form>\n    <h3 class="std-text-color">Enter New Group Milestones</h3>\n    <ion-card>\n        <ion-item>\n            <ion-grid no-padding>\n                <ion-row>\n                    <ion-col col-9>\n                        <p style="text-align: center;">Name</p>\n                    </ion-col>\n                    <ion-col col-3>\n                        <p style="text-align: right;">Order</p>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-item>\n        <h3 class="no-item" style="text-align: center;" *ngIf="milestones.length === 0">No milestones added! Add some\n            below!</h3>\n\n        <ion-item *ngFor="let item of milestones; index as i">\n            <button ion-button clear item-start icon-only (click)="removeMilestone(i)">\n                <ion-icon name="close" color="kred"></ion-icon>\n            </button>\n            <ion-grid no-padding>\n                <ion-row>\n                    <ion-col col-9>\n                        <p>{{item.name}}</p>\n                    </ion-col>\n                    <ion-col col-3>\n                        <p style="text-align: right;">{{item.order}}</p>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-item>\n\n    </ion-card>\n\n    <form [formGroup]="milestoneData">\n        <ion-grid>\n            <ion-row>\n                <ion-col col-9>\n                    <ion-item no-padding>\n                        <ion-input formControlName="name" type="text" placeholder="Name"\n                            [class.invalid-input]="milestoneData.controls.name.invalid && milestoneData.controls.name.dirty">\n                        </ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-3>\n                    <ion-item no-padding>\n                        <ion-input formControlName="order" type="number" placeholder="Order"\n                        [class.invalid-input]="milestoneData.controls.order.invalid && milestoneData.controls.order.dirty">\n                    </ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row no-padding>\n                <ion-col>\n                    <p *ngIf="milestoneInvalid" class="error-text">Milestone must not exceed 50 characters and order must be between 1-99</p>\n                    <button ion-button block class="bg-secondary-style std-text-color" (click)="addMilestone()">Add</button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </form>\n\n\n\n    <!--Button for adding and canceling group-->\n    <div padding>\n        <button ion-button block class="bg-secondary-style std-text-color" (click)="setupGroup()">Create Group</button>\n        <button ion-button block class="bg-danger-style std-text-color" (click)="dismissGroup()">Cancel</button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/modals/creategroup/creategroup.html"*/
        }),
        __metadata("design:paramtypes", [ionic_angular_1.ModalController, ionic_angular_1.ViewController, forms_1.FormBuilder, share_1.Share, service_1.Group_DataProvider])
    ], CreateGroupModal);
    return CreateGroupModal;
}());
exports.CreateGroupModal = CreateGroupModal;
//# sourceMappingURL=creategroup.js.map

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__(254);
var app_module_1 = __webpack_require__(261);
var core_1 = __webpack_require__(0);
core_1.enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 261:
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
var platform_browser_1 = __webpack_require__(43);
var ionic_angular_1 = __webpack_require__(16);
var app_component_1 = __webpack_require__(300);
var search_1 = __webpack_require__(228);
var groups_1 = __webpack_require__(251);
var group_1 = __webpack_require__(65);
var notifications_1 = __webpack_require__(247);
var home_1 = __webpack_require__(248);
var tabs_1 = __webpack_require__(227);
var post_1 = __webpack_require__(122);
var login_1 = __webpack_require__(249);
var signup_1 = __webpack_require__(250);
var status_bar_1 = __webpack_require__(223);
var splash_screen_1 = __webpack_require__(226);
var service_1 = __webpack_require__(25);
var service_2 = __webpack_require__(25);
var service_3 = __webpack_require__(25);
var http_1 = __webpack_require__(229);
var creategroup_1 = __webpack_require__(252);
var share_1 = __webpack_require__(45);
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
                group_1.GroupPage,
                creategroup_1.CreateGroupModal,
                post_1.PostPage,
                tabs_1.TabsPage,
                login_1.LoginModal,
                signup_1.SignupModal
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
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
                group_1.GroupPage,
                creategroup_1.CreateGroupModal,
                post_1.PostPage,
                tabs_1.TabsPage,
                login_1.LoginModal,
                signup_1.SignupModal
            ],
            providers: [
                status_bar_1.StatusBar,
                splash_screen_1.SplashScreen,
                { provide: core_1.ErrorHandler, useClass: ionic_angular_1.IonicErrorHandler },
                service_1.Auth_DataProvider,
                service_2.User_DataProvider,
                service_3.Group_DataProvider,
                share_1.Share
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 300:
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
var ionic_angular_1 = __webpack_require__(16);
var status_bar_1 = __webpack_require__(223);
var splash_screen_1 = __webpack_require__(226);
var tabs_1 = __webpack_require__(227);
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = tabs_1.TabsPage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //statusBar.styleDefault();
            //splashScreen.hide();
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

/***/ 408:
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

/***/ }),

/***/ 45:
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
var ionic_angular_1 = __webpack_require__(16);
var Share = /** @class */ (function () {
    function Share(toasCtrl) {
        this.toasCtrl = toasCtrl;
        this.items = {};
    }
    Share.prototype.presentToast = function (toast_message) {
        var toast = this.toasCtrl.create({
            message: toast_message,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    Share.prototype.getDisplayDate = function (date) {
        // Split timestamp into [ Y, M, D, h, m, s ]
        var actiondate = new Date(date);
        var today = new Date();
        ;
        if (today.getDate() === actiondate.getDate() && today.getMonth() === actiondate.getMonth() && today.getFullYear() === actiondate.getFullYear()) {
            var hourssince = today.getHours() - actiondate.getHours();
            var minutessince = today.getMinutes() - actiondate.getMinutes();
            var secondssince = today.getSeconds() - actiondate.getSeconds();
            if (hourssince > 0) {
                date = hourssince + 'h';
            }
            else if (minutessince > 0) {
                date = minutessince + 'm';
            }
            else {
                date = secondssince + 's';
            }
        }
        else {
            var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
            var diffDays = Math.round(Math.abs((today.getTime() - actiondate.getTime()) / (oneDay)));
            if (diffDays >= 7) {
                date = Math.round(diffDays / 7) + 'w';
            }
            else {
                if (diffDays == 0) {
                    diffDays = 1;
                }
                date = diffDays + 'd';
            }
        }
        return date;
    };
    Share = __decorate([
        core_1.Component({
            template: ""
        }),
        __metadata("design:paramtypes", [ionic_angular_1.ToastController])
    ], Share);
    return Share;
}());
exports.Share = Share;
//# sourceMappingURL=share.js.map

/***/ }),

/***/ 65:
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
var ionic_angular_1 = __webpack_require__(16);
var objectFactory_1 = __webpack_require__(66);
var post_1 = __webpack_require__(122);
var service_1 = __webpack_require__(25);
var share_1 = __webpack_require__(45);
var GroupPage = /** @class */ (function () {
    function GroupPage(navCtrl, navPar, menuCtrl, groupService, shared, userService) {
        this.navCtrl = navCtrl;
        this.navPar = navPar;
        this.menuCtrl = menuCtrl;
        this.groupService = groupService;
        this.shared = shared;
        this.userService = userService;
        this.curGroup = new objectFactory_1.Group(null, null, null, null, null);
        this.members = [];
        this.posts = [];
        this.notAMember = true;
        this.postText = "";
        this.getGroupInfo(this.navPar.get("id"));
        this.isUserMember(this.shared.items["userId"], this.navPar.get("id"));
    }
    GroupPage.prototype.getPostLikes = function (post) {
        return this.groupService.count_post_likes(post.id, this.shared.items["userId"]).subscribe(function (res) {
            if (res.status == 200) {
                return [res.likes, res.memberLiked];
            }
        });
    };
    GroupPage.prototype.likePost = function (post) {
    };
    GroupPage.prototype.isUserMember = function (user, group) {
        var _this = this;
        this.userService.is_user_a_member(user, group).subscribe(function (res) {
            if (res.isMember) {
                _this.notAMember = false;
                _this.getGroupMembers(_this.navPar.get("id"));
                _this.getGroupPosts(_this.navPar.get("id"));
            }
        });
    };
    GroupPage.prototype.joinGroup = function () {
        var _this = this;
        this.groupService.add_user_to_group(this.shared.items["userId"], this.curGroup.id).subscribe(function (res) {
            if (res.status == 200) {
                _this.shared.presentToast(res.message);
                _this.isUserMember(_this.shared.items["userId"], _this.curGroup.id);
            }
        });
    };
    GroupPage.prototype.getGroupInfo = function (id) {
        var _this = this;
        //got to server and get group informaiton
        this.groupService.get_group_information(id).subscribe(function (res) { return _this.curGroup = res.group; }, function (error) { return _this.errorMessage = error; });
    };
    GroupPage.prototype.getGroupMembers = function (id) {
        //go to server and get members associated with group
    };
    GroupPage.prototype.addPost = function () {
        var _this = this;
        //add post data to database
        if (this.postText.length > 0) {
            this.groupService.add_new_post(this.curGroup.id, this.shared.items['userId'], this.postText).subscribe(function (res) {
                if (res.status = 200) {
                    _this.shared.presentToast(res.message);
                    _this.getGroupPosts(_this.curGroup.id);
                }
            });
            this.postText = "";
        }
    };
    GroupPage.prototype.getGroupPosts = function (id) {
        var _this = this;
        //pull the most recent 10 posts from database for group
        this.posts = [];
        this.groupService.get_group_top_posts(id).subscribe(function (res) {
            res.posts.forEach(function (post) {
                _this.posts.push(post);
                _this.lastPostId = post.id;
            });
        });
    };
    GroupPage.prototype.continuePosts = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            // pull next 10 posts from daatbase for group
            _this.groupService.get_group_next_posts(_this.curGroup.id, _this.lastPostId).subscribe(function (res) {
                res.posts.forEach(function (post) {
                    _this.posts.push(post);
                });
            });
            infiniteScroll.complete();
        }, 500);
    };
    GroupPage.prototype.postSelected = function (post) {
        this.navCtrl.push(post_1.PostPage, {
            selectedPost: post,
        });
    };
    GroupPage.prototype.showGroupInfo = function () {
        this.menuCtrl.open('right');
    };
    GroupPage = __decorate([
        core_1.Component({
            selector: 'page-group',template:/*ion-inline-start:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/pages/group/group.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      {{curGroup.name}}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="showGroupInfo()">\n        <ion-icon name="people" class="ion-icon-large"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!--Display for non members-->\n  <div no-padding *ngIf="notAMember">\n    <ion-card no-padding class="card-strd-style">\n      <ion-card-content padding>\n        <h2>Name</h2>\n        <p>{{curGroup.name}}</p>\n      </ion-card-content>\n    </ion-card>\n    <ion-card no-padding class="card-strd-style">\n      <ion-card-content padding>\n        <h2>Description</h2>\n        <p>{{curGroup.description}}</p>\n      </ion-card-content>\n    </ion-card>\n    <ion-card no-padding class="card-strd-style">\n      <ion-card-content padding>\n        <h2>Goal</h2>\n        <p>{{curGroup.goal}}</p>\n      </ion-card-content>\n    </ion-card>\n    <button ion-button block class="bg-secondary-style" (click)="joinGroup()">Join Group</button>\n  </div>\n  <!-- Display for members-->\n  <ion-card>\n    <ion-textarea class="ion-textarea-style" maxlength="1000" rows="5" placeholder="What\'s on your mind?"\n      [(ngModel)]="postText" (ionInput)="updateCount($event)"></ion-textarea>\n    <ion-grid>\n      <ion-row style="height:40px">\n        <ion-col col-10>\n          <p style="margin-top: 15px; text-align: right;">{{ 1000 - postText.length }}</p>\n        </ion-col>\n        <ion-col col-2 align-right>\n          <button class="post_button_style" ion-button float-right (click)=addPost()>\n            <p class="post_button_text">Post</p>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-card>\n  <h3 class="no-item" style="text-align: center;" *ngIf="posts.length === 0">No posts in group yet :(</h3>\n  <ion-card *ngFor="let post of posts">\n\n    <ion-item (click)=postSelected(post)>\n      <ion-avatar item-start>\n        <ion-icon name="person" class="ion-icon-large"></ion-icon>\n      </ion-avatar>\n      <strong>{{post.user}}</strong> @{{post.username}}\n    </ion-item>\n\n    <ion-card-content (click)=postSelected(post)>\n      <p readonly>{{post.post}}</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="heart-outline" class="ion-icon-heart-like" *ngIf="getPostLikes(post)[1] === 1"></ion-icon>\n          <ion-icon name="heart" class="ion-icon-heart-like" *ngIf="getPostLikes(post)[1] === 0"></ion-icon>\n          <div>{{getPostLikes(post)[0]}}</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small (click)=postSelected(post)>\n          <ion-icon name="text"></ion-icon>\n          <div>4</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          {{this.shared.getDisplayDate(post.creationDate)}}\n        </ion-note>\n      </ion-col>\n    </ion-row>\n    \n\n  </ion-card>\n  <ion-infinite-scroll (ionInfinite)="continuePosts($event)">\n    <ion-infinite-scroll-content loadingspinner="bubbles">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n\n<!-- Side Menu to display user information-->\n<ion-menu side="right" [content]="groupMenu" type="overlay" color="primary">\n  <ion-content class="bg-primary-style">\n    <ion-card no-padding class="card-strd-style">\n      <ion-card-content padding>\n        <h2>Name</h2>\n        <p>{{curGroup.name}}</p>\n      </ion-card-content>\n    </ion-card>\n    <ion-card no-padding class="card-strd-style">\n      <ion-card-content padding>\n        <h2>Description</h2>\n        <p>{{curGroup.description}}</p>\n      </ion-card-content>\n    </ion-card>\n    <ion-card no-padding class="card-strd-style">\n      <ion-card-content padding>\n        <h2>Goal</h2>\n        <p>{{curGroup.goal}}</p>\n      </ion-card-content>\n    </ion-card>\n    <button ion-item details-push>\n      <h3>Members</h3>\n    </button>\n    <button ion-item details-push>\n      <h3>Milestones</h3>\n    </button>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #groupMenu [root]="GroupPage"></ion-nav>'/*ion-inline-end:"/Users/tbrown/Documents/Capstone Project/Source/SWDV-691-Capstone-UI/src/pages/group/group.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof ionic_angular_1.NavController !== "undefined" && ionic_angular_1.NavController) === "function" && _a || Object, typeof (_b = typeof ionic_angular_1.NavParams !== "undefined" && ionic_angular_1.NavParams) === "function" && _b || Object, typeof (_c = typeof ionic_angular_1.MenuController !== "undefined" && ionic_angular_1.MenuController) === "function" && _c || Object, typeof (_d = typeof service_1.Group_DataProvider !== "undefined" && service_1.Group_DataProvider) === "function" && _d || Object, typeof (_e = typeof share_1.Share !== "undefined" && share_1.Share) === "function" && _e || Object, typeof (_f = typeof service_1.User_DataProvider !== "undefined" && service_1.User_DataProvider) === "function" && _f || Object])
    ], GroupPage);
    return GroupPage;
    var _a, _b, _c, _d, _e, _f;
}());
exports.GroupPage = GroupPage;
//# sourceMappingURL=group.js.map

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** hold user informaiton
 *
 */
var User = /** @class */ (function () {
    function User(id, name, email, phone, username) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.username = username;
    }
    return User;
}());
exports.User = User;
/**
 * holds group information
 */
var Group = /** @class */ (function () {
    function Group(id, name, description, goal, admin) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.goal = goal;
        this.admin = admin;
    }
    return Group;
}());
exports.Group = Group;
/**holds post information for user
 *
 */
var Post = /** @class */ (function () {
    function Post(id, group_id, group_name, user_name, username, post, date) {
        this.id = id;
        this.groupId = group_id;
        this.groupName = group_name;
        this.user = user_name;
        this.username = username;
        this.post = post;
        this.creationDate = date;
    }
    return Post;
}());
exports.Post = Post;
/**holds comment information
 *
*/
var Comment = /** @class */ (function () {
    function Comment(id, post_id, user, username, comment, date) {
        this.id = id;
        this.postId = post_id;
        this.user = user;
        this.username = username;
        this.comment = comment;
        this.creationDate = date;
    }
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
var Milestone = /** @class */ (function () {
    function Milestone(id, groupId, name, order) {
        this.id = id;
        this.groupId = groupId;
        this.name = name;
        this.order = order;
    }
    Milestone.prototype.getId = function () {
        return this.id;
    };
    Milestone.prototype.getGroupId = function () {
        return this.groupId;
    };
    return Milestone;
}());
exports.Milestone = Milestone;
//# sourceMappingURL=objectFactory.js.map

/***/ })

},[253]);
//# sourceMappingURL=main.js.map