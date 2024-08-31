import { Component } from '@angular/core';
import { StepperFormComponent } from "../../UserComponent/stepper-form/stepper-form.component";

@Component({
  selector: 'app-vendor-content',
  standalone: true,
  imports: [StepperFormComponent],
  templateUrl: './vendor-content.component.html',
  styleUrl: './vendor-content.component.css'
})
export class VendorContentComponent {

}
