import { Component } from '@angular/core';
import { EventCardComponent } from "../event-card/event-card.component";

@Component({
  selector: 'app-user-event',
  standalone: true,
  imports: [EventCardComponent],
  templateUrl: './user-event.component.html',
  styleUrl: './user-event.component.css'
})
export class UserEventComponent {

}
