/**
 * Created by vinay on 5/7/2016.
 */


import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from "@angular/router-deprecated";
import {IdeaListComponent} from "./idea-list.component";
import {IdeaService} from "./services/idea.service";

@Component({
    selector: 'idea-lists',
    template: `
        <idea-list *ngFor="let idea of ideas" [idea]="idea">hello</idea-list>
        <a [routerLink]="['NewIdea']" style="" class="add-button btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
    `,
    directives: [IdeaListComponent, ROUTER_DIRECTIVES],
    providers: [IdeaService],
    styles: [`
        .card .card-action a:not(.btn):not(.btn-large):not(.btn-floating) {
            color: #3f51b5;
        }
        .add-button{
            bottom: 10px;
            right: 10px;
            position: fixed;
            z-index: 2;
        }
    `]
})
export class IdeaListsComponent implements OnInit{

    public ideas: any[];

    ngOnInit(): any{
        this.getIdeas();
    }
    constructor(private _ideaService: IdeaService, private _router: Router) {}


    getIdeas() {
        this._ideaService.getAllIdea()
            .subscribe(
                data => {
                    this.ideas = data.ideas;
                },
                error => {
                    if(JSON.parse(error._body).error){
                        localStorage.removeItem('_t');
                        alert("Your login session has been expired, login again");
                        this._router.navigate(['Login']);
                    }
                },
                () => ""
            );
    }
}
