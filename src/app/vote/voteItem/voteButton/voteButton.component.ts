import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'vote-button',
    styles: ['button { display: block; width: 100%; color: white; background-color: #bada55; padding-top: 0.5em; padding-bottom: 0.5em; border: none; font-size: 1.1em; font-weight: bold;'],
    template: `<button (click)="clicked($event)">Vote {{text}}!</button>`
})
export class VoteButton {
    @Input() text: string;
    @Output() vote: EventEmitter<any> = new EventEmitter();

    clicked(event){
        this.vote.emit(event);
    }
}