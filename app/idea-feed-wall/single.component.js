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
var idea_service_1 = require("./services/idea.service");
var common_1 = require("@angular/common");
var router_deprecated_1 = require("@angular/router-deprecated");
var comment_list_component_1 = require("./comment-list.component");
var SingleIdeaComponent = (function () {
    function SingleIdeaComponent(_ideaService, _routerParams, _router, _formBuilder) {
        this._ideaService = _ideaService;
        this._routerParams = _routerParams;
        this._router = _router;
        this._formBuilder = _formBuilder;
        this.author = {
            _id: "",
            firstName: "",
            lstName: ""
        };
        this.idea = {
            author: this.author,
            likes: [],
            comments: []
        };
        this.thumbColor = "indigo";
        this.commentColor = "indigo";
        this.showComment = false;
    }
    SingleIdeaComponent.prototype.ngOnInit = function () {
        //console.log(this._routerParams.get("id"));
        this.getAllIdeaDetails(this._routerParams.get("id"));
        this.myForm = this._formBuilder.group({
            'comment': ["", common_1.Validators.required],
        });
    };
    SingleIdeaComponent.prototype.onSubmit = function (value) {
        var _this = this;
        console.log("add comment");
        value.contentId = this._routerParams.get("id");
        this._ideaService.addComment(value)
            .subscribe(function (data) {
            //console.log(JSON.stringify(data));
            _this.idea = data.idea;
            _this.myForm.controls['comment'].updateValue('');
        }, function (error) { return alert('Error to reach server'); }, function () { return ""; });
    };
    SingleIdeaComponent.prototype.getAllIdeaDetails = function (ideaId) {
        var _this = this;
        this._ideaService.getIdeaByIdWithFullDetails(ideaId)
            .subscribe(function (data) {
            _this.idea = data.idea;
            //console.log(this.idea);
        }, function (error) {
            if (JSON.parse(error._body).error) {
                localStorage.removeItem('_t');
                alert("Your login session has been expired, login again");
                _this._router.navigate(['Login']);
            }
        }, function () { return ""; });
    };
    SingleIdeaComponent.prototype.likeIdea = function (event, ideaId) {
        var _this = this;
        event.preventDefault();
        this._ideaService.likeIdea(ideaId)
            .subscribe(function (data) {
            _this.thumbColor = "green";
            console.log('liked');
            console.log(JSON.stringify(data));
            _this.idea = data.like;
        }, function (error) {
            console.log(JSON.stringify(error));
            /*if(JSON.parse(error._body).success == false){
             alert(JSON.stringify(JSON.parse(error._body).msg));
             }*/
        }, function () { return ""; });
    };
    SingleIdeaComponent.prototype.toggle = function () {
        event.preventDefault();
        this.showComment = !this.showComment;
        this.commentColor = this.showComment ? "green" : "indigo";
    };
    SingleIdeaComponent = __decorate([
        core_1.Component({
            selector: 'single-idea',
            template: "\n      <div class=\"row\">\n      <a [routerLink]=\"['Ideas']\" class=\"waves-effect waves-light btn\"><i class=\"material-icons left\">list</i>Back</a>\n        <div class=\"col s12\">\n          <div class=\"card\">\n            <div class=\"card-content\">\n              <span class=\"card-title grey-text text-darken-4\">{{idea.title}}<!--<i class=\"material-icons right\">more_vert</i>--></span>\n              <p class=\"flow-text\">{{idea.content}}</p>\n            </div>\n            <div class=\"card-action\">\n              <a href=\"\" [style.color] = \"idea.userLiked ? 'green' : thumbColor \" (click)=\"likeIdea($event, idea._id)\"><i class=\"material-icons\">thumb_up</i> {{idea.likes.length}}</a>\n              <a href=\"\" [style.color] = \"commentColor\" (click)=\"toggle()\"><i class=\"material-icons\">comment</i> {{idea.comments.length}}</a>\n              <p class=\"right\">By: {{idea.author.firstName}} {{idea.author.lastName}}</p>\n            </div>\n          </div>\n          \n          \n          <form *ngIf=\"showComment\" class=\"col s12\" [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit(myForm.value)\">\n            <div class=\"row\">\n                <p>Add your Comment/suggestion here</p>\n            </div>\n            <div class=\"row\">\n              <div class=\"input-field col s12\">\n                <textarea id=\"userDesc\" class=\"materialize-textarea\" placeholder=\"Comment\" length=\"120\" [ngFormControl]=\"myForm.controls['comment']\"></textarea>\n              </div>\n            </div>\n             <div class=\"row\">\n              <div class=\"input-field col s12\">\n                <button type=\"submit\" class=\"waves-effect waves-light btn\" [class.disabled]=\"!myForm.valid\" [disabled]=\"!myForm.valid\">Add Comment</button>\n              </div>\n            </div>\n          </form>\n          \n          <comment-list *ngFor=\"let comment of idea.comments\" [comment]=\"comment\"></comment-list>\n        </div>\n      </div>  \n    ",
            providers: [idea_service_1.IdeaService],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, comment_list_component_1.CommentListComponent]
        }), 
        __metadata('design:paramtypes', [idea_service_1.IdeaService, router_deprecated_1.RouteParams, router_deprecated_1.Router, common_1.FormBuilder])
    ], SingleIdeaComponent);
    return SingleIdeaComponent;
}());
exports.SingleIdeaComponent = SingleIdeaComponent;
//# sourceMappingURL=single.component.js.map