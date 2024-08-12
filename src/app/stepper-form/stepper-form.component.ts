import { Component, EventEmitter, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { VendorCardComponent } from '../vendor-card/vendor-card.component';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { DataService, Vendor } from '../service/data.service';
@Component({
  selector: 'app-stepper-form',
  standalone: true,
  imports: [VendorCardComponent, StepperModule, ButtonModule, CommonModule],
  templateUrl: './stepper-form.component.html',
  styleUrl: './stepper-form.component.css'
})
export class StepperFormComponent {
@Output() stepperEmitter=new  EventEmitter<string[]>;
  @ViewChildren(VendorCardComponent) vendor!: QueryList<VendorCardComponent>;

Vendorname:string[]=[];
veunecards: Vendor[] | undefined;
catercards: Vendor[] | undefined;
decorcards: Vendor[] | undefined;
Entercards: Vendor[] | undefined;

  ngAfterViewInit() {
    this.vendor.forEach((child: any) => {
      child.dataEmitter.subscribe((name: string) => {
        console.log(name)
        this.Vendorname?.push(name);
      })
    })
  }

  stepper() {
    console.log("HI HELLO THIS IS STEPPER");
    this.vendor.forEach((child: VendorCardComponent) => {
      child.sendvendor();
    });
    console.log(this.Vendorname)

    this.stepperEmitter.emit(this.Vendorname)

  }

  

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.veunecards=this.dataservice.getFoodV()
this.catercards=this.dataservice.getcatersV()
this.decorcards=this.dataservice.getdecorsV()
this.Entercards=this.dataservice.getvenueV()
  }

}


