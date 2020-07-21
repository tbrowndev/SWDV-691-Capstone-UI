function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification-tab-notification-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/notification-tab/notification.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notification-tab/notification.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotificationTabNotificationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Notifications\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Notifications</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <app-explore-container name=\"Notification Page\"></app-explore-container>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/notification-tab/notification-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/notification-tab/notification-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: NotificationPageRoutingModule */

  /***/
  function srcAppNotificationTabNotificationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationPageRoutingModule", function () {
      return NotificationPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _notification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notification.page */
    "./src/app/notification-tab/notification.page.ts");

    var routes = [{
      path: '',
      component: _notification_page__WEBPACK_IMPORTED_MODULE_3__["NotificationPage"]
    }];

    var NotificationPageRoutingModule = function NotificationPageRoutingModule() {
      _classCallCheck(this, NotificationPageRoutingModule);
    };

    NotificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NotificationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/notification-tab/notification.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/notification-tab/notification.module.ts ***!
    \*********************************************************/

  /*! exports provided: NotificationPageModule */

  /***/
  function srcAppNotificationTabNotificationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function () {
      return NotificationPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _notification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./notification.page */
    "./src/app/notification-tab/notification.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _notification_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./notification-routing.module */
    "./src/app/notification-tab/notification-routing.module.ts");

    var NotificationPageModule = function NotificationPageModule() {
      _classCallCheck(this, NotificationPageModule);
    };

    NotificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]
      }]), _notification_routing_module__WEBPACK_IMPORTED_MODULE_8__["NotificationPageRoutingModule"]],
      declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]]
    })], NotificationPageModule);
    /***/
  },

  /***/
  "./src/app/notification-tab/notification.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/notification-tab/notification.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotificationTabNotificationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbi10YWIvbm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/notification-tab/notification.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/notification-tab/notification.page.ts ***!
    \*******************************************************/

  /*! exports provided: NotificationPage */

  /***/
  function srcAppNotificationTabNotificationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationPage", function () {
      return NotificationPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotificationPage = function NotificationPage() {
      _classCallCheck(this, NotificationPage);
    };

    NotificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notification',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./notification.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/notification-tab/notification.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./notification.page.scss */
      "./src/app/notification-tab/notification.page.scss"))["default"]]
    })], NotificationPage);
    /***/
  }
}]);
//# sourceMappingURL=notification-tab-notification-module-es5.js.map