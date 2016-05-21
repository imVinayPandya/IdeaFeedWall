/**
 * Created by vinay on 5/7/2016.
 */

import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()

export class IdeaService {

    private server = "http://localhost:3030";
    constructor(private _http: Http) {

    }

    getIdeaByIdWithFullDetails(ideaId) {
        // Parameters obj-
       /* let params: URLSearchParams = new URLSearchParams();
        params.set('id', ideaId);*/

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'bearer '+localStorage.getItem('_t') );
        return this._http.get(this.server+'/idea/'+ideaId, {
            headers: headers
        }).map(res => res.json());
    }
    
    likeIdea(contentId){
        /*Promise.resolve(IDEAS)
         .then(
         (ideas: Idea[]) => ideas.push(newIdea)
         );*/

        var data = JSON.stringify({
            contentId: contentId
        });
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'bearer '+localStorage.getItem('_t') );

        return this._http.post(this.server+'/idea/like', data, {
            headers: headers
        }).map( res=> res.json() );
    }

    addComment(value){

        var data = JSON.stringify(value);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'bearer '+localStorage.getItem('_t') );

        return this._http.post(this.server+'/idea/comment/add', data, {
            headers: headers
        }).map( res=> res.json() );
    }

    getAllIdea() {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'bearer '+localStorage.getItem('_t') );
        return this._http.get(this.server+'/idea/', {
            headers: headers
        }).map(res => res.json());
    }

    insertIdea(newIdea: any){
        var data = JSON.stringify(newIdea);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'bearer '+localStorage.getItem('_t') );

        return this._http.post(this.server+'/idea/add', data, {
            headers: headers
        }).map( res=> res.json() );
    }
}