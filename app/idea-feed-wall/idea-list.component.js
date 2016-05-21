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
var idea_service_1 = require("./services/idea.service");
var router_deprecated_1 = require("@angular/router-deprecated");
var single_component_1 = require("./single.component");
var IdeaListComponent = (function () {
    function IdeaListComponent(_ideaService, _router) {
        this._ideaService = _ideaService;
        this._router = _router;
        this.thumbColor = "indigo";
        this.commentColor = "indigo";
    }
    IdeaListComponent.prototype.likeIdea = function (event, ideaId) {
        var _this = this;
        event.preventDefault();
        this._ideaService.likeIdea(ideaId)
            .subscribe(function (data) {
            _this.thumbColor = "green";
            _this.idea = data.like;
            console.log('liked');
            console.log(JSON.stringify(data));
        }, function (error) {
            console.log(JSON.stringify(error));
            /*if(JSON.parse(error._body).success == false){
                alert(JSON.stringify(JSON.parse(error._body).msg));
            }*/
        }, function () { return ""; });
    };
    IdeaListComponent.prototype.comment = function (event, ideaId) {
        event.preventDefault();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], IdeaListComponent.prototype, "idea", void 0);
    IdeaListComponent = __decorate([
        core_1.Component({
            selector: 'idea-list',
            template: "\n      <div class=\"row\">\n        <div class=\"col s12\">\n          <div class=\"card\">\n            <div class=\"card-content\" [routerLink]=\"['Idea', {id: idea._id}]\" >\n              <span class=\"card-title grey-text text-darken-4\" >{{idea.title}}<!--<i class=\"material-icons right\">more_vert</i>--></span>\n              <p>{{idea.content | slice:0:100}}</p>\n            </div>\n            <div class=\"card-action\">\n              <a href=\"\" [style.color] = \"idea.userLiked ? 'green' : thumbColor \" (click)=\"likeIdea($event, idea._id)\"><i class=\"material-icons\">thumb_up</i> {{idea.likes.length}}</a>\n              <a href=\"\" [style.color] = \"commentColor\" (click)=\"comment($event, idea._id)\"><i class=\"material-icons\">comment</i>{{idea.comments.length}}</a>\n              <p class=\"right\">By: {{idea.author.firstName}} {{idea.author.lastName}}</p>\n            </div>\n          </div>\n        </div>\n      </div> \n    ",
            providers: [idea_service_1.IdeaService],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, single_component_1.SingleIdeaComponent],
            styles: ["\n        .liked {\n            color: green;\n        }\n        \n        .notLiked {\n            color: indigo;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [idea_service_1.IdeaService, router_deprecated_1.Router])
    ], IdeaListComponent);
    return IdeaListComponent;
}());
exports.IdeaListComponent = IdeaListComponent;
//# sourceMappingURL=idea-list.component.js.map