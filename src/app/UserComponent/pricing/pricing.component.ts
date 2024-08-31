import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RadiobuttonComponent } from '../../ui/radiobutton/radiobutton.component';
import { StepperFormComponent } from '../stepper-form/stepper-form.component';
import { InfocardComponent } from '../../ui/infocard/infocard.component';
import { FieldsetModule } from 'primeng/fieldset';
import { InputComponent } from '../../ui/input/input.component';
import { ApiserviceService } from '../../service/apiservice.service';
import { HttpResponse } from '@angular/common/http';

interface input {
  name: string,
  value: any
}

interface Formdata{

Userdetails:input[],
VendorDetails:string[]
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [FieldsetModule, InputComponent, StepperFormComponent, StepperModule, ButtonModule, CheckboxModule, RadioButtonModule, RadiobuttonComponent,  InfocardComponent],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'] // Corrected styleUrl to styleUrls
})
export class PricingComponent {

  constructor(private api: ApiserviceService) { }

  formdata: input[] = []; // Initialize as an empty array

  VendorName: string[] | undefined;
  @ViewChildren(InputComponent) childInputs!: QueryList<InputComponent>;
  @ViewChild(StepperFormComponent) Stepper!: StepperFormComponent;

  ngAfterViewInit() {
    this.Stepper.stepperEmitter.subscribe((arr: string[]) => {
      this.VendorName = arr;
    });
  }

  executeChildMethod() {
    this.childInputs.forEach((child: InputComponent) => {
      child.dataEmitter.subscribe((data: input) => this.handleData(data));
      child.sendDataToParent();  // Trigger emitData on each child component
    });

    this.Stepper.stepper();

    this.sendData();
  }

  handleData(data: { name: string, value: string }) {
    console.log(`${data.name}: ${data.value}`);
    this.formdata?.push(data);
  }

  sendData() {
    const finaldata={
      Userdetails: this.formdata,
      VendorDetails:this.VendorName
    }
    this.api.newForm(finaldata).subscribe(
      (res: HttpResponse<any>) => {
        console.log(res.body);
        console.log(res.status);
      }
    );
  }
}