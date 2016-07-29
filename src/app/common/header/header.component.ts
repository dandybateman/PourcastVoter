import { Component } from '@angular/core';

@Component({
  moduleId: __filename,
  selector: 'vote-header',
  styles:[],
  template: `
    <nav>
        <ul>
            <li *ngFor="let item of items"><a href="/{{item.url}}">{{item.title}}</a></li> 
        </ul>
    </nav>
  `
})
export class Header {
    items: Array<Object>;
    constructor(){
        this.items = [
            {
                url:'vote',
                title: 'vote'
            },
            {
                url:'results',
                title: 'results'
            }
        ]
    }
}
