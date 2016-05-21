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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var IdeaService = (function () {
    function IdeaService(_http) {
        this._http = _http;
        this.server = "http://localhost:3030";
    }
    IdeaService.prototype.getIdeaByIdWithFullDetails = function (ideaId) {
        // Parameters obj-
        /* let params: URLSearchParams = new URLSearchParams();
         params.set('id', ideaId);*/
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'bearer ' + localStorage.getItem('_t'));
        return this._http.get(this.server + '/idea/' + ideaId, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    IdeaService.prototype.likeIdea = function (contentId) {
        /*Promise.resolve(IDEAS)
         .then(
         (ideas: Idea[]) => ideas.push(newIdea)
         );*/
        var data = JSON.stringify({
            contentId: contentId
        });
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'bearer ' + localStorage.getItem('_t'));
        return this._http.post(this.server + '/idea/like', data, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    IdeaService.prototype.addComment = function (value) {
        var data = JSON.stringify(value);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'bearer ' + localStorage.getItem('_t'));
        return this._http.post(this.server + '/idea/comment/add', data, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    IdeaService.prototype.getAllIdea = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'bearer ' + localStorage.getItem('_t'));
        return this._http.get(this.server + '/idea/', {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    IdeaService.prototype.insertIdea = function (newIdea) {
        var data = JSON.stringify(newIdea);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'bearer ' + localStorage.getItem('_t'));
        return this._http.post(this.server + '/idea/add', data, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    IdeaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], IdeaService);
    return IdeaService;
}());
exports.IdeaService = IdeaService;
//# sourceMappingURL=idea.service.js.map