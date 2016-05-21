/**
 * Created by vinay on 5/7/2016.
 */

import {Component} from '@angular/core';

@Component({
    selector: 'idea-header',
    template: `        
        <div class="intro indigo lighten-1 z-depth-1">
            <h1 class="grey-text text-lighten-5">Idea Feed Wall</h1>
        </div>
    `,
    styles: [`
        .intro
        {
            text-align: center;
            padding-top: 1%;
            padding-bottom: 1%;
            margin-bottom: 50px;
        }
    
        .intro h1
        {
            font-weight: 900;
            text-transform: uppercase;
        }
    
        .intro h5
        {
            text-transform: uppercase;
            background-color: #f5f5f5;
            padding: 10px;
            color: #333333;
            display: inline-block;
            font-size: 1.2rem;
        }
    `]
})
export class HeaderComponent {
}