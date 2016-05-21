/**
 * Created by vinay on 5/9/2016.
 */

import {Injectable} from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()

export class LoginService {

    private server = "http://localhost:3030";
    constructor(private _http: Http) {}

    login(email, pass) {
        var data = JSON.stringify({
            email: email,
            pass: pass
        });
        // var params = "json="+data;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.post(this.server+'/user/login', data, {
            headers: headers
        }).map( res=> res.json() );
    }
}