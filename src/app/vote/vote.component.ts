import { Component } from '@angular/core';
import { Option } from '../../lib/option';
import { VoteItem } from './voteItem';

@Component({
  moduleId: __filename,
  selector: 'vote',
  styleUrls: [
    'vote.style.css'
  ],
  templateUrl: 'vote.template.html',
  directives: [VoteItem]
})
export class Vote {
  options: Array<Option>;
  constructor(){
    this.options = [
      new Option('First'),
      new Option('Second')
    ]
  }
}
