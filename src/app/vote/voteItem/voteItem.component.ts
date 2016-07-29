import { Component, Input, Output, EventEmitter }from '@angular/core';
import { Option } from '../../../lib/option'
import { BeerDescription } from '../../common/beerDescription';
import { VoteButton } from './voteButton';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
    selector: 'vote-item',
    styles: [
        ':host { width: 20%; display: inline-flex; flex-direction: column; margin: 1.5em; }',
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
        <vote-button (vote)="voteClicked()" [text]="'Yes'"></vote-button>
        </md-card>
    `,
    directives: [BeerDescription, VoteButton, MD_CARD_DIRECTIVES]
})
export class VoteItem {
    @Input() item: any;
    @Output() vote: EventEmitter<Option> = new EventEmitter<Option>();
    constructor() {
    }

    voteClicked() {
        this.vote.emit(this.item);
    }
}