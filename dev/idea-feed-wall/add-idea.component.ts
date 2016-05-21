/**
 * Created by vinay on 5/7/2016.
 */

import { Component, OnInit } from '@angular/core';
import { ControlGroup, FormBuilder, Validators } from "@angular/common";
import {IdeaService} from "./services/idea.service";
import { Router, ROUTER_DIRECTIVES } from "@angular/router-deprecated";

@Component({
    selector: 'idea-add',
    template: `        
     <div class="row">
      <a [routerLink]="['Ideas']" class="waves-effect waves-light btn"><i class="material-icons left">list</i>Back</a>
      <form class="col s12" [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)">
        <div class="row">
          <div class="input-field col s12">
            <input id="userIdea" type="text"  placeholder="Title" [ngFormControl]="myForm.controls['title']">
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="userDesc" class="materialize-textarea" placeholder="Description" length="120" [ngFormControl]="myForm.controls['content']"></textarea>
          </div>
        </div>
         <div class="row">
          <div class="input-field col s12">
            <button type="submit" class="waves-effect waves-light btn" [class.disabled]="!myForm.valid" [disabled]="!myForm.valid">SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [IdeaService],
    styles: [`
       
    `]
})
export class AddIdeaComponent implements OnInit {
    myForm: ControlGroup;

    constructor(
        private _ideaService: IdeaService,
        private _router: Router,
        private _formBuilder: FormBuilder
    ){}

    ngOnInit():any{
        //this.newContact = {firstName: "", lastName: this._routeParams.get("lastName"), phone: "", email: ""};
        this.myForm = this._formBuilder.group({
            'title': ["", Validators.required],
            'content': ["", Validators.required],
        })
    }

    onSubmit(value){
        this._ideaService.insertIdea(value)
            .subscribe(
                data => {
                    this._router.navigate(['Ideas']);
                },
                error => alert('Error to reach server'),
                () => ""
            );
    }
}