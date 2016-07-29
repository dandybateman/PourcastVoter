import { Component, Input, OnInit }from '@angular/core';
import { Option } from '../../../lib/option'
import { BeerDescription } from '../../common/beerDescription';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
    selector: 'result-item',
    styles: [
        ':host { width: 20%; display: inline-flex; flex-direction: column; margin: 1.5em; }',
        'beer-description { flex: 1 0 auto; }',
        'h3 { text-align: center; text-transform: uppercase}',
        'a:visited, a { color: black }',
        '.votes { width: 100%; color: black; text-align: center; padding: 0.5em; }',
        '.votes.low { background-color: red }',
        '.votes.medium { background-color: yellow }',
        '.votes.high { background-color: green }',
    ],
    template: `
        <md-card>
            <md-card-title>
                <h3><a href="{{item.url}}">{{ item.beer }}</a></h3>
            </md-card-title>
            <beer-description [beer]="item"></beer-description>
            <p class="votes {{percentageClass}}">Votes: {{ item.voteCount || 0 }} ({{percentage}}%)</p>
        </md-card>
    `,
    directives: [BeerDescription, MD_CARD_DIRECTIVES]
})
export class ResultItem implements OnInit {
    @Input() item: any;
    @Input() totalVotes: number;
    percentage: number;
    percentageClass: string;
    constructor() {
    }

    ngOnInit() {
        this.percentage = Math.round(((this.item.voteCount || 0) / (this.totalVotes || 1)) * 100)
        this.percentageClass = percentageToClass(this.percentage);
    }
}

function percentageToClass(percent: number): string {
    let result: string;
    if (percent < 25) {
        result = 'low'
    } else if (percent < 75) {
        result = 'medium';
    } else {
        result = 'high';
    }

    return result;
}