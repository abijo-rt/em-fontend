import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiserviceService } from '../../service/apiservice.service';

interface INewVendor {
  name: String,
  email: String,
  phone_no: String,
  location: String,
  pincode: String,
  c_name: String,
}
@Component({
  selector: 'app-new-vendor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-vendor.component.html',
  styleUrl: './new-vendor.component.css'
})
export class NewVendorComponent {
password: any;

  constructor(private api:ApiserviceService){}

  name: String | undefined;
  email: String | undefined;
  phone_no: String | undefined;
  location: String | undefined;
  pincode: String | undefined;
  c_name: String | undefined;

  submit() {

    const newVenodor = {
      name: this.name,
      email: this.email,
      phone_no: this.phone_no,
      location: this.location,
      pincode: this.pincode,
      cname: this.c_name,
      password: this.password,
    }

    this.api.newVendor(newVenodor).subscribe((res) => console.log(res) )
    console.log(newVenodor)
  }

}
