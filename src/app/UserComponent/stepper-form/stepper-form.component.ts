import { Component, EventEmitter, Output } from '@angular/core';
import { VendorCardComponent } from '../vendor-card/vendor-card.component';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { CommonModule } from '@angular/common';
import { DataService, Vendor } from '../../service/data.service';

@Component({
  selector: 'app-stepper-form',
  standalone: true,
  imports: [VendorCardComponent, StepperModule, ButtonModule, CommonModule],
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.css'] // Corrected styleUrl to styleUrls
})
export class StepperFormComponent {
  @Output() stepperEmitter = new EventEmitter<string>();

  Vendorname: string[] = [];
  veunecards: Vendor[] | undefined;
  catercards: Vendor[] | undefined;
  decorcards: Vendor[] | undefined;
  Entercards: Vendor[] | undefined;

  // Method to handle the emitted vendor name
  handleVendorAdded(name: string) {
    if (!this.Vendorname.includes(name)) {
      this.Vendorname.push(name);
      console.log("Vendor added:", name);
  
      // Emit the single vendor name
      this.stepperEmitter.emit(name);
    }
  }

  // stepper() {
  //   console.log("HI HELLO THIS IS STEPPER");
  //   console.log(this.Vendorname);
  //   this.stepperEmitter.emit(this.Vendorname);
  // }

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.veunecards = this.dataservice.getFoodV();
    this.catercards = this.dataservice.getcatersV();
    this.decorcards = this.dataservice.getdecorsV();
    this.Entercards = this.dataservice.getvenueV();
  }
}
