import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  private url = 'http://localhost:3000/';

  constructor(private https : HttpClient) { }
  

  newForm(data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}vendor/newvendor`,data,{observe:'response'});
  }

  newuser(data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}newUser`,data,{observe:'response'});
  }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
}
