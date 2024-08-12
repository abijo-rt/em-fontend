import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
interface input{
  name:string,
  value:any
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
@Input() name: any |undefined;
@Input() type: any |undefined;
data:any|undefined;

@Output() dataEmitter = new EventEmitter<input>();

  sendDataToParent() {
    const send: input = { name: this.name!, value: this.data }; // Corrected object creation
    this.dataEmitter.emit(send);
  }




}
