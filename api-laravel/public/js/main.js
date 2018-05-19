(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/albbum-create/albbum-create.component.css":
/*!***********************************************************!*\
  !*** ./src/app/albbum-create/albbum-create.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/albbum-create/albbum-create.component.html":
/*!************************************************************!*\
  !*** ./src/app/albbum-create/albbum-create.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n      <h1>Novo Album</h1>\n    </div>\n  \n    <div class=\"col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"name\">Nome</label>\n        <input type=\"text\" id=\"name\" placeholder=\"Entre com o nome\" class=\"form-control\"\n         [(ngModel)]=\"name\">\n         {{ name }}\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <button class=\"btn btn-primary\" (click)=\"create()\" >Criar</button>\n    </div>\n\n    \n  </div>\n  "

/***/ }),

/***/ "./src/app/albbum-create/albbum-create.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/albbum-create/albbum-create.component.ts ***!
  \**********************************************************/
/*! exports provided: AlbbumCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbbumCreateComponent", function() { return AlbbumCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlbbumCreateComponent = /** @class */ (function () {
    function AlbbumCreateComponent(http, router) {
        this.http = http;
        this.router = router;
        this.name = '';
    }
    AlbbumCreateComponent.prototype.ngOnInit = function () {
    };
    AlbbumCreateComponent.prototype.create = function () {
        var _this = this;
        this.http.post('http://localhost:8000/api/albums', { name: this.name })
            .subscribe(function (data) { return _this.router.navigate(['albums']); });
    };
    AlbbumCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-albbum-create',
            template: __webpack_require__(/*! ./albbum-create.component.html */ "./src/app/albbum-create/albbum-create.component.html"),
            styles: [__webpack_require__(/*! ./albbum-create.component.css */ "./src/app/albbum-create/albbum-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AlbbumCreateComponent);
    return AlbbumCreateComponent;
}());



/***/ }),

/***/ "./src/app/albbum-list/albbum-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/albbum-list/albbum-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/albbum-list/albbum-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/albbum-list/albbum-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h1>Meus Albums</h1>\n  </div>\n\n  <div class=\"col-md-12\">\n    <Button class=\"btn btn-primary \" [routerLink]=\"['create']\">Criar Album</Button>\n  </div>\n  <br />\n\n  <div class=\"col-md-3 card\" *ngFor=\"let album of albums\">\n    <div class=\"card-body\">\n        <h3>\n          <a [routerLink]=\"[album.id, 'photos', 'create']\">{{ album.name }}</a>\n        </h3>\n    </div>\n     \n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/albbum-list/albbum-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/albbum-list/albbum-list.component.ts ***!
  \******************************************************/
/*! exports provided: AlbbumListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbbumListComponent", function() { return AlbbumListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlbbumListComponent = /** @class */ (function () {
    function AlbbumListComponent(http) {
        this.http = http;
        this.albums = [];
    }
    //http://localhost:8000
    AlbbumListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8000/api/albums')
            .subscribe(function (data) { return _this.albums = data; });
    };
    AlbbumListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-albbum-list',
            template: __webpack_require__(/*! ./albbum-list.component.html */ "./src/app/albbum-list/albbum-list.component.html"),
            styles: [__webpack_require__(/*! ./albbum-list.component.css */ "./src/app/albbum-list/albbum-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AlbbumListComponent);
    return AlbbumListComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _albbum_list_albbum_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./albbum-list/albbum-list.component */ "./src/app/albbum-list/albbum-list.component.ts");
/* harmony import */ var _albbum_create_albbum_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./albbum-create/albbum-create.component */ "./src/app/albbum-create/albbum-create.component.ts");
/* harmony import */ var _photo_create_photo_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photo-create/photo-create.component */ "./src/app/photo-create/photo-create.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: 'albums', component: _albbum_list_albbum_list_component__WEBPACK_IMPORTED_MODULE_3__["AlbbumListComponent"] },
    { path: 'albums/create', component: _albbum_create_albbum_create_component__WEBPACK_IMPORTED_MODULE_4__["AlbbumCreateComponent"] },
    { path: 'albums/:album/photos/create', component: _photo_create_photo_create_component__WEBPACK_IMPORTED_MODULE_5__["PhotoCreateComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _albbum_list_albbum_list_component__WEBPACK_IMPORTED_MODULE_3__["AlbbumListComponent"],
                _albbum_create_albbum_create_component__WEBPACK_IMPORTED_MODULE_4__["AlbbumCreateComponent"],
                _photo_create_photo_create_component__WEBPACK_IMPORTED_MODULE_5__["PhotoCreateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes, { useHash: true }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/photo-create/photo-create.component.css":
/*!*********************************************************!*\
  !*** ./src/app/photo-create/photo-create.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/photo-create/photo-create.component.html":
/*!**********************************************************!*\
  !*** ./src/app/photo-create/photo-create.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n      <h1>Incluir Foto para o Album: {{ album?.name }}</h1>\n    </div>\n  \n    <div class=\"col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"name\">Nome </label>\n        <input type=\"text\" id=\"name\" placeholder=\"Entre com o nome\" class=\"form-control\"\n         [(ngModel)]=\"name\">\n         {{ name }}\n      </div>\n      <div class=\"form-group\">\n        <label for=\"file_name\">Imagem </label>\n        <input type=\"file\" id=\"file_name\" (change)=\"handleFile($event.target.files[0])\">\n         {{ name }}\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <button class=\"btn btn-primary\" (click)=\"upload()\" >Fazer Upload</button>\n    </div>\n\n    \n  </div>\n  "

/***/ }),

/***/ "./src/app/photo-create/photo-create.component.ts":
/*!********************************************************!*\
  !*** ./src/app/photo-create/photo-create.component.ts ***!
  \********************************************************/
/*! exports provided: PhotoCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoCreateComponent", function() { return PhotoCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhotoCreateComponent = /** @class */ (function () {
    function PhotoCreateComponent(http, route) {
        this.http = http;
        this.route = route;
        this.name = '';
        this.album = null;
        this.file = null;
    }
    PhotoCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getAlbum(params['album']);
        });
    };
    PhotoCreateComponent.prototype.handleFile = function (file) {
        this.file = file;
    };
    PhotoCreateComponent.prototype.getAlbum = function (albumId) {
        var _this = this;
        this.http.get('http://localhost:8000/api/albums/' + albumId)
            .subscribe(function (data) { return _this.album = data; });
    };
    PhotoCreateComponent.prototype.upload = function () {
        var formData = new FormData();
        formData.append('name', this.name);
        formData.append('file_name', this.file);
        this.http.post('http://localhost:8000/api/albums/' + this.album.id + '/photos', formData)
            .subscribe(function (data) { return alert('upload de photos feito com sucesso!'); });
        // POST /1/photos
    };
    PhotoCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photo-create',
            template: __webpack_require__(/*! ./photo-create.component.html */ "./src/app/photo-create/photo-create.component.html"),
            styles: [__webpack_require__(/*! ./photo-create.component.css */ "./src/app/photo-create/photo-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PhotoCreateComponent);
    return PhotoCreateComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/osvaldoabel/projects/learn/SON/serie-laravel-angular-ionic/angular-spa/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map