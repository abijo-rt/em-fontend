import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NewVendorComponent } from "../../VendorComponent/new-vendor/new-vendor.component";
import { DialogModule } from 'primeng/dialog';
import { UserEventDetailsComponent } from "../../UserComponent/user-event-details/user-event-details.component";
import { EventCardComponent } from "../event-card/event-card.component";
import { ApiserviceService } from '../../service/apiservice.service';
@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [NewVendorComponent, DialogModule, UserEventDetailsComponent, EventCardComponent],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {

  constructor(private api : ApiserviceService){}

  @Input() event: any;
  
  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['event']) {
  //     console.log('Event updated:', this.event);
  //   }
  // }
  vendorlist : any
  vendata : any
  visibleEventDetails: boolean = false;

  showEventDetails() {
    this.visibleEventDetails=true;
    // this.vendata= this.event
    console.log("ecent list")
   console.log(this.event) 

   const list = {
    list:this.event
  }

  //  this.api.getEventVendorList(list).subscribe((data) => {

  //    this.vendorlist=data.body
  //    console.log("data",this.vendorlist)
     
  //  })
  }

}
