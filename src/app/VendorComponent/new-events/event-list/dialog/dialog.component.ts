import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ApiserviceService } from '../../../../service/apiservice.service';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {

  loading : boolean = false 

  constructor(private api : ApiserviceService) { }

  @Input() eventdata : any

  updateStatus( phase : number , choice : boolean ){
    this.loading = true
    const query = {
      phase : phase ,
      choice : choice ,
      vendor_id : this.eventdata._id
    }

    this.api.updatePhasedata(query).subscribe((data) => {
      console.log(data)
      window.location.reload()
      this.loading = false

    })

  }



}
