import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputOtpModule } from 'primeng/inputotp';
@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule,CommonModule,InputOtpModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  isVisible = false; 
  phone_no: string | undefined;
  otp: string | undefined;
value: any;

  submit() {
    
    this.isVisible = true; // Show OTP input after submitting phone number
  }

  verifyOtp() {
    // Logic for verifying OTP
  }

  cancel() {
    
    this.isVisible = false; // Return to phone number input
  }
 
 
 
 
}
