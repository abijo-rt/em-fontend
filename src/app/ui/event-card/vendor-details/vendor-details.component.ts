import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiserviceService } from '../../../service/apiservice.service';

@Component({
  selector: 'app-vendor-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vendor-details.component.html',
  styleUrl: './vendor-details.component.css'
})
export class VendorDetailsComponent {
 
  constructor(private api : ApiserviceService){}

  @Input() vendorDetails: any | undefined 

  download() {
        const filename = this.vendorDetails.vendorEventDetails[0].billfilename
        this.api.downloadfile(filename).subscribe((blob) =>
        {
          const downloadUrl = window.URL.createObjectURL(blob);
      
          // Create an anchor element and trigger the download
          const link = document.createElement('a');
          link.href = downloadUrl;
          link.download = filename; // Use the filename received from the backend
          link.click();

          // Clean up the URL object after the download
          window.URL.revokeObjectURL(downloadUrl);
        })
  }





  test(){
    // console.log("ASFDA")
    console.log(this.vendorDetails.vendorEventDetails[0].status[0])
  }
}
