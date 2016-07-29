import { Component, Input, Output, EventEmitter }from '@angular/core';
import { Option } from '../../../lib/option'
import { BeerCard } from '../../common/beerCard';
import { VoteButton } from './voteButton';

@Component({
    selector: 'vote-item',
    styles: [
        ':host { width: 20%; }',
        'a:visited, a { color: black }'
    ],
    template: `
        <beer-card [item]="item">
            <vote-button (vote)="voteClicked()" [text]="'Yes'"></vote-button>
        </beer-card>
    `,
    directives: [BeerCard, VoteButton]
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