import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'vote-header',
  directives: [ROUTER_DIRECTIVES],
  styles:['li { list-style: none; display: inline-block; margin: 0.5em; }'],
  template: `
    <nav>
        <ul>
            <li *ngFor="let item of items"><a routerLink="{{item.url}}" routerLinkActive="active">{{item.title}}</a></li> 
        </ul>
    </nav>
  `
})
export class Header {
    items: Array<Object>;
    constructor(){
        this.items = [
            {
                url:'/vote',
                title: 'Vote'
            },
            {
                url:'/results',
                title: 'Results'
            },
            {
                url: '/about',
                title: 'About'
            }
        ]
    }
}
