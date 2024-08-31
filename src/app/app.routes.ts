import { Routes } from '@angular/router';
import { HomeComponent } from './UserComponent/home/home.component';
import { PricingComponent } from './UserComponent/pricing/pricing.component';
import { AboutComponent } from './UserComponent/about/about.component';
import { EventsComponent } from './events/events.component';
import { MainComponent } from './UserComponent/main/main.component';
import { LoginComponent } from './VendorComponent/login/login.component';
import { NewuserComponent } from './VendorComponent/newuser/newuser.component';

export const routes: Routes = [


  { path: '', component: MainComponent },
  { path: 'pricing', component: PricingComponent },
  {path:'login',component:LoginComponent},
  {path:'newuser',component:NewuserComponent}

];
