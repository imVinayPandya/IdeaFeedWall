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
var common_1 = require("@angular/common");
var idea_service_1 = require("./services/idea.service");
var router_deprecated_1 = require("@angular/router-deprecated");
var AddIdeaComponent = (function () {
    function AddIdeaComponent(_ideaService, _router, _formBuilder) {
        this._ideaService = _ideaService;
        this._router = _router;
        this._formBuilder = _formBuilder;
    }
    AddIdeaComponent.prototype.ngOnInit = function () {
        //this.newContact = {firstName: "", lastName: this._routeParams.get("lastName"), phone: "", email: ""};
        this.myForm = this._formBuilder.group({
            'title': ["", common_1.Validators.required],
            'content': ["", common_1.Validators.required],
        });
    };
    AddIdeaComponent.prototype.onSubmit = function (value) {
        var _this = this;
        this._ideaService.insertIdea(value)
            .subscribe(function (data) {
            _this._router.navigate(['Ideas']);
        }, function (error) { return alert('Error to reach server'); }, function () { return ""; });
    };
    AddIdeaComponent = __decorate([
        core_1.Component({
            selector: 'idea-add',
            template: "        \n     <div class=\"row\">\n      <a [routerLink]=\"['Ideas']\" class=\"waves-effect waves-light btn\"><i class=\"material-icons left\">list</i>Back</a>\n      <form class=\"col s12\" [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit(myForm.value)\">\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input id=\"userIdea\" type=\"text\"  placeholder=\"Title\" [ngFormControl]=\"myForm.controls['title']\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <textarea id=\"userDesc\" class=\"materialize-textarea\" placeholder=\"Description\" length=\"120\" [ngFormControl]=\"myForm.controls['content']\"></textarea>\n          </div>\n        </div>\n         <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <button type=\"submit\" class=\"waves-effect waves-light btn\" [class.disabled]=\"!myForm.valid\" [disabled]=\"!myForm.valid\">SUBMIT</button>\n          </div>\n        </div>\n      </form>\n    </div>\n    ",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [idea_service_1.IdeaService],
            styles: ["\n       \n    "]
        }), 
        __metadata('design:paramtypes', [idea_service_1.IdeaService, router_deprecated_1.Router, common_1.FormBuilder])
    ], AddIdeaComponent);
    return AddIdeaComponent;
}());
exports.AddIdeaComponent = AddIdeaComponent;
//# sourceMappingURL=add-idea.component.js.map