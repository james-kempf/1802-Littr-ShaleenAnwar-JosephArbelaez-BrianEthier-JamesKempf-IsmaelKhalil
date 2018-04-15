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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_password_recovery_password_recovery_component__ = __webpack_require__("./src/app/components/password-recovery/password-recovery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_password_reset_password_reset_component__ = __webpack_require__("./src/app/components/password-reset/password-reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_search_search_component__ = __webpack_require__("./src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_update_cat_update_cat_component__ = __webpack_require__("./src/app/components/update-cat/update-cat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_logout_logout_component__ = __webpack_require__("./src/app/components/logout/logout.component.ts");
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
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_10__components_logout_logout_component__["a" /* LogoutComponent */] },
    { path: 'view-friends', component: __WEBPACK_IMPORTED_MODULE_2__components_view_friends_view_friends_component__["a" /* ViewFriendsComponent */] },
    { path: 'create-post', component: __WEBPACK_IMPORTED_MODULE_3__components_create_post_create_post_component__["a" /* CreatePostComponent */] },
    { path: 'password-recovery', component: __WEBPACK_IMPORTED_MODULE_4__components_password_recovery_password_recovery_component__["a" /* PasswordRecoveryComponent */] },
    { path: 'password-reset', component: __WEBPACK_IMPORTED_MODULE_5__components_password_reset_password_reset_component__["a" /* PasswordResetComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_6__components_search_search_component__["a" /* SearchComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'update-cat', component: __WEBPACK_IMPORTED_MODULE_8__components_update_cat_update_cat_component__["a" /* UpdateCatComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_password_recovery_password_recovery_component__ = __webpack_require__("./src/app/components/password-recovery/password-recovery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_password_reset_password_reset_component__ = __webpack_require__("./src/app/components/password-reset/password-reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_update_cat_update_cat_component__ = __webpack_require__("./src/app/components/update-cat/update-cat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_logout_logout_component__ = __webpack_require__("./src/app/components/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_search_search_component__ = __webpack_require__("./src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_friend_service__ = __webpack_require__("./src/app/services/friend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_post_service__ = __webpack_require__("./src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_password_recovery_service__ = __webpack_require__("./src/app/services/password-recovery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_cat_service__ = __webpack_require__("./src/app/services/cat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__session_custom_interceptor__ = __webpack_require__("./src/app/session/custom-interceptor.ts");
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

// Services





// Interceptors

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
                __WEBPACK_IMPORTED_MODULE_9__components_password_recovery_password_recovery_component__["a" /* PasswordRecoveryComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_password_reset_password_reset_component__["a" /* PasswordResetComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_update_cat_update_cat_component__["a" /* UpdateCatComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_logout_logout_component__["a" /* LogoutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["c" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__services_friend_service__["a" /* FriendService */],
                __WEBPACK_IMPORTED_MODULE_17__services_post_service__["a" /* PostService */],
                __WEBPACK_IMPORTED_MODULE_18__services_password_recovery_service__["a" /* PasswordRecoveryService */],
                __WEBPACK_IMPORTED_MODULE_16__services_friend_service__["a" /* FriendService */],
                __WEBPACK_IMPORTED_MODULE_17__services_post_service__["a" /* PostService */],
                __WEBPACK_IMPORTED_MODULE_19__services_cat_service__["a" /* CatService */],
                __WEBPACK_IMPORTED_MODULE_20__services_login_service__["a" /* LoginService */], {
                    provide: __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_21__session_custom_interceptor__["a" /* CustomInterceptor */],
                    multi: true
                }
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

module.exports = "<div>\n  <div class=\"panel-heading\">\n      <span class=\"label label-default label-center\">{{title}}</span>\n  </div>\n  <div class=\"panel-body\">\n  <div class=\"list-group\">\n      <div class=\"list-group-item list-group-item-demo\">\n        <div class=\"form-group\">\n             <input [(ngModel)]=\"cat.username\" placeholder=\"Username\" class=\"form-control\"/>\n        </div>\n        <div class=\"form-group\">\n             <input [(ngModel)]=\"cat.password\" placeholder=\"Password\" class=\"form-control\" type=\"password\"/>\n        </div>\n      </div>\n      <div>\n          <button class=\"btn btn-primary btn-center\" (click)=\"login()\">Login</button>\n          <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a><br />\n          <a [routerLink]=\"['/password-recovery']\" class=\"btn btn-link\">Forgot your password?</a>\n      </div>\n      <div *ngIf=\"catData\">\n          {{ catData.username }}\n      </div>\n      <div *ngIf=\"clientMessage.message\">\n          {{ clientMessage.message }}\n      </div>\n  </div>\n</div>\n<div class=\"panel-footer\">\n</div>"

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
                _this.clientMessage.message = "Invalid credientials";
            }
        }, function (error) {
            _this.clientMessage.message = "Invalid credentials";
            console.log(_this.cat);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/logout/logout.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n        \n            </div>\n            <div>\n                \n            </div>"

/***/ }),

/***/ "./src/app/components/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.loginService.logout();
        this.router.navigateByUrl("/login");
    };
    ;
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/logout/logout.component.html"),
            styles: [__webpack_require__("./src/app/components/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"navbar-header\">\n\t\t\t<div class=\"navbar-header\">\n\t\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n\t\t\t\t  <span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t  <span class=\"icon-bar\"></span>\n\t\t\t\t  <span class=\"icon-bar\"></span>\n\t\t\t\t  <span class=\"icon-bar\"></span>\n\t\t\t\t</button>\n\t\t\t\t<a class=\"navbar-brand\" routerLink=\"/\"><strong>Littr</strong></a>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n\t\t\t\t<li><a routerLink=\"/register\">Register</a></li>\n\t\t\t\t<li><a routerLink=\"/update-cat\">Update Cat</a></li>\n\t\t\t\t<li><a routerLink=\"/view-friends\">Friends</a></li>\n\t\t\t\t<li><a routerLink=\"/search\">All</a></li>\n\t\t\t\t<li><a routerLink=\"/logout\">Logout</a></li>\n      </ul>\n\t\t</div>\n\t\t</div>\n</nav>"

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

/***/ "./src/app/components/password-recovery/password-recovery.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/password-recovery/password-recovery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 col-md-offset-4\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h3 class=\"text-center\">{{title}}</h3>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"form-group\">\n        <input class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email\" />\n      </div>\n      <div class=\"form-group\">\n        <input class=\"btn btn-primary form-control\" value=\"Send Email\" (click)=\"sendEmail()\" />\n      </div>\n      <div *ngIf=\"clientMessage !== undefined\" class=\"form-group\">\n        <span>{{clientMessage.message}}</span>\n      </div>\n    </div>\n    <div class=\"panel-footer\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/password-recovery/password-recovery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordRecoveryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_password_recovery_service__ = __webpack_require__("./src/app/services/password-recovery.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PasswordRecoveryComponent = /** @class */ (function () {
    function PasswordRecoveryComponent(passwordRecoveryService) {
        this.passwordRecoveryService = passwordRecoveryService;
        this.title = 'Recover Password';
    }
    PasswordRecoveryComponent.prototype.ngOnInit = function () {
    };
    PasswordRecoveryComponent.prototype.sendEmail = function () {
        var _this = this;
        console.log(this.email);
        this.passwordRecoveryService.recoverPassword(this.email)
            .subscribe(function (data) { return _this.clientMessage = data; }, function (responseError) { return _this.clientMessage = responseError.error; });
    };
    PasswordRecoveryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-password-recovery',
            template: __webpack_require__("./src/app/components/password-recovery/password-recovery.component.html"),
            styles: [__webpack_require__("./src/app/components/password-recovery/password-recovery.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_password_recovery_service__["a" /* PasswordRecoveryService */]])
    ], PasswordRecoveryComponent);
    return PasswordRecoveryComponent;
}());



/***/ }),

/***/ "./src/app/components/password-reset/password-reset.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/password-reset/password-reset.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 col-md-offset-4\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h3 class=\"text-center\">{{title}}</h3>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"form-group\">\n        <input class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" type=\"password\" />\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" [(ngModel)]=\"repeatPassword\" placeholder=\"Repeat Password\" type=\"password\" />\n      </div>\n      <div class=\"form-group\">\n        <input class=\"btn btn-primary form-control\" value=\"Reset Password\" (click)=\"resetPassword()\" />\n      </div>\n      <div *ngIf=\"clientMessage !== undefined\" class=\"form-group\">\n        <span>{{clientMessage.message}}</span>\n      </div>\n    </div>\n    <div class=\"panel-footer\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/password-reset/password-reset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_clientMessage_model__ = __webpack_require__("./src/app/models/clientMessage.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_password_recovery_service__ = __webpack_require__("./src/app/services/password-recovery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_passwordToken_model__ = __webpack_require__("./src/app/models/passwordToken.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_cat_model__ = __webpack_require__("./src/app/models/cat.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PasswordResetComponent = /** @class */ (function () {
    function PasswordResetComponent(passwordRecoveryService, router) {
        this.passwordRecoveryService = passwordRecoveryService;
        this.router = router;
        this.title = "Reset Password";
    }
    PasswordResetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.queryParams
            .filter(function (params) { return params.token; })
            .subscribe(function (params) {
            _this.token = params.token;
            console.log(_this.token);
        });
    };
    PasswordResetComponent.prototype.resetPassword = function () {
        var _this = this;
        var passwordToken = new __WEBPACK_IMPORTED_MODULE_5__models_passwordToken_model__["a" /* PasswordToken */](new __WEBPACK_IMPORTED_MODULE_6__models_cat_model__["a" /* Cat */](0, null, this.password, null, null, null, null), this.token);
        if (this.password === this.repeatPassword) {
            this.passwordRecoveryService.resetPassword(passwordToken)
                .subscribe(function (data) { return _this.clientMessage = data; }, function (responseError) { return _this.clientMessage = responseError.error; });
        }
        else {
            this.clientMessage = new __WEBPACK_IMPORTED_MODULE_1__models_clientMessage_model__["a" /* ClientMessage */]("PASSWORD MISMATCH", false);
        }
    };
    PasswordResetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-password-reset',
            template: __webpack_require__("./src/app/components/password-reset/password-reset.component.html"),
            styles: [__webpack_require__("./src/app/components/password-reset/password-reset.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_password_recovery_service__["a" /* PasswordRecoveryService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], PasswordResetComponent);
    return PasswordResetComponent;
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

/***/ "./src/app/components/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h3 class=\"text-center\">{{title}}</h3>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"panel-group\">\n        <div *ngFor=\"let cat of cats\" class=\"panel panel-default\">\n          <div class=\"panel-body\">\n            <span>{{cat.catName}}</span>\n            <div class=\"button-group pull-right\">\n              <input class=\"btn btn-success\" type=\"button\" value=\"Add\" (click)=\"addFriend(cat)\" />\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"panel-group\">\n        <div *ngFor=\"let cat of friends\" class=\"panel panel-default\">\n          <div class=\"panel-body\">\n            <span>{{cat.catName}}</span>\n            <div class=\"button-group pull-right\">\n              <input class=\"btn btn-primary\" type=\"button\" value=\"View\" (click)=\"viewProfile(cat)\" />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel-footer\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cat_service__ = __webpack_require__("./src/app/services/cat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_friend_service__ = __webpack_require__("./src/app/services/friend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(catService, friendService) {
        this.catService = catService;
        this.friendService = friendService;
        this.title = "All Cats";
        this.cats = [];
        this.cat = JSON.parse(sessionStorage.getItem("loggedCat"));
        this.friends = [];
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.getAllCats();
    };
    SearchComponent.prototype.addFriend = function (cat) {
        var _this = this;
        console.log("adding friend");
        var pair = [cat, this.cat];
        this.friendService.addFriend(pair)
            .subscribe(function (data) {
            for (var i = 0; i < _this.cats.length; i++) {
                if (_this.cats[i] === cat) {
                    _this.cats.splice(i, i + 1);
                    break;
                }
            }
        }, function (responseError) { return _this.clientMessage = responseError.error; });
    };
    SearchComponent.prototype.getAllCats = function () {
        var _this = this;
        console.log("getting cats");
        this.catService.getAllCats()
            .subscribe(function (data) {
            _this.cats = data;
            _this.getAllFriends();
        }, function (responseError) { return _this.clientMessage = responseError.error; });
    };
    SearchComponent.prototype.getAllFriends = function () {
        var _this = this;
        console.log("getting friends");
        this.friendService.getAllFriends()
            .subscribe(function (data) {
            _this.friends = data;
            for (var i = 0; i < _this.cats.length; i++) {
                for (var j = 0; j < _this.friends.length; j++) {
                    if (_this.cats[i].id === _this.friends[j].id) {
                        _this.cats.splice(i, i + 1);
                    }
                }
            }
        }, function (responseError) { return _this.clientMessage = responseError.error; });
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/components/search/search.component.html"),
            styles: [__webpack_require__("./src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cat_service__["a" /* CatService */], __WEBPACK_IMPORTED_MODULE_2__services_friend_service__["a" /* FriendService */]])
    ], SearchComponent);
    return SearchComponent;
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
        console.log(this.cat.catName);
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

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h3 class=\"text-center\">{{title}}</h3>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"panel-group\">\n        <div *ngFor=\"let friend of friendsPending\" class=\"panel panel-default\">\n          <div class=\"panel-body\">\n            <span>{{friend.catName}}</span>\n            <div class=\"button-group pull-right\">\n              <input class=\"btn btn-success\" type=\"button\" value=\"Add\" (click)=\"approveFriendship(friend)\"/>\n              <input class=\"btn btn-danger\" type=\"button\" value=\"Remove\" (click)=\"deleteFriendship(friend)\"/> \n            </div>\n          </div>\n        </div>\n        <div *ngFor=\"let friend of friends\" class=\"panel panel-default\">\n          <div class=\"panel-body\">\n            <span>{{friend.catName}}</span>\n            <div class=\"button-group pull-right\">\n              <input class=\"btn btn-primary\" type=\"button\" value=\"View\" (click)=\"viewProfile(friend)\"/>\n              <input class=\"btn btn-danger\" type=\"button\" value=\"Remove\" (click)=\"deleteFriendship(friend)\"/> \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel-footer\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/view-friends/view-friends.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewFriendsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_friend_service__ = __webpack_require__("./src/app/services/friend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
    function ViewFriendsComponent(friendService, router) {
        this.friendService = friendService;
        this.router = router;
        this.title = 'Friends';
        this.cat = JSON.parse(sessionStorage.getItem("loggedCat"));
        this.friends = [];
        this.friendsPending = [];
        this.friendships = [];
    }
    ViewFriendsComponent.prototype.ngOnInit = function () {
        this.getFriendships();
    };
    ViewFriendsComponent.prototype.getFriendships = function () {
        var _this = this;
        this.friendService.getAllFriendships().subscribe(function (data) { return _this.setFriends(data); }, function (responseError) {
            console.log('Error: ' + responseError);
        });
    };
    ViewFriendsComponent.prototype.setFriends = function (data) {
        console.log(data);
        this.friendships = data;
        for (var i = 0; i < data.length; i++) {
            if (data[i].catA.id !== this.cat.id) {
                if (data[i].status.id === 1) {
                    this.friendsPending[this.friendsPending.length] = data[i].catA;
                }
                else {
                    this.friends[this.friends.length] = data[i].catA;
                }
            }
            else {
                if (data[i].status.id === 1) {
                    this.friendsPending[this.friendsPending.length] = data[i].catB;
                }
                else {
                    this.friends[this.friends.length] = data[i].catB;
                }
            }
        }
        console.log(this.friends);
        console.log(this.friendsPending);
    };
    ViewFriendsComponent.prototype.viewProfile = function (cat) {
        console.log(cat);
        this.router.navigateByUrl('/user?' + cat.id);
    };
    ViewFriendsComponent.prototype.approveFriendship = function (friend) {
        var _this = this;
        console.log('DELETE: ' + friend);
        for (var i = 0; i < this.friendships.length; i++) {
            if (friend == this.friendships[i].catA || friend == this.friendships[i].catB) {
                this.friendService.approveFriendship(this.friendships[i])
                    .subscribe(function (data) {
                    for (var i_1 = 0; i_1 < _this.friendsPending.length; i_1++) {
                        if (friend === _this.friendsPending[i_1]) {
                            _this.friendsPending.splice(i_1, i_1 + 1);
                            _this.friends[_this.friends.length] = friend;
                            break;
                        }
                    }
                }, function (responseError) { return _this.clientMessage = responseError.error; });
            }
        }
    };
    ViewFriendsComponent.prototype.deleteFriendship = function (friend) {
        var _this = this;
        console.log('DELETE: ' + friend);
        for (var i = 0; i < this.friendships.length; i++) {
            if (friend == this.friendships[i].catA || friend == this.friendships[i].catB) {
                this.friendService.deleteFriendship(this.friendships[i])
                    .subscribe(function (data) {
                    for (var i_2 = 0; i_2 < _this.friendsPending.length; i_2++) {
                        if (friend === _this.friendsPending[i_2]) {
                            _this.friendsPending.splice(i_2, i_2 + 1);
                            break;
                        }
                    }
                    for (var i_3 = 0; i_3 < _this.friends.length; i_3++) {
                        if (friend === _this.friends[i_3]) {
                            _this.friends.splice(i_3, i_3 + 1);
                            break;
                        }
                    }
                }, function (responseError) { return _this.clientMessage = responseError.error; });
            }
        }
    };
    ViewFriendsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-friends',
            template: __webpack_require__("./src/app/components/view-friends/view-friends.component.html"),
            styles: [__webpack_require__("./src/app/components/view-friends/view-friends.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_friend_service__["a" /* FriendService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
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

/***/ "./src/app/models/passwordToken.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordToken; });
var PasswordToken = /** @class */ (function () {
    function PasswordToken(cat, token) {
        this.cat = cat;
        this.token = token;
    }
    return PasswordToken;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
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
            .post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* LITTR_URL */] + "/register", cat)
            .catch(this.handleError);
    };
    CatService.prototype.getCat = function (cat) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* LITTR_URL */] + "/getCat", cat)
            .catch(this.handleError);
    };
    CatService.prototype.updateCat = function (cat) {
        console.log("service layer about to call STS");
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* LITTR_URL */] + "/update", cat)
            .catch(this.handleError);
    };
    CatService.prototype.getAllCats = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* LITTR_URL */] + "/all-cats")
            .catch(this.handleError);
    };
    CatService.prototype.handleError = function (error) {
        console.log("handleError");
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.statusText);
    };
    CatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
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
    FriendService.prototype.addFriend = function (cats) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* LITTR_URL */] + "/add-friendship", cats)
            .catch(this.handleError);
    };
    FriendService.prototype.getAllFriends = function () {
        console.log("Getting all friends");
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* LITTR_URL */] + "/all-friends")
            .catch(this.handleError);
    };
    FriendService.prototype.getAllFriendships = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* LITTR_URL */] + "/all-friendships")
            .catch(this.handleError);
    };
    FriendService.prototype.approveFriendship = function (friendship) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* LITTR_URL */] + "/approve-friendship", friendship)
            .catch(this.handleError);
    };
    FriendService.prototype.deleteFriendship = function (friendship) {
        console.log(friendship);
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* LITTR_URL */] + "/delete-friendship", friendship)
            .catch(this.handleError);
    };
    FriendService.prototype.handleError = function (response) {
        console.log("Catch error");
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(response);
    };
    FriendService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
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
        console.log("logout");
        sessionStorage.setItem("loggedCat", "");
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* LITTR_URL */] + "/logout")
            .catch(this.handleError);
    };
    LoginService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.statusText);
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/password-recovery.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordRecoveryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__("./src/environments/environment.prod.ts");
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





var PasswordRecoveryService = /** @class */ (function () {
    function PasswordRecoveryService(http) {
        this.http = http;
    }
    PasswordRecoveryService.prototype.recoverPassword = function (email) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* LITTR_URL */] + "/password-recovery", email)
            .catch(this.handleError);
    };
    PasswordRecoveryService.prototype.resetPassword = function (passwordToken) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* LITTR_URL */] + "/password-reset", passwordToken)
            .catch(this.handleError);
    };
    PasswordRecoveryService.prototype.handleError = function (response) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(response);
    };
    PasswordRecoveryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], PasswordRecoveryService);
    return PasswordRecoveryService;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
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
            .post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* LITTR_URL */] + "/submitPost", post)
            .catch(this.handleError);
    };
    PostService.prototype.viewCatPosts = function (cat) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* LITTR_URL */] + "/findAllPostByCat", cat)
            .catch(this.handleError);
    };
    PostService.prototype.editPost = function (post) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* LITTR_URL */] + "/editPost", post)
            .catch(this.handleError);
    };
    PostService.prototype.handleError = function (error) {
        console.log("handleError");
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.statusText);
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/session/custom-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomInterceptor = /** @class */ (function () {
    function CustomInterceptor() {
    }
    CustomInterceptor.prototype.intercept = function (request, next) {
        console.log("Suddenly");
        request = request.clone({
            withCredentials: true
        });
        return next.handle(request);
    };
    CustomInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CustomInterceptor);
    return CustomInterceptor;
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
var environment = {
    production: true
};
var LITTR_URL = 'http://ec2-54-209-177-177.compute-1.amazonaws.com:8080/Littr';


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