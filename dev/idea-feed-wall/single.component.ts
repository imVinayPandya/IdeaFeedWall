/**
 * Created by vinay on 5/14/2016.
 */

import {Component, Input, OnInit} from "@angular/core";
import {IdeaService} from "./services/idea.service";
import { ControlGroup, FormBuilder, Validators } from "@angular/common";
import { RouteParams, Router, ROUTER_DIRECTIVES } from "@angular/router-deprecated";
import {CommentListComponent} from "./comment-list.component";

@Component({
    selector: 'single-idea',
    template: `
      <div class="row">
      <a [routerLink]="['Ideas']" class="waves-effect waves-light btn"><i class="material-icons left">list</i>Back</a>
        <div class="col s12">
          <div class="card">
            <div class="card-content">
              <span class="card-title grey-text text-darken-4">{{idea.title}}<!--<i class="material-icons right">more_vert</i>--></span>
              <p class="flow-text">{{idea.content}}</p>
            </div>
            <div class="card-action">
              <a href="" [style.color] = "idea.userLiked ? 'green' : thumbColor " (click)="likeIdea($event, idea._id)"><i class="material-icons">thumb_up</i> {{idea.likes.length}}</a>
              <a href="" [style.color] = "commentColor" (click)="toggle()"><i class="material-icons">comment</i> {{idea.comments.length}}</a>
              <p class="right">By: {{idea.author.firstName}} {{idea.author.lastName}}</p>
            </div>
          </div>
          
          
          <form *ngIf="showComment" class="col s12" [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)">
            <div class="row">
                <p>Add your Comment/suggestion here</p>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <textarea id="userDesc" class="materialize-textarea" placeholder="Comment" length="120" [ngFormControl]="myForm.controls['comment']"></textarea>
              </div>
            </div>
             <div class="row">
              <div class="input-field col s12">
                <button type="submit" class="waves-effect waves-light btn" [class.disabled]="!myForm.valid" [disabled]="!myForm.valid">Add Comment</button>
              </div>
            </div>
          </form>
          
          <comment-list *ngFor="let comment of idea.comments" [comment]="comment"></comment-list>
        </div>
      </div>  
    `,
    providers: [IdeaService],
    directives: [ROUTER_DIRECTIVES, CommentListComponent]
})

export class SingleIdeaComponent implements OnInit{
    author = {
        _id: "",
        firstName: "",
        lstName: ""
    };
    private idea: any = {
        author: this.author,
        likes: [],
        comments: []
    };

    private thumbColor = "indigo";
    private commentColor = "indigo";
    private showComment:boolean = false;

    myForm: ControlGroup;

    ngOnInit() {
        //console.log(this._routerParams.get("id"));
        this.getAllIdeaDetails(this._routerParams.get("id"));
        this.myForm = this._formBuilder.group({
            'comment': ["", Validators.required],
        })
    }

    constructor(
        private _ideaService: IdeaService,
        private _routerParams: RouteParams,
        private _router: Router,
        private _formBuilder: FormBuilder){}

    onSubmit(value){
        console.log("add comment");
        value.contentId = this._routerParams.get("id");
        this._ideaService.addComment(value)
            .subscribe(
                data => {
                    //console.log(JSON.stringify(data));
                    this.idea = data.idea;
                    this.myForm.controls['comment'].updateValue('');
                },
                error => alert('Error to reach server'),
                () => ""
            );
    }

    getAllIdeaDetails(ideaId) {
        this._ideaService.getIdeaByIdWithFullDetails(ideaId)
            .subscribe(
                data => {
                    this.idea = data.idea;
                    //console.log(this.idea);
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

    likeIdea(event, ideaId) {
        event.preventDefault();

        this._ideaService.likeIdea(ideaId)
            .subscribe(
                data => {
                    this.thumbColor = "green";
                    console.log('liked');
                    console.log(JSON.stringify(data));
                    this.idea = data.like;
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

    toggle() {
        event.preventDefault();
        this.showComment = !this.showComment;
        this.commentColor = this.showComment ? "green" : "indigo";
    }
}

