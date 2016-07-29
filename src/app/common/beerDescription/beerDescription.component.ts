import { Component, Input } from '@angular/core';
import { Option } from '../../../lib/option';

@Component({
    selector: 'beer-description',
    template: `
        <p>{{beer.style}} from {{ beer.brewery }} in {{ beer.location }}.</p>
    `
})
export class BeerDescription {
    @Input() beer: any;
}