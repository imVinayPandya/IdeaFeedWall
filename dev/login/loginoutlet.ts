/**
 * Created by vinay on 5/8/2016.
 */

import {Directive, Attribute, ViewContainerRef, DynamicComponentLoader} from "@angular/core";
import {RouterOutlet, ComponentInstruction, Router} from "@angular/router-deprecated";

@Directive({
    selector: "leaf-login-outlet"
})

export class LoginOutLet extends RouterOutlet {
    publicRoutes: any;
    private parentRouter: Router;

    constructor(_viewContainerRef: ViewContainerRef, _loader: DynamicComponentLoader, _parentRouter: Router, @Attribute('name') nameAttr: string) {
        super( _viewContainerRef, _loader, _parentRouter, nameAttr);

        this.parentRouter = _parentRouter;
        // The Boolean following each route below denotes whether the route requires authentication to view
        this.publicRoutes = {
            'login': true
        };
    }

    activate(instruction: ComponentInstruction) {
        let url = instruction.urlPath;
        if (!this.publicRoutes[url] && !localStorage.getItem('_t')) {
            // todo: redirect to Login, may be there a better way?
            this.parentRouter.navigate(['Login']);
        }
        if(this.publicRoutes[url] && localStorage.getItem('_t')){
            this.parentRouter.navigate(['Ideas']);
        }
        return super.activate(instruction);
    }
}