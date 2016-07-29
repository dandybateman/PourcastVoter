import { Component, OnInit } from '@angular/core';
import { Option } from '../../lib/option';
import { VoteItem } from './voteItem';
import { VoteService } from '../vote.service'
import { ValidTerm } from '../common/itemFilter.pipe'


@Component({
  selector: 'vote',
  styles: [
    ':host { font-family: Arial, Helvetica, sans-serif; }',
    '.items { display: flex; flex-direction: row; flex-wrap: wrap; }',
    'vote-item { display: flex;  }',
    'input { display: inline-block; }'
  ],
  // styleUrls: [ 'vote.style.css'],
  // templateUrl: 'vote.template.html',
  template: `
  <div class="search">
    <label for="searchField">Search: </label>
    <input id="searchField" type="text" #box (keyup)="onKeyUp(box.value)" />
  </div>
  <div class="items">
      <vote-item *ngFor="let option of options | validTerm: term ;trackBy:trackOption" [item]="option" (vote)="itemVoted($event)"></vote-item>
  </div>
  `,
  directives: [VoteItem],
  providers: [VoteService],
  pipes: [ ValidTerm ]
})
export class Vote implements OnInit {
  options: Array<Option>;
  term: string;
  constructor(private service: VoteService) { }

  itemVoted(option: Option){
    this.service.castVote(option);
  }

  trackOption(index:number, item:Option){
    return item.id;
  }

  ngOnInit(){
    this.service.getOptions().then(options => this.options = options);
  }

  onKeyUp(term){
    this.term = term;
  }
}
