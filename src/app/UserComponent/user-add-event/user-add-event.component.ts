import { Component } from '@angular/core';
import { StepperFormComponent } from "../stepper-form/stepper-form.component";
import { FormsModule } from '@angular/forms';
interface INewEvent{
  name:string,
  phone:number,
  eventType:string,
  doe:string,
  lOfEvent:string,
  vendorList:string[]

}
@Component({
  selector: 'app-user-add-event',
  standalone: true,
  imports: [StepperFormComponent,FormsModule],
  templateUrl: './user-add-event.component.html',
  styleUrl: './user-add-event.component.css'
})
export class UserAddEventComponent {

  onSubmit() {
    const form: INewEvent = {
      name: this.name || '',         // Default to empty string if undefined
      phone: this.phone || 0,        // Default to 0 if undefined
      eventType: this.eventType || '',  // Default to empty string if undefined
      doe: this.doe || '',           // Default to empty string if undefined
      lOfEvent: this.lOfEvent || '', // Default to empty string if undefined
      vendorList: this.receivedVendorNames // Assign the list of received vendor names
    };
    console.log('Form Submitted:', form);
  }
  
  receivedVendorNames: string[] = [];
  name:string | undefined
  phone:number | undefined
  eventType:string | undefined
  doe:string | undefined
  lOfEvent:string | undefined


  onVendorNamesReceived(vendorNames: string) {
    this.receivedVendorNames.push(vendorNames);
    console.log('Received vendor names:', this.receivedVendorNames);
  }

}
