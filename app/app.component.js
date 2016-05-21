/**
 * Created by vinay on 5/6/2016.
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
var core_1 = require('@angular/core');
var router_deprecated_1 = require("@angular/router-deprecated");
var idea_lists_compoent_1 = require("./idea-feed-wall/idea-lists.compoent");
var header_component_1 = require("./idea-feed-wall/header.component");
var add_idea_component_1 = require("./idea-feed-wall/add-idea.component");
var loginoutlet_1 = require("./login/loginoutlet");
var login_component_1 = require("./login/login.component");
var single_component_1 = require("./idea-feed-wall/single.component");
var AppComponent = (function () {
    function AppComponent(_router) {
        this._router = _router;
    }
    AppComponent.prototype.ngOnInit = function () {
        //this._router.navigate(['/ideas']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <idea-header></idea-header>\n        <div class=\"container\">\n            <!--<router-outlet></router-outlet>-->\n            <leaf-login-outlet></leaf-login-outlet>\n        </div> \n        <footer class=\"page-footer\">\n          <div class=\"footer-copyright\">\n            <div class=\"container\">\n            \u00A9 2014 Copyright by Leaf\n            </div>\n          </div>\n        </footer>\n    ",
            directives: [idea_lists_compoent_1.IdeaListsComponent, header_component_1.HeaderComponent, idea_lists_compoent_1.IdeaListsComponent, router_deprecated_1.ROUTER_DIRECTIVES, loginoutlet_1.LoginOutLet]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/ideas', name: 'Ideas', component: idea_lists_compoent_1.IdeaListsComponent, useAsDefault: true },
            { path: '/idea/:id', name: 'Idea', component: single_component_1.SingleIdeaComponent },
            { path: '/add', name: 'NewIdea', component: add_idea_component_1.AddIdeaComponent },
            { path: '/login', name: 'Login', component: login_component_1.LoginComponent }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map