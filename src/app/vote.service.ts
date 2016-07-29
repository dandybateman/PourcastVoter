import { Injectable } from '@angular/core';
import { Option } from '../lib/option';
import { Http, Response } from '@angular/http';

@Injectable()
export class VoteService {
    constructor(private http: Http) { }

    getOptions(): Promise<Option[]> {
        var result;
        // use services for http calls

        result = this.http.get('/data/options')
            .toPromise()
            .then(resp => resp.json() as Option[]);
        return result;
    }

    castVote(option: Option): Promise<Option> {
        return this.http.post(`/data/options/vote/${option.id}`, {})
            .toPromise()
            .then(resp => resp.json() as Option);
    }
}

