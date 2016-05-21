/**
 * Created by vinay on 5/7/2016.
 */


import { Component, Input } from '@angular/core';
import {IdeaService} from "./services/idea.service";
import {  Router , ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {SingleIdeaComponent} from "./single.component";

@Component({
    selector: 'idea-list',
    template: `
      <div class="row">
        <div class="col s12">
          <div class="card">
            <div class="card-content" [routerLink]="['Idea', {id: idea._id}]" >
              <span class="card-title grey-text text-darken-4" >{{idea.title}}<!--<i class="material-icons right">more_vert</i>--></span>
              <p>{{idea.content | slice:0:100}}</p>
            </div>
            <div class="card-action">
              <a href="" [style.color] = "idea.userLiked ? 'green' : thumbColor " (click)="likeIdea($event, idea._id)"><i class="material-icons">thumb_up</i> {{idea.likes.length}}</a>
              <a href="" [style.color] = "commentColor" (click)="comment($event, idea._id)"><i class="material-icons">comment</i>{{idea.comments.length}}</a>
              <p class="right">By: {{idea.author.firstName}} {{idea.author.lastName}}</p>
            </div>
          </div>
        </div>
      </div> 
    `,
    providers: [IdeaService],
    directives: [ROUTER_DIRECTIVES, SingleIdeaComponent],
    styles: [`
        .liked {
            color: green;
        }
        
        .notLiked {
            color: indigo;
        }
    `]
})
export class IdeaListComponent {
    @Input() idea;
    private thumbColor = "indigo";
    private commentColor = "indigo";

    constructor(private _ideaService: IdeaService,
    private _router: Router) {}

    likeIdea(event, ideaId) {
        event.preventDefault();

        this._ideaService.likeIdea(ideaId)
            .subscribe(
                data => {
                    this.thumbColor = "green";
                    this.idea = data.like;
                    console.log('liked');
                    console.log(JSON.stringify(data));
                },
                error =>{

                    console.log(JSON.stringify(error));
                    /*if(JSON.parse(error._body).success == false){
                        alert(JSON.stringify(JSON.parse(error._body).msg));
                    }*/
                },
                () => ""
            );
    }
    comment(event, ideaId) {
        event.preventDefault();
    }
}
