import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-new-vendor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-vendor.component.html',
  styleUrl: './new-vendor.component.css'
})
export class NewVendorComponent {
name: any;
email: any;
phone_no: any;
submit() {
throw new Error('Method not implemented.');
}

}
