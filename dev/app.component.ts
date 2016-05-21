/**
 * Created by vinay on 5/6/2016.
 */

import { Component, OnInit } from '@angular/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES } from "@angular/router-deprecated";
import {IdeaListsComponent} from "./idea-feed-wall/idea-lists.compoent";
import {HeaderComponent} from "./idea-feed-wall/header.component";
import {AddIdeaComponent} from "./idea-feed-wall/add-idea.component";
import {LoginOutLet} from "./login/loginoutlet";
import {LoginComponent} from "./login/login.component";
import {SingleIdeaComponent} from "./idea-feed-wall/single.component";


@Component({
    selector: 'my-app',
    template: `
        <idea-header></idea-header>
        <div class="container">
            <!--<router-outlet></router-outlet>-->
            <leaf-login-outlet></leaf-login-outlet>
        </div> 
        <footer class="page-footer">
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright by Leaf
            </div>
          </div>
        </footer>
    `,
    directives: [IdeaListsComponent, HeaderComponent, IdeaListsComponent, ROUTER_DIRECTIVES, LoginOutLet]
    
})
@RouteConfig([

    {path: '/ideas', name: 'Ideas', component: IdeaListsComponent, useAsDefault: true },
    {path: '/idea/:id', name: 'Idea', component: SingleIdeaComponent},
    {path: '/add',  name: 'NewIdea', component: AddIdeaComponent},
    {path: '/login', name: 'Login',  component: LoginComponent}
])
export class AppComponent implements OnInit{
    constructor(private _router: Router) {}

    ngOnInit() {
        //this._router.navigate(['/ideas']);
    }
}
