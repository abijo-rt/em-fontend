import { Component } from '@angular/core';
import { EventsComponent } from "../events/events.component";
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [EventsComponent, HomeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
