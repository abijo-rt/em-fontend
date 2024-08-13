import { Routes } from '@angular/router';
import { HomeComponent } from './UserComponent/home/home.component';
import { PricingComponent } from './UserComponent/pricing/pricing.component';
import { AboutComponent } from './UserComponent/about/about.component';
import { EventsComponent } from './UserComponent/events/events.component';
import { MainComponent } from './UserComponent/main/main.component';

export const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'main', component: MainComponent },
  { path: 'pricing', component: PricingComponent },
  // { path: 'about', component: AboutComponent }
];
