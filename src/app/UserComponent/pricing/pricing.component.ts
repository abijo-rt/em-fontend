import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RadiobuttonComponent } from '../../ui/radiobutton/radiobutton.component';
import { ListsComponent } from '../../ui/lists/lists.component';
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

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [FieldsetModule, InputComponent, StepperFormComponent, StepperModule, ButtonModule, CheckboxModule, RadioButtonModule, RadiobuttonComponent, ListsComponent, InfocardComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {

  constructor(private api: ApiserviceService) {
  }

  VendorName: string[] | undefined
  @ViewChildren(InputComponent) childInputs!: QueryList<InputComponent>;
  @ViewChild(StepperFormComponent) Stepper!: StepperFormComponent;

  ngAfterViewInit() {
    this.Stepper.stepperEmitter.subscribe((arr: string[]) => {
      this.VendorName = arr
    });
  }

  executeChildMethod() {
    this.childInputs.forEach((child: any) => {
      child.dataEmitter.subscribe((data: input) => this.handleData(data));
      child.sendDataToParent();  // Trigger emitData on each child component
    });

    this.Stepper.stepper();

    this.sendData(this.formdata)
  }


  handleData(data: { name: string, value: string }) {
    console.log(`${data.name}: ${data.value}`);
    this.formdata?.push(data);

  }

  formdata: input[] | undefined;



  sendData(data: input[] | undefined) {
    this.api.newForm(data).subscribe(
      (res: HttpResponse<any>) => {
        console.log(res.body)
        console.log(res.status)
      }
    )
  }

}
