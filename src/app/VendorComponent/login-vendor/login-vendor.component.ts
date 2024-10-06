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
  usererror: boolean = false;
  passworderror: boolean = false ;
  errorMessage: string | undefined;
loading: boolean  = false;


  constructor(private api: ApiserviceService , private router : Router) {}

  password: string | undefined;
  phone_no: string | undefined;

  cancel() {
    this.loading = !this.loading
  }

  submit() {
    const data = {
      phone_no: this.phone_no,
      password: this.password,
    };
    this.api.loginVendor(data).subscribe({
      next : (res) => 
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
        }, error : (err: any) => {
          // Handle error scenario
          console.error("Login failed", err);
          this.usererror  = false 
          this.passworderror  = false 
          // You can add specific error handling logic here
          if (err.status === 404) {
            this.errorMessage = 'Username not found';
            this.usererror = true
          } else if (err.status === 401) {
            this.errorMessage = 'Incorrect password';
            this.passworderror = true
          } else {
            this.errorMessage = 'An unknown error occurred. Please try again later.';
          }
          console.log(this.errorMessage)
          console.log(this.usererror)
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
