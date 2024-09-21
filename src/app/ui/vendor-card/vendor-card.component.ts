import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-vendor-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vendor-card.component.html',
  styleUrl: './vendor-card.component.css'
})
export class VendorCardComponent {
@Input() name:string|undefined;
@Input() address:string|undefined;
@Input() type:string|undefined;
icon:string|undefined;
add:boolean=false
@Output() dataEmitter = new EventEmitter<string>();



isFocused: string | undefined; // Track the focused button

added() {
  this.add=!this.add
  this.sendvendor()
  if (this.isFocused === this.name) {
    this.isFocused = undefined; // Unfocus if clicked again
  } else {
    this.isFocused = this.name; // Focus the clicked button
  } // Set the focus to the clicked button
}

  sendvendor() {
   
    if(this.add){
      // alert(this.name);
      this.dataEmitter.emit(this.name);}
  }

}
