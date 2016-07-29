import { Component } from '@angular/core';
import { Option } from '../../lib/option';
import { ResultItem } from './resultItem';
import { VoteService } from '../vote.service'
import { ValidTerm } from '../common/itemFilter.pipe'

@Component({
    selector: 'results',
    template: `
    <div class="search">
        <label for="searchField">Search: </label>
        <input id="searchField" type="text" #box (keyup)="onKeyUp(box.value)" />
    </div>
    <div class="items">
        <result-item *ngFor="let item of options | validTerm: term;trackBy:trackOption" [item]="item" [totalVotes]="totalVotes"></result-item>
    </div>`,
    styles: [
        '.items { display: flex; flex-direction: row; flex-wrap: wrap; }',
        'result-item { display: flex; }'
    ],
    providers: [VoteService],
    directives: [ResultItem],
    pipes: [ ValidTerm ]
})
export class Results {
    options: Array<Option>;
    totalVotes: number;
    term: string;
    constructor(private service: VoteService) { }

    itemVoted(option: Option) {
        console.log("voted on: ", option);
        this.service.castVote(option);
    }

    trackOption(index: number, item: Option) {
        return item.id;
    }

    ngOnInit() {
        this.service.getOptions()
            .then(options => this.options = options)
            .then(options => this.totalVotes = options.reduce((total, item) => total + (item.voteCount || 0), 0));
    }

        
    onKeyUp(term){
        this.term = term;
    }
}