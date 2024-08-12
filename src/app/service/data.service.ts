import { Injectable } from '@angular/core';

export interface Vendor{
  type:string,
  name:string,
  address:string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private venueV: Vendor[] = [
    { name: "venueVendor1", type: "venue", address: "dummy address1" },
    { name: "venueVendor2", type: "venue", address: "dummy address2" },
    { name: "venueVendor3", type: "venue", address: "dummy address3" },
    { name: "venueVendor4", type: "venue", address: "dummy address4" },
    { name: "venueVendor5", type: "venue", address: "dummy address5" },
    { name: "venueVendor6", type: "venue", address: "dummy address6" },
    { name: "venueVendor7", type: "venue", address: "dummy address7" },
    { name: "venueVendor8", type: "venue", address: "dummy address8" },
  ];

  private foodV: Vendor[] = [
    { name: "foodVendor1", type: "food", address: "dummy address1" },
    { name: "foodVendor2", type: "food", address: "dummy address2" },
    { name: "foodVendor3", type: "food", address: "dummy address3" },
    { name: "foodVendor4", type: "food", address: "dummy address4" },
    { name: "foodVendor5", type: "food", address: "dummy address5" },
    { name: "foodVendor6", type: "food", address: "dummy address6" },
    { name: "foodVendor7", type: "food", address: "dummy address7" },
    { name: "foodVendor8", type: "food", address: "dummy address8" },
  ];

  private caters: Vendor[] = [
    { name: "caterVendor1", type: "cater", address: "dummy address1" },
    { name: "caterVendor2", type: "cater", address: "dummy address2" },
    { name: "caterVendor3", type: "cater", address: "dummy address3" },
    { name: "caterVendor4", type: "cater", address: "dummy address4" },
    { name: "caterVendor5", type: "cater", address: "dummy address5" },
    { name: "caterVendor6", type: "cater", address: "dummy address6" },
    { name: "caterVendor7", type: "cater", address: "dummy address7" },
    { name: "caterVendor8", type: "cater", address: "dummy address8" },
  ];

  private decors: Vendor[] = [
    { name: "decorVendor1", type: "decor", address: "dummy address1" },
    { name: "decorVendor2", type: "decor", address: "dummy address2" },
    { name: "decorVendor3", type: "decor", address: "dummy address3" },
    { name: "decorVendor4", type: "decor", address: "dummy address4" },
    { name: "decorVendor5", type: "decor", address: "dummy address5" },
    { name: "decorVendor6", type: "decor", address: "dummy address6" },
    { name: "decorVendor7", type: "decor", address: "dummy address7" },
    { name: "decorVendor8", type: "decor", address: "dummy address8" },
  ];

  getFoodV(){
    return this.foodV
  }
  getvenueV(){
    return this.venueV
  }
  getcatersV(){
    return this.caters
  }
  getdecorsV(){
    return this.decors
  }

  constructor() { }
}
