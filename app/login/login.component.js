/**
 * Created by vinay on 5/8/2016.
 */
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
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_deprecated_1 = require("@angular/router-deprecated");
var login_service_1 = require("./services/login.service");
var LoginComponent = (function () {
    function LoginComponent(_loginService, _router, _formBuilder) {
        this._loginService = _loginService;
        this._router = _router;
        this._formBuilder = _formBuilder;
        this.error = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.myForm = this._formBuilder.group({
            'uname': ["", common_1.Validators.required],
            'pass': ["", common_1.Validators.required]
        });
    };
    LoginComponent.prototype.onSubmit = function (value) {
        var _this = this;
        if (value.pass && value.uname) {
            this._loginService.login(value.uname, value.pass)
                .subscribe(function (data) {
                localStorage.setItem('_t', data.token);
                _this._router.navigate(['Ideas']);
            }, function (error) {
                if (JSON.parse(error._body).success == false) {
                    alert(JSON.stringify(JSON.parse(error._body).msg));
                }
            }, function () { return ""; });
        }
        else {
            this.error = true;
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "leaf-login",
            template: "        \n     <div class=\"row\">\n     <h1>Login</h1>\n     <div *ngIf=\"error\" class=\"error\">Check your password</div>\n      <form class=\"col s4\" [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit(myForm.value)\">\n       <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input id=\"userName\" type=\"text\"  placeholder=\"Name\" [ngFormControl]=\"myForm.controls['uname']\" >\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input id=\"password\" type=\"password\" placeholder=\"Password\" [ngFormControl]=\"myForm.controls['pass']\">\n          </div>\n        </div>\n         <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <button type=\"submit\" class=\"waves-effect waves-light btn\" [class.disabled]=\"!myForm.valid\" [disabled]=\"!myForm.valid\">Login</button>\n          </div>\n        </div>\n      </form>\n    </div>\n    ",
            providers: [login_service_1.LoginService],
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_deprecated_1.Router, common_1.FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map