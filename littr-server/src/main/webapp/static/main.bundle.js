webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_view_friends_view_friends_component__ = __webpack_require__("./src/app/components/view-friends/view-friends.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_create_post_create_post_component__ = __webpack_require__("./src/app/components/create-post/create-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_update_cat_update_cat_component__ = __webpack_require__("./src/app/components/update-cat/update-cat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modules


// Components





var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'view-friends', component: __WEBPACK_IMPORTED_MODULE_2__components_view_friends_view_friends_component__["a" /* ViewFriendsComponent */] },
    { path: 'create-post', component: __WEBPACK_IMPORTED_MODULE_3__components_create_post_create_post_component__["a" /* CreatePostComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'update-cat', component: __WEBPACK_IMPORTED_MODULE_5__components_update_cat_update_cat_component__["a" /* UpdateCatComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Components are called by their selector -->\n<app-nav></app-nav>\n\n<div class=\"container-fluid\">\n  <!-- This is where our route is injected -->\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Littr';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_nav_nav_component__ = __webpack_require__("./src/app/components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_view_friends_view_friends_component__ = __webpack_require__("./src/app/components/view-friends/view-friends.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_create_post_create_post_component__ = __webpack_require__("./src/app/components/create-post/create-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_friend_service__ = __webpack_require__("./src/app/services/friend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_post_service__ = __webpack_require__("./src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_update_cat_update_cat_component__ = __webpack_require__("./src/app/components/update-cat/update-cat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_cat_service__ = __webpack_require__("./src/app/services/cat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modules



// Routing

// Components





// Client







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_view_friends_view_friends_component__["a" /* ViewFriendsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_create_post_create_post_component__["a" /* CreatePostComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_update_cat_update_cat_component__["a" /* UpdateCatComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_friend_service__["a" /* FriendService */],
                __WEBPACK_IMPORTED_MODULE_11__services_post_service__["a" /* PostService */],
                __WEBPACK_IMPORTED_MODULE_14__services_cat_service__["a" /* CatService */],
                __WEBPACK_IMPORTED_MODULE_15__services_login_service__["a" /* LoginService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/create-post/create-post.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/create-post/create-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"panel-heading\">\n      <span class=\"label label-default label-center\">{{title}}</span>\n  </div>\n  <div class=\"panel-body\">\n  <div class=\"list-group\">\n      <div class=\"list-group-item list-group-item-demo\">\n             <div class=\"form-group\">\n                  <input [(ngModel)]=\"createdPost.text\" placeholder=\"Post Text\" class=\"form-control\"/>\n             </div>\n      </div>\n      <div>\n          <button class=\"btn btn-primary btn-center\" (click)=\"post()\">Post</button>\n      </div>\n      <div>\n          {{clientMessage.message}}\n      </div>\n  </div>\n</div>\n<div class=\"panel-footer\">\n</div>"

/***/ }),

/***/ "./src/app/components/create-post/create-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_post_model__ = __webpack_require__("./src/app/models/post.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("./src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_clientMessage_model__ = __webpack_require__("./src/app/models/clientMessage.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreatePostComponent = /** @class */ (function () {
    function CreatePostComponent(postService) {
        this.postService = postService;
        this.title = 'Post Maker';
        //cat for testing
        //koushka: Cat = new Cat(1520, 'koushka', 'p4ssw0rd',
        //        'koushla','koushka@gmail.com','such purr')
        this.createdPost = new __WEBPACK_IMPORTED_MODULE_1__models_post_model__["a" /* Post */](1, null, null, null, '');
        this.clientMessage = new __WEBPACK_IMPORTED_MODULE_3__models_clientMessage_model__["a" /* ClientMessage */]('', false);
    }
    CreatePostComponent.prototype.ngOnInit = function () {
    };
    CreatePostComponent.prototype.post = function () {
        var _this = this;
        console.log("executing post");
        console.log("post: " + this.createdPost.text);
        this.postService.createPost(this.createdPost).subscribe(function (data) { return _this.clientMessage = data; }, function (error) { return _this.clientMessage.message = 'SOMETHING WENT WRONG'; });
    };
    CreatePostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-post',
            template: __webpack_require__("./src/app/components/create-post/create-post.component.html"),
            styles: [__webpack_require__("./src/app/components/create-post/create-post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]])
    ], CreatePostComponent);
    return CreatePostComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"panel-heading\">\n      <span class=\"label label-default label-center\">{{title}}</span>\n  </div>\n  <div class=\"panel-body\">\n  <div class=\"list-group\">\n      <div class=\"list-group-item list-group-item-demo\">\n        <div class=\"form-group\">\n             <input [(ngModel)]=\"cat.username\" placeholder=\"Username\" class=\"form-control\"/>\n        </div>\n        <div class=\"form-group\">\n             <input [(ngModel)]=\"cat.password\" placeholder=\"Password\" class=\"form-control\" type=\"password\"/>\n        </div>\n      </div>\n      <div>\n          <button class=\"btn btn-primary btn-center\" (click)=\"login()\">Login</button>\n          <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a><br />\n          <a [routerLink]=\"['/password-token']\" class=\"btn btn-link\">Forgot your password?</a>\n      </div>\n      <div *ngIf=\"catData\">\n          {{ catData.username }}\n      </div>\n      <div *ngIf=\"clientMessage.message\">\n          {{ clientMessage.message }}\n      </div>\n  </div>\n</div>\n<div class=\"panel-footer\">\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_cat_model__ = __webpack_require__("./src/app/models/cat.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_clientMessage_model__ = __webpack_require__("./src/app/models/clientMessage.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.title = "Login";
        this.cat = new __WEBPACK_IMPORTED_MODULE_2__models_cat_model__["a" /* Cat */](0, "", "", "", "", "", null);
        this.catData = new __WEBPACK_IMPORTED_MODULE_2__models_cat_model__["a" /* Cat */](0, "", "", "", "", "", null);
        this.clientMessage = new __WEBPACK_IMPORTED_MODULE_3__models_clientMessage_model__["a" /* ClientMessage */]("", false);
    }
    LoginComponent.prototype.logout = function () {
        this.loginService.logout();
        this.router.navigateByUrl("/login");
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login(this.cat).subscribe(function (data) {
            console.log(data);
            if (data.hasOwnProperty("username")) {
                _this.catData = data;
                sessionStorage.setItem("loggedCat", JSON.stringify(_this.catData));
                _this.clientMessage.success;
                console.log(JSON.parse(sessionStorage.getItem("loggedCat")).username);
                _this.router.navigateByUrl("/home");
            }
            else if (data.hasOwnProperty("message")) {
                _this.clientMessage.message = data.message;
            }
            else {
                _this.clientMessage.message = "Invalid";
            }
        }, function (error) {
            _this.clientMessage.message = "Something went wrong";
            console.log(_this.cat);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"navbar-header\">\n\t\t\t<div class=\"navbar-header\">\n\t\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n\t\t\t\t  <span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t  <span class=\"icon-bar\"></span>\n\t\t\t\t  <span class=\"icon-bar\"></span>\n\t\t\t\t  <span class=\"icon-bar\"></span>\n\t\t\t\t</button>\n\t\t\t\t<a class=\"navbar-brand\" routerLink=\"/\"><strong>Littr</strong></a>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n\t\t\t\t<li><a routerLink=\"/register\">Register</a></li>\n\t\t\t\t<li><a routerLink=\"/update-cat\">Update Cat</a></li>\n\t\t\t\t<li><a routerLink=\"/view-friends\">Friends</a></li>\n\t\t\t\t<li><a routerLink=\"/all\">Search</a></li>\n\t\t\t\t<li><a routerLink=\"/logout\">Logout</a></li>\n      </ul>\n\t\t</div>\n\t\t</div>\n</nav>"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/components/nav/nav.component.css")]
        })
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"panel-heading\">\n      <span class=\"label label-default label-center\">{{title}}</span>\n  </div>\n  <div class=\"panel-body\">\n  <div class=\"list-group\">\n      <div class=\"list-group-item list-group-item-demo\">\n             <div class=\"form-group\">\n                  <input [(ngModel)]=\"cat.catName\" placeholder=\"Your Cat's Name\" class=\"form-control\" />\n                  <input [(ngModel)]=\"cat.username\" placeholder=\"Username\" class=\"form-control\" />\n                  <input [(ngModel)]=\"cat.password\" placeholder=\"Password?\" type=\"password\" class=\"form-control\" />\n                  <input [(ngModel)]=\"repeatPassword\" placeholder=\"Repeat Password?\" type=\"password\" class=\"form-control\" />\n                  <input [(ngModel)]=\"cat.email\" placeholder=\"Email?\" class=\"form-control\" />\n             </div>\n             <div>\n                 <button class=\"btn btn-primary btn-center\" (click)=\"registerCat()\">Register</button>\n             </div>\n             <div ng-if=\"clientMessage.success\">\n                 {{ clientMessage.message }}\n             </div>\n      </div>\n  </div>\n</div>\n<div class=\"panel-footer\">\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cat_service__ = __webpack_require__("./src/app/services/cat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_cat_model__ = __webpack_require__("./src/app/models/cat.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_clientMessage_model__ = __webpack_require__("./src/app/models/clientMessage.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    //Constructor Injection
    function RegisterComponent(catService) {
        this.catService = catService;
        this.title = 'Register Cat';
        //For data binding
        this.cat = new __WEBPACK_IMPORTED_MODULE_2__models_cat_model__["a" /* Cat */](0, '', '', '', '', null, null);
        //To message the user
        this.clientMessage = new __WEBPACK_IMPORTED_MODULE_3__models_clientMessage_model__["a" /* ClientMessage */]('', false);
    }
    RegisterComponent.prototype.registerCat = function () {
        var _this = this;
        console.log(this.cat.catName);
        this.catService.registerCat(this.cat)
            .subscribe(function (data) { return _this.clientMessage = data; }, function (responseError) { return _this.clientMessage = responseError.error; });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cat_service__["a" /* CatService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/update-cat/update-cat.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/update-cat/update-cat.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"panel-heading\">\n      <span class=\"label label-default label-center\">{{title}}</span>\n  </div>\n  <div class=\"panel-body\">\n  <div class=\"list-group\">\n      <div class=\"list-group-item list-group-item-demo\">\n             <div class=\"form-group\">\n                  <input [(ngModel)]=\"this.cat.catName\" placeholder=\"Your Cat's Name\" class=\"form-control\" />\n                  <input [(ngModel)]=\"this.cat.bio\" placeholder=\"Bio\" class=\"form-control\" />\n                  <input [(ngModel)]=\"this.cat.username\" placeholder=\"Username\" class=\"form-control\" />\n                  <input [(ngModel)]=\"this.cat.email\" placeholder=\"Email?\" class=\"form-control\" />\n             </div>\n             <div>\n                 <button class=\"btn btn-primary btn-center\" (click)=\"updateCat(cat)\">Update</button>\n             </div>\n             <div *ngIf=\"clientMessage !== undefined\">\n                 {{ clientMessage.message }}\n             </div>\n      </div>\n  </div>\n</div>\n<div class=\"panel-footer\">\n</div>"

/***/ }),

/***/ "./src/app/components/update-cat/update-cat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateCatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cat_service__ = __webpack_require__("./src/app/services/cat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_clientMessage_model__ = __webpack_require__("./src/app/models/clientMessage.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateCatComponent = /** @class */ (function () {
    //Constructor Injection
    function UpdateCatComponent(catService) {
        this.catService = catService;
        this.title = 'Update Cat';
        this.cat = JSON.parse(sessionStorage.getItem("loggedCat"));
        this.clientMessage = new __WEBPACK_IMPORTED_MODULE_2__models_clientMessage_model__["a" /* ClientMessage */]('', false);
    }
    UpdateCatComponent.prototype.ngOnInit = function () {
        this.getCatInfo();
    };
    UpdateCatComponent.prototype.getCatInfo = function () {
        var _this = this;
        console.log("calling update method");
        this.catService.getCat(this.cat)
            .subscribe(function (data) { return _this.cat = data; }, function (responseError) { return _this.clientMessage = responseError.error; });
    };
    UpdateCatComponent.prototype.updateCat = function (cat) {
        var _this = this;
        console.log("service layer about to call STS");
        this.catService.updateCat(this.cat)
            .subscribe(function (data) { return _this.clientMessage = data; }, function (responseError) { return _this.clientMessage = responseError.error; });
    };
    UpdateCatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-update-cat',
            template: __webpack_require__("./src/app/components/update-cat/update-cat.component.html"),
            styles: [__webpack_require__("./src/app/components/update-cat/update-cat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cat_service__["a" /* CatService */]])
    ], UpdateCatComponent);
    return UpdateCatComponent;
}());



/***/ }),

/***/ "./src/app/components/view-friends/view-friends.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/view-friends/view-friends.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 col-md-offset-2\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h3 class=\"text-center\">{{title}}</h3>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"panel-group\">\n        <div *ngFor=\"let friendship of friendships\" class=\"panel panel-default\">\n          <div class=\"panel-body\">\n            <div>friendship.catA.catName</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel-footer\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/view-friends/view-friends.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewFriendsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_friend_service__ = __webpack_require__("./src/app/services/friend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewFriendsComponent = /** @class */ (function () {
    function ViewFriendsComponent(friendService) {
        this.friendService = friendService;
        this.title = 'Friends';
    }
    ViewFriendsComponent.prototype.ngOnInit = function () {
        // this.friendships[0] = new Friendship(
        //   new Cat(1, 'Atlas', 'atlas', 'password', 'atlas@gmail.com', 'img'),
        //   new Cat(1, 'Kouska', 'kouska', 'password', 'koushka@gmail.com', 'img'),
        //   1,
        //   'timestamp'
        // );
    };
    ViewFriendsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-friends',
            template: __webpack_require__("./src/app/components/view-friends/view-friends.component.html"),
            styles: [__webpack_require__("./src/app/components/view-friends/view-friends.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_friend_service__["a" /* FriendService */]])
    ], ViewFriendsComponent);
    return ViewFriendsComponent;
}());



/***/ }),

/***/ "./src/app/models/cat.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cat; });
var Cat = /** @class */ (function () {
    function Cat(id, username, password, catName, email, bio, profilePic) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.catName = catName;
        this.email = email;
        this.bio = bio;
        this.profilePic = profilePic;
    }
    return Cat;
}());



/***/ }),

/***/ "./src/app/models/clientMessage.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientMessage; });
var ClientMessage = /** @class */ (function () {
    function ClientMessage(message, success) {
        this.message = message;
        this.success = success;
    }
    return ClientMessage;
}());



/***/ }),

/***/ "./src/app/models/post.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = /** @class */ (function () {
    function Post(id, poster, timePosted, image, text) {
        this.id = id;
        this.poster = poster;
        this.timePosted = timePosted;
        this.image = image;
        this.text = text;
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/services/cat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment_prod__ = __webpack_require__("./src/environments/environment.prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CatService = /** @class */ (function () {
    function CatService(http) {
        this.http = http;
    }
    CatService.prototype.registerCat = function (cat) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__environments_environment_prod__["a" /* LITTR_URL */] + "/register", cat)
            .catch(this.handleError);
    };
    CatService.prototype.getCat = function (cat) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__environments_environment_prod__["a" /* LITTR_URL */] + "/getCat", cat)
            .catch(this.handleError);
    };
    CatService.prototype.updateCat = function (cat) {
        console.log("service layer about to call STS");
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__environments_environment_prod__["a" /* LITTR_URL */] + "/update", cat)
            .catch(this.handleError);
    };
    CatService.prototype.handleError = function (error) {
        console.log("handleError");
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.statusText);
    };
    CatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CatService);
    return CatService;
}());



/***/ }),

/***/ "./src/app/services/friend.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment_prod__ = __webpack_require__("./src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FriendService = /** @class */ (function () {
    function FriendService(http) {
        this.http = http;
    }
    FriendService.prototype.addFriend = function (cat) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__environments_environment_prod__["a" /* LITTR_URL */] + "/add-friends", cat);
    };
    FriendService.prototype.getAllFriends = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environments_environment_prod__["a" /* LITTR_URL */] + "/all-friends");
    };
    FriendService.prototype.getAllFriendships = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environments_environment_prod__["a" /* LITTR_URL */] + "/all-friendships");
    };
    FriendService.prototype.approveFriend = function (friendship) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__environments_environment_prod__["a" /* LITTR_URL */] + "/aprrove-friendships", friendship);
    };
    FriendService.prototype.denyFriend = function (friendship) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__environments_environment_prod__["a" /* LITTR_URL */] + "/delete-friendships", friendship);
    };
    FriendService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FriendService);
    return FriendService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.login = function (cat) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* LITTR_URL */] + "/login", cat)
            .catch(this.handleError);
    };
    LoginService.prototype.logout = function () {
        sessionStorage.removeItem('');
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* LITTR_URL */] + "/logout")
            .catch(this.handleError);
    };
    LoginService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.statusText);
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.createPost = function (post) {
        console.log("executing createPost");
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* LITTR_URL */] + "/submitPost", post)
            .catch(this.handleError);
    };
    PostService.prototype.viewCatPosts = function (cat) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* LITTR_URL */] + "/findAllPostByCat", cat)
            .catch(this.handleError);
    };
    PostService.prototype.editPost = function (post) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* LITTR_URL */] + "/editPost", post)
            .catch(this.handleError);
    };
    PostService.prototype.handleError = function (error) {
        console.log("handleError");
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.statusText);
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export environment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LITTR_URL; });
var environment = {
    production: true
};
var LITTR_URL = 'http://ec2-54-209-177-177.compute-1.amazonaws.com:8080/Littr';


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LITTR_URL; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
var LITTR_URL = 'http://localhost:8085/Littr';


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["b" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map