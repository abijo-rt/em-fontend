import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [DialogModule,ButtonModule,InputTextModule,FormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {
 name!: string; 
 email!: string;
 phone_no!: number;

submit() {
const data = {
  name:this.name,
  email:this.email,
  phone_no:this.phone_no
}

console.log(data);
}
visible: boolean =false;




}
