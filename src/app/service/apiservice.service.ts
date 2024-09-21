import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  private url = 'http://localhost:3000/';

  constructor(private https : HttpClient) { }
  

  newVendor(data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}vendor/newvendor`,data,{observe:'response'});
  }

  loginVendor(data : any) : Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}vendor/loginvendor`,data,{observe:'response'});
  }

  newUser(data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}user/newUser`, data , {observe:'response'});
  }

  loginUser(data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}user/loginUser`, data ,{observe:'response'});
  }

  getVendorList(data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}vendor/getVendorList`, data ,{observe:'response'});
  }

  getUserDetails(data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}user/getUserDetails`, data ,{observe:'response'});
  }
  
  newEvent(data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}user/newEvent`, data ,{observe:'response'});
  }

  


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
}
