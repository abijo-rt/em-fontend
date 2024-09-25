import { Component } from '@angular/core';
import { StepperFormComponent } from "../../ui/stepper-form/stepper-form.component";
import { FormsModule } from '@angular/forms';
import { ApiserviceService } from '../../service/apiservice.service';
import { AppdataService } from '../../service/appdata.service';
import { DataService } from '../../service/data.service';
interface INewEvent {
  user : string,
  name: string,
  phone: number,
  eventType: string,
  doe: string,
  lOfEvent: string,
  vendorList: string[]

}
@Component({
  selector: 'app-user-add-event',
  standalone: true,
  imports: [StepperFormComponent, FormsModule],
  templateUrl: './user-add-event.component.html',
  styleUrl: './user-add-event.component.css'
})
export class UserAddEventComponent {

  
  constructor(private api : ApiserviceService , private dataservice : DataService){}

  onSubmit() {
    const token = localStorage.getItem('token')
    const decodeToken = this.dataservice.decodeToken(token)
    const form: INewEvent = {
      user : decodeToken._id,
      name: this.name || '',         // Default to empty string if undefined
      phone: this.phone || 0,        // Default to 0 if undefined
      eventType: this.eventType || '',  // Default to empty string if undefined
      doe: this.doe || '',           // Default to empty string if undefined
      lOfEvent: this.lOfEvent || '', // Default to empty string if undefined
      vendorList: this.receivedVendorNames // Assign the list of received vendor names
    };
    console.log('Form Submitted:', form);
    this.api.newEvent(form).subscribe((data) => console.log(data))
  }
  
  receivedVendorNames: string[] = [];
  name: string | undefined
  phone: number | undefined
  eventType: string | undefined
  doe: string | undefined
  lOfEvent: string | undefined
  pincode: string | undefined
  
  
  onVendorNamesReceived(vendorNames: string) {
    this.receivedVendorNames.push(vendorNames);
    console.log('Received vendor names:', this.receivedVendorNames);
  }
  
  getVendordetails() {
  const body = {
    pincode : this.pincode
  }
  this.api.getVendorList(body).subscribe((data) => {
    this.dataservice.setVenDetails(data.body);
    const temp = this.dataservice.getVenDetails()
    console.log(temp)
      this.dataservice.callFunction();
  })
  }


}
