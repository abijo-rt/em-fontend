import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputOtpModule } from 'primeng/inputotp';
import { ApiserviceService } from '../../service/apiservice.service';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';
@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule, CommonModule, InputOtpModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

  phone_no: string | undefined;
  password: string | undefined;

  constructor(private api: ApiserviceService , private router : Router , private dataService :DataService) { }

  cancel() {
    throw new Error('Method not implemented.');
  }


  submit() {
    const data = {
      phone_no: this.phone_no,
      password: this.password
    };
  
    this.api.loginUser(data).subscribe((res: any) => {
      console.log(res.body.token)

      if (res.body.token) {
        
        localStorage.setItem('token', res.body.token); 
        console.log("hi")
        const decodedToken = this.decodeToken(res.body.token);
        const userdata = {
          id: decodedToken._id
        }
        console.log(decodedToken.role)
        if (decodedToken.role === 'vendor') {
          this.router.navigate(['/vendor']);
        } else {
          this.router.navigate(['/user']);
        }
      }
    });
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
