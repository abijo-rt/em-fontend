import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ListEventComponent } from "../../ui/list-event/list-event.component";
import { VendorDetailsComponent } from "./vendor-details/vendor-details.component";
import { ApiserviceService } from '../../service/apiservice.service';

interface IVenDetails {
  v_service :string
  v_name : string ,
  v_email :string ,
  v_phone :string ,
  v_location : string ,
  event_status : boolean[]
}

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [ListEventComponent, VendorDetailsComponent],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent implements OnChanges{

  tempevent : any
  @Input() event :any 

  constructor(private api :ApiserviceService){}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['event']) {
      console.log('Event updated:', this.event);
      this.updateTempEvent();
    }
  }

  private updateTempEvent() {
    this.tempevent = this.event;
    console.log("temp data ==> ", this.tempevent);
    this.fetchVendorList();
  }
  
 

  venList :any
  receiveData(data: string) {
    console.log(data)
    console.log(this.venList)
    if(data == "Venue")this.vendetails = this.venList[0]
    if(data == "Food")this.vendetails = this.venList[1]
    if(data == "Decor")this.vendetails = this.venList[2]
    if(data == "Entertainment")this.vendetails = this.venList[3]
  }
  
  vendetails : any | undefined ;

  fetchVendorList(){
  this.tempevent = this.event
  console.log("temp data ==> " ,this.tempevent)
  const list = {
    list : this.event
  }
   this.api.getEventVendorList(list).subscribe((data) => {

     this.venList=data.body
     console.log("data",this.venList)
     this.vendetails = this.venList[0]
     
   })
}




}
