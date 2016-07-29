import { Component, Directive, ElementRef, Renderer } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Http } from '@angular/http';
import { Header } from './common/header/header.component';

//
/////////////////////////
// ** Example Directive
// Notice we don't touch the Element directly

@Directive({
  selector: '[x-large]'
})
export class XLarge {
  constructor(element: ElementRef, renderer: Renderer) {
    // ** IMPORTANT **
    // we must interact with the dom through -Renderer-
    // for webworker/server to see the changes
    renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    // ^^
  }
}

/////////////////////////
// ** Example Components
@Component({
  selector: 'about',
  template: `
    <div>This is the "About" page</div>  `
})
export class About { }

/////////////////////////
// ** MAIN APP COMPONENT **
@Component({
  selector: 'app', // <app></app>
  directives: [
    ...ROUTER_DIRECTIVES,
    XLarge,
    Header
  ],
  template: `
  <vote-header></vote-header>
  <router-outlet></router-outlet>
  `,
  styles: [':host { font-family: Arial, Helvetica, sans-serif; }']
})
export class App { }
