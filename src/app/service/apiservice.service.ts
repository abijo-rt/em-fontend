import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
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

  getVendorDetails(data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}vendor/getVendorDetails`, data ,{observe:'response'});
  }
  
  newEvent(data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}user/newEvent`, data ,{observe:'response'});
  }

  getEventList(data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}user/eventList`, data ,{observe:'response'});
  }
  
  getEventVendorList(data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}user/getEventVendorList`, data ,{observe:'response'});
  }

  updatePhasedata (data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}vendor/updatePhasedata`, data ,{observe:'response'});
  }

 getEventListForVendorPage(data: any): Observable<HttpResponse<any>> {
  console.log("lof???")
  const params = new HttpParams({ fromObject: data });
  return this.https.get<any>(`${this.url}vendor/getEventListForVendorPage`, {
    params: params,
    observe: 'response'
  });

}

  


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
}
