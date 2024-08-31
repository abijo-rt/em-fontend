import { Component } from '@angular/core';
import { InputComponent } from "../../ui/input/input.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiserviceService } from '../../service/apiservice.service';
import { HttpResponse } from '@angular/common/http';
interface From{
  name:string,
  email:string,
  contact:string,
  password:string
}

@Component({
  selector: 'app-newuser',
  standalone: true,
  imports: [InputComponent,CommonModule,FormsModule],
  templateUrl: './newuser.component.html',
  styleUrl: './newuser.component.css'
})
export class NewuserComponent {
constructor(
  private api:ApiserviceService){}

onSubmit(form: any) {
console.log(form.value)


this.api.newForm(form.value).subscribe(
  (res: HttpResponse<any>) => {
    console.log(res.body);
    console.log(res.status);
  }
);
}

  from :From= {
    name: '',
    email: '',
    contact:'',
    password:''
  };

}
