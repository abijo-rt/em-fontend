import { Component, Input, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule,TableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent {

  @Input() paymentable :  any[] = [] ;




fetchdata() {
console.log(this.paymentable)
}

}
