import { Component, Input, OnInit }from '@angular/core';
import { Option } from '../../../lib/option'
import { BeerCard } from '../../common/beerCard';

@Component({
    selector: 'result-item',
    styles: [
        ':host { width: 20%; }',
        '.votes { width: 100%; color: black; text-align: center; padding: 0.5em; }',
        '.votes.low { background-color: red }',
        '.votes.medium { background-color: yellow }',
        '.votes.high { background-color: green }',
        
    ],
    template: `
    <beer-card [item]="item">
        <p class="votes {{percentageClass}}">Votes: {{ item.voteCount || 0 }} ({{percentage}}%)</p>
    </beer-card>
        
    `,
    directives: [BeerCard]
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