import { Component } from '@angular/core';
import { ListEventComponent } from "../../ui/list-event/list-event.component";

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [ListEventComponent],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {

}
