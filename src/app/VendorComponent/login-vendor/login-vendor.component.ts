import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiserviceService } from '../../service/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-vendor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-vendor.component.html',
  styleUrl: './login-vendor.component.css',
})
export class LoginVendorComponent {
  constructor(private api: ApiserviceService , private router : Router) {}

  password: string | undefined;
  phone_no: string | undefined;

  cancel() {
    throw new Error('Method not implemented.');
  }

  submit() {
    const data = {
      phone_no: this.phone_no,
      password: this.password,
    };
    this.api.loginVendor(data).subscribe((res) => 
    {
      if (res.body.token) {
        
        localStorage.setItem('token', res.body.token); 
     
        const decodedToken = this.decodeToken(res.body.token);
        console.log(decodedToken.role)
        if (decodedToken.role === 'vendor') {
          this.api.getUserDetails(decodedToken.id).subscribe((data) => console.log(data))
          this.router.navigate(['/vendor']);
        } else {
          this.router.navigate(['/user']);
        }
      }
    })


  }

  decodeToken(token: string) {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch (error) {
      console.error('Failed to decode token:', error);
      return null;
    }
  }

}
