import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-event',
  standalone: true,
  imports: [],
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent {
  @Input() vendorName: string | undefined;
}
