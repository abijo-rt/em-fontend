import { Component } from '@angular/core';
import { NewVendorComponent } from "../../VendorComponent/new-vendor/new-vendor.component";
import { DialogModule } from 'primeng/dialog';
import { UserEventDetailsComponent } from "../../UserComponent/user-event-details/user-event-details.component";
@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [NewVendorComponent, DialogModule, UserEventDetailsComponent],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  visibleEventDetails: boolean =false;

  showEventDetails() {this.visibleEventDetails=true;}

}
