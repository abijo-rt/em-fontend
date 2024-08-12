import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';

export const routes: Routes = [
   // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'about', component: AboutComponent }
];
