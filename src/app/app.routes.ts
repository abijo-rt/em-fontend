import { Routes } from '@angular/router';
import { PricingComponent } from './UserComponent/pricing/pricing.component';
import { MainComponent } from './UserComponent/main/main.component';
import { UserEventComponent } from './UserComponent/user-event/user-event.component';
import { UserAddEventComponent } from './UserComponent/user-add-event/user-add-event.component';
import { VendorHomeComponent } from './VendorComponent/vendor-home/vendor-home.component';
// import { NewuserComponent } from './VendorComponent/newuser/newuser.component';
// import { NewUserComponent } from './UserComponent/new-user/new-user.component';

export const routes: Routes = [


  // { 
  //   path: '', component: MainComponent, 
  // },

  { 
    path: 'user', component: VendorHomeComponent, 
    children :[
      { path: 'events', component: UserEventComponent },
      { path: 'addevents', component: UserAddEventComponent },
    ]
  },

  // { path: 'pricing', component: PricingComponent },
  // { path: '/user/support', component: PricingComponent },

];
