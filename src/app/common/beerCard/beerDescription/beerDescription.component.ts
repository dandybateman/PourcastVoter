import { Component, Input } from '@angular/core';

@Component({
    selector: 'beer-description',
    template: `
        <p>{{beer.style}} from {{ beer.brewery }} in {{ beer.location }}.</p>
    `
})
export class BeerDescription {
    @Input() beer: any;
}