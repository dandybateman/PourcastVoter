import { RouterConfig } from '@angular/router';
import { Vote } from './vote';
import { Results } from './results';

export const routes : RouterConfig = [
  { path: '', redirectTo: 'vote' },
  { path: 'vote', component: Vote },
  { path: 'results', component: Results },
  { path: '**', redirectTo: 'vote' }
];
