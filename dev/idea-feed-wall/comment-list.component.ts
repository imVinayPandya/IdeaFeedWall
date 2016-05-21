/**
 * Created by vinay on 5/14/2016.
 */

import {Component, Input} from "@angular/core";

@Component({
    selector: 'comment-list',
    template: `
        <ul class="collection">
            <li class="collection-item avatar">
              <img src="http://materializecss.com/images/yuna.jpg" alt="" class="circle">
              <span class="title">{{comment.user_id.firstName}} {{comment.user_id.lastName}}</span>
              <p>{{comment.comment}}<br>
                 Second Line
              </p>
              <a href="#!" class="secondary-content"><i class="material-icons">edit</i></a>
            </li>
        </ul>
    `,
    directives: [],
    providers: []
})

export class CommentListComponent {
    @Input() comment;
}