import { Component } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { NewUserComponent } from "../new-user/new-user.component";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule, NewUserComponent,RouterOutlet],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  visibleNewUser: boolean =false;
  visibleLoginUser: boolean =false;

  showDialogNewUser() {this.visibleNewUser=true;}
  showDialogLoginUser() {this.visibleLoginUser=true;}

  

  
  
}
