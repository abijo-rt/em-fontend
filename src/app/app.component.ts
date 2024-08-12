import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { NavComponent } from "./nav/nav.component";
import { PricingComponent } from './pricing/pricing.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavComponent,PricingComponent,AboutComponent,EventsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'event-m';
}
