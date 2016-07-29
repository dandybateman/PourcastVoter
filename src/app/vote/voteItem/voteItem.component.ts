import { Component, Input }from '@angular/core';
import { Option } from '../../../lib/option'

@Component({
    selector: 'vote-item',
    template: `
        <div>
            <h3>{{ item.title }}</h3>
        </div>
    `
})
export class VoteItem {
    @Input() item: Option;
    constructor(){
        this.item = new Option("");
setTimeout(() => console.log(this.item), 2000);
    }
}