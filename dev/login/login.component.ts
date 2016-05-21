/**
 * Created by vinay on 5/8/2016.
 */

import {Component} from "@angular/core";
import { ControlGroup, FormBuilder, Validators } from "@angular/common";
import { Router } from "@angular/router-deprecated";
import {LoginService} from "./services/login.service";

@Component({
    selector: "leaf-login",
    template: `        
     <div class="row">
     <h1>Login</h1>
     <div *ngIf="error" class="error">Check your password</div>
      <form class="col s4" [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)">
       <div class="row">
          <div class="input-field col s12">
            <input id="userName" type="text"  placeholder="Name" [ngFormControl]="myForm.controls['uname']" >
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="password" type="password" placeholder="Password" [ngFormControl]="myForm.controls['pass']">
          </div>
        </div>
         <div class="row">
          <div class="input-field col s12">
            <button type="submit" class="waves-effect waves-light btn" [class.disabled]="!myForm.valid" [disabled]="!myForm.valid">Login</button>
          </div>
        </div>
      </form>
    </div>
    `,
    providers: [LoginService],
})

export class LoginComponent{
    myForm: ControlGroup;
    error: boolean = false;
    constructor(
        private _loginService: LoginService,
        private _router: Router,
        private _formBuilder: FormBuilder
    ){}

    ngOnInit():any{
        this.myForm = this._formBuilder.group({
            'uname': ["", Validators.required],
            'pass': ["", Validators.required]
        })
    }

    onSubmit(value){
        if(value.pass && value.uname){
            this._loginService.login(value.uname, value.pass)
                .subscribe(
                    data => {
                        localStorage.setItem('_t', data.token);
                        this._router.navigate(['Ideas']);
                    },
                    error =>{
                        if(JSON.parse(error._body).success == false){
                            alert(JSON.stringify(JSON.parse(error._body).msg));
                        }
                    },
                    () => ""
                )


        }else{
            this.error = true;
        }
    }
}