/**
 * Created by vinay on 5/7/2016.
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
var idea_list_component_1 = require("./idea-list.component");
var idea_service_1 = require("./services/idea.service");
var IdeaListsComponent = (function () {
    function IdeaListsComponent(_ideaService, _router) {
        this._ideaService = _ideaService;
        this._router = _router;
    }
    IdeaListsComponent.prototype.ngOnInit = function () {
        this.getIdeas();
    };
    IdeaListsComponent.prototype.getIdeas = function () {
        var _this = this;
        this._ideaService.getAllIdea()
            .subscribe(function (data) {
            _this.ideas = data.ideas;
        }, function (error) {
            if (JSON.parse(error._body).error) {
                localStorage.removeItem('_t');
                alert("Your login session has been expired, login again");
                _this._router.navigate(['Login']);
            }
        }, function () { return ""; });
    };
    IdeaListsComponent = __decorate([
        core_1.Component({
            selector: 'idea-lists',
            template: "\n        <idea-list *ngFor=\"let idea of ideas\" [idea]=\"idea\">hello</idea-list>\n        <a [routerLink]=\"['NewIdea']\" style=\"\" class=\"add-button btn-floating btn-large waves-effect waves-light red\"><i class=\"material-icons\">add</i></a>\n    ",
            directives: [idea_list_component_1.IdeaListComponent, router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [idea_service_1.IdeaService],
            styles: ["\n        .card .card-action a:not(.btn):not(.btn-large):not(.btn-floating) {\n            color: #3f51b5;\n        }\n        .add-button{\n            bottom: 10px;\n            right: 10px;\n            position: fixed;\n            z-index: 2;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [idea_service_1.IdeaService, router_deprecated_1.Router])
    ], IdeaListsComponent);
    return IdeaListsComponent;
}());
exports.IdeaListsComponent = IdeaListsComponent;
//# sourceMappingURL=idea-lists.compoent.js.map