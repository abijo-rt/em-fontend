import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./UserComponent/home/home.component";
import { NavComponent } from "./UserComponent/nav/nav.component";
import { PricingComponent } from './UserComponent/pricing/pricing.component';
import { EventsComponent } from './UserComponent/events/events.component';
import { AboutComponent } from './UserComponent/about/about.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavComponent, PricingComponent, AboutComponent, EventsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'event-m';
}
