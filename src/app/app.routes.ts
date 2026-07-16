import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { About } from './pages/about/about';

// Yalnızca route tanımları, /about -> şu component, /homepage -> şu component / ->
export const routes: Routes = [
  {path: '', redirectTo: 'homepage', pathMatch: 'full'}, // localhost:4200
  {path:'homepage', component:Homepage},
  {path:'about', component: About}
];
