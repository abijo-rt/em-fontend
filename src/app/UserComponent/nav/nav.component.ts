import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';
import { LoadingComponent } from '../../ui/loading/loading.component';
import { SocialIconComponent } from '../../ui/social-icon/social-icon.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [LoadingComponent,SocialIconComponent,CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor(private router:Router){}


login() {
this.router.navigate(['/login'])
}
newuser() {
this.router.navigate(['/newuser'])
}
  isVisible: boolean = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
