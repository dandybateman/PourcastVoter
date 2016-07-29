import { Component, OnInit } from '@angular/core';
import { Option } from '../../lib/option';
import { VoteItem } from './voteItem';
import { VoteService } from '../vote.service'
import { ValidTerm } from '../common/itemFilter.pipe'


@Component({
  moduleId: __filename,
  selector: 'vote',
  styleUrls: [
    'vote.style.css'
  ],
  templateUrl: 'vote.template.html',
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
