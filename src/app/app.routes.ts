import { RouterConfig } from '@angular/router';
import { Vote } from './vote';
import { Results } from './results';
import { About } from './about';


export const routes : RouterConfig = [
  { path: '', redirectTo: 'vote' },
  { path: 'vote', component: Vote },
  { path: 'results', component: Results },
  { path: 'about', component: About },
  { path: '**', redirectTo: 'vote' }
];
