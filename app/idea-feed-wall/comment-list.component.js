/**
 * Created by vinay on 5/14/2016.
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
var CommentListComponent = (function () {
    function CommentListComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CommentListComponent.prototype, "comment", void 0);
    CommentListComponent = __decorate([
        core_1.Component({
            selector: 'comment-list',
            template: "\n        <ul class=\"collection\">\n            <li class=\"collection-item avatar\">\n              <img src=\"http://materializecss.com/images/yuna.jpg\" alt=\"\" class=\"circle\">\n              <span class=\"title\">{{comment.user_id.firstName}} {{comment.user_id.lastName}}</span>\n              <p>{{comment.comment}}<br>\n                 Second Line\n              </p>\n              <a href=\"#!\" class=\"secondary-content\"><i class=\"material-icons\">edit</i></a>\n            </li>\n        </ul>\n    ",
            directives: [],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], CommentListComponent);
    return CommentListComponent;
}());
exports.CommentListComponent = CommentListComponent;
//# sourceMappingURL=comment-list.component.js.map