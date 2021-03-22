(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-tab-profile-tab-module"],{

/***/ "6l8E":
/*!********************************************************!*\
  !*** ./src/app/tabs/profile-tab/profile-tab.module.ts ***!
  \********************************************************/
/*! exports provided: ProfileTabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileTabPageModule", function() { return ProfileTabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_tab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-tab-routing.module */ "Vs7k");
/* harmony import */ var _profile_tab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-tab.page */ "SRfN");







let ProfileTabPageModule = class ProfileTabPageModule {
};
ProfileTabPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_tab_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileTabPageRoutingModule"]
        ],
        declarations: [_profile_tab_page__WEBPACK_IMPORTED_MODULE_6__["ProfileTabPage"]]
    })
], ProfileTabPageModule);



/***/ }),

/***/ "IL57":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/profile-tab/profile-tab.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"mainMenu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Perfil</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "SRfN":
/*!******************************************************!*\
  !*** ./src/app/tabs/profile-tab/profile-tab.page.ts ***!
  \******************************************************/
/*! exports provided: ProfileTabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileTabPage", function() { return ProfileTabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_tab_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile-tab.page.html */ "IL57");
/* harmony import */ var _profile_tab_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-tab.page.scss */ "kf/n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ProfileTabPage = class ProfileTabPage {
    constructor() { }
    ngOnInit() {
    }
};
ProfileTabPage.ctorParameters = () => [];
ProfileTabPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile-tab',
        template: _raw_loader_profile_tab_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_tab_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfileTabPage);



/***/ }),

/***/ "Vs7k":
/*!****************************************************************!*\
  !*** ./src/app/tabs/profile-tab/profile-tab-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ProfileTabPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileTabPageRoutingModule", function() { return ProfileTabPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_tab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-tab.page */ "SRfN");




const routes = [
    {
        path: '',
        component: _profile_tab_page__WEBPACK_IMPORTED_MODULE_3__["ProfileTabPage"]
    }
];
let ProfileTabPageRoutingModule = class ProfileTabPageRoutingModule {
};
ProfileTabPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfileTabPageRoutingModule);



/***/ }),

/***/ "kf/n":
/*!********************************************************!*\
  !*** ./src/app/tabs/profile-tab/profile-tab.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLXRhYi5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=profile-tab-profile-tab-module-es2015.js.map