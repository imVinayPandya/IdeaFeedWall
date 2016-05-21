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
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'idea-header',
            template: "        \n        <div class=\"intro indigo lighten-1 z-depth-1\">\n            <h1 class=\"grey-text text-lighten-5\">Idea Feed Wall</h1>\n        </div>\n    ",
            styles: ["\n        .intro\n        {\n            text-align: center;\n            padding-top: 1%;\n            padding-bottom: 1%;\n            margin-bottom: 50px;\n        }\n    \n        .intro h1\n        {\n            font-weight: 900;\n            text-transform: uppercase;\n        }\n    \n        .intro h5\n        {\n            text-transform: uppercase;\n            background-color: #f5f5f5;\n            padding: 10px;\n            color: #333333;\n            display: inline-block;\n            font-size: 1.2rem;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map