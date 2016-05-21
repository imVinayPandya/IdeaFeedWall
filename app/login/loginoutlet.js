/**
 * Created by vinay on 5/8/2016.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var LoginOutLet = (function (_super) {
    __extends(LoginOutLet, _super);
    function LoginOutLet(_viewContainerRef, _loader, _parentRouter, nameAttr) {
        _super.call(this, _viewContainerRef, _loader, _parentRouter, nameAttr);
        this.parentRouter = _parentRouter;
        // The Boolean following each route below denotes whether the route requires authentication to view
        this.publicRoutes = {
            'login': true
        };
    }
    LoginOutLet.prototype.activate = function (instruction) {
        var url = instruction.urlPath;
        if (!this.publicRoutes[url] && !localStorage.getItem('_t')) {
            // todo: redirect to Login, may be there a better way?
            this.parentRouter.navigate(['Login']);
        }
        if (this.publicRoutes[url] && localStorage.getItem('_t')) {
            this.parentRouter.navigate(['Ideas']);
        }
        return _super.prototype.activate.call(this, instruction);
    };
    LoginOutLet = __decorate([
        core_1.Directive({
            selector: "leaf-login-outlet"
        }),
        __param(3, core_1.Attribute('name')), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.DynamicComponentLoader, router_deprecated_1.Router, String])
    ], LoginOutLet);
    return LoginOutLet;
}(router_deprecated_1.RouterOutlet));
exports.LoginOutLet = LoginOutLet;
//# sourceMappingURL=loginoutlet.js.map