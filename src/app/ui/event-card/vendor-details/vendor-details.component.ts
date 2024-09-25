import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-vendor-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vendor-details.component.html',
  styleUrl: './vendor-details.component.css'
})
export class VendorDetailsComponent {


  @Input() vendorDetails: any | undefined 



  test(){
    console.log("ASFDA")
    console.log(this.vendorDetails.vendorEventDetails[0].status[0])
  }
}
