import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login-vendor',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login-vendor.component.html',
  styleUrl: './login-vendor.component.css'
})
export class LoginVendorComponent {
password: any;
cancel() {
throw new Error('Method not implemented.');
}
submit() {
throw new Error('Method not implemented.');
}
phone_no: any;


}
