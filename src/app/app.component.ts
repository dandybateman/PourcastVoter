import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Http } from '@angular/http';
import { Header } from './common/header/header.component';




/////////////////////////
// ** MAIN APP COMPONENT **
@Component({
  selector: 'app', // <app></app>
  directives: [
    ...ROUTER_DIRECTIVES,
    Header
  ],
  template: `
  <vote-header></vote-header>
  <router-outlet></router-outlet>
  `,
  styles: [':host { font-family: Arial, Helvetica, sans-serif; }']
})
export class App { }
