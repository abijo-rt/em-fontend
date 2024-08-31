import { Component } from '@angular/core';
import { LoadingComponent } from '../../ui/loading/loading.component';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
