webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n\t<span (click)=\"showNav=!showNav\">\n\t\t☰\n\t</span>\n\t<door-status class=\"small-screen\" [hidden]=\"!showNav\" (click)=\"showNav = false\"></door-status>\n\t<door-status class=\"big-screen\" [hidden]=\"showNav\"></door-status>\n</nav>\n<main>\n<alert></alert>\n<router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Olm';
        this.showNav = false;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'olm-client',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__module_module_module__ = __webpack_require__("../../../../../src/app/module/module.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__exam_exam_module__ = __webpack_require__("../../../../../src/app/exam/exam.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_user_module__ = __webpack_require__("../../../../../src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mcq_mcq_module__ = __webpack_require__("../../../../../src/app/mcq/mcq.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__session_session_module__ = __webpack_require__("../../../../../src/app/session/session.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__protocoll_protocoll_module__ = __webpack_require__("../../../../../src/app/protocoll/protocoll.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__text_text_module__ = __webpack_require__("../../../../../src/app/text/text.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__doc_doc_module__ = __webpack_require__("../../../../../src/app/doc/doc.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_6__module_module_module__["a" /* ModuleModule */],
            __WEBPACK_IMPORTED_MODULE_7__exam_exam_module__["a" /* ExamModule */],
            __WEBPACK_IMPORTED_MODULE_8__user_user_module__["a" /* UserModule */],
            __WEBPACK_IMPORTED_MODULE_9__mcq_mcq_module__["a" /* McqModule */],
            __WEBPACK_IMPORTED_MODULE_10__session_session_module__["a" /* SessionModule */],
            __WEBPACK_IMPORTED_MODULE_11__protocoll_protocoll_module__["a" /* ProtocollModule */],
            __WEBPACK_IMPORTED_MODULE_12__text_text_module__["a" /* TextModule */],
            __WEBPACK_IMPORTED_MODULE_13__doc_doc_module__["a" /* DocModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_14__services_olm_service__["a" /* OlmService */],
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/abstract-template-form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractTemplateForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AbstractTemplateForm = (function () {
    function AbstractTemplateForm(alertService) {
        this.alertService = alertService;
        this.formErrors = {};
        this.validationMessages = {};
        this.model = {};
        this.parent = {};
        this.submitLabel = 'Abschicken';
    }
    ;
    AbstractTemplateForm.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    ;
    AbstractTemplateForm.prototype.formChanged = function () {
        var _this = this;
        if (this.currentForm === this.form) {
            return;
        }
        this.form = this.currentForm;
        if (this.form) {
            this.form.valueChanges
                .subscribe(function (data) { return _this.onValueChanged(data); });
        }
    };
    ;
    AbstractTemplateForm.prototype.onValueChanged = function (data) {
        if (!this.form) {
            return;
        }
        var form = this.form.form;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    ;
    /**
     * https://github.com/angular/angular/blob/4.1.x/packages/forms/src/model.ts
     *
     */
    AbstractTemplateForm.prototype.setError = function (field, messageCode) {
        if (field == 'global') {
            this.alertService.error(messageCode);
        }
        else {
            var error = {};
            error[messageCode] = true;
            this.form.form.get(field).setErrors(error);
            this.onValueChanged();
        }
        return true;
    };
    ;
    return AbstractTemplateForm;
}());

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], AbstractTemplateForm.prototype, "model", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], AbstractTemplateForm.prototype, "parent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], AbstractTemplateForm.prototype, "submitLabel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('form'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], AbstractTemplateForm.prototype, "currentForm", void 0);
var _a;
//# sourceMappingURL=abstract-template-form.js.map

/***/ }),

/***/ "../../../../../src/app/core/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Administration</h1>\n\n<text-view [path]=\"'admin'\"></text-view>\n\n<h2>MC-Sammlungen</h2>\n\n<menu class=\"list\">\n\t<a *ngIf=\"auth.admin\" class=\"btn btn-create\" routerLink=\"/module/create\">Neue MC-Sammlung anlegen</a>\n\t<a *ngIf=\"auth.admin\" class=\"btn btn-primary\" routerLink=\"/module/deleted\">Gelöschte MC-Sammlungen ansehen</a>\n</menu>\n\n<h2>Protokoll-Sammlungen</h2>\n<menu class=\"list\">\n\t<a *ngIf=\"auth.admin\" class=\"btn btn-create\" routerLink=\"/exam/create\">Neue Protokollsammlung anlegen</a>\n\t<a *ngIf=\"auth.admin\" class=\"btn btn-primary\" routerLink=\"/exam/deleted\">Gelöschte Protokollsammlungen ansehen</a>\n</menu>\n\n<h2>Sonstiges</h2>\n\n<menu class=\"list\">\n\t<a class=\"btn btn-create\" routerLink=\"/doc/create\">Doku anlegen</a>\n\t<a routerLink=\"/users/view\" class=\"btn btn-primary\">Benutzer suchen</a>\n\t<a routerLink=\"/texts/view\" class=\"btn btn-primary\">Hilfe-Texte verwalten</a>\n</menu>\n\n<h2>Dokus</h2>\n\n<ul class=\"items\">\n\t<li *ngFor=\"let item of items\">\n\t\t<ng-container *ngIf=\"auth.admin\">\n\t\t\t{{item.title}} ({{item.order_num}})\n\t\t\t<menu class=\"assoc\">\n\t\t\t\t<a class=\"btn btn-primary\" [routerLink]=\"['/doc/view', item.id, 'current']\">ansehen</a>\n\t\t\t\t<a class=\"btn btn-edit\" [routerLink]=\"['/doc/edit', item.id, 'current']\">bearbeiten</a>\n\t\t\t\t<a class=\"btn btn-delete\" [routerLink]=\"['/doc/delete', item.id, 'current']\">löschen</a>\n\t\t\t</menu>\n\t\t</ng-container>\n\t</li>\n</ul>\n\n<menu class=\"bottom\">\n\t<a class=\"btn btn-back\" routerLink=\"/dashboard\">zurück</a>\n</menu>\n"

/***/ }),

/***/ "../../../../../src/app/core/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = (function () {
    function AdminComponent(olmService, alertService, location) {
        this.olmService = olmService;
        this.alertService = alertService;
        this.location = location;
        this.items = [];
        this.auth = {};
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
        this.olmService.apiReadAll('doc')
            .subscribe(function (result) {
            _this.items = result;
        });
    };
    AdminComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'admin',
        template: __webpack_require__("../../../../../src/app/core/admin.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_olm_service__["a" /* OlmService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _c || Object])
], AdminComponent);

var _a, _b, _c;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'msg': message, 'msg-success': message.type === 'success', 'msg-error': message.type === 'error' }\">\n\t{{message.text}}\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'alert',
        template: __webpack_require__("../../../../../src/app/core/alert.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/authorisation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Authorisation; });
var Authorisation = (function () {
    function Authorisation() {
    }
    return Authorisation;
}());

;
//# sourceMappingURL=authorisation.js.map

/***/ }),

/***/ "../../../../../src/app/core/core-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("../../../../../src/app/core/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_component__ = __webpack_require__("../../../../../src/app/core/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__door_component__ = __webpack_require__("../../../../../src/app/core/door.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__door_reset_component__ = __webpack_require__("../../../../../src/app/core/door-reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__delete_component__ = __webpack_require__("../../../../../src/app/core/delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__deleted_component__ = __webpack_require__("../../../../../src/app/core/deleted.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__history_component__ = __webpack_require__("../../../../../src/app/core/history.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CoreRoutingModule = (function () {
    function CoreRoutingModule() {
    }
    return CoreRoutingModule;
}());
CoreRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild([
                { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_4__admin_component__["a" /* AdminComponent */] },
                { path: 'door', component: __WEBPACK_IMPORTED_MODULE_5__door_component__["a" /* DoorComponent */] },
                { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
                { path: 'door/reset', component: __WEBPACK_IMPORTED_MODULE_6__door_reset_component__["a" /* DoorResetComponent */] },
                //{ path: 'delete/:type/:id', component: DeleteComponent, canActivate: [OlmService] },
                //{ path: 'deleted/:type', component: DeletedComponent, canActivate: [OlmService] },
                //{ path: 'history/:type/:id', component: HistoryComponent, canActivate: [OlmService] },
                { path: ':type/delete/:id/:version', component: __WEBPACK_IMPORTED_MODULE_7__delete_component__["a" /* DeleteComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
                { path: ':type/deleted', component: __WEBPACK_IMPORTED_MODULE_8__deleted_component__["a" /* DeletedComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
                { path: ':type/history/:id', component: __WEBPACK_IMPORTED_MODULE_9__history_component__["a" /* HistoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], CoreRoutingModule);

//# sourceMappingURL=core-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_routing_module__ = __webpack_require__("../../../../../src/app/core/core-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_component__ = __webpack_require__("../../../../../src/app/core/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_component__ = __webpack_require__("../../../../../src/app/core/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_component__ = __webpack_require__("../../../../../src/app/core/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__door_component__ = __webpack_require__("../../../../../src/app/core/door.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__door_status_component__ = __webpack_require__("../../../../../src/app/core/door-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__door_reset_component__ = __webpack_require__("../../../../../src/app/core/door-reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__delete_component__ = __webpack_require__("../../../../../src/app/core/delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__deleted_component__ = __webpack_require__("../../../../../src/app/core/deleted.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__history_component__ = __webpack_require__("../../../../../src/app/core/history.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












var CoreModule = (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    ;
    return CoreModule;
}());
CoreModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__core_routing_module__["a" /* CoreRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_4__dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_5__admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_6__door_component__["a" /* DoorComponent */],
            __WEBPACK_IMPORTED_MODULE_7__door_status_component__["a" /* DoorStatusComponent */],
            __WEBPACK_IMPORTED_MODULE_8__door_reset_component__["a" /* DoorResetComponent */],
            __WEBPACK_IMPORTED_MODULE_9__delete_component__["a" /* DeleteComponent */],
            __WEBPACK_IMPORTED_MODULE_10__deleted_component__["a" /* DeletedComponent */],
            __WEBPACK_IMPORTED_MODULE_11__history_component__["a" /* HistoryComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_7__door_status_component__["a" /* DoorStatusComponent */],
        ],
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* SkipSelf */])()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<text-view [path]=\"'dashboard'\"></text-view>\n\n<div class=\"panel\">\n\t<!-- <div class=\"panel-header\">\n\t\t<h3>Sende uns Feedback!</h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t<text-view [path]=\"'dashboard.feedback'\"></text-view>\n\t\t<textarea placeholder=\"Deine Nachricht..\"></textarea>\n\t</div>\n\t<div class=\"panel-footer\">\n\t\t<a class=\"btn btn-primary\">abschicken</a>\n\t</div> -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(olmService) {
        this.olmService = olmService;
    }
    ;
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
    };
    ;
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'dashboard',
        template: __webpack_require__("../../../../../src/app/core/dashboard.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_olm_service__["a" /* OlmService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/delete.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Bist Du Dir sicher?</h1>\n\n<text-view [path]=\"'delete'\"></text-view>\n\n<ng-container *ngIf=\"item\">\n\n<p *ngIf=\"type == 'user'\">..., dass Du den Account \"{{item}}\" wirklich löschen möchtest?</p>\n<p *ngIf=\"type == 'doc'\">..., dass Du die Doku \"{{item}}\" wirklich löschen möchtest?</p>\n<p *ngIf=\"type == 'text'\">..., dass Du den Text \"{{item}}\" wirklich löschen möchtest?</p>\n<p *ngIf=\"type == 'module'\">..., dass Du die MC-Sammlung \"{{item}}\" wirklich löschen möchtest?</p>\n<p *ngIf=\"type == 'exam'\">..., dass Du die Protokollsammlung \"{{item}}\" wirklich löschen möchtest?</p>\n<p *ngIf=\"type == 'protocoll'\">..., dass Du das Protokoll \"{{item}}\" wirklich löschen möchtest?</p>\n<p *ngIf=\"type == 'session'\">..., dass Du deinen Test \"{{item}}\" wirklich löschen möchtest?</p>\n<p *ngIf=\"type == 'mcq'\">..., dass Du die MC-Frage \"{{item | cut:26}} ...\" wirklich löschen möchtest?</p>\n<p *ngIf=\"type == 'inactiveusers'\">..., dass Du {{item}} inaktive Nutzer wirklich löschen möchtest?</p>\n\n<p class=\"msg msg-warning\" *ngIf=\"version != 'current' || type == 'user' || type == 'doc' || type == 'text' || type == 'session'\">Das kann nicht rückgängig gemacht werden!</p>\n\n<menu class=\"bottom\">\n\t<button class=\"btn btn-back\" (click)=\"back()\">Hm... Eher nicht...</button>\n\t<button class=\"btn btn-delete\" (click)=\"delete()\">JA! Nun mach schon!</button>\n</menu>\n</ng-container>\n"

/***/ }),

/***/ "../../../../../src/app/core/delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DeleteComponent = (function () {
    function DeleteComponent(route, olmService, alertService, router, location) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.location = location;
        this.id = -1;
        this.type = '';
        this.version = '';
    }
    DeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            _this.id = params['id'];
            _this.type = params['type'];
            _this.version = params['version'];
            if (_this.type == 'inactiveusers') {
                return _this.olmService.apiReadUsersInactive();
            }
            else {
                return _this.olmService.apiRead(params['type'], params['id'], params['version']);
            }
        })
            .subscribe(function (result) {
            if (_this.type == 'mcq') {
                _this.item = result.question;
            }
            else if (_this.type == 'user') {
                _this.item = result.username;
            }
            else if (_this.type == 'inactiveusers') {
                _this.item = String(result.length);
            }
            else if (result.name) {
                _this.item = result.name;
            }
        });
    };
    ;
    DeleteComponent.prototype.delete = function () {
        var _this = this;
        if (this.type == 'inactiveusers') {
            this.olmService.apiDeleteUsersInactive()
                .subscribe(function (result) {
                _this.alertService.success('Gelöscht.');
                _this.location.back();
            });
        }
        else {
            this.olmService.apiDelete(this.type, this.id)
                .subscribe(function (result) {
                _this.alertService.success('Gelöscht.');
                _this.location.back();
            });
        }
    };
    ;
    DeleteComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return DeleteComponent;
}());
DeleteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'delete',
        template: __webpack_require__("../../../../../src/app/core/delete.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_olm_service__["a" /* OlmService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _e || Object])
], DeleteComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=delete.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/deleted.component.html":
/***/ (function(module, exports) {

module.exports = "<text-view [path]=\"'deleted'\"></text-view>\n\n<ul *ngIf=\"items\">\n\t<li *ngFor=\"let item of items\">\n\t\t{{item.history_timestamp}} {{item.history_status}} von\n\t\t<a [routerLink]=\"['/user/edit', item.history_user]\">{{item.history_user}}</a>:\n\t\t<a [routerLink]=\"['/', type, 'edit', item.id, item.history_timestamp]\">ansehen</a>\n\t\t<a [routerLink]=\"['/', type, 'delete', item.id, item.history_timestamp]\">Endgültig löschen</a>\n\t</li>\n</ul>\n\n<menu>\n\t<button class=\"btn btn-back\" (click)=\"back()\">zurück</button>\n</menu>\n"

/***/ }),

/***/ "../../../../../src/app/core/deleted.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeletedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DeletedComponent = (function () {
    function DeletedComponent(route, olmService, alertService, router, location) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.location = location;
        this.type = '';
        this.items = [];
    }
    DeletedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            _this.type = params['type'];
            return _this.olmService.apiReadDeleted(params['type']);
        })
            .subscribe(function (result) {
            _this.items = result;
        });
    };
    ;
    DeletedComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return DeletedComponent;
}());
DeletedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'deleted',
        template: __webpack_require__("../../../../../src/app/core/deleted.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_olm_service__["a" /* OlmService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _e || Object])
], DeletedComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=deleted.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/door-reset.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Passwort zurücksetzen</h1>\n\n<text-view [path]=\"'door-reset'\"></text-view>\n\n<form (ngSubmit)=\"reset()\" #form=\"ngForm\">\n\t<ul>\n\t\t<li>\n\t\t\t<label for=\"email\">Email-Adresse</label>\n\t\t\t<input\n\t\t\t\ttype=\"text\"\n\t\t\t\tid=\"email\"\n\t\t\t\tname=\"email\"\n\t\t\t\t[(ngModel)]=\"model.email\"\n\t\t\t\t#email=\"ngModel\"\n\t\t\t\trequired />\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.email\">{{formErrors.email}}</div>\n\t\t</li>\n\t</ul>\n\t<menu class=\"bottom\">\n\t\t<button class=\"btn btn-submit\" type=\"submit\" [disabled]=\"!form.form.valid\">Abschicken</button>\n\t</menu>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/core/door-reset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoorResetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_abstract_template_form__ = __webpack_require__("../../../../../src/app/core/abstract-template-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DoorResetComponent = (function (_super) {
    __extends(DoorResetComponent, _super);
    function DoorResetComponent(olmService, alertService) {
        var _this = _super.call(this, alertService) || this;
        _this.olmService = olmService;
        _this.alertService = alertService;
        _this.returnUrl = '';
        _this.formErrors = {
            'email': '',
        };
        _this.validationMessages = {
            'email': {
                'required': 'Bitte gib deine Emailadresse ein.',
                'pattern': 'Bitte gib eine gültige Emailadresse ein',
            },
        };
        return _this;
    }
    DoorResetComponent.prototype.ngOnInit = function () {
    };
    DoorResetComponent.prototype.reset = function () {
        var _this = this;
        this.olmService.resetPassword(this.model.email)
            .subscribe(function (result) {
            _this.alertService.success("Sollte ein Account zu dieser Emailadresse existieren, wurde eine Email mit dem zurückgesetzten Passwort versandt. Bitte kontrollier auch den Spam-Ordner!");
        });
    };
    ;
    return DoorResetComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_abstract_template_form__["a" /* AbstractTemplateForm */]));
DoorResetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'door-reset',
        template: __webpack_require__("../../../../../src/app/core/door-reset.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_olm_service__["a" /* OlmService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _b || Object])
], DoorResetComponent);

var _a, _b;
//# sourceMappingURL=door-reset.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/door-status.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"auth.name\">\n\t<a routerLink=\"/dashboard\" routerLinkActive=\"active\">Start</a>\n\t<a routerLink=\"/session\" routerLinkActive=\"active\">Lernsessions</a>\n\t<a routerLink=\"/module\" routerLinkActive=\"active\">MC-Sammlungen</a>\n\t<a routerLink=\"/exam\" routerLinkActive=\"active\">Protokolle</a>\n\t<a [routerLink]=\"['/user/edit/', auth.id]\" routerLinkActive=\"active\">Account</a>\n\t<ng-container *ngIf=\"auth.admin\">\n\t\t<a routerLink=\"/admin\" routerLinkActive=\"active\">Admin</a>\n\t\t<a routerLink=\"/users/view\" routerLinkActive=\"active\">Benutzer</a>\n\t\t<a routerLink=\"/texts/view\" routerLinkActive=\"active\">Txt / Hlf</a>\n\t</ng-container>\n\t<a routerLink=\"/user/create\" routerLinkActive=\"active\">jmdn einladen</a>\n\t<a routerLink=\"/door\" routerLinkActive=\"active\">Logout</a>\n</ng-container>\n<ng-container *ngIf=\"! auth.name\">\n\t<a routerLink=\"/door\" routerLinkActive=\"active\">Login</a>\n</ng-container>\n"

/***/ }),

/***/ "../../../../../src/app/core/door-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoorStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DoorStatusComponent = (function () {
    function DoorStatusComponent(olmService) {
        this.olmService = olmService;
    }
    DoorStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
    };
    return DoorStatusComponent;
}());
DoorStatusComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'door-status',
        template: __webpack_require__("../../../../../src/app/core/door-status.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_olm_service__["a" /* OlmService */]) === "function" && _a || Object])
], DoorStatusComponent);

var _a;
//# sourceMappingURL=door-status.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/door.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Login</h1>\n\n<text-view [path]=\"'door'\"></text-view>\n\n<form (ngSubmit)=\"login()\" #form=\"ngForm\">\n\t<ul>\n\t\t<li>\n\t\t\t<label for=\"username\">Username</label>\n\t\t\t<input\n\t\t\t\ttype=\"text\"\n\t\t\t\tid=\"username\"\n\t\t\t\tname=\"username\"\n\t\t\t\t[(ngModel)]=\"model.username\"\n\t\t\t\t#username=\"ngModel\"\n\t\t\t\trequired />\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.username\">{{formErrors.username}}</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<label for=\"password\">Passwort</label>\n\t\t\t<input\n\t\t\t\ttype=\"password\"\n\t\t\t\tid=\"password\"\n\t\t\t\tname=\"password\"\n\t\t\t\t[(ngModel)]=\"model.password\"\n\t\t\t\t#password=\"ngModel\"\n\t\t\t\trequired />\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.password\">{{formErrors.password}}</div>\n\t\t</li>\n\t</ul>\n\t<menu class=\"bottom\">\n\t\t<a class=\"btn btn-edit\" routerLink=\"/door/reset\">Passwort vergessen?</a>\n\t\t<button class=\"btn btn-submit\" type=\"submit\" [disabled]=\"!form.form.valid\">Login</button>\n\t</menu>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/core/door.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_abstract_template_form__ = __webpack_require__("../../../../../src/app/core/abstract-template-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DoorComponent = (function (_super) {
    __extends(DoorComponent, _super);
    function DoorComponent(route, olmService, alertService, router) {
        var _this = _super.call(this, alertService) || this;
        _this.route = route;
        _this.olmService = olmService;
        _this.alertService = alertService;
        _this.router = router;
        _this.returnUrl = '';
        _this.formErrors = {
            'username': '',
            'password': '',
        };
        _this.validationMessages = {
            'global': {
                'bad-name-or-pw': 'Nutzername und / oder Passwort sind falsch.',
            },
            'username': {
                'required': 'Bitte gib deinen Benutzernamen ein.',
                'pattern': 'Der Name darf nur aus Buchstaben, Zahlen und folgenden Sonderzeichen bestehen: ',
            },
            'password': {
                'pattern': '...',
                'required': 'Bitte gib dein Passwort ein.',
            },
        };
        return _this;
    }
    DoorComponent.prototype.ngOnInit = function () {
        this.olmService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    };
    DoorComponent.prototype.login = function () {
        var _this = this;
        this.olmService.login(this.model.username, this.model.password)
            .subscribe(function (auth) {
            if (auth.enabled === 0) {
                _this.router.navigate(['/user/edit', auth.id]);
                _this.alertService.success("Herzlich Willkommen! Bitte ändere dein Passwort!");
            }
            else {
                _this.router.navigate([_this.returnUrl]);
                _this.alertService.success("Herzlich Willkommen!");
            }
        }, function (error) {
            _this.handleServerError(error);
        });
    };
    ;
    DoorComponent.prototype.handleServerError = function (error) {
        (error === 'Bad username or password') &&
            (this.setError('global', this.validationMessages.global['bad-name-or-pw']));
    };
    ;
    return DoorComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core_abstract_template_form__["a" /* AbstractTemplateForm */]));
DoorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'door',
        template: __webpack_require__("../../../../../src/app/core/door.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_olm_service__["a" /* OlmService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], DoorComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=door.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/history.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>History</h1>\n\n<text-view [path]=\"'history'\"></text-view>\n\n<ul>\n\t<li *ngFor=\"let item of items\">\n\t\t{{item.history_timestamp}} {{item.history_status}} von\n\t\t<a class=\"\" [routerLink]=\"['/user/edit', item.history_user]\">{{item.history_user}}</a>:\n\t\t<a class=\"\" [routerLink]=\"['/', type, 'edit', item.id, item.history_timestamp]\">ansehen</a>\n\t</li>\n</ul>\n\n<menu class=\"bottom\">\n\t<button class=\"btn btn-back\" (click)=\"back()\">zurück</button>\n</menu>\n"

/***/ }),

/***/ "../../../../../src/app/core/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HistoryComponent = (function () {
    function HistoryComponent(route, olmService, alertService, router, location) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.location = location;
        this.id = -1;
        this.type = '';
        this.items = [];
    }
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            _this.id = params['id'];
            _this.type = params['type'];
            return _this.olmService.apiReadHistory(params['type'], params['id']);
        })
            .subscribe(function (result) {
            _this.items = result;
        });
    };
    ;
    HistoryComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return HistoryComponent;
}());
HistoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'history',
        template: __webpack_require__("../../../../../src/app/core/history.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_olm_service__["a" /* OlmService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _e || Object])
], HistoryComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=history.component.js.map

/***/ }),

/***/ "../../../../../src/app/doc/doc-create.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Doku erstellen</h1>\n\n<text-view [path]=\"'doc-create'\"></text-view>\n\n<doc-form [model]=\"model\" [parent]=\"this\" [submitLabel]=\"submitLabel\"></doc-form>\n"

/***/ }),

/***/ "../../../../../src/app/doc/doc-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doc__ = __webpack_require__("../../../../../src/app/doc/doc.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doc_form_component__ = __webpack_require__("../../../../../src/app/doc/doc-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DocCreateComponent = (function () {
    function DocCreateComponent(route, olmService, alertService, router) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__doc__["a" /* Doc */]();
        this.submitLabel = 'Doku erschaffen';
        this.version = 'new';
    }
    DocCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.olmService.apiCreate('doc', this.model)
            .subscribe(function (result) {
            _this.router.navigate(['/admin']);
            _this.alertService.success("Daten gespeichert.");
        }, function (error) {
            _this.form.handleServerError(error);
        });
    };
    ;
    return DocCreateComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__doc_form_component__["a" /* DocFormComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__doc_form_component__["a" /* DocFormComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__doc_form_component__["a" /* DocFormComponent */]) === "function" && _a || Object)
], DocCreateComponent.prototype, "form", void 0);
DocCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'doc-create',
        template: __webpack_require__("../../../../../src/app/doc/doc-create.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object])
], DocCreateComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=doc-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/doc/doc-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Doku bearbeiten</h1>\n\n<text-view [path]=\"'doc-edit'\"></text-view>\n\n<doc-form [model]=\"model\" [parent]=\"this\" [submitLabel]=\"submitLabel\"></doc-form>\n"

/***/ }),

/***/ "../../../../../src/app/doc/doc-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doc__ = __webpack_require__("../../../../../src/app/doc/doc.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doc_form_component__ = __webpack_require__("../../../../../src/app/doc/doc-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DocEditComponent = (function () {
    function DocEditComponent(route, olmService, alertService, router) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.id = -1;
        this.version = 'current';
        this.model = new __WEBPACK_IMPORTED_MODULE_2__doc__["a" /* Doc */]();
        this.submitLabel = '';
    }
    DocEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            _this.id = params['id'];
            _this.version = params['version'];
            if (_this.version == 'current') {
                _this.submitLabel = 'Änderungen speichern';
            }
            else {
                _this.submitLabel = 'Stand wiederherstellen / übernehmen';
            }
            return _this.olmService.apiRead('doc', params['id'], params['version']);
        })
            .subscribe(function (result) {
            _this.model = result;
        });
    };
    ;
    DocEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.olmService.apiUpdate('doc', this.model.id, this.model)
            .subscribe(function (result) {
            _this.router.navigate(['/admin']);
            _this.alertService.success("Daten gespeichert.");
        }, function (error) {
            _this.form.handleServerError(error);
        });
    };
    ;
    return DocEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__doc_form_component__["a" /* DocFormComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__doc_form_component__["a" /* DocFormComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__doc_form_component__["a" /* DocFormComponent */]) === "function" && _a || Object)
], DocEditComponent.prototype, "form", void 0);
DocEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'doc-edit',
        template: __webpack_require__("../../../../../src/app/doc/doc-edit.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object])
], DocEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=doc-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/doc/doc-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"parent.onSubmit()\" #form=\"ngForm\">\n\t<ul>\n\t\t<li>\n\t\t\t<label for=\"title\">Titel</label>\n\t\t\t<input\n\t\t\t\t\ttype=\"text\"\n\t\t \t\t\tid=\"title\"\n\t\t\t\t\tname=\"title\"\n\t\t \t\t\t[(ngModel)]=\"model.title\"\n\t\t \t\t\t#title=\"ngModel\"\n\t\t \t\t\tpattern=\"^[A-Za-z0-9 ÄÖÜäöüß_\\-:,\\.\\?\\/\\x27]+$\"\n\t\t\t\t\tmaxlength=\"100\"\n\t\t \t\t\tminlength=\"1\"\n\t\t\t\t\trequired />\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.title\">{{formErrors.title}}</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<label for=\"text\">Text</label>\n\t\t\t<textarea\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tid=\"text\"\n\t\t\t\t\tname=\"text\"\n\t\t \t\t\t[(ngModel)]=\"model.text\"\n\t\t \t\t\t#text=\"ngModel\"\n\t\t\t\t\trequired>\n\t\t\t</textarea>\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.text\">{{formErrors.text}}</div>\n\t\t</li>\n\t\t<li *ngIf=\"model.id\">\n\t\t\t<label for=\"order_num\">Position in der Liste (vor)</label>\n\t\t\t<input\n\t\t\t\t\ttype=\"number\"\n\t\t \t\t\tid=\"order_num\"\n\t\t\t\t\tname=\"order_num\"\n\t\t \t\t\t[(ngModel)]=\"model.order_num\"\n\t\t \t\t\t#order_num=\"ngModel\"\n\t\t\t\t\trequired />\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.order_num\">{{formErrors.order_num}}</div>\n\t\t</li>\n\t</ul>\n\t<menu class=\"bottom\">\n\t\t<a *ngIf=\"!model.id\" class=\"btn btn-back\" routerLink=\"/dashboard\">zurück</a>\t\n\t\t<button type=\"button\" *ngIf=\"model.id\" class=\"btn btn-back\" (click)=\"back()\">zurück</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit\" [disabled]=\"!form.form.valid\">{{submitLabel}}</button>\n\t\t<a *ngIf=\"parent.version != 'new'\" class=\"btn btn-delete\" [routerLink]=\"['/doc/delete/', model.id, parent.version]\">Doku löschen</a>\n\t</menu>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/doc/doc-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doc__ = __webpack_require__("../../../../../src/app/doc/doc.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_abstract_template_form__ = __webpack_require__("../../../../../src/app/core/abstract-template-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DocFormComponent = (function (_super) {
    __extends(DocFormComponent, _super);
    function DocFormComponent(alertService, location) {
        var _this = _super.call(this, alertService) || this;
        _this.alertService = alertService;
        _this.location = location;
        _this.formErrors = {
            'title': '',
            'text': '',
        };
        _this.validationMessages = {
            'title': {
                'required': 'Bitte gib einen Namen ein.',
                'pattern': 'Der Name darf nur aus Buchstaben, Zahlen, Leerzeichen und folgenden Sonderzeichen bestehen: "_", "-", ".", ":", ",", "\'", "/", "?"',
                'minlength': 'Der Name muss mindestend 1 Zeichen lang sein.',
                'maxlength': 'Der Name darf maximal 100 Zeichen lang sein.',
                'exists': 'Eine Protokollsammlung mit diesem Namen gibt es schon.'
            },
            'text': {
                'required': 'Das wäre sinnlos ;)',
            },
            'order_num': {
                'required': 'Gib an, wo das Item in der Reihenfolge stehen soll',
            }
        };
        return _this;
    }
    ;
    DocFormComponent.prototype.handleServerError = function (error) {
        (error === 'Item not changed') &&
            (this.setError('global', 'Die Daten waren nicht anders als zuvor. Hast Du etwas geändert? Dann ist ein Fehler aufgetreten.'));
    };
    ;
    DocFormComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return DocFormComponent;
}(__WEBPACK_IMPORTED_MODULE_3__core_abstract_template_form__["a" /* AbstractTemplateForm */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__doc__["a" /* Doc */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__doc__["a" /* Doc */]) === "function" && _a || Object)
], DocFormComponent.prototype, "model", void 0);
DocFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'doc-form',
        template: __webpack_require__("../../../../../src/app/doc/doc-form.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _c || Object])
], DocFormComponent);

var _a, _b, _c;
//# sourceMappingURL=doc-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/doc/doc-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doc_create_component__ = __webpack_require__("../../../../../src/app/doc/doc-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__doc_edit_component__ = __webpack_require__("../../../../../src/app/doc/doc-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__doc_view_component__ = __webpack_require__("../../../../../src/app/doc/doc-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DocRoutingModule = (function () {
    function DocRoutingModule() {
    }
    return DocRoutingModule;
}());
DocRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild([
                { path: 'doc/create', component: __WEBPACK_IMPORTED_MODULE_3__doc_create_component__["a" /* DocCreateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
                { path: 'doc/edit/:id/:version', component: __WEBPACK_IMPORTED_MODULE_4__doc_edit_component__["a" /* DocEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
                { path: 'doc/view/:id/:version', component: __WEBPACK_IMPORTED_MODULE_5__doc_view_component__["a" /* DocViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], DocRoutingModule);

//# sourceMappingURL=doc-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/doc/doc-view.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{item.title}}</h1>\n\n<text-view [path]=\"'doc-view'\"></text-view>\n\n<markdown-view [text]=\"item.text\"></markdown-view>\n\n<menu class=\"bottom\">\n\t<a class=\"btn btn-back\" [routerLink]=\"['/admin']\">zurück</a>\n\t<a class=\"btn btn-edit\" [routerLink]=\"['/doc/edit', item.id, 'current']\">bearbeiten</a>\n\t<a class=\"btn btn-delete\" [routerLink]=\"['/doc/delete', item.id, 'current', 'current']\">löschen</a>\n</menu>\n"

/***/ }),

/***/ "../../../../../src/app/doc/doc-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doc__ = __webpack_require__("../../../../../src/app/doc/doc.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DocViewComponent = (function () {
    function DocViewComponent(route, olmService, alertService, router) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.id = -1;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__doc__["a" /* Doc */]();
    }
    DocViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
        this.route.params
            .switchMap(function (params) {
            _this.id = params['id'];
            return _this.olmService.apiRead('doc', params['id'], 'current');
        })
            .subscribe(function (result) {
            _this.item = result;
        });
    };
    return DocViewComponent;
}());
DocViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'doc-view',
        template: __webpack_require__("../../../../../src/app/doc/doc-view.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_olm_service__["a" /* OlmService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], DocViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=doc-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/doc/doc.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doc_routing_module__ = __webpack_require__("../../../../../src/app/doc/doc-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doc_create_component__ = __webpack_require__("../../../../../src/app/doc/doc-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__doc_form_component__ = __webpack_require__("../../../../../src/app/doc/doc-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__doc_edit_component__ = __webpack_require__("../../../../../src/app/doc/doc-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__doc_view_component__ = __webpack_require__("../../../../../src/app/doc/doc-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DocModule = (function () {
    function DocModule() {
    }
    return DocModule;
}());
DocModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__doc_routing_module__["a" /* DocRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__doc_create_component__["a" /* DocCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_4__doc_form_component__["a" /* DocFormComponent */],
            __WEBPACK_IMPORTED_MODULE_5__doc_edit_component__["a" /* DocEditComponent */],
            __WEBPACK_IMPORTED_MODULE_6__doc_view_component__["a" /* DocViewComponent */],
        ],
    })
], DocModule);

//# sourceMappingURL=doc.module.js.map

/***/ }),

/***/ "../../../../../src/app/doc/doc.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Doc; });
var Doc = (function () {
    function Doc() {
    }
    return Doc;
}());

//# sourceMappingURL=doc.js.map

/***/ }),

/***/ "../../../../../src/app/exam/exam-create.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Protokollsammlung erstellen</h1>\n\n<text-view [path]=\"'exam-create'\"></text-view>\n\n<exam-form [model]=\"model\" [parent]=\"this\" [submitLabel]=\"submitLabel\"></exam-form>\n"

/***/ }),

/***/ "../../../../../src/app/exam/exam-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exam__ = __webpack_require__("../../../../../src/app/exam/exam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exam_form_component__ = __webpack_require__("../../../../../src/app/exam/exam-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ExamCreateComponent = (function () {
    function ExamCreateComponent(route, olmService, alertService, router) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__exam__["a" /* Exam */]();
        this.submitLabel = 'Protokollsammlung erschaffen';
        this.version = 'new';
    }
    ExamCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.olmService.apiCreate('exam', this.model)
            .subscribe(function (result) {
            _this.router.navigate(['/dashboard']);
            _this.alertService.success("Daten gespeichert.");
        }, function (error) {
            _this.form.handleServerError(error);
        });
    };
    ;
    return ExamCreateComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__exam_form_component__["a" /* ExamFormComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__exam_form_component__["a" /* ExamFormComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__exam_form_component__["a" /* ExamFormComponent */]) === "function" && _a || Object)
], ExamCreateComponent.prototype, "form", void 0);
ExamCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'exam-create',
        template: __webpack_require__("../../../../../src/app/exam/exam-create.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object])
], ExamCreateComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=exam-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/exam/exam-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Protokollsammlung bearbeiten</h1>\n\n<text-view [path]=\"'exam-edit'\"></text-view>\n\n<exam-form [model]=\"model\" [parent]=\"this\" [submitLabel]=\"submitLabel\"></exam-form>\n"

/***/ }),

/***/ "../../../../../src/app/exam/exam-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exam__ = __webpack_require__("../../../../../src/app/exam/exam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exam_form_component__ = __webpack_require__("../../../../../src/app/exam/exam-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ExamEditComponent = (function () {
    function ExamEditComponent(route, olmService, alertService, router) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.id = -1;
        this.version = 'current';
        this.model = new __WEBPACK_IMPORTED_MODULE_2__exam__["a" /* Exam */]();
        this.submitLabel = '';
    }
    ExamEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            _this.id = params['id'];
            _this.version = params['version'];
            if (_this.version == 'current') {
                _this.submitLabel = 'Änderungen speichern';
            }
            else {
                _this.submitLabel = 'Stand wiederherstellen / übernehmen';
            }
            return _this.olmService.apiRead('exam', params['id'], params['version']);
        })
            .subscribe(function (result) {
            _this.model = result;
        });
    };
    ;
    ExamEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.olmService.apiUpdate('exam', this.model.id, this.model)
            .subscribe(function (result) {
            _this.router.navigate(['/dashboard']);
            _this.alertService.success("Daten gespeichert.");
        }, function (error) {
            _this.form.handleServerError(error);
        });
    };
    ;
    return ExamEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__exam_form_component__["a" /* ExamFormComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__exam_form_component__["a" /* ExamFormComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__exam_form_component__["a" /* ExamFormComponent */]) === "function" && _a || Object)
], ExamEditComponent.prototype, "form", void 0);
ExamEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'exam-edit',
        template: __webpack_require__("../../../../../src/app/exam/exam-edit.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object])
], ExamEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=exam-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/exam/exam-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"parent.onSubmit()\" #form=\"ngForm\">\n\t<ul>\n\t\t<li>\n\t\t\t<label for=\"name\">Name</label>\n\t\t\t<input\n\t\t\t\t\ttype=\"text\"\n\t\t \t\t\tid=\"name\"\n\t\t\t\t\tname=\"name\"\n\t\t \t\t\t[(ngModel)]=\"model.name\"\n\t\t \t\t\t#name=\"ngModel\"\n\t\t \t\t\tpattern=\"^[A-Za-z0-9 ÄÖÜäöüß_\\-:,\\.\\/\\?\\x22]+$\"\n\t\t\t\t\tmaxlength=\"100\"\n\t\t \t\t\tminlength=\"1\"\n\t\t\t\t\trequired />\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.name\">{{formErrors.name}}</div>\n\t\t</li>\n\t\t<li *ngIf=\"model.id\">\n\t\t\t<label for=\"order_num\">Position in der Liste (vor)</label>\n\t\t\t<input\n\t\t\t\t\ttype=\"number\"\n\t\t \t\t\tid=\"order_num\"\n\t\t\t\t\tname=\"order_num\"\n\t\t \t\t\t[(ngModel)]=\"model.order_num\"\n\t\t \t\t\t#order_num=\"ngModel\"\n\t\t\t\t\trequired />\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.order_num\">{{formErrors.order_num}}</div>\n\t\t</li>\n\t</ul>\n\t<menu class=\"bottom\">\n\t\t<a *ngIf=\"!model.id\" class=\"btn btn-back\" routerLink=\"/dashboard\">zurück</a>\t\n\t\t<button type=\"button\" *ngIf=\"model.id\" class=\"btn btn-back\" (click)=\"back()\">zurück</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit\" [disabled]=\"!form.form.valid\">{{submitLabel}}</button>\n\t\t<a *ngIf=\"parent.version != 'new'\" class=\"btn btn-delete\" [routerLink]=\"['/exam/delete/', model.id, parent.version]\">Protokollsammlung löschen</a>\n\t</menu>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/exam/exam-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exam__ = __webpack_require__("../../../../../src/app/exam/exam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_abstract_template_form__ = __webpack_require__("../../../../../src/app/core/abstract-template-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExamFormComponent = (function (_super) {
    __extends(ExamFormComponent, _super);
    function ExamFormComponent(alertService, location) {
        var _this = _super.call(this, alertService) || this;
        _this.alertService = alertService;
        _this.location = location;
        _this.formErrors = {
            'name': '',
        };
        _this.validationMessages = {
            'name': {
                'required': 'Bitte gib einen Namen ein.',
                'pattern': 'Der Name darf nur aus Buchstaben, Zahlen, Leerzeichen und folgenden Sonderzeichen bestehen: "_", "-", ".", ":", ",", "\'", "/", "?"',
                'minlength': 'Der Name muss mindestend 1 Zeichen lang sein.',
                'maxlength': 'Der Name darf maximal 100 Zeichen lang sein.',
                'exists': 'Eine Protokollsammlung mit diesem Namen gibt es schon.'
            },
            'order_num': {
                'required': 'Gib an, wo das Item in der Reihenfolge stehen soll',
            },
        };
        return _this;
    }
    ;
    ExamFormComponent.prototype.handleServerError = function (error) {
        (error === 'Item not changed') &&
            (this.setError('global', 'Die Daten waren nicht anders als zuvor. Hast Du etwas geändert? Dann ist ein Fehler aufgetreten.'));
        (error === 'Exam exists') &&
            (this.setError('name', 'exists'));
    };
    ;
    ExamFormComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return ExamFormComponent;
}(__WEBPACK_IMPORTED_MODULE_3__core_abstract_template_form__["a" /* AbstractTemplateForm */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__exam__["a" /* Exam */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__exam__["a" /* Exam */]) === "function" && _a || Object)
], ExamFormComponent.prototype, "model", void 0);
ExamFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'exam-form',
        template: __webpack_require__("../../../../../src/app/exam/exam-form.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _c || Object])
], ExamFormComponent);

var _a, _b, _c;
//# sourceMappingURL=exam-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/exam/exam-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Protokolle</h1>\n\n<ul class=\"items\">\n\t<li *ngFor=\"let exam of exams\">\n\t\t<h2>\n\t\t\t{{exam.name}}\n\t\t\t<ng-container *ngIf=\"auth.admin\">({{exam.order_num}})</ng-container>\n\t\t</h2>\n\t\t<menu class=\"assoc\">\n\t\t\t<a class=\"btn btn-primary\" [routerLink]=\"['/protocolls/view', exam.id]\">ansehen</a>\n\t\t\t<ng-container *ngIf=\"auth.admin\">\n\t\t\t\t<a class=\"btn btn-edit\" [routerLink]=\"['/exam/edit', exam.id, 'current']\">bearbeiten</a>\n\t\t\t\t<a class=\"btn btn-delete\" [routerLink]=\"['/exam/delete', exam.id, 'current']\">löschen</a>\n\t\t\t\t<a class=\"btn btn-primary\" [routerLink]=\"['/exam/history', exam.id]\">History ansehen</a>\n\t\t\t</ng-container>\n\t\t</menu>\n\t</li>\n</ul>\n\n<menu class=\"bottom\">\n\t<a *ngIf=\"auth.admin\" class=\"btn btn-create\" routerLink=\"/exam/create\">Neue Protokollsammlung anlegen</a>\n\t<a *ngIf=\"auth.admin\" class=\"btn btn-primary\" routerLink=\"/exam/deleted\">Gelöschte Protokollsammlungen ansehen</a>\n</menu>"

/***/ }),

/***/ "../../../../../src/app/exam/exam-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExamListComponent = (function () {
    function ExamListComponent(olmService) {
        this.olmService = olmService;
    }
    ;
    ExamListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getExams();
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
    };
    ;
    ExamListComponent.prototype.getExams = function () {
        var _this = this;
        this.olmService.apiReadAll('exam').subscribe(function (response) { return _this.exams = response; });
    };
    ;
    return ExamListComponent;
}());
ExamListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'exam-list',
        template: __webpack_require__("../../../../../src/app/exam/exam-list.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_olm_service__["a" /* OlmService */]) === "function" && _a || Object])
], ExamListComponent);

var _a;
//# sourceMappingURL=exam-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/exam/exam-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exam_create_component__ = __webpack_require__("../../../../../src/app/exam/exam-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exam_edit_component__ = __webpack_require__("../../../../../src/app/exam/exam-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exam_list_component__ = __webpack_require__("../../../../../src/app/exam/exam-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ExamRoutingModule = (function () {
    function ExamRoutingModule() {
    }
    return ExamRoutingModule;
}());
ExamRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild([
                { path: 'exam', component: __WEBPACK_IMPORTED_MODULE_5__exam_list_component__["a" /* ExamListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
                { path: 'exam/create', component: __WEBPACK_IMPORTED_MODULE_3__exam_create_component__["a" /* ExamCreateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
                { path: 'exam/edit/:id/:version', component: __WEBPACK_IMPORTED_MODULE_4__exam_edit_component__["a" /* ExamEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], ExamRoutingModule);

//# sourceMappingURL=exam-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/exam/exam.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exam_routing_module__ = __webpack_require__("../../../../../src/app/exam/exam-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exam_create_component__ = __webpack_require__("../../../../../src/app/exam/exam-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exam_form_component__ = __webpack_require__("../../../../../src/app/exam/exam-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exam_edit_component__ = __webpack_require__("../../../../../src/app/exam/exam-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__exam_list_component__ = __webpack_require__("../../../../../src/app/exam/exam-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ExamModule = (function () {
    function ExamModule() {
    }
    return ExamModule;
}());
ExamModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__exam_routing_module__["a" /* ExamRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__exam_create_component__["a" /* ExamCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_4__exam_form_component__["a" /* ExamFormComponent */],
            __WEBPACK_IMPORTED_MODULE_5__exam_edit_component__["a" /* ExamEditComponent */],
            __WEBPACK_IMPORTED_MODULE_6__exam_list_component__["a" /* ExamListComponent */],
        ],
    })
], ExamModule);

//# sourceMappingURL=exam.module.js.map

/***/ }),

/***/ "../../../../../src/app/exam/exam.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exam; });
var Exam = (function () {
    function Exam() {
    }
    return Exam;
}());

//# sourceMappingURL=exam.js.map

/***/ }),

/***/ "../../../../../src/app/mcq/mcq-create.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Frage erstellen</h1>\n\n<text-view [path]=\"'mcq-create'\"></text-view>\n\n<mcq-form [model]=\"model\" [parent]=\"this\" [submitLabel]=\"submitLabel\"></mcq-form>\n"

/***/ }),

/***/ "../../../../../src/app/mcq/mcq-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return McqCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mcq__ = __webpack_require__("../../../../../src/app/mcq/mcq.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mcq_form_component__ = __webpack_require__("../../../../../src/app/mcq/mcq-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var McqCreateComponent = (function () {
    function McqCreateComponent(route, olmService, alertService, router) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.id = -1;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__mcq__["a" /* Mcq */]();
        this.submitLabel = 'Frage erschaffen';
        this.auth = {};
        this.version = 'new';
    }
    McqCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
        this.route.params
            .subscribe(function (params) {
            _this.id = params['moduleid'];
        });
    };
    McqCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.model['module'] = this.id;
        this.olmService.apiCreate('mcq', this.model)
            .subscribe(function (result) {
            _this.router.navigate(['/mcq/view', result.id]);
            _this.alertService.success("Daten gespeichert.");
        }, function (error) {
            _this.form.handleServerError(error);
        });
    };
    ;
    return McqCreateComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__mcq_form_component__["a" /* McqFormComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__mcq_form_component__["a" /* McqFormComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__mcq_form_component__["a" /* McqFormComponent */]) === "function" && _a || Object)
], McqCreateComponent.prototype, "form", void 0);
McqCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mcq-create',
        template: __webpack_require__("../../../../../src/app/mcq/mcq-create.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object])
], McqCreateComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=mcq-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/mcq/mcq-display.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"item\">\n\t<menu class=\"top\">\n\t\t<button [ngClass]=\"{'btn-rated-negative':item.rated<0}\" class=\"btn btn-rate\"(click)=\"rate(item.rated === -1 ? 0 : -1)\">👎</button>\n\t\t<strong>{{item.rating}}</strong>\n\t\t<button [ngClass]=\"{'btn-rated-positive':item.rated>0}\" class=\"btn btn-rate\" (click)=\"rate(item.rated === 1 ? 0 : 1)\">👍</button>\n\t\t<a class=\"btn btn-primary\" (click)=\"discussion=!discussion\">kommentieren</a>\n\t\t<a class=\"btn btn-edit\" [routerLink]=\"['/mcq/edit', item.id, 'current']\">bearbeiten</a>\n\t\t<a *ngIf=\"auth.admin\" class=\"btn btn-primary\"[routerLink]=\"['/mcq/history', item.id]\">History</a>\n\t\t<a class=\"btn btn-delete\" [routerLink]=\"['/mcq/delete', item.id, 'current']\">löschen</a>\n\t</menu>\n\t<div>{{item.question}}</div>\n\t<ol>\n\t\t<li *ngFor=\"let answer of item.answers; index as i\"\n\t\t\t\t[ngClass]=\"{ 'answr-choice': !(choice>=0), 'answr-solution': choice >= 0 && i === item.solution, 'answr-correct': i === item.solution, 'answr-error': choice === i && item.solution !== i}\"\n\t\t\t\t(click)=\"choice=i\">\n\t\t\t\t{{answer}}\n\t\t\t</li>\n\t</ol>\n\t<p class=\"msg msg-error\" *ngIf=\"item.solution<0\">Die Antwort ist noch nicht bekannt.</p>\n\t<ng-container *ngIf=discussion>\n\t\t<h2>Diskussion</h2>\n\t\t<form (ngSubmit)=\"onSubmit()\" #form=\"ngForm\">\n\t\t\t<ng-container *ngIf=\"!auth.admin\">\n\t\t\t\t<markdown-view [text]=\"item.discussion\"></markdown-view>\n\t\t\t</ng-container>\n\t\t\t<ul>\n\t\t\t\t<li>\n\t\t\t\t\t<label *ngIf=\"auth.admin\" for=\"discussion\">Verlauf</label>\n\t\t\t\t\t<label *ngIf=\"!auth.admin\" for=\"discussion\">Dein Beitrag</label>\n\t\t\t\t\t<textarea\n\t\t\t\t\t\t\trows=\"3\"\n\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\tid=\"discussion\"\n\t\t\t\t\t\t\tname=\"discussion\"\n\t\t\t\t\t\t\t[(ngModel)]=\"model.discussion\"\n\t\t\t\t\t\t\t#discussion=\"ngModel\"\n\t\t\t\t\t\t\trequired></textarea>\n\t\t\t\t\t<div *ngIf=\"formErrors.code\">{{formErrors.code}}</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<menu class=\"bottom\">\n\t\t\t\t<!-- <button *ngIf=\"discussion\" class=\"btn btn-back\" type=\"button\" (click)=\"back()\">zurück</button> -->\n\t\t\t\t<button class=\"btn btn-submit\" type=\"submit\" [disabled]=\"!form.form.valid\">abschicken</button>\n\t\t\t</menu>\n\t\t</form>\n\t</ng-container>\n</ng-container>\n"

/***/ }),

/***/ "../../../../../src/app/mcq/mcq-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return McqDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mcq__ = __webpack_require__("../../../../../src/app/mcq/mcq.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var McqDisplayComponent = (function () {
    function McqDisplayComponent(olmService, alertService, location) {
        this.olmService = olmService;
        this.alertService = alertService;
        this.location = location;
        this.model = {};
        this.auth = { admin: 0 };
        this.formErrors = {
            'discussion': '',
        };
        this.validationMessages = {
            'discussion': {},
        };
    }
    McqDisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) {
            _this.auth = auth;
            if (_this.auth.admin) {
                _this.model.discussion = _this.item.discussion;
            }
            else {
                _this.model.discussion = '';
            }
        });
    };
    ;
    McqDisplayComponent.prototype.ngOnChanges = function () {
    };
    ;
    McqDisplayComponent.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    ;
    McqDisplayComponent.prototype.formChanged = function () {
        var _this = this;
        if (this.currentForm === this.form) {
            return;
        }
        this.form = this.currentForm;
        if (this.form) {
            this.form.valueChanges
                .subscribe(function (data) { return _this.onValueChanged(data); });
        }
    };
    ;
    McqDisplayComponent.prototype.onValueChanged = function (data) {
        if (!this.form) {
            return;
        }
        var form = this.form.form;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    ;
    McqDisplayComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.model.discussion == '') {
            return;
        }
        var discussion = '';
        if (this.auth.admin) {
            discussion = this.model.discussion;
        }
        else {
            discussion = this.item.discussion.concat("\n\n**", this.auth.name, "**:  \n", this.model.discussion);
        }
        this.olmService.apiUpdate('mcq', this.item.id, {
            id: this.item.id,
            discussion: discussion,
        })
            .subscribe(function (result) {
            _this.item.discussion = result.discussion;
            if (_this.auth.admin) {
                _this.model.discussion = result.discussion;
            }
            else {
                _this.model.discussion = '';
            }
        });
    };
    ;
    McqDisplayComponent.prototype.rate = function (rating) {
        var _this = this;
        this.olmService.apiUpdate('mcq', this.item.id, {
            id: this.item.id,
            rated: rating,
        })
            .subscribe(function (result) {
            _this.item.rated = result.rated;
            _this.item.rating = result.rating;
        });
    };
    ;
    McqDisplayComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return McqDisplayComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__mcq__["a" /* Mcq */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__mcq__["a" /* Mcq */]) === "function" && _a || Object)
], McqDisplayComponent.prototype, "item", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], McqDisplayComponent.prototype, "discussion", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('form'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _b || Object)
], McqDisplayComponent.prototype, "currentForm", void 0);
McqDisplayComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mcq-display',
        template: __webpack_require__("../../../../../src/app/mcq/mcq-display.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _e || Object])
], McqDisplayComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=mcq-display.component.js.map

/***/ }),

/***/ "../../../../../src/app/mcq/mcq-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Frage bearbeiten</h1>\n\n<text-view [path]=\"'mcq-edit'\"></text-view>\n\n<mcq-form [model]=\"model\" [parent]=\"this\" [submitLabel]=\"submitLabel\"></mcq-form>\n"

/***/ }),

/***/ "../../../../../src/app/mcq/mcq-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return McqEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mcq__ = __webpack_require__("../../../../../src/app/mcq/mcq.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mcq_form_component__ = __webpack_require__("../../../../../src/app/mcq/mcq-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var McqEditComponent = (function () {
    function McqEditComponent(route, olmService, alertService, router, location) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.location = location;
        this.id = -1;
        this.version = 'current';
        this.model = new __WEBPACK_IMPORTED_MODULE_3__mcq__["a" /* Mcq */]();
        this.submitLabel = '';
        this.auth = {};
    }
    McqEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
        this.route.params
            .switchMap(function (params) {
            _this.id = params['id'];
            _this.version = params['version'];
            if (_this.version == 'current') {
                _this.submitLabel = 'Änderungen speichern';
            }
            else {
                _this.submitLabel = 'Stand wiederherstellen / übernehmen';
            }
            return _this.olmService.apiRead('mcq', params['id'], params['version']);
        })
            .subscribe(function (result) {
            _this.model = result;
        });
    };
    McqEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.olmService.apiUpdate('mcq', this.model.id, this.model)
            .subscribe(function (result) {
            _this.router.navigate(['/mcq/view/', result.id]);
            _this.alertService.success("Daten gespeichert.");
        }, function (error) {
            _this.form.handleServerError(error);
        });
    };
    ;
    McqEditComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return McqEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__mcq_form_component__["a" /* McqFormComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__mcq_form_component__["a" /* McqFormComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__mcq_form_component__["a" /* McqFormComponent */]) === "function" && _a || Object)
], McqEditComponent.prototype, "form", void 0);
McqEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mcq-edit',
        template: __webpack_require__("../../../../../src/app/mcq/mcq-edit.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_olm_service__["a" /* OlmService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _f || Object])
], McqEditComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=mcq-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/mcq/mcq-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #form=\"ngForm\">\n\t<ul>\n\t\t<li>\n\t\t\t<label for=\"question\">Frage</label>\n\t\t\t<textarea\n\t\t\t\t\ttype=\"text\"\n\t\t \t\t\tid=\"question\"\n\t\t\t\t\tname=\"question\"\n\t\t \t\t\t[(ngModel)]=\"model.question\"\n\t\t \t\t\t#question=\"ngModel\"\n\t\t\t\t\trequired>\n\t\t\t</textarea>\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.question\">{{formErrors.question}}</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<label for=\"answers\">Antworten</label>\n\t\t\t<div *ngFor=\"let answer of model.answers; index as i; trackBy: trackByIndex\" class=\"input-group\">\n\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t<input \n\t\t\t\t\t\ttype=\"radio\"\n\t\t\t\t\t\t[(ngModel)]=\"model.solution\"\n\t\t\t\t\t\tname=\"solution\"\n\t\t\t\t\t\t[value]=\"i\"\n\t\t\t\t\t/>\n\t\t\t\t</span>\n\t\t\t\t<input\n\t\t\t\t\ttype=\"text\"\n\t\t \t\t\tid=\"answer_{{i}}\"\n\t\t\t\t\tname=\"answer_{{i}}\"\n\t\t \t\t\t[(ngModel)]=\"model.answers[i]\"\n\t\t\t\t\tminlength=\"1\"\n\t\t\t\t\tplaceholder=\"Antwort eingeben..\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\trequired\n\t\t\t\t\t/>\n\t\t\t\t<span class=\"btn btn-delete\" (click)=\"removeAnswer(i)\">x</span>\n\t\t\t</div>\n\t\t\t<div class=\"input-group\">\n\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t<input \n\t\t\t\t\t\ttype=\"radio\"\n\t\t\t\t\t\t[(ngModel)]=\"model.solution\"\n\t\t\t\t\t\tname=\"solution_radio\"\n\t\t\t\t\t\t[value]=\"-1\"\n\t\t\t\t\t\tid=\"unknown-answer\"\n\t\t\t\t\t/>\n\t\t\t\t\t<label for=\"unknown-answer\">Ich kenne die Antwort nicht</label>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<span class=\"btn btn-primary\" (click)=\"addAnswer()\">Antwort hinzufügen</span>\n\t\t</li>\n\t\t<li>\n\t\t\t<label for=\"generation\">Generation</label>\n\t\t\t<select\n\t\t\t\t\t*ngIf=\"generationCats\"\n\t\t \t\t\tid=\"generation\"\n\t\t\t\t\tname=\"generation\"\n\t\t \t\t\t[(ngModel)]=\"model.generation\"\n\t\t \t\t\t#generation=\"ngModel\"\n\t\t\t\t\trequired>\n\t\t\t\t<option *ngFor=\"let generationCat of generationCats\" [ngValue]=\"generationCat.id\">\n\t\t\t\t\t{{generationCat.name}}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.generation\">{{formErrors.generation}}</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<label for=\"original\">Prüfungsfrage</label>\n\t\t\t<select\n\t\t \t\t\tid=\"original\"\n\t\t\t\t\tname=\"original\"\n\t\t \t\t\t[(ngModel)]=\"model.original\"\n\t\t \t\t\t#original=\"ngModel\"\n\t\t\t\t\trequired>\n\t\t\t\t<option *ngFor=\"let originalCat of originalCats\" [ngValue]=\"originalCat.value\">\n\t\t\t\t\t{{originalCat.label}}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.original\">{{formErrors.original}}</div>\n\t\t</li>\n\t\t<li *ngIf=\"parent.auth.admin\">\n\t\t\t<label for=\"discussion\">Discussion</label>\n\t\t\t<textarea\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tid=\"discussion\"\n\t\t\t\t\tname=\"discussion\"\n\t\t \t\t\t[(ngModel)]=\"model.discussion\"\n\t\t \t\t\t#discussion=\"ngModel\"\n\t\t\t\t\t>\n\t\t\t</textarea>\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.discussion\">{{formErrors.discussion}}</div>\n\t\t</li>\n\t</ul>\n\n\t<menu class=\"bottom\">\n\t\t<button type=\"button\" class=\"btn btn-back\" (click)=\"back()\">zurück</button>\n\t\t<button class=\"btn btn-submit\" type=\"submit\" [disabled]=\"!form.form.valid\">{{submitLabel}}</button>\n\t\t<a *ngIf=\"parent.version != 'new'\" class=\"btn btn-delete\" [routerLink]=\"['/mcq/delete/', model.id, parent.version]\">Frage löschen</a>\n\t</menu>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/mcq/mcq-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return McqFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mcq__ = __webpack_require__("../../../../../src/app/mcq/mcq.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_abstract_template_form__ = __webpack_require__("../../../../../src/app/core/abstract-template-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var McqFormComponent = (function (_super) {
    __extends(McqFormComponent, _super);
    function McqFormComponent(alertService, olmService, location) {
        var _this = _super.call(this, alertService) || this;
        _this.alertService = alertService;
        _this.olmService = olmService;
        _this.location = location;
        _this.originalCats = [
            { 'value': 1, 'label': 'Prüfungsfrage' },
            { 'value': 0, 'label': 'selbst erstellt (und damit besser ;) )' },
        ];
        _this.formErrors = {
            'question': '',
            'generation': '',
            'original': '',
            'discussion': '',
        };
        _this.validationMessages = {
            'question': {
                'required': 'Bitte gib eine Frage ein.',
            },
            'original': {
                'required': 'Bitte auswählen',
            },
        };
        return _this;
    }
    ;
    McqFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.apiReadAll('generation')
            .subscribe(function (result) {
            _this.generationCats = result;
            _this.model.generation = _this.model.generation ? _this.model.generation : result[0].id;
        });
    };
    McqFormComponent.prototype.handleServerError = function (error) {
        (error === 'Item not changed') &&
            (this.setError('global', 'Die Daten waren nicht anders als zuvor. Hast Du etwas geändert? Dann ist ein Fehler aufgetreten.'));
        (error === 'Question missing') &&
            (this.setError('question', 'required'));
        (error === 'Answers missing') &&
            (this.setError('global', 'Ich kann keine Antworten entdecken.'));
    };
    ;
    McqFormComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    McqFormComponent.prototype.onSubmit = function () {
        this.model.raw = this.model.question + '\n';
        for (var i = 0; i < this.model.answers.length; i++) {
            this.model.raw += (this.model.solution === i ? '* ' : '- ') + this.model.answers[i] + '\n';
        }
        this.parent.onSubmit();
    };
    McqFormComponent.prototype.addAnswer = function () {
        this.model.answers.push('');
    };
    ;
    McqFormComponent.prototype.removeAnswer = function (i) {
        this.model.answers.splice(i, 1);
    };
    ;
    McqFormComponent.prototype.trackByIndex = function (index, item) {
        return index;
    };
    ;
    return McqFormComponent;
}(__WEBPACK_IMPORTED_MODULE_3__core_abstract_template_form__["a" /* AbstractTemplateForm */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__mcq__["a" /* Mcq */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__mcq__["a" /* Mcq */]) === "function" && _a || Object)
], McqFormComponent.prototype, "model", void 0);
McqFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mcq-form',
        template: __webpack_require__("../../../../../src/app/mcq/mcq-form.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _d || Object])
], McqFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=mcq-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/mcq/mcq-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return McqRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mcq_create_component__ = __webpack_require__("../../../../../src/app/mcq/mcq-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mcq_edit_component__ = __webpack_require__("../../../../../src/app/mcq/mcq-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mcq_view_component__ = __webpack_require__("../../../../../src/app/mcq/mcq-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mcqs_view_component__ = __webpack_require__("../../../../../src/app/mcq/mcqs-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var McqRoutingModule = (function () {
    function McqRoutingModule() {
    }
    return McqRoutingModule;
}());
McqRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild([
                { path: 'mcq/create/:moduleid', component: __WEBPACK_IMPORTED_MODULE_3__mcq_create_component__["a" /* McqCreateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
                { path: 'mcq/edit/:id/:version', component: __WEBPACK_IMPORTED_MODULE_4__mcq_edit_component__["a" /* McqEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
                { path: 'mcq/view/:id', component: __WEBPACK_IMPORTED_MODULE_5__mcq_view_component__["a" /* McqViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
                { path: 'mcqs/view/:module/:rating/:generation/:original/:number', component: __WEBPACK_IMPORTED_MODULE_6__mcqs_view_component__["a" /* McqsViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], McqRoutingModule);

//# sourceMappingURL=mcq-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/mcq/mcq-view.component.html":
/***/ (function(module, exports) {

module.exports = "<text-view [path]=\"'mcq-view'\"></text-view>\n\n<mcq-display *ngIf=\"item\" [item]=\"item\" [discussion]=\"discussion\"></mcq-display>\n"

/***/ }),

/***/ "../../../../../src/app/mcq/mcq-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return McqViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mcq__ = __webpack_require__("../../../../../src/app/mcq/mcq.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var McqViewComponent = (function () {
    function McqViewComponent(route, olmService, alertService, router, location) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.location = location;
        this.id = -1;
        this.item = new __WEBPACK_IMPORTED_MODULE_3__mcq__["a" /* Mcq */]();
        this.discussion = true;
    }
    McqViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
        this.route.params
            .switchMap(function (params) {
            _this.id = params['id'];
            return _this.olmService.apiRead('mcq', params['id'], 'current');
        })
            .subscribe(function (result) {
            _this.item = result;
        });
    };
    ;
    McqViewComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return McqViewComponent;
}());
McqViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mcq-view',
        template: __webpack_require__("../../../../../src/app/mcq/mcq-view.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _e || Object])
], McqViewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=mcq-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/mcq/mcq.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return McqModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mcq_routing_module__ = __webpack_require__("../../../../../src/app/mcq/mcq-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mcq_create_component__ = __webpack_require__("../../../../../src/app/mcq/mcq-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mcq_form_component__ = __webpack_require__("../../../../../src/app/mcq/mcq-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mcq_edit_component__ = __webpack_require__("../../../../../src/app/mcq/mcq-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mcq_display_component__ = __webpack_require__("../../../../../src/app/mcq/mcq-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mcq_view_component__ = __webpack_require__("../../../../../src/app/mcq/mcq-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mcqs_view_component__ = __webpack_require__("../../../../../src/app/mcq/mcqs-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var McqModule = (function () {
    function McqModule() {
    }
    return McqModule;
}());
McqModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__mcq_routing_module__["a" /* McqRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__mcq_create_component__["a" /* McqCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_4__mcq_form_component__["a" /* McqFormComponent */],
            __WEBPACK_IMPORTED_MODULE_5__mcq_edit_component__["a" /* McqEditComponent */],
            __WEBPACK_IMPORTED_MODULE_6__mcq_display_component__["a" /* McqDisplayComponent */],
            __WEBPACK_IMPORTED_MODULE_7__mcq_view_component__["a" /* McqViewComponent */],
            __WEBPACK_IMPORTED_MODULE_8__mcqs_view_component__["a" /* McqsViewComponent */],
        ],
    })
], McqModule);

//# sourceMappingURL=mcq.module.js.map

/***/ }),

/***/ "../../../../../src/app/mcq/mcq.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mcq; });
var Mcq = (function () {
    function Mcq() {
        this.original = 1;
        this.answers = Array();
    }
    return Mcq;
}());

//# sourceMappingURL=mcq.js.map

/***/ }),

/***/ "../../../../../src/app/mcq/mcqs-view.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>MC-Fragen</h1>\n\n<text-view [path]=\"'mcqs-view'\"></text-view>\n<menu class=\"assoc\">\n\t<a class=\"btn btn-primary\" [routerLink]=\"['/mcqs', 'view', module, '3', 'all', '2', '0']\">alle</a>\n\t<a class=\"btn btn-primary\" [routerLink]=\"['/mcqs', 'view', module, '1', 'all', '2', '0']\">gute</a>\n\t<a class=\"btn btn-primary\" [routerLink]=\"['/mcqs', 'view', module, '0', 'all', '2', '0']\">schlechte</a>\n\t<a class=\"btn btn-primary\" [routerLink]=\"['/mcqs', 'view', module, '2', 'all', '2', '0']\">unbewertete</a>\n\t</menu>\n<ul>\n\t<li *ngFor=\"let item of items\">\n\t\t<mcq-display *ngIf=\"item\" [item]=\"item\" [discussion]=\"discussion\"></mcq-display>\n\t</li>\n</ul>\n\n<menu class=\"bottom\">\n\t<a class=\"btn btn-back\" routerLink=\"/module\">zurück</a>\n\t<a class=\"btn btn-create\" [routerLink]=\"['/mcq/create/', module]\">MC-Frage erschaffen</a>\n</menu>\n"

/***/ }),

/***/ "../../../../../src/app/mcq/mcqs-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return McqsViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var McqsViewComponent = (function () {
    function McqsViewComponent(route, olmService, alertService, router, location) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.location = location;
        this.module = -1;
        this.rating = -1;
        this.generation = 'all';
        this.original = 0;
        this.number = 0;
        this.items = [];
        this.auth = {};
        this.discussion = false;
    }
    McqsViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
        this.route.params
            .switchMap(function (params) {
            _this.module = params['module'];
            _this.rating = params['rating'];
            _this.generation = params['generation'];
            _this.original = params['original'];
            _this.number = params['number'];
            return _this.olmService.apiReadMcqs(_this.module, _this.rating, _this.generation, _this.original, _this.number);
        })
            .subscribe(function (result) {
            _this.items = result;
        });
    };
    return McqsViewComponent;
}());
McqsViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mcqs-view',
        template: __webpack_require__("../../../../../src/app/mcq/mcqs-view.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_olm_service__["a" /* OlmService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _e || Object])
], McqsViewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=mcqs-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/module/module-create.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>MC-Sammlung erstellen</h1>\n\n<text-view [path]=\"'module-create'\"></text-view>\n\n<module-form [model]=\"model\" [parent]=\"this\" [parent]=\"this\" [submitLabel]=\"submitLabel\"></module-form>\n"

/***/ }),

/***/ "../../../../../src/app/module/module-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module__ = __webpack_require__("../../../../../src/app/module/module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_form_component__ = __webpack_require__("../../../../../src/app/module/module-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ModuleCreateComponent = (function () {
    function ModuleCreateComponent(route, olmService, alertService, router) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__module__["a" /* Module */]();
        this.submitLabel = 'MC-Sammlung erschaffen';
        this.version = 'new';
    }
    ModuleCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.olmService.apiCreate('module', this.model)
            .subscribe(function (result) {
            _this.router.navigate(['/dashboard']);
            _this.alertService.success("Daten gespeichert.");
        }, function (error) {
            _this.form.handleServerError(error);
        });
    };
    ;
    return ModuleCreateComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__module_form_component__["a" /* ModuleFormComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__module_form_component__["a" /* ModuleFormComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__module_form_component__["a" /* ModuleFormComponent */]) === "function" && _a || Object)
], ModuleCreateComponent.prototype, "form", void 0);
ModuleCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'module-create',
        template: __webpack_require__("../../../../../src/app/module/module-create.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object])
], ModuleCreateComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=module-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/module/module-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>MC-Sammlung bearbeiten</h1>\n\n<text-view [path]=\"'module-edit'\"></text-view>\n\n<module-form [model]=\"model\" [parent]=\"this\" [parent]=\"this\" [submitLabel]=\"submitLabel\"></module-form>\n"

/***/ }),

/***/ "../../../../../src/app/module/module-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module__ = __webpack_require__("../../../../../src/app/module/module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__module_form_component__ = __webpack_require__("../../../../../src/app/module/module-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ModuleEditComponent = (function () {
    function ModuleEditComponent(route, olmService, alertService, router, location) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.location = location;
        this.id = -1;
        this.version = 'current';
        this.model = new __WEBPACK_IMPORTED_MODULE_3__module__["a" /* Module */]();
        this.submitLabel = '';
    }
    ModuleEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            _this.id = params['id'];
            _this.version = params['version'];
            if (_this.version == 'current') {
                _this.submitLabel = 'Änderungen speichern';
            }
            else {
                _this.submitLabel = 'Stand wiederherstellen / übernehmen';
            }
            return _this.olmService.apiRead('module', params['id'], params['version']);
        })
            .subscribe(function (result) {
            _this.model = result;
        });
    };
    ModuleEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.olmService.apiUpdate('module', this.model.id, this.model)
            .subscribe(function (result) {
            _this.router.navigate(['/dashboard']);
            _this.alertService.success("Daten gespeichert.");
        }, function (error) {
            _this.form.handleServerError(error);
        });
    };
    ;
    ModuleEditComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return ModuleEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__module_form_component__["a" /* ModuleFormComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__module_form_component__["a" /* ModuleFormComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__module_form_component__["a" /* ModuleFormComponent */]) === "function" && _a || Object)
], ModuleEditComponent.prototype, "form", void 0);
ModuleEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'module-edit',
        template: __webpack_require__("../../../../../src/app/module/module-edit.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_olm_service__["a" /* OlmService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _f || Object])
], ModuleEditComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=module-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/module/module-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"parent.onSubmit()\" #form=\"ngForm\">\n\t<ul>\n\t\t<li>\n\t\t\t<label for=\"name\">Name</label>\n\t\t\t<input\n\t\t\t\t\ttype=\"text\"\n\t\t \t\t\tid=\"name\"\n\t\t\t\t\tname=\"name\"\n\t\t \t\t\t[(ngModel)]=\"model.name\"\n\t\t \t\t\t#name=\"ngModel\"\n\t\t \t\t\tpattern=\"^[A-Za-z0-9 ÄÖÜäöüß_\\-:,\\.]+$\"\n\t\t\t\t\tmaxlength=\"100\"\n\t\t \t\t\tminlength=\"1\"\n\t\t\t\t\trequired />\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.name\">{{formErrors.name}}</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<label for=\"code\">Code</label>\n\t\t\t<input\n\t\t\t\t\ttype=\"text\"\n\t\t \t\t\tid=\"code\"\n\t\t\t\t\tname=\"code\"\n\t\t \t\t\t[(ngModel)]=\"model.code\"\n\t\t \t\t\t#code=\"ngModel\"\n\t\t \t\t\tpattern=\"^[A-Z][0-9]{1,9}$\"\n\t\t\t\t\tmaxlength=\"10\"\n\t\t \t\t\tminlength=\"2\"\n\t\t\t\t\trequired />\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.code\">{{formErrors.code}}</div>\n\t\t</li>\n\t\t<li *ngIf=\"model.id\">\n\t\t\t<label for=\"order_num\">Position in der Liste (vor)</label>\n\t\t\t<input\n\t\t\t\t\ttype=\"number\"\n\t\t \t\t\tid=\"order_num\"\n\t\t\t\t\tname=\"order_num\"\n\t\t \t\t\t[(ngModel)]=\"model.order_num\"\n\t\t \t\t\t#order_num=\"ngModel\"\n\t\t\t\t\trequired />\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.order_num\">{{formErrors.order_num}}</div>\n\t\t</li>\n\t</ul>\n\n\t<menu class=\"bottom\">\n\t\t<a *ngIf=\"!model.id\" class=\"btn btn-back\" routerLink=\"/dashboard\">zurück</a>\t\n\t\t<button type=\"button\" *ngIf=\"model.id\" class=\"btn btn-back\" (click)=\"back()\">zurück</button>\n\t\t<button class=\"btn btn-submit\" type=\"submit\" [disabled]=\"!form.form.valid\">{{submitLabel}}</button>\n\t\t<a *ngIf=\"parent.version != 'new'\" class=\"btn btn-delete\" [routerLink]=\"['/module/delete/', model.id, parent.version]\">MC-Sammlung löschen</a>\n\t</menu>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/module/module-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module__ = __webpack_require__("../../../../../src/app/module/module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_abstract_template_form__ = __webpack_require__("../../../../../src/app/core/abstract-template-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModuleFormComponent = (function (_super) {
    __extends(ModuleFormComponent, _super);
    function ModuleFormComponent(alertService, location) {
        var _this = _super.call(this, alertService) || this;
        _this.alertService = alertService;
        _this.location = location;
        _this.formErrors = {
            'name': '',
            'code': '',
        };
        _this.validationMessages = {
            'name': {
                'required': 'Bitte gib einen Namen ein.',
                'pattern': 'Der Name darf nur aus Buchstaben, Zahlen, Leerzeichen und folgenden Sonderzeichen bestehen: "_", "-", ".", ":", ","',
                'minlength': 'Der Name muss mindestend 1 Zeichen lang sein.',
                'maxlength': 'Der Name darf maximal 100 Zeichen lang sein.',
                'exists': 'Eine MC-Sammlung mit diesem Name gibt es schon.',
            },
            'code': {
                'required': 'Bitte gib eine Kurzform für die MC-Sammlung ein, z.B. "M02".',
                'pattern': 'MC-Sammlungscodes beginnen mit einem Buchstaben und werden gefolgt von Zahlen, z.B. M01, S02, ... .',
                'minlength': 'Der Code muss mindestend 2 Zeichen lang sein.',
                'maxlength': 'Der Code darf maximal 10 Zeichen lang sein.',
                'exists': 'Eine MC-Sammlung mit diesem Code gibt es schon.',
            },
            'order_num': {
                'required': 'Gib an, wo das Item in der Reihenfolge stehen soll',
            },
        };
        return _this;
    }
    ;
    ModuleFormComponent.prototype.handleServerError = function (error) {
        (error === 'Item not changed') &&
            (this.setError('global', 'Die Daten waren nicht anders als zuvor. Hast Du etwas geändert? Dann ist ein Fehler aufgetreten.'));
        (error === 'Module exists') &&
            (this.setError('name', 'exists'));
        (error === 'Code exists') &&
            (this.setError('code', 'exists'));
    };
    ;
    ModuleFormComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return ModuleFormComponent;
}(__WEBPACK_IMPORTED_MODULE_3__core_abstract_template_form__["a" /* AbstractTemplateForm */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__module__["a" /* Module */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__module__["a" /* Module */]) === "function" && _a || Object)
], ModuleFormComponent.prototype, "model", void 0);
ModuleFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'module-form',
        template: __webpack_require__("../../../../../src/app/module/module-form.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _c || Object])
], ModuleFormComponent);

var _a, _b, _c;
//# sourceMappingURL=module-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/module/module-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let module of sortedModules()\" class=\"panel\" [@starred]=\"module.starred\">\n\t<div class=\"panel-header\">\n\t\t<h2 [routerLink]=\"['/mcqs', 'view', module.id, '3', 'all', '2', '0']\">\n\t\t\t<span [ngClass]=\"{'star': module.starred}\" (click)=\"module.starred = !module.starred; $event.stopPropagation()\" style=\"z-index: 99\">★</span>\n\t\t\t{{module.code}}: {{module.name}}\n\t\t\t<ng-container *ngIf=\"auth.admin\">({{module.order_num}})</ng-container>\n\t\t</h2>\n\t</div>\n\t<div class=\"panel-body\">\n\t\taus <i>{{ module.category }}</i>\n\t</div>\n\t<div class=\"panel-footer\" *ngIf=\"auth.admin\">\n\t\t<a class=\"btn btn-edit\" [routerLink]=\"['/module/edit', module.id, 'current']\">bearbeiten</a>\n\t\t<a class=\"btn btn-delete\" [routerLink]=\"['/module/delete', module.id, 'current']\">löschen</a>\n\t\t<a class=\"btn btn-primary\" [routerLink]=\"['/module/history', module.id]\">History</a>\n\t</div>\n</div>\n\n<menu class=\"bottom\">\n\t<a *ngIf=\"auth.admin\" class=\"btn btn-create\" routerLink=\"/module/create\">Neue MC-Sammlung anlegen</a>\n\t<a *ngIf=\"auth.admin\" class=\"btn btn-primary\" routerLink=\"/module/deleted\">Gelöschte MC-Sammlungen ansehen</a>\n</menu>"

/***/ }),

/***/ "../../../../../src/app/module/module-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module__ = __webpack_require__("../../../../../src/app/module/module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModuleListComponent = (function () {
    function ModuleListComponent(olmService) {
        this.olmService = olmService;
        this.modules = [];
    }
    ;
    ModuleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getModules();
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
    };
    ;
    ModuleListComponent.prototype.getModules = function () {
        var _this = this;
        this.olmService.apiReadAll('module').subscribe(function (response) {
            _this.modules.length = 0;
            for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                var module = response_1[_i];
                _this.modules.push(new __WEBPACK_IMPORTED_MODULE_1__module__["a" /* Module */](module));
            }
        });
    };
    ;
    ModuleListComponent.prototype.sortedModules = function () {
        //return this.modules.filter((m) => m.starred === value);
        return this.modules.sort(function (m1, m2) { return m1.starred === m2.starred ? (m1.id - m2.id) : m1.starred ? -1 : 1; });
    };
    ;
    ModuleListComponent.prototype.trackModule = function (index, module) {
        return index; // module ? module.id : undefined;
    };
    ;
    return ModuleListComponent;
}());
ModuleListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'module-list',
        template: __webpack_require__("../../../../../src/app/module/module-list.component.html"),
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* trigger */])('starred', [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('1 => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])(300, Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["f" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({ transform: 'scale(1)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({ transform: 'scale(1.2)', offset: 0.5 }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({ transform: 'scale(1)', offset: 1.0 })
                    ]))
                ]),
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]) === "function" && _a || Object])
], ModuleListComponent);

var _a;
//# sourceMappingURL=module-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/module/module-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_create_component__ = __webpack_require__("../../../../../src/app/module/module-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__module_edit_component__ = __webpack_require__("../../../../../src/app/module/module-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__module_list_component__ = __webpack_require__("../../../../../src/app/module/module-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ModuleRoutingModule = (function () {
    function ModuleRoutingModule() {
    }
    return ModuleRoutingModule;
}());
ModuleRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild([
                { path: 'module', component: __WEBPACK_IMPORTED_MODULE_5__module_list_component__["a" /* ModuleListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
                { path: 'module/create', component: __WEBPACK_IMPORTED_MODULE_3__module_create_component__["a" /* ModuleCreateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
                { path: 'module/edit/:id/:version', component: __WEBPACK_IMPORTED_MODULE_4__module_edit_component__["a" /* ModuleEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], ModuleRoutingModule);

//# sourceMappingURL=module-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/module/module.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module_routing_module__ = __webpack_require__("../../../../../src/app/module/module-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_form_component__ = __webpack_require__("../../../../../src/app/module/module-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__module_create_component__ = __webpack_require__("../../../../../src/app/module/module-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__module_edit_component__ = __webpack_require__("../../../../../src/app/module/module-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__module_list_component__ = __webpack_require__("../../../../../src/app/module/module-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ModuleModule = (function () {
    function ModuleModule() {
    }
    return ModuleModule;
}());
ModuleModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__module_routing_module__["a" /* ModuleRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__module_form_component__["a" /* ModuleFormComponent */],
            __WEBPACK_IMPORTED_MODULE_4__module_create_component__["a" /* ModuleCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_5__module_edit_component__["a" /* ModuleEditComponent */],
            __WEBPACK_IMPORTED_MODULE_6__module_list_component__["a" /* ModuleListComponent */],
        ],
    })
], ModuleModule);

//# sourceMappingURL=module.module.js.map

/***/ }),

/***/ "../../../../../src/app/module/module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Module; });
var Module = (function () {
    function Module(init) {
        if (init === void 0) { init = {}; }
        this.id = init.id;
        this.code = init.code;
        this.name = init.name;
        this.category = init.category;
    }
    Object.defineProperty(Module.prototype, "starred", {
        get: function () {
            var _this = this;
            return !!(window.localStorage.getItem('starred') || '').split(',').find(function (s) { return Number(s) == _this.id; });
        },
        set: function (value) {
            var starred = new Set((window.localStorage.getItem('starred') || '').split(','));
            value ? starred.add(String(this.id)) : starred.delete(String(this.id));
            window.localStorage.setItem('starred', Array.from(starred).join(','));
        },
        enumerable: true,
        configurable: true
    });
    return Module;
}());

//# sourceMappingURL=module.js.map

/***/ }),

/***/ "../../../../../src/app/protocoll/protocoll-create.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Protokoll erstellen</h1>\n\n<text-view [path]=\"'protocoll-create'\"></text-view>\n\n<protocoll-form [model]=\"model\" [parent]=\"this\" [submitLabel]=\"submitLabel\"></protocoll-form>\n"

/***/ }),

/***/ "../../../../../src/app/protocoll/protocoll-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtocollCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__protocoll__ = __webpack_require__("../../../../../src/app/protocoll/protocoll.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocoll_form_component__ = __webpack_require__("../../../../../src/app/protocoll/protocoll-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProtocollCreateComponent = (function () {
    function ProtocollCreateComponent(route, olmService, alertService, router) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.id = -1;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__protocoll__["a" /* Protocoll */]();
        this.submitLabel = 'Protokoll erschaffen';
        this.version = 'new';
    }
    ProtocollCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = params['examid'];
        });
    };
    ProtocollCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.model['exam'] = this.id;
        console.log(this.model);
        this.olmService.apiCreate('protocoll', this.model)
            .subscribe(function (result) {
            _this.router.navigate(['/protocolls/view', _this.id]);
            _this.alertService.success("Daten gespeichert.");
        }, function (error) {
            _this.form.handleServerError(error);
        });
    };
    ;
    return ProtocollCreateComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__protocoll_form_component__["a" /* ProtocollFormComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__protocoll_form_component__["a" /* ProtocollFormComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__protocoll_form_component__["a" /* ProtocollFormComponent */]) === "function" && _a || Object)
], ProtocollCreateComponent.prototype, "form", void 0);
ProtocollCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'protocoll-create',
        template: __webpack_require__("../../../../../src/app/protocoll/protocoll-create.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object])
], ProtocollCreateComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=protocoll-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/protocoll/protocoll-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Protokoll bearbeiten</h1>\n\n<text-view [path]=\"'protocoll-edit'\"></text-view>\n\n<protocoll-form [model]=\"model\" [parent]=\"this\" [submitLabel]=\"submitLabel\"></protocoll-form>\n"

/***/ }),

/***/ "../../../../../src/app/protocoll/protocoll-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtocollEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocoll__ = __webpack_require__("../../../../../src/app/protocoll/protocoll.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__protocoll_form_component__ = __webpack_require__("../../../../../src/app/protocoll/protocoll-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProtocollEditComponent = (function () {
    function ProtocollEditComponent(route, olmService, alertService, router, location) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.location = location;
        this.id = -1;
        this.version = 'current';
        this.model = new __WEBPACK_IMPORTED_MODULE_3__protocoll__["a" /* Protocoll */]();
        this.submitLabel = '';
        this.auth = {};
    }
    ProtocollEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
        this.route.params
            .switchMap(function (params) {
            _this.id = params['id'];
            _this.version = params['version'];
            if (_this.version == 'current') {
                _this.submitLabel = 'Änderungen speichern';
            }
            else {
                _this.submitLabel = 'Stand wiederherstellen / übernehmen';
            }
            return _this.olmService.apiRead('protocoll', params['id'], params['version']);
        })
            .subscribe(function (result) {
            _this.model = result;
        });
    };
    ProtocollEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.olmService.apiUpdate('protocoll', this.model.id, this.model)
            .subscribe(function (result) {
            _this.router.navigate(['/protocolls/view', result.exam]);
            _this.alertService.success("Daten gespeichert.");
        }, function (error) {
            _this.form.handleServerError(error);
        });
    };
    ;
    ProtocollEditComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return ProtocollEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__protocoll_form_component__["a" /* ProtocollFormComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__protocoll_form_component__["a" /* ProtocollFormComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__protocoll_form_component__["a" /* ProtocollFormComponent */]) === "function" && _a || Object)
], ProtocollEditComponent.prototype, "form", void 0);
ProtocollEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'protocoll-edit',
        template: __webpack_require__("../../../../../src/app/protocoll/protocoll-edit.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_olm_service__["a" /* OlmService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _f || Object])
], ProtocollEditComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=protocoll-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/protocoll/protocoll-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"parent.onSubmit()\" #form=\"ngForm\">\n\t<ul>\n\t\t<li>\n\t\t\t<label for=\"name\">Name</label>\n\t\t\t<input\n\t\t\t\t\ttype=\"text\"\n\t\t \t\t\tid=\"name\"\n\t\t\t\t\tname=\"name\"\n\t\t \t\t\t[(ngModel)]=\"model.name\"\n\t\t \t\t\t#name=\"ngModel\"\n\t\t \t\t\tpattern=\"^[A-Za-z0-9 ÄÖÜäöüß_\\-:,\\.\\/\\?\\x27]+$\"\n\t\t\t\t\tmaxlength=\"100\"\n\t\t \t\t\tminlength=\"1\"\n\t\t\t\t\trequired />\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.name\">{{formErrors.name}}</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<label for=\"text\">Protokoll</label>\n\t\t\t<textarea\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tid=\"text\"\n\t\t\t\t\tname=\"text\"\n\t\t \t\t\t[(ngModel)]=\"model.text\"\n\t\t \t\t\t#text=\"ngModel\"\n\t\t\t\t\trequired>\n\t\t\t</textarea>\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.text\">{{formErrors.text}}</div>\n\t\t</li>\n\t\t<li *ngIf=\"model.id && parent.auth.admin\">\n\t\t\t<label for=\"order_num\">Position in der Liste (vor)</label>\n\t\t\t<input\n\t\t\t\t\ttype=\"number\"\n\t\t \t\t\tid=\"order_num\"\n\t\t\t\t\tname=\"order_num\"\n\t\t \t\t\t[(ngModel)]=\"model.order_num\"\n\t\t \t\t\t#order_num=\"ngModel\"\n\t\t\t\t\trequired />\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.order_num\">{{formErrors.order_num}}</div>\n\t\t</li>\n\t</ul>\n\n\t<menu class=\"bottom\">\n\t\t<a *ngIf=\"!model.id\" class=\"btn btn-back\" routerLink=\"/dashboard\">zurück</a>\t\n\t\t<button type=\"button\" *ngIf=\"model.id\" class=\"btn btn-back\" (click)=\"back()\">zurück</button>\n\t\t<button class=\"btn btn-submit\" type=\"submit\" [disabled]=\"!form.form.valid\">{{submitLabel}}</button>\n\t\t<a *ngIf=\"parent.version != 'new'\" class=\"btn btn-delete\" [routerLink]=\"['/protocoll/delete/', model.id, parent.version]\">Protokoll löschen</a>\n\t</menu>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/protocoll/protocoll-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtocollFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__protocoll__ = __webpack_require__("../../../../../src/app/protocoll/protocoll.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_abstract_template_form__ = __webpack_require__("../../../../../src/app/core/abstract-template-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProtocollFormComponent = (function (_super) {
    __extends(ProtocollFormComponent, _super);
    function ProtocollFormComponent(alertService, location) {
        var _this = _super.call(this, alertService) || this;
        _this.alertService = alertService;
        _this.location = location;
        _this.formErrors = {
            'name': '',
            'text': '',
        };
        _this.validationMessages = {
            'name': {
                'required': 'Bitte gib einen Namen ein.',
                'pattern': 'Der Name darf nur aus Buchstaben, Zahlen, Leerzeichen und folgenden Sonderzeichen bestehen: "_", "-", ".", ":", ",", "\'", "/", "?"',
                'minlength': 'Der Name muss mindestend 1 Zeichen lang sein.',
                'maxlength': 'Der Name darf maximal 100 Zeichen lang sein.',
                'exists': 'Ein Prüfungsprotokoll mit diesem Namen gibt es schon.'
            },
            'text': {
                'required': 'Das wäre ein sinnloses Protokoll.',
            },
            'order_num': {
                'required': 'Gib an, wo das Item in der Reihenfolge stehen soll',
            },
        };
        return _this;
    }
    ;
    ProtocollFormComponent.prototype.handleServerError = function (error) {
        (error === 'Item not changed') &&
            (this.setError('global', 'Die Daten waren nicht anders als zuvor. Hast Du etwas geändert? Dann ist ein Fehler aufgetreten.'));
        (error === 'Protocoll exists') &&
            (this.setError('name', 'exists'));
    };
    ;
    ProtocollFormComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return ProtocollFormComponent;
}(__WEBPACK_IMPORTED_MODULE_3__core_abstract_template_form__["a" /* AbstractTemplateForm */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__protocoll__["a" /* Protocoll */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__protocoll__["a" /* Protocoll */]) === "function" && _a || Object)
], ProtocollFormComponent.prototype, "model", void 0);
ProtocollFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'protocoll-form',
        template: __webpack_require__("../../../../../src/app/protocoll/protocoll-form.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _c || Object])
], ProtocollFormComponent);

var _a, _b, _c;
//# sourceMappingURL=protocoll-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/protocoll/protocoll-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtocollRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocoll_create_component__ = __webpack_require__("../../../../../src/app/protocoll/protocoll-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__protocoll_edit_component__ = __webpack_require__("../../../../../src/app/protocoll/protocoll-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__protocoll_view_component__ = __webpack_require__("../../../../../src/app/protocoll/protocoll-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__protocolls_view_component__ = __webpack_require__("../../../../../src/app/protocoll/protocolls-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProtocollRoutingModule = (function () {
    function ProtocollRoutingModule() {
    }
    return ProtocollRoutingModule;
}());
ProtocollRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild([
                { path: 'protocoll/create/:examid', component: __WEBPACK_IMPORTED_MODULE_3__protocoll_create_component__["a" /* ProtocollCreateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
                { path: 'protocoll/edit/:id/:version', component: __WEBPACK_IMPORTED_MODULE_4__protocoll_edit_component__["a" /* ProtocollEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
                { path: 'protocolls/view/:examid', component: __WEBPACK_IMPORTED_MODULE_6__protocolls_view_component__["a" /* ProtocollsViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
                { path: 'protocoll/view/:id', component: __WEBPACK_IMPORTED_MODULE_5__protocoll_view_component__["a" /* ProtocollViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], ProtocollRoutingModule);

//# sourceMappingURL=protocoll-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/protocoll/protocoll-view.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{item.name}}</h1>\n\n<text-view [path]=\"'protocoll-view'\"></text-view>\n\n<markdown-view [text]=\"item.text\"></markdown-view>\n\n<menu class=\"bottom\">\n\t<a class=\"btn btn-back\" [routerLink]=\"['/protocolls/view', exam]\">zurück</a>\n\t<a class=\"btn btn-edit\" [routerLink]=\"['/protocoll/edit', item.id, 'current']\">bearbeiten</a>\n\t<a class=\"btn btn-delete\" [routerLink]=\"['/protocoll/delete', item.id, 'current', 'current']\">löschen</a>\n</menu>\n"

/***/ }),

/***/ "../../../../../src/app/protocoll/protocoll-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtocollViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__protocoll__ = __webpack_require__("../../../../../src/app/protocoll/protocoll.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProtocollViewComponent = (function () {
    function ProtocollViewComponent(route, olmService, alertService, router) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.id = -1;
        this.exam = -1;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__protocoll__["a" /* Protocoll */]();
    }
    ProtocollViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
        this.route.params
            .switchMap(function (params) {
            _this.id = params['id'];
            return _this.olmService.apiRead('protocoll', params['id'], 'current');
        })
            .subscribe(function (result) {
            _this.item = result;
            _this.exam = result['exam'];
        });
    };
    return ProtocollViewComponent;
}());
ProtocollViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'protocoll-view',
        template: __webpack_require__("../../../../../src/app/protocoll/protocoll-view.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_olm_service__["a" /* OlmService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], ProtocollViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=protocoll-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/protocoll/protocoll.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtocollModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__protocoll_routing_module__ = __webpack_require__("../../../../../src/app/protocoll/protocoll-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocoll_create_component__ = __webpack_require__("../../../../../src/app/protocoll/protocoll-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__protocoll_form_component__ = __webpack_require__("../../../../../src/app/protocoll/protocoll-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__protocoll_edit_component__ = __webpack_require__("../../../../../src/app/protocoll/protocoll-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__protocoll_view_component__ = __webpack_require__("../../../../../src/app/protocoll/protocoll-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__protocolls_view_component__ = __webpack_require__("../../../../../src/app/protocoll/protocolls-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ProtocollModule = (function () {
    function ProtocollModule() {
    }
    return ProtocollModule;
}());
ProtocollModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__protocoll_routing_module__["a" /* ProtocollRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__protocoll_create_component__["a" /* ProtocollCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_4__protocoll_form_component__["a" /* ProtocollFormComponent */],
            __WEBPACK_IMPORTED_MODULE_5__protocoll_edit_component__["a" /* ProtocollEditComponent */],
            __WEBPACK_IMPORTED_MODULE_6__protocoll_view_component__["a" /* ProtocollViewComponent */],
            __WEBPACK_IMPORTED_MODULE_7__protocolls_view_component__["a" /* ProtocollsViewComponent */],
        ],
    })
], ProtocollModule);

//# sourceMappingURL=protocoll.module.js.map

/***/ }),

/***/ "../../../../../src/app/protocoll/protocoll.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Protocoll; });
var Protocoll = (function () {
    function Protocoll() {
    }
    return Protocoll;
}());

//# sourceMappingURL=protocoll.js.map

/***/ }),

/***/ "../../../../../src/app/protocoll/protocolls-view.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Protokolle</h1>\n\n<text-view [path]=\"'protocolls-view'\"></text-view>\n\n<ul>\n\t<li *ngFor=\"let item of items\">\n\t\t{{item.name}}\n\t\t<menu class=\"assoc\">\n\t\t\t<a class=\"btn btn-primary\" [routerLink]=\"['/protocoll/view', item.id]\">ansehen</a>\n\t\t\t<a class=\"btn btn-edit\" [routerLink]=\"['/protocoll/edit', item.id, 'current']\">bearbeiten</a>\n\t\t\t<ng-container *ngIf=\"auth.admin\">\n\t\t\t\t<a class=\"btn btn-delete\" [routerLink]=\"['/protocoll/delete', item.id, 'current']\">löschen</a>\n\t\t\t\t<a class=\"btn btn-primary\" [routerLink]=\"['/protocoll/history', item.id]\">History</a>\n\t\t\t</ng-container>\n\t\t</menu>\n\t</li>\n</ul>\n\n<menu class=\"bottom\">\n\t<a class=\"btn btn-back\" routerLink=\"/exam\">zurück</a>\t\n\t<a class=\"btn btn-create\" [routerLink]=\"['/protocoll/create/', id]\">Protokoll anlegen</a>\n</menu>\n"

/***/ }),

/***/ "../../../../../src/app/protocoll/protocolls-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtocollsViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProtocollsViewComponent = (function () {
    function ProtocollsViewComponent(route, olmService, alertService, router, location) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.location = location;
        this.id = -1;
        this.items = [];
        this.auth = {};
    }
    ProtocollsViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
        this.route.params
            .switchMap(function (params) {
            _this.id = params['examid'];
            return _this.olmService.apiReadProtocolls(params['examid']);
        })
            .subscribe(function (result) {
            _this.items = result;
        });
    };
    ProtocollsViewComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return ProtocollsViewComponent;
}());
ProtocollsViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'protocolls-view',
        template: __webpack_require__("../../../../../src/app/protocoll/protocolls-view.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_olm_service__["a" /* OlmService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _e || Object])
], ProtocollsViewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=protocolls-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    _this.clear();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.clear = function () {
        this.subject.next(null);
    };
    AlertService.prototype.getMessage = function () {
        return this.subject;
    };
    return AlertService;
}());
AlertService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/olm.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OlmService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_authorisation__ = __webpack_require__("../../../../../src/app/core/authorisation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var OlmService = (function () {
    function OlmService(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.authObservable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.authState = new __WEBPACK_IMPORTED_MODULE_4__core_authorisation__["a" /* Authorisation */]();
        this.urlOlm = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].server_url;
        this.authObservable.subscribe(function (auth) { return _this.authState = auth; });
        var authStored = localStorage.getItem('auth');
        if (authStored) {
            var tmp = JSON.parse(authStored);
            this.authObservable.next(tmp);
        }
        else {
            var tmp = new __WEBPACK_IMPORTED_MODULE_4__core_authorisation__["a" /* Authorisation */]();
            this.authObservable.next(tmp);
        }
    }
    OlmService.prototype.getEndpoint = function (endpoint) {
        var fragment = '';
        switch (endpoint) {
            case 'user': {
                fragment = '/api/users';
                break;
            }
            case 'session': {
                fragment = '/api/sessions';
                break;
            }
            case 'module': {
                fragment = '/api/modules';
                break;
            }
            case 'mcq': {
                fragment = '/api/mcqs';
                break;
            }
            case 'exam': {
                fragment = '/api/exams';
                break;
            }
            case 'protocoll': {
                fragment = '/api/protocolls';
                break;
            }
            case 'generation': {
                fragment = '/api/generations';
                break;
            }
            case 'text': {
                fragment = '/api/texts';
                break;
            }
            case 'doc': {
                fragment = '/api/docs';
                break;
            }
        }
        return fragment;
    };
    ;
    OlmService.prototype.canActivate = function (route, state) {
        if (this.authState.token != null) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/door'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    ;
    OlmService.prototype.handleError = function (service, error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            if (error.status == 401) {
                //service.logout();
                console.log("Invalid token, I will log you out");
                service.router.navigate(['/door']);
            }
            errMsg = error.statusText;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
            console.error(error);
        }
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ;
    OlmService.prototype.getAuth = function () {
        return this.authObservable;
    };
    ;
    OlmService.prototype.jwt = function () {
        // create authorization header with jwt token
        //console.log(this.authState.token);
        if (this.authState.token !== '') {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'X-Access-Token': 'Bearer ' + this.authState.token }); //, 'Authorization' : 'Bearer ' + this.authState.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
    };
    ;
    OlmService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this.urlOlm.concat('/api/login'), JSON.stringify({ username: username, password: password }))
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var tmp = response.json();
            var auth;
            if (tmp && tmp.token) {
                auth = tmp;
            }
            else {
                auth = new __WEBPACK_IMPORTED_MODULE_4__core_authorisation__["a" /* Authorisation */]();
            }
            localStorage.setItem('auth', JSON.stringify(auth));
            _this.authObservable.next(auth);
            return auth;
        })
            .catch(function (error) { return _this.handleError(_this, error); });
    };
    ;
    OlmService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('auth');
        this.authObservable.next(new __WEBPACK_IMPORTED_MODULE_4__core_authorisation__["a" /* Authorisation */]());
    };
    ;
    OlmService.prototype.resetPassword = function (email) {
        var _this = this;
        return this.http.post(this.urlOlm.concat('/api/password/reset'), JSON.stringify({ email: email }))
            .catch(function (error) { return _this.handleError(_this, error); });
    };
    ;
    /*
     * default CRUD methods
     */
    OlmService.prototype.apiCreate = function (endpoint, data) {
        var _this = this;
        return this.http.post(this.urlOlm.concat(this.getEndpoint(endpoint)), data, this.jwt())
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(_this, error); });
    };
    ;
    OlmService.prototype.apiRead = function (endpoint, id, version) {
        var _this = this;
        var url;
        url = version == 'current' ?
            this.urlOlm.concat(this.getEndpoint(endpoint), '/', String(id)) :
            this.urlOlm.concat(this.getEndpoint(endpoint), '/', String(id), '/version/', version);
        return this.http.get(url, this.jwt())
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(_this, error); });
    };
    ;
    OlmService.prototype.apiReadAll = function (endpoint) {
        var _this = this;
        return this.http.get(this.urlOlm.concat(this.getEndpoint(endpoint)), this.jwt())
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(_this, error); });
    };
    ;
    OlmService.prototype.apiUpdate = function (endpoint, id, data) {
        var _this = this;
        return this.http.patch(this.urlOlm.concat(this.getEndpoint(endpoint), '/', String(id)), data, this.jwt())
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(_this, error); });
    };
    ;
    OlmService.prototype.apiDelete = function (endpoint, id) {
        var _this = this;
        return this.http.delete(this.urlOlm.concat(this.getEndpoint(endpoint), '/', String(id)), this.jwt())
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(_this, error); });
    };
    ;
    OlmService.prototype.apiReadDeleted = function (endpoint) {
        var _this = this;
        return this.http.get(this.urlOlm.concat(this.getEndpoint(endpoint), '/deleted'), this.jwt())
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(_this, error); });
    };
    ;
    OlmService.prototype.apiReadHistory = function (endpoint, id) {
        var _this = this;
        return this.http.get(this.urlOlm.concat(this.getEndpoint(endpoint), '/history/', String(id)), this.jwt())
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(_this, error); });
    };
    ;
    OlmService.prototype.apiReadProtocolls = function (id) {
        var _this = this;
        return this.http.get(this.urlOlm.concat(this.getEndpoint('protocoll'), '/exam/', String(id)), this.jwt())
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(_this, error); });
    };
    ;
    OlmService.prototype.apiReadMcqs = function (module, rating, generation, original, number) {
        var _this = this;
        return this.http.get(this.urlOlm.concat(this.getEndpoint('mcq'), '/modules/', String(module), '/rating/', String(rating), '/generation/', generation, '/original/', String(original), '/number/', String(number)), this.jwt())
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(_this, error); });
    };
    ;
    OlmService.prototype.apiReadText = function (path) {
        var _this = this;
        return this.http.get(this.urlOlm.concat(this.getEndpoint('text'), '/path/', path), this.jwt())
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(_this, error); });
    };
    ;
    OlmService.prototype.apiReadUsersBySearchTerm = function (term) {
        var _this = this;
        return this.http.get(this.urlOlm.concat(this.getEndpoint('user'), '/search/', term), this.jwt())
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(_this, error); });
    };
    ;
    OlmService.prototype.apiReadUsersInactive = function () {
        var _this = this;
        return this.http.get(this.urlOlm.concat(this.getEndpoint('user'), '/inactive'), this.jwt())
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(_this, error); });
    };
    ;
    OlmService.prototype.apiDeleteUsersInactive = function () {
        var _this = this;
        return this.http.delete(this.urlOlm.concat(this.getEndpoint('user'), '/inactive'), this.jwt())
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(_this, error); });
    };
    ;
    return OlmService;
}());
OlmService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], OlmService);

var _a, _b;
//# sourceMappingURL=olm.service.js.map

/***/ }),

/***/ "../../../../../src/app/session/session-create.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Dein nächster Test</h1>\n\n<text-view [path]=\"'session-create'\"></text-view>\n\n<form (ngSubmit)=\"onSubmit()\" #form=\"ngForm\">\n\t<ul>\n\t\t<li>\n\t\t\t<label for=\"name\">Name</label>\n\t\t\t<input\n\t\t\t\t\ttype=\"text\"\n\t\t \t\t\tid=\"name\"\n\t\t\t\t\tname=\"name\"\n\t\t \t\t\t[(ngModel)]=\"model.name\"\n\t\t \t\t\t#name=\"ngModel\"\n\t\t \t\t\tpattern=\"^[A-Za-z0-9 ÄÖÜäöüß_\\-:,\\.\\/\\?\\x27]+$\"\n\t\t\t\t\tmaxlength=\"100\"\n\t\t \t\t\tminlength=\"1\"\n\t\t\t\t\trequired />\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.name\">{{formErrors.name}}</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<label for=\"modules\">MC-Sammlung(en)</label>\n\t\t\t<select\n\t\t \t\t\tid=\"modules\"\n\t\t\t\t\tname=\"modules\"\n\t\t \t\t\t[(ngModel)]=\"model.modules\"\n\t\t \t\t\t#modules=\"ngModel\"\n\t\t\t\t\tmax=\"4\"\n\t\t \t\t\tmin=\"1\"\n\t\t\t\t\tmultiple\n\t\t\t\t\trequired>\n\t\t\t\t<option *ngFor=\"let module of moduleList\" [ngValue]=\"module.id\">\n\t\t\t\t\t{{module.code}}: {{module.name}}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.modules\">{{formErrors.modules}}</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<label for=\"number\">Maximale Anzahl</label>\n\t\t\t<select\n\t\t \t\t\tid=\"number\"\n\t\t\t\t\tname=\"number\"\n\t\t \t\t\t[(ngModel)]=\"model.number\"\n\t\t \t\t\t#number=\"ngModel\"\n\t\t\t\t\trequired>\n\t\t\t\t<option *ngFor=\"let numberCat of numberCats\" [ngValue]=\"numberCat.value\">\n\t\t\t\t\t{{numberCat.label}}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.number\">{{formErrors.number}}</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<label for=\"rating\">Bewertungen</label>\n\t\t\t<select\n\t\t \t\t\tid=\"rating\"\n\t\t\t\t\tname=\"rating\"\n\t\t \t\t\t[(ngModel)]=\"model.rating\"\n\t\t \t\t\t#rating=\"ngModel\"\n\t\t\t\t\trequired>\n\t\t\t\t<option *ngFor=\"let ratingCat of ratingCats\" [ngValue]=\"ratingCat.value\">\n\t\t\t\t\t{{ratingCat.label}}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.rating\">{{formErrors.rating}}</div>\n\t\t</li>\n\t\t<li *ngIf=\"model.generation\">\n\t\t\t<label for=\"generation\">Generation</label>\n\t\t\t<select\n\t\t\t\t\t*ngIf=\"generationCats\"\n\t\t \t\t\tid=\"generation\"\n\t\t\t\t\tname=\"generation\"\n\t\t \t\t\t[(ngModel)]=\"model.generation\"\n\t\t \t\t\t#generation=\"ngModel\"\n\t\t\t\t\trequired>\n\t\t\t\t<option *ngFor=\"let generationCat of generationCats\" [ngValue]=\"generationCat.id\">\n\t\t\t\t\t{{generationCat.name}}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.generation\">{{formErrors.generation}}</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<label for=\"original\">\"Original\" Prüfungsfragen</label>\n\t\t\t<select\n\t\t \t\t\tid=\"original\"\n\t\t\t\t\tname=\"original\"\n\t\t \t\t\t[(ngModel)]=\"model.original\"\n\t\t \t\t\t#original=\"ngModel\"\n\t\t\t\t\trequired>\n\t\t\t\t<option *ngFor=\"let originalCat of originalCats\" [ngValue]=\"originalCat.value\">\n\t\t\t\t\t{{originalCat.label}}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.original\">{{formErrors.original}}</div>\n\t\t</li>\n\t</ul>\n\n\t<menu class=\"bottom\">\n\t\t<a class=\"btn btn-back\" routerLink=\"/dashboard\">zurück</a>\t\n\t\t<button class=\"btn btn-submit\" type=\"submit\" [disabled]=\"!form.form.valid\">Session erschaffen</button>\n\t</menu>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/session/session-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_abstract_template_form__ = __webpack_require__("../../../../../src/app/core/abstract-template-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SessionCreateComponent = (function (_super) {
    __extends(SessionCreateComponent, _super);
    function SessionCreateComponent(route, olmService, alertService, router, locattion) {
        var _this = _super.call(this, alertService) || this;
        _this.route = route;
        _this.olmService = olmService;
        _this.alertService = alertService;
        _this.router = router;
        _this.locattion = locattion;
        _this.model = {
            'name': '',
            'modules': [],
            'rating': 3,
            'generation': 'all',
            'original': 2,
            'number': 0,
        };
        _this.formErrors = {
            'name': '',
            'modules': '',
            'rating': '',
            'generation': '',
            'original': '',
            'number': '',
        };
        _this.validationMessages = {
            'name': {
                'required': 'Bitte gib einen Namen ein.',
                'pattern': 'Der Name darf nur aus Buchstaben, Zahlen, Leerzeichen und folgenden Sonderzeichen bestehen: "_", "-", ".", ":", ",", "\'", "?", "/"',
                'minlength': 'Der Name muss mindestend 1 Zeichen lang sein.',
                'maxlength': 'Der Name darf maximal 100 Zeichen lang sein.',
            },
            'modules': {
                'min': 'Ein bisschen mehr dürfte es schon sein.',
                'max': 'Hui! Sehr motiviert. 200 Fragen sind die Tagesration beim STEX ;) .',
                'too-many-modules': 'Bitte nicht mehr als 4 Module auswählen.'
            },
        };
        _this.numberCats = [
            { 'value': 0, 'label': 'alle' },
            { 'value': 10, 'label': '10' },
            { 'value': 20, 'label': '20' },
            { 'value': 50, 'label': '50' },
            { 'value': 100, 'label': '100' },
            { 'value': 200, 'label': '200' },
        ];
        _this.ratingCats = [
            { 'value': 3, 'label': 'alle' },
            { 'value': 1, 'label': 'nur gute Fragen' },
            { 'value': 0, 'label': 'nur schlechte Fragen (Prüfung? ;)' },
        ];
        _this.originalCats = [
            { 'value': 2, 'label': 'alle' },
            { 'value': 1, 'label': 'nur als "Original" Prüfungsfrage markierte' },
            { 'value': 0, 'label': 'keine als solche markierte Frage' },
        ];
        _this.moduleList = [];
        return _this;
    }
    SessionCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.apiReadAll('module')
            .subscribe(function (result) {
            _this.moduleList = result;
        });
        this.olmService.apiReadAll('generation')
            .subscribe(function (result) {
            _this.generationCats = [];
            _this.generationCats.push({ 'id': 'all', 'name': 'alle' });
            for (var i in result) {
                _this.generationCats.push(result[i]);
            }
        });
    };
    SessionCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.olmService.apiCreate('session', this.model)
            .subscribe(function (result) {
            _this.router.navigate(['/session/view', result.id]);
            _this.alertService.success("Daten gespeichert.");
        }, function (error) {
            _this.handleServerError(error);
        });
    };
    ;
    SessionCreateComponent.prototype.handleServerError = function (error) {
        (error === 'Item not changed') &&
            (this.setError('global', 'Die Daten waren nicht anders als zuvor. Hast Du etwas geändert? Dann ist ein Fehler aufgetreten.'));
        (error === 'Too many modules') &&
            (this.setError('modules', 'too-many-modules'));
        (error === 'No questions') &&
            (this.setError('global', 'Nach dem wir filterten waren keine Daten mehr da... Bitte filtere weniger streng ;)'));
    };
    return SessionCreateComponent;
}(__WEBPACK_IMPORTED_MODULE_3__core_abstract_template_form__["a" /* AbstractTemplateForm */]));
SessionCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'session-create',
        template: __webpack_require__("../../../../../src/app/session/session-create.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _e || Object])
], SessionCreateComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=session-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/session/session-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let session of sessions\" class=\"panel\">\n\t<div class=\"panel-header\">\n\t\t<h2>{{session.name}}</h2>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t<ul class=\"stats\">\n\t\t\t<li>richtig: {{session.correct}}</li>\n\t\t\t<li>beantwortet: {{session.answered}}</li>\n\t\t\t<li>insgesamt: {{session.total}} ({{session.correct / session.total * 100 }} %)</li>\n\t\t</ul>\n\t</div>\n\t<div class=\"panel-footer\">\n\t\t<menu class=\"assoc\">\n\t\t\t<a class=\"btn btn-delete\" [routerLink]=\"['/session/delete', session.id, 'current']\">löschen</a>\n\t\t\t<a class=\"btn btn-primary\" [routerLink]=\"['/session/view', session.id]\">los!</a>\n\t\t</menu>\n\t</div>\n</div>\n\n<menu class=\"bottom\">\n\t<a class=\"btn btn-create\" routerLink=\"/session/create\">Test zusammenstellen</a>\n</menu>"

/***/ }),

/***/ "../../../../../src/app/session/session-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SessionListComponent = (function () {
    function SessionListComponent(olmService) {
        this.olmService = olmService;
    }
    ;
    SessionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSessions();
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
    };
    ;
    SessionListComponent.prototype.getSessions = function () {
        var _this = this;
        this.olmService.apiReadAll('session').subscribe(function (response) { return _this.sessions = response; });
    };
    ;
    return SessionListComponent;
}());
SessionListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'session-list',
        template: __webpack_require__("../../../../../src/app/session/session-list.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_olm_service__["a" /* OlmService */]) === "function" && _a || Object])
], SessionListComponent);

var _a;
//# sourceMappingURL=session-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/session/session-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_create_component__ = __webpack_require__("../../../../../src/app/session/session-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_view_component__ = __webpack_require__("../../../../../src/app/session/session-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__session_list_component__ = __webpack_require__("../../../../../src/app/session/session-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SessionRoutingModule = (function () {
    function SessionRoutingModule() {
    }
    return SessionRoutingModule;
}());
SessionRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild([
                { path: 'session', component: __WEBPACK_IMPORTED_MODULE_5__session_list_component__["a" /* SessionListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
                { path: 'session/create', component: __WEBPACK_IMPORTED_MODULE_3__session_create_component__["a" /* SessionCreateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
                { path: 'session/view/:id', component: __WEBPACK_IMPORTED_MODULE_4__session_view_component__["a" /* SessionViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], SessionRoutingModule);

//# sourceMappingURL=session-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/session/session-view.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{session?.name}}</h1>\n\n<text-view [path]=\"'session-view'\"></text-view>\n\n<ng-container *ngIf=\"session\">\n\t<menu class=\"top\">\n\t\t<button *ngIf=\"session.current > 0\" class=\"btn btn-nav\" (click)=\"previous()\">←</button>\n\t\t<strong>{{session.current + 1}} / {{session.total}}</strong>\n\t\t<button *ngIf=\"session.current < session.total - 1\" class=\"btn btn-nav\" (click)=\"next()\">→</button>\n\t</menu>\n\t<ng-container *ngIf=\"mcq\">\n\t\t<menu class=\"top\">\n\t\t\t<button [ngClass]=\"{'btn-rated-negative':mcq.rated<0}\" class=\"btn btn-rate\"(click)=\"rate(mcq.rated === -1 ? 0 : -1)\">-</button>\n\t\t\t<strong>{{mcq.rating}}</strong>\n\t\t\t<button [ngClass]=\"{'btn-rated-positive':mcq.rated>0}\" class=\"btn btn-rate\" (click)=\"rate(mcq.rated === 1 ? 0 : 1)\">+</button>\n\t\t\t<a class=\"btn btn-primary\" (click)=\"discussion=!discussion\">kommentieren</a>\n\t\t</menu>\n\t\t<p>{{mcq.question}}</p>\n\t\t<ol>\n\t\t\t<li *ngFor=\"let answer of mcq.answers; index as i\"\n\t\t\t\t[ngClass]=\"{ 'answr-choice': session.status[session.current] == 2, 'answr-solution': session.status[session.current] < 2 && i === mcq.solution, 'answr-error': session.status[session.current] < 2 && i === session.getAnswer() && mcq.solution !== i}\"\n\t\t\t\t>\n\t\t\t\t<a (click)=\"select(i)\">{{answer}}</a>\n\t\t\t</li>\n\t\t</ol>\n\t\t<p class=\"msg msg-error\" *ngIf=\"mcq.solution<0\">Die Antwort ist noch nicht bekannt.</p>\n\t</ng-container>\n</ng-container>\n\n<menu class=\"bottom\">\n\t<a class=\"btn btn-back\" routerLink=\"/session\">zurück</a>\n</menu>\n"

/***/ }),

/***/ "../../../../../src/app/session/session-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session__ = __webpack_require__("../../../../../src/app/session/session.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SessionViewComponent = (function () {
    function SessionViewComponent(route, olmService, alertService, router) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.id = -1;
        this.session = new __WEBPACK_IMPORTED_MODULE_2__session__["a" /* Session */]();
    }
    SessionViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
        this.route.params
            .switchMap(function (params) {
            _this.id = params['id'];
            return _this.olmService.apiRead('session', params['id'], 'current');
        })
            .subscribe(function (result) {
            _this.session = _this.prepareSession(result);
            _this.loadQuestion();
        });
    };
    ;
    SessionViewComponent.prototype.next = function () {
        this.session.next();
        this.loadQuestion();
    };
    ;
    SessionViewComponent.prototype.previous = function () {
        this.session.previous();
        this.loadQuestion();
    };
    ;
    SessionViewComponent.prototype.prepareSession = function (raw) {
        raw = raw;
        var session = new __WEBPACK_IMPORTED_MODULE_2__session__["a" /* Session */]();
        for (var i in raw) {
            session[i] = raw[i];
        }
        return session;
    };
    ;
    SessionViewComponent.prototype.loadQuestion = function () {
        var _this = this;
        this.olmService.apiRead('mcq', this.session.getMcqId(), 'current')
            .subscribe(function (result) {
            _this.mcq = result;
        }, function (error) {
            if (error === 'Item not found') {
                _this.next();
                _this.storeSession();
            }
        });
    };
    SessionViewComponent.prototype.storeSession = function () {
        var _this = this;
        this.olmService.apiUpdate('session', this.session.id, this.session)
            .subscribe(function (result) {
            _this.session = _this.prepareSession(result);
        }, function (error) {
        });
    };
    SessionViewComponent.prototype.select = function (answer) {
        this.session.finishQuestion(answer, this.mcq.solution === answer ? 1 : 0);
        this.storeSession();
    };
    ;
    return SessionViewComponent;
}());
SessionViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'session-view',
        template: __webpack_require__("../../../../../src/app/session/session-view.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_olm_service__["a" /* OlmService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], SessionViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=session-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/session/session.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_routing_module__ = __webpack_require__("../../../../../src/app/session/session-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_create_component__ = __webpack_require__("../../../../../src/app/session/session-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_view_component__ = __webpack_require__("../../../../../src/app/session/session-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__session_list_component__ = __webpack_require__("../../../../../src/app/session/session-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SessionModule = (function () {
    function SessionModule() {
    }
    return SessionModule;
}());
SessionModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__session_routing_module__["a" /* SessionRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__session_create_component__["a" /* SessionCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_4__session_view_component__["a" /* SessionViewComponent */],
            __WEBPACK_IMPORTED_MODULE_5__session_list_component__["a" /* SessionListComponent */],
        ],
    })
], SessionModule);

//# sourceMappingURL=session.module.js.map

/***/ }),

/***/ "../../../../../src/app/session/session.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Session; });
var Session = (function () {
    function Session() {
    }
    Session.prototype.finishQuestion = function (answer, state) {
        if (this.status[this.current] == 2) {
            this.status[this.current] = state;
            this.answers[this.current] = answer;
            this.answered++;
            this.correct += state == 1 ? 1 : 0;
        }
    };
    ;
    Session.prototype.next = function () {
        if (this.current < this.total - 1) {
            this.current++;
        }
    };
    ;
    Session.prototype.previous = function () {
        if (this.current > 0) {
            this.current--;
        }
    };
    ;
    Session.prototype.getMcqId = function () {
        return this.questions[this.current];
    };
    ;
    Session.prototype.getAnswer = function () {
        return this.answers[this.current];
    };
    ;
    Session.prototype.getState = function () {
        return this.status[this.current];
    };
    ;
    Session.prototype.removeCurrent = function () {
        if (this.status[this.current] == 1) {
            this.answered -= 1;
            this.correct -= 1;
        }
        else if (this.status[this.current] == 0) {
            this.answered -= 1;
        }
        this.total -= 1;
        delete this.questions[this.current];
        delete this.answers[this.current];
        delete this.status[this.current];
    };
    ;
    return Session;
}());

//# sourceMappingURL=session.js.map

/***/ }),

/***/ "../../../../../src/app/shared/cut.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CutPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CutPipe = (function () {
    function CutPipe() {
    }
    CutPipe.prototype.transform = function (text, n) {
        var shortened = text.substr(0, n);
        if (/^\S/.test(text.substr(n)))
            return shortened.replace(/\s+\S*$/, "");
        return shortened;
    };
    return CutPipe;
}());
CutPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'cut' })
], CutPipe);

//# sourceMappingURL=cut.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/markdown-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div [innerHTML]=\"output\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/markdown-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_showdown__ = __webpack_require__("../../../../showdown/dist/showdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_showdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_showdown__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MarkdownViewComponent = (function () {
    function MarkdownViewComponent() {
        this.text = '';
        this.output = '';
        this.converter = {};
        this.converter = new __WEBPACK_IMPORTED_MODULE_1_showdown__["Converter"]({
            headerLevelStart: 2,
            strikethrough: true,
        });
    }
    MarkdownViewComponent.prototype.ngOnInit = function () {
        this.output = this.parseMarkdown(this.text);
    };
    ;
    MarkdownViewComponent.prototype.ngOnChanges = function () {
        this.output = this.parseMarkdown(this.text);
    };
    ;
    MarkdownViewComponent.prototype.parseMarkdown = function (markdown) {
        return this.converter.makeHtml(markdown);
    };
    ;
    return MarkdownViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], MarkdownViewComponent.prototype, "text", void 0);
MarkdownViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'markdown-view',
        template: __webpack_require__("../../../../../src/app/shared/markdown-view.component.html"),
    }),
    __metadata("design:paramtypes", [])
], MarkdownViewComponent);

//# sourceMappingURL=markdown-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__text_view_component__ = __webpack_require__("../../../../../src/app/shared/text-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__markdown_view_component__ = __webpack_require__("../../../../../src/app/shared/markdown-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cut_pipe__ = __webpack_require__("../../../../../src/app/shared/cut.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__cut_pipe__["a" /* CutPipe */],
            __WEBPACK_IMPORTED_MODULE_4__text_view_component__["a" /* TextViewComponent */],
            __WEBPACK_IMPORTED_MODULE_5__markdown_view_component__["a" /* MarkdownViewComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_6__cut_pipe__["a" /* CutPipe */],
            __WEBPACK_IMPORTED_MODULE_4__text_view_component__["a" /* TextViewComponent */],
            __WEBPACK_IMPORTED_MODULE_5__markdown_view_component__["a" /* MarkdownViewComponent */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
        ],
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/text-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"txt\">\n\t<menu *ngIf=\"auth\" class=\"help\">\n\t\t<button *ngIf=\"model?.help\" class=\"btn btn-help\" (click)=\"toggleHelp()\">?!</button>\n\t\t<button *ngIf=\"auth.admin && !model.id\" class=\"btn btn-create\" (click)=\"gotoTextCreate()\">Txt / Hlf anlegen</button>\n\t\t<a *ngIf=\"auth.admin && model.id\" class=\"btn btn-primary\" [routerLink]=\"['/text/edit/', model.id, 'current']\">Txt / Hlf bearbeiten</a>\n\t</menu>\n\t<markdown-view class=\"\" *ngIf=\"model.text\" [text]=\"model.text\"></markdown-view>\n\t<div *ngIf=\"help\" class=\"help-more\">\n\t\t<markdown-view [text]=\"model.help\"></markdown-view>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/text-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TextViewComponent = (function () {
    function TextViewComponent(olmService, router) {
        this.olmService = olmService;
        this.router = router;
        this.auth = {};
        this.model = {};
        this.help = false;
        this.path = '';
    }
    TextViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
    };
    ;
    TextViewComponent.prototype.ngOnChanges = function () {
        if (this.path === '') {
            return;
        }
        this.getText();
    };
    ;
    TextViewComponent.prototype.getText = function () {
        var _this = this;
        this.olmService.apiReadText(this.path)
            .subscribe(function (result) {
            _this.model = result;
        });
    };
    ;
    TextViewComponent.prototype.gotoTextCreate = function () {
        this.router.navigate(['/text/create', { path: this.path }]);
    };
    ;
    TextViewComponent.prototype.toggleHelp = function () {
        this.help = this.help ? false : true;
    };
    ;
    return TextViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], TextViewComponent.prototype, "path", void 0);
TextViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'text-view',
        template: __webpack_require__("../../../../../src/app/shared/text-view.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], TextViewComponent);

var _a, _b;
//# sourceMappingURL=text-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/text/text-create.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Text / Hilfe erstellen</h1>\n\n<text-view [path]=\"'text-create'\"></text-view>\n\n<text-form [model]=\"model\" [parent]=\"this\" [submitLabel]=\"submitLabel\"></text-form>\n"

/***/ }),

/***/ "../../../../../src/app/text/text-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__text__ = __webpack_require__("../../../../../src/app/text/text.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__text_form_component__ = __webpack_require__("../../../../../src/app/text/text-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TextCreateComponent = (function () {
    function TextCreateComponent(route, olmService, alertService, router) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.path = '';
        this.model = new __WEBPACK_IMPORTED_MODULE_2__text__["a" /* Text */]();
        this.submitLabel = 'Text / Hilfe anlegen';
    }
    TextCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.path = params['path'];
            if (_this.path !== '') {
                _this.model.path = _this.path;
            }
        });
    };
    TextCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.olmService.apiCreate('text', this.model)
            .subscribe(function (result) {
            _this.router.navigate(['/texts/view', result.id]);
            _this.alertService.success("Daten gespeichert.");
        }, function (error) {
            _this.form.handleServerError(error);
        });
    };
    ;
    return TextCreateComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__text_form_component__["a" /* TextFormComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__text_form_component__["a" /* TextFormComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__text_form_component__["a" /* TextFormComponent */]) === "function" && _a || Object)
], TextCreateComponent.prototype, "form", void 0);
TextCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'text-create',
        template: __webpack_require__("../../../../../src/app/text/text-create.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object])
], TextCreateComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=text-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/text/text-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Text / Hilfe bearbeiten</h1>\n\n<text-view [path]=\"'text-edit'\"></text-view>\n\n<text-form [model]=\"model\" [parent]=\"this\" [submitLabel]=\"submitLabel\"></text-form>\n"

/***/ }),

/***/ "../../../../../src/app/text/text-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__text__ = __webpack_require__("../../../../../src/app/text/text.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__text_form_component__ = __webpack_require__("../../../../../src/app/text/text-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TextEditComponent = (function () {
    function TextEditComponent(route, olmService, alertService, router, location) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.location = location;
        this.id = -1;
        this.version = 'current';
        this.model = new __WEBPACK_IMPORTED_MODULE_3__text__["a" /* Text */]();
        this.submitLabel = 'Änderungen speichern';
        this.auth = {};
    }
    TextEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
        this.route.params
            .switchMap(function (params) {
            return _this.olmService.apiRead('text', params['id'], params['version']);
        })
            .subscribe(function (result) {
            _this.id = result.id;
            _this.model = result;
        });
    };
    TextEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.olmService.apiUpdate('text', this.model.id, this.model)
            .subscribe(function (result) {
            _this.router.navigate(['/texts/view']);
            _this.alertService.success("Daten gespeichert.");
        }, function (error) {
            _this.form.handleServerError(error);
        });
    };
    ;
    TextEditComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return TextEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__text_form_component__["a" /* TextFormComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__text_form_component__["a" /* TextFormComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__text_form_component__["a" /* TextFormComponent */]) === "function" && _a || Object)
], TextEditComponent.prototype, "form", void 0);
TextEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'text-edit',
        template: __webpack_require__("../../../../../src/app/text/text-edit.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_olm_service__["a" /* OlmService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _f || Object])
], TextEditComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=text-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/text/text-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"parent.onSubmit()\" #form=\"ngForm\">\n\t<ul>\n\t\t<li>\n\t\t\t<label for=\"path\">Pfad</label>\n\t\t\t<input\n\t\t\t\t\ttype=\"text\"\n\t\t \t\t\tid=\"path\"\n\t\t\t\t\tname=\"path\"\n\t\t \t\t\t[(ngModel)]=\"model.path\"\n\t\t \t\t\t#path=\"ngModel\"\n\t\t \t\t\tpattern=\"^[A-Za-z0-9 ÄÖÜäöüß_\\-:\\.,']+$\"\n\t\t\t\t\trequired />\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.path\">{{formErrors.path}}</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<label for=\"text\">Text</label>\n\t\t\t<textarea\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tid=\"text\"\n\t\t\t\t\tname=\"text\"\n\t\t \t\t\t[(ngModel)]=\"model.text\"\n\t\t \t\t\t#text=\"ngModel\"\n\t\t\t\t\t>\n\t\t\t</textarea>\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.text\">{{formErrors.text}}</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<label for=\"help\">Hilfe</label>\n\t\t\t<textarea\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tid=\"help\"\n\t\t\t\t\tname=\"help\"\n\t\t \t\t\t[(ngModel)]=\"model.help\"\n\t\t \t\t\t#help=\"ngModel\"\n\t\t\t\t\t>\n\t\t\t</textarea>\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.help\">{{formErrors.help}}</div>\n\t\t</li>\n\t</ul>\n\n\t<menu class=\"bottom\">\n\t\t<a *ngIf=\"!model.id\" class=\"btn btn-back\" routerLink=\"/texts/view\">zurück</a>\t\n\t\t<button type=\"button\" *ngIf=\"model.id\" class=\"btn btn-back\" (click)=\"back()\">zurück</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit\" [disabled]=\"!form.form.valid\">{{submitLabel}}</button>\n\t\t<a *ngIf=\"model.id\" class=\"btn btn-delete\" [routerLink]=\"['/text/delete/', model.id, 'current']\">Text / Hilfe löschen</a>\n\t</menu>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/text/text-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__text__ = __webpack_require__("../../../../../src/app/text/text.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_abstract_template_form__ = __webpack_require__("../../../../../src/app/core/abstract-template-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TextFormComponent = (function (_super) {
    __extends(TextFormComponent, _super);
    function TextFormComponent(alertService, location) {
        var _this = _super.call(this, alertService) || this;
        _this.alertService = alertService;
        _this.location = location;
        _this.formErrors = {
            'path': '',
            'text': '',
            'help': '',
        };
        _this.validationMessages = {
            'path': {
                'required': 'Bitte gib einen Pfad ein.',
                'pattern': 'Der Name darf nur aus Buchstaben, Zahlen, Leerzeichen und folgenden Sonderzeichen bestehen: "_", "-", ".", ":", ","',
            },
            'text': {},
            'help': {},
        };
        return _this;
    }
    ;
    TextFormComponent.prototype.handleServerError = function (error) {
        (error === 'Item not changed') &&
            (this.setError('global', 'Die Daten waren nicht anders als zuvor. Hast Du etwas geändert? Dann ist ein Fehler aufgetreten.'));
    };
    ;
    TextFormComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return TextFormComponent;
}(__WEBPACK_IMPORTED_MODULE_3__core_abstract_template_form__["a" /* AbstractTemplateForm */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__text__["a" /* Text */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__text__["a" /* Text */]) === "function" && _a || Object)
], TextFormComponent.prototype, "model", void 0);
TextFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'text-form',
        template: __webpack_require__("../../../../../src/app/text/text-form.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _c || Object])
], TextFormComponent);

var _a, _b, _c;
//# sourceMappingURL=text-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/text/text-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__text_create_component__ = __webpack_require__("../../../../../src/app/text/text-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__text_edit_component__ = __webpack_require__("../../../../../src/app/text/text-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__texts_view_component__ = __webpack_require__("../../../../../src/app/text/texts-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TextRoutingModule = (function () {
    function TextRoutingModule() {
    }
    return TextRoutingModule;
}());
TextRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild([
                { path: 'text/create', component: __WEBPACK_IMPORTED_MODULE_3__text_create_component__["a" /* TextCreateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
                { path: 'text/edit/:id/:version', component: __WEBPACK_IMPORTED_MODULE_4__text_edit_component__["a" /* TextEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
                { path: 'texts/view', component: __WEBPACK_IMPORTED_MODULE_5__texts_view_component__["a" /* TextsViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], TextRoutingModule);

//# sourceMappingURL=text-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/text/text.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__text_routing_module__ = __webpack_require__("../../../../../src/app/text/text-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__text_create_component__ = __webpack_require__("../../../../../src/app/text/text-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__text_form_component__ = __webpack_require__("../../../../../src/app/text/text-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__text_edit_component__ = __webpack_require__("../../../../../src/app/text/text-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__texts_view_component__ = __webpack_require__("../../../../../src/app/text/texts-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TextModule = (function () {
    function TextModule() {
    }
    return TextModule;
}());
TextModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__text_routing_module__["a" /* TextRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__text_create_component__["a" /* TextCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_4__text_form_component__["a" /* TextFormComponent */],
            __WEBPACK_IMPORTED_MODULE_5__text_edit_component__["a" /* TextEditComponent */],
            __WEBPACK_IMPORTED_MODULE_6__texts_view_component__["a" /* TextsViewComponent */],
        ],
    })
], TextModule);

//# sourceMappingURL=text.module.js.map

/***/ }),

/***/ "../../../../../src/app/text/text.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Text; });
var Text = (function () {
    function Text() {
    }
    return Text;
}());

//# sourceMappingURL=text.js.map

/***/ }),

/***/ "../../../../../src/app/text/texts-view.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Texte / Hilfen</h1>\n\n<text-view [path]=\"'texts-view'\"></text-view>\n\n<ul class=\"items\">\n\t<li *ngFor=\"let item of items\">\n\t\t<ng-container *ngIf=\"auth.admin\">\n\t\t\t{{item.path}}\n\t\t\t<menu class=\"assoc\">\n\t\t\t<a class=\"btn btn-edit\" [routerLink]=\"['/text/edit', item.id, 'current']\">bearbeiten</a>\n\t\t\t<a class=\"btn btn-delete\" [routerLink]=\"['/text/delete', item.id, 'current']\">löschen</a>\n\t\t\t</menu>\n\t\t</ng-container>\n\t</li>\n</ul>\n\n<menu class=\"bottom\">\n\t<a class=\"btn btn-back\" routerLink=\"/dashboard\">zurück</a>\n\t<a class=\"btn btn-create\" routerLink=\"/text/create\">Text / Hilfe anlegen</a>\n</menu>\n"

/***/ }),

/***/ "../../../../../src/app/text/texts-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextsViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TextsViewComponent = (function () {
    function TextsViewComponent(olmService, alertService, location) {
        this.olmService = olmService;
        this.alertService = alertService;
        this.location = location;
        this.id = -1;
        this.items = [];
        this.auth = {};
    }
    TextsViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
        this.olmService.apiReadAll('text')
            .subscribe(function (result) {
            _this.items = result;
        });
    };
    TextsViewComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return TextsViewComponent;
}());
TextsViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'texts-view',
        template: __webpack_require__("../../../../../src/app/text/texts-view.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_olm_service__["a" /* OlmService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _c || Object])
], TextsViewComponent);

var _a, _b, _c;
//# sourceMappingURL=texts-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user-create.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Benutzer einladen</h1>\n\n<text-view [path]=\"'user-create'\"></text-view>\n\n<user-form [model]=\"model\" [parent]=\"this\" [submitLabel]=\"submitLabel\"></user-form>\n"

/***/ }),

/***/ "../../../../../src/app/user/user-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/user/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_form_component__ = __webpack_require__("../../../../../src/app/user/user-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserCreateComponent = (function () {
    function UserCreateComponent(route, olmService, alertService, router) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
        this.submitLabel = 'Benutzer einladen';
    }
    UserCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.olmService.apiCreate('user', this.model)
            .subscribe(function (result) {
            _this.router.navigate(['/dashboard']);
            _this.alertService.success("Daten gespeichert.");
        }, function (error) {
            _this.form.handleServerError(error);
        });
    };
    ;
    return UserCreateComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__user_form_component__["a" /* UserFormComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__user_form_component__["a" /* UserFormComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_form_component__["a" /* UserFormComponent */]) === "function" && _a || Object)
], UserCreateComponent.prototype, "form", void 0);
UserCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user-create',
        template: __webpack_require__("../../../../../src/app/user/user-create.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object])
], UserCreateComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Benutzer bearbeiten</h1>\n\n<text-view [path]=\"'user-edit'\"></text-view>\n\n<user-form [model]=\"model\" [parent]=\"this\" [submitLabel]=\"submitLabel\"></user-form>\n"

/***/ }),

/***/ "../../../../../src/app/user/user-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("../../../../../src/app/user/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_form_component__ = __webpack_require__("../../../../../src/app/user/user-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserEditComponent = (function () {
    function UserEditComponent(route, olmService, alertService, router, location) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.location = location;
        this.id = -1;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]();
        this.submitLabel = 'Änderungen speichern';
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            _this.id = params['id'];
            return _this.olmService.apiRead('user', params['id'], 'current');
        })
            .subscribe(function (result) {
            _this.model = result;
            _this.model.password = '';
        });
    };
    ;
    UserEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.olmService.apiUpdate('user', this.model.id, this.model)
            .subscribe(function (result) {
            if (_this.form.auth.admin) {
                _this.alertService.success("Daten gespeichert.");
            }
            else {
                _this.router.navigate(['/door']);
                _this.alertService.success("Daten gespeichert. Bitte logge Dich mit Deinen neuen Daten ein.");
            }
        }, function (error) {
            _this.form.handleServerError(error);
        });
    };
    ;
    UserEditComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return UserEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__user_form_component__["a" /* UserFormComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__user_form_component__["a" /* UserFormComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_form_component__["a" /* UserFormComponent */]) === "function" && _a || Object)
], UserEditComponent.prototype, "form", void 0);
UserEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user-edit',
        template: __webpack_require__("../../../../../src/app/user/user-edit.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_olm_service__["a" /* OlmService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _f || Object])
], UserEditComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=user-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"parent.onSubmit()\" #form=\"ngForm\">\n\t<ul>\n\t\t<li>\n\t\t\t<label for=\"username\">Username</label>\n\t\t\t<input\n\t\t\t\t\ttype=\"text\"\n\t\t \t\t\tid=\"username\"\n\t\t\t\t\tname=\"username\"\n\t\t \t\t\t[(ngModel)]=\"model.username\"\n\t\t \t\t\t#username=\"ngModel\"\n\t\t \t\t\tpattern=\"^[A-Za-z0-9ÄÖÜäöüß_\\-:,\\.]+$\"\n\t\t \t\t\tmaxlength=\"100\"\n\t\t\t\t\tminlength=\"5\"\n\t\t\t\t\trequired />\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.username\">{{formErrors.username}}</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<label for=\"email\">Email</label>\n\t\t\t<input\n\t\t\t\t\ttype=\"email\"\n\t\t \t\t\tid=\"email\"\n\t\t\t\t\tname=\"email\"\n\t\t \t\t\t[(ngModel)]=\"model.email\"\n\t\t \t\t\t#email=\"ngModel\"\n\t\t \t\t\tpattern=\"^[a-zA-Z0-9.\\-_]+@charite.de$\"\n\t\t\t\t\tmaxlength=\"100\"\n\t\t \t\t\tminlength=\"5\"\n\t\t\t\t\trequired />\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.email\">{{formErrors.email}}</div>\n\t\t</li>\n\t\t<li *ngIf=\"auth?.admin && model?.roles\">\n\t\t\t<label for=\"roles\">Rolle</label>\n\t\t\t<select\n\t\t\t\t\ttype=\"roles\"\n\t\t \t\t\tid=\"roles\"\n\t\t\t\t\tname=\"roles\"\n\t\t \t\t\t[(ngModel)]=\"model.roles\"\n\t\t \t\t\t#role=\"ngModel\"\n\t\t \t\t\tmultiple\n\t\t\t\t\trequired>\n\t\t\t\t<option [ngValue]=\"'ROLE_USER'\">Benutzer</option>\n\t\t\t\t<option [ngValue]=\"'ROLE_ADMIN'\">Admin</option>\n\t\t\t</select>\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.roles\">{{formErrors.roles}}</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<label for=\"password\">Neues Passwort</label>\n\t\t\t<input\n\t\t\t\t\ttype=\"password\"\n\t\t \t\t\tid=\"password\"\n\t\t\t\t\tname=\"password\"\n\t\t \t\t\t[(ngModel)]=\"model.password\"\n\t\t \t\t\t#password=\"ngModel\"\n\t\t \t\t\tmaxlength=\"100\"\n\t\t\t\t\tminlength=\"5\"\n\t\t\t\t\trequired />\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.password\">{{formErrors.password}}</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<label for=\"repeat\">Passwort wiederholen</label>\n\t\t\t<input\n\t\t\t\t\ttype=\"password\"\n\t\t \t\t\tid=\"repeat\"\n\t\t\t\t\tname=\"repeat\"\n\t\t \t\t\t[(ngModel)]=\"model.repeat\"\n\t\t \t\t\t#repeat=\"ngModel\"\n\t\t \t\t\tmaxlength=\"100\"\n\t\t\t\t\tminlength=\"5\"\n\t\t\t\t\trequired />\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.repeat\">{{ formErrors.repeat }}</div>\n\t\t</li>\n\t\t<li *ngIf=\"auth?.admin\">\n\t\t\t<hr />\n\t\t\t<p>\n\t\t\t\tVorgeschlagener Name: {{ suggestedname }}<br />\n\t\t\t\tVorgeschlagenes Passwort: {{ suggestedpassword }}\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tFür die Mail an den Benutzer:\n\t\t\t</p>\n\t\t\t<pre>\nHallo .... ,\n\nIch habe Deine Zugangsdaten für Dich zurückgesetzt.\n\nDu kannst Dich nun mit dem Benutzernamen {{ suggestedname }} und Passwort {{ suggestedpassword }} einloggen.\n\nViel Spaß und liebe Grüße,\n\n\t\t\t</pre>\n\t\t\t<hr />\n\t\t</li>\n\t\t<li *ngIf=\"!auth?.admin\">\n\t\t\t<label *ngIf=\"model.id\" for=\"check\">Dein derzeitiges Passwort</label>\n\t\t\t<input\n\t\t\t\t\ttype=\"password\"\n\t\t \t\t\tid=\"check\"\n\t\t\t\t\tname=\"check\"\n\t\t \t\t\t[(ngModel)]=\"model.check\"\n\t\t \t\t\t#check=\"ngModel\"\n\t\t \t\t\tmaxlength=\"100\"\n\t\t\t\t\tminlength=\"3\"\n\t\t\t\t\trequired />\n\t\t\t<div class=\"dtls\" *ngIf=\"formErrors.check\">{{ formErrors.check }}</div>\n\t\t</li>\n\t</ul>\n\n\t<menu class=\"bottom\">\n\t\t<a *ngIf=\"!model.id\" class=\"btn btn-back\" routerLink=\"/dashboard\">zurück</a>\t\n\t\t<button type=\"button\" *ngIf=\"model.id\" class=\"btn btn-back\" (click)=\"back()\">zurück</button>\n\t\t<button *ngIf=\"auth?.admin\" type=\"button\" class=\"btn btn-primary\" (click)=\"setSuggested()\">Vorgeschlagenen Namen / Passwort setzen</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit\" [disabled]=\"!form.form.valid\">{{submitLabel}}</button>\n\t\t<a *ngIf=\"model.id\" class=\"btn btn-delete\" [routerLink]=\"['/user/delete/', model.id, 'current']\">Account löschen</a>\n\t</menu>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/user/user-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/user/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_abstract_template_form__ = __webpack_require__("../../../../../src/app/core/abstract-template-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserFormComponent = (function (_super) {
    __extends(UserFormComponent, _super);
    function UserFormComponent(alertService, olmService, location) {
        var _this = _super.call(this, alertService) || this;
        _this.alertService = alertService;
        _this.olmService = olmService;
        _this.location = location;
        _this.suggestedname = '';
        _this.suggestedpassword = '';
        _this.initialised = false;
        _this.formErrors = {
            'username': '',
            'email': '',
            'roles': '',
            'password': '',
            'check': '',
            'repeat': '',
        };
        _this.validationMessages = {
            'username': {
                'required': 'Bitte gib einen Benutzernamen ein.',
                'pattern': 'Der Name darf nur aus Buchstaben, Zahlen und folgenden Sonderzeichen bestehen: "_", "-", ".", ":", ","',
                'minlength': 'Der Name muss mindestend 5 Zeichen lang sein.',
                'maxlength': 'Der Name darf maximal 100 Zeichen lang sein.',
                'exists': 'Es gibt schon einen Benutzer mit diesem Namen.',
            },
            'email': {
                'required': 'Bitte gib eine Email-Adresse ein.',
                'pattern': 'Die Adresse muss deine @charite.de-Adresse sein.',
                'minlength': 'Die Emailadresse muss mindestend 5 Zeichen lang sein.',
                'maxlength': 'Die Emailadresse darf maximal 100 Zeichen lang sein.',
                'exists': 'Es gibt schon einen Benutzer mit dieser Emailadresse. Hast Du Dein Passwort vergessen? Du kannst es zurücksetzen!',
            },
            'roles': {
                'required': 'Bitte ordne dem Nutzer eine Rolle zu.',
            },
            'password': {
                'required': 'Bitte gib ein Passwort ein.',
                'pattern': '...',
                'minlength': 'Das Passwort muss mindestend 5 Zeichen lang sein.',
                'maxlength': 'Das Passwort darf maximal 100 Zeichen lang sein.',
                'does-not-match': 'Die Passwörter stimmen nicht überein.',
            },
            'repeat': {
                'required': 'Bitte wiederhole das Passwort.',
                'pattern': '...',
                'minlength': 'Das Passwort muss mindestend 5 Zeichen lang sein.',
                'maxlength': 'Das Passwort darf maximal 100 Zeichen lang sein.',
                'does-not-match': 'Die Passwörter stimmen nicht überein.',
            },
            'check': {
                'required': 'Bitte gib dein derzeitiges Passwort ein.',
                'pattern': '...',
                'minlength': 'Das Passwort muss mindestend 5 Zeichen lang sein.',
                'maxlength': 'Das Passwort darf maximal 100 Zeichen lang sein.',
                'wrong': 'Bitte gib hier dein derzeitiges(!) Passwort ein',
            },
        };
        return _this;
    }
    ;
    UserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
    };
    ;
    UserFormComponent.prototype.ngOnChanges = function () {
        if (this.model.id) {
            this.validationMessages.check.required = this.validationMessages.check.wrong;
            if (!this.initialised) {
                this.initialised = true;
                this.prepareSuggestions();
                this.model.check = '';
            }
        }
    };
    ;
    UserFormComponent.prototype.handleServerError = function (error) {
        (error === 'Item not changed') &&
            (this.setError('global', 'Die Daten waren nicht anders als zuvor. Hast Du etwas geändert? Dann ist ein Fehler aufgetreten.'));
        (error === 'Invalid request') &&
            (this.setError('global', 'Der Server sagt, dass irgend etwas mit den Daten nicht stimmt.'));
        (error === 'Passwords do not match') &&
            (this.setError('password', 'does-not-match'));
        (error === 'Username exists') &&
            (this.setError('username', 'exists'));
        (error === 'Email exists') &&
            (this.setError('email', 'exists'));
        (error === 'Wrong password') &&
            (this.setError('check', 'wrong'));
    };
    ;
    UserFormComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    UserFormComponent.prototype.prepareSuggestions = function () {
        //let s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        //this.suggestedpassword = Array(6).join().split(',').map(function() { return s.charAt(Math.floor(Math.random() * s.length)); }).join('');
        this.suggestedname = this.model.username;
        this.suggestedpassword = 'olmen_' + this.suggestedname.substr(0, 2);
        var index = this.model.username.indexOf('@charite.de');
        if (index !== -1) {
            this.suggestedname = this.model.username.substring(0, index);
        }
    };
    UserFormComponent.prototype.setSuggested = function () {
        this.model.username = this.suggestedname;
        this.model.password = this.suggestedpassword;
        this.model.repeat = this.suggestedpassword;
    };
    ;
    return UserFormComponent;
}(__WEBPACK_IMPORTED_MODULE_3__core_abstract_template_form__["a" /* AbstractTemplateForm */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]) === "function" && _a || Object)
], UserFormComponent.prototype, "model", void 0);
UserFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user-form',
        template: __webpack_require__("../../../../../src/app/user/user-form.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_olm_service__["a" /* OlmService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _d || Object])
], UserFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_create_component__ = __webpack_require__("../../../../../src/app/user/user-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_edit_component__ = __webpack_require__("../../../../../src/app/user/user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_view_component__ = __webpack_require__("../../../../../src/app/user/users-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UserRoutingModule = (function () {
    function UserRoutingModule() {
    }
    return UserRoutingModule;
}());
UserRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild([
                { path: 'user/create', component: __WEBPACK_IMPORTED_MODULE_3__user_create_component__["a" /* UserCreateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
                { path: 'user/edit/:id', component: __WEBPACK_IMPORTED_MODULE_4__user_edit_component__["a" /* UserEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
                { path: 'users/view', component: __WEBPACK_IMPORTED_MODULE_5__users_view_component__["a" /* UsersViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_olm_service__["a" /* OlmService */]] },
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], UserRoutingModule);

//# sourceMappingURL=user-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_routing_module__ = __webpack_require__("../../../../../src/app/user/user-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_create_component__ = __webpack_require__("../../../../../src/app/user/user-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_form_component__ = __webpack_require__("../../../../../src/app/user/user-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_edit_component__ = __webpack_require__("../../../../../src/app/user/user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_view_component__ = __webpack_require__("../../../../../src/app/user/users-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__user_routing_module__["a" /* UserRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__user_create_component__["a" /* UserCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_4__user_form_component__["a" /* UserFormComponent */],
            __WEBPACK_IMPORTED_MODULE_5__user_edit_component__["a" /* UserEditComponent */],
            __WEBPACK_IMPORTED_MODULE_6__users_view_component__["a" /* UsersViewComponent */],
        ],
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/user/users-view.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Benutzer</h1>\n\n<text-view [path]=\"'users-view'\"></text-view>\n\n<form>\n<ul>\n\t<li>\n\t\t<label for=\"searchbox\">\"Magisches Finde-Feld\":</label>\n\t\t<input\n\t\t\t\ttype=\"text\"\n\t \t\t\tid=\"searchbox\"\n\t\t\t\tname=\"searchbox\"\n\t\t\t\t#searchbox\n\t\t\t\t(keyup)=\"search(searchbox.value)\"\n\t\t\t\t/>\n\t</li>\n</ul>\n</form>\n\n<ul class=\"items\">\n\t<li *ngFor=\"let item of items | async\">\n\t\t<strong>{{item.username}}</strong> (<em>{{item.email}}</em>, {{getRoles(item)}})\n\t\t<menu>\n\t\t<ng-container *ngIf=\"auth.admin\">\n\t\t\t<a class=\"btn btn-edit\" [routerLink]=\"['/user/edit', item.id]\">bearbeiten</a>\n\t\t\t<a class=\"btn btn-delete\" [routerLink]=\"['/user/delete', item.id, 'current']\">löschen</a>\n\t\t</ng-container>\n\t\t</menu>\n\t</li>\n</ul>\n\n<menu class=\"bottom\">\n\t<a class=\"btn btn-back\" routerLink=\"/dashboard\">zurück</a>\n\t<a class=\"btn btn-delete\" routerLink=\"/inactiveusers/delete/0/0\">!Inaktive Benutzer löschen!</a>\n</menu>\n"

/***/ }),

/***/ "../../../../../src/app/user/users-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_olm_service__ = __webpack_require__("../../../../../src/app/services/olm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var UsersViewComponent = (function () {
    function UsersViewComponent(route, olmService, alertService, router, location) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.location = location;
        this.auth = {};
        this.searchTerm = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
    }
    UsersViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
        this.items = this.searchTerm
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) {
            return term
                ? _this.getResults(term)
                : __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of([]);
        });
    };
    UsersViewComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    UsersViewComponent.prototype.search = function (term) {
        this.searchTerm.next(term);
    };
    ;
    UsersViewComponent.prototype.getResults = function (term) {
        if (term.length <= 3) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of([]);
        }
        ;
        return this.olmService.apiReadUsersBySearchTerm(term);
    };
    ;
    UsersViewComponent.prototype.getRoles = function (item) {
        return item.roles.join(', ');
    };
    ;
    return UsersViewComponent;
}());
UsersViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'users-view',
        template: __webpack_require__("../../../../../src/app/user/users-view.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_olm_service__["a" /* OlmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_olm_service__["a" /* OlmService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _e || Object])
], UsersViewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=users-view.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    server_url: 'http://api-test.olmen.de',
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map