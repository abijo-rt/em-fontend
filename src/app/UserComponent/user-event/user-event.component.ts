import { Component } from '@angular/core';
import { EventCardComponent } from '../../ui/event-card/event-card.component';
import { DataService } from '../../service/data.service';
import { ApiserviceService } from '../../service/apiservice.service';
import { EventListComponent } from "../../ui/event-list/event-list.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-event',
  standalone: true,
  imports: [EventCardComponent, EventListComponent,CommonModule],
  templateUrl: './user-event.component.html',
  styleUrl: './user-event.component.css'
})
export class UserEventComponent {

  constructor(private dataservice : DataService , private api :ApiserviceService){}
  userData : any | undefined ;

  arr = [1,2,4,5,1,2,3,4,5,1,1,2,3,1,12,2,1,2,3,3,1,1,1,1,1,1,1,1,]

  ngOnInit(){
    // this.userData = this.dataservice.getUserData()
    const token = localStorage.getItem('token');
    const decodeToken = this.dataservice.decodeToken(token)

    console.log(decodeToken)
   const body = {
    id : decodeToken._id
   }
    this.api.getUserDetails(body).subscribe((data) => {
      console.log(data.body)
      this.userData = data.body;
      console.log(this.userData.name)
      console.log(this.userData.phone)
      console.log(this.userData.email)
    })
  

  }

}
