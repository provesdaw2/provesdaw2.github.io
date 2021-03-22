(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-tab-settings-tab-module"],{

/***/ "7XLp":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/settings-tab/settings-tab.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>settingsTab</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "9Loj":
/*!******************************************************************!*\
  !*** ./src/app/tabs/settings-tab/settings-tab-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: SettingsTabPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsTabPageRoutingModule", function() { return SettingsTabPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _settings_tab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-tab.page */ "J+SQ");




const routes = [
    {
        path: '',
        component: _settings_tab_page__WEBPACK_IMPORTED_MODULE_3__["SettingsTabPage"]
    }
];
let SettingsTabPageRoutingModule = class SettingsTabPageRoutingModule {
};
SettingsTabPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsTabPageRoutingModule);



/***/ }),

/***/ "J+SQ":
/*!********************************************************!*\
  !*** ./src/app/tabs/settings-tab/settings-tab.page.ts ***!
  \********************************************************/
/*! exports provided: SettingsTabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsTabPage", function() { return SettingsTabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_settings_tab_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./settings-tab.page.html */ "7XLp");
/* harmony import */ var _settings_tab_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-tab.page.scss */ "v+tA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SettingsTabPage = class SettingsTabPage {
    constructor() { }
    ngOnInit() {
    }
};
SettingsTabPage.ctorParameters = () => [];
SettingsTabPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-settings-tab',
        template: _raw_loader_settings_tab_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_tab_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SettingsTabPage);



/***/ }),

/***/ "v+tA":
/*!**********************************************************!*\
  !*** ./src/app/tabs/settings-tab/settings-tab.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy10YWIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "x4Fg":
/*!**********************************************************!*\
  !*** ./src/app/tabs/settings-tab/settings-tab.module.ts ***!
  \**********************************************************/
/*! exports provided: SettingsTabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsTabPageModule", function() { return SettingsTabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _settings_tab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-tab-routing.module */ "9Loj");
/* harmony import */ var _settings_tab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings-tab.page */ "J+SQ");







let SettingsTabPageModule = class SettingsTabPageModule {
};
SettingsTabPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_tab_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsTabPageRoutingModule"]
        ],
        declarations: [_settings_tab_page__WEBPACK_IMPORTED_MODULE_6__["SettingsTabPage"]]
    })
], SettingsTabPageModule);



/***/ })

}]);
//# sourceMappingURL=settings-tab-settings-tab-module-es2015.js.map