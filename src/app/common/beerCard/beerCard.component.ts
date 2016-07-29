import { Component, Input, Output, EventEmitter }from '@angular/core';
import { Option } from '../../../lib/option'
import { BeerDescription } from './beerDescription';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
    selector: 'beer-card',
    styles: [
        ':host { display: inline-flex; margin: 1.5em; }',
        'md-card { display:flex; flex-direction: column; }',
        'beer-description { flex: 1 0 auto; }',
        'h3 { text-align: center; text-transform: uppercase}',
        'a:visited, a { color: black }'
    ],
    template: `
        <md-card>
	        <md-card-title>
	            <h3><a href="{{item.url}}">{{ item.beer }}</a></h3>
	        </md-card-title>
            <beer-description [beer]="item"></beer-description>
            <ng-content></ng-content>
        </md-card>
    `,
    directives: [BeerDescription, MD_CARD_DIRECTIVES]
})
export class BeerCard {
    @Input() item: any;
    constructor() {
    }
}