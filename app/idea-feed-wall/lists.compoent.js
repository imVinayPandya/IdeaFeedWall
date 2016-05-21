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
var ListComponent = (function () {
    function ListComponent() {
    }
    ListComponent = __decorate([
        core_1.Component({
            selector: 'idea-lists',
            template: "\n    <div class=\"container\">\n        <div class=\"row\">\n        <div class=\"col s12\">\n          <div class=\"card\">\n            <div class=\"card-content\">\n              <span class=\"card-title grey-text text-darken-4\">Card Titlee<!--<i class=\"material-icons right\">more_vert</i>--></span>\n              <p>I am a very simple card. I am good at containing small bits of information.\n              I am convenient because I require little markup to use effectively.</p>\n            </div>\n            <div class=\"card-action\">\n              <a href=\"#\"><i class=\"material-icons \">thumb_up</i></a>\n              <a href=\"#\"><i class=\"material-icons\">comment</i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>     \n    ",
            styles: ["\n        .card .card-action a:not(.btn):not(.btn-large):not(.btn-floating) {\n            color: #3f51b5;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlkZWEtZmVlZC13YWxsL2xpc3RzLmNvbXBvZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7OztBQUdILHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQTZCMUM7SUFBQTtJQUE2QixDQUFDO0lBM0I5QjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUscXhCQWtCVDtZQUNELE1BQU0sRUFBRSxDQUFDLDZIQUlSLENBQUM7U0FDTCxDQUFDOztxQkFBQTtJQUMyQixvQkFBQztBQUFELENBQTdCLEFBQThCLElBQUE7QUFBakIscUJBQWEsZ0JBQUksQ0FBQSIsImZpbGUiOiJpZGVhLWZlZWQtd2FsbC9saXN0cy5jb21wb2VudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHZpbmF5IG9uIDUvNy8yMDE2LlxyXG4gKi9cclxuXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpZGVhLWxpc3RzJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgczEyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJkLXRpdGxlIGdyZXktdGV4dCB0ZXh0LWRhcmtlbi00XCI+Q2FyZCBUaXRsZWU8IS0tPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyByaWdodFwiPm1vcmVfdmVydDwvaT4tLT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHA+SSBhbSBhIHZlcnkgc2ltcGxlIGNhcmQuIEkgYW0gZ29vZCBhdCBjb250YWluaW5nIHNtYWxsIGJpdHMgb2YgaW5mb3JtYXRpb24uXHJcbiAgICAgICAgICAgICAgSSBhbSBjb252ZW5pZW50IGJlY2F1c2UgSSByZXF1aXJlIGxpdHRsZSBtYXJrdXAgdG8gdXNlIGVmZmVjdGl2ZWx5LjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBcIj50aHVtYl91cDwvaT48L2E+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+Y29tbWVudDwvaT48L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+ICAgICBcclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgLmNhcmQgLmNhcmQtYWN0aW9uIGE6bm90KC5idG4pOm5vdCguYnRuLWxhcmdlKTpub3QoLmJ0bi1mbG9hdGluZykge1xyXG4gICAgICAgICAgICBjb2xvcjogIzNmNTFiNTtcclxuICAgICAgICB9XHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCB7IH1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
