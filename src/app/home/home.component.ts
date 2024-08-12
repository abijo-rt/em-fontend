import { Component } from '@angular/core';
import { LoadingComponent } from '../ui/loading/loading.component';
// import SwiperCore, { SwiperOptions } from 'swiper';
import { CallComponent } from '../ui/call/call.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoadingComponent,CallComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
