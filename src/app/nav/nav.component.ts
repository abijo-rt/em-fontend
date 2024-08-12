import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from '../ui/loading/loading.component';
import { SocialIconComponent } from '../ui/social-icon/social-icon.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule,LoadingComponent,SocialIconComponent,CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  isVisible: boolean = false;

  toggleVisibility() {
 //   alert("hi")
    this.isVisible = !this.isVisible;
    
  }
}
