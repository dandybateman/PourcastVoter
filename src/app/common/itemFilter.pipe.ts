import { Pipe, PipeTransform } from '@angular/core';
import { Option } from '../../lib/option';
@Pipe({ name: 'validTerm'})
export class ValidTerm implements PipeTransform {
    transform(values: Option[], term: string){
        let lowerTerm = (term || '').toLocaleLowerCase();
        let valid = within.bind(this, lowerTerm);
        return (values || []).filter(v => !lowerTerm || valid(v.beer) || valid(v.brewery) || valid(v.location));
    }
}


function within(needle, haystack){
    return haystack.toLowerCase().indexOf(needle) >= 0;
}