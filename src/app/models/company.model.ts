import {Office} from "./office.model";
/**
 * Created by asus on 08/04/2018.
 */
export class Company {
  name:string;
  address: string;
  revenue: number;
  code: number;
  phone: number;
  offices : Office[];
  constructor() {
    // this.name = name;
    // this.address = address;
    // this.revenue = revenue;
    // this.code = code;
    // this.phone = phone;
  }
}
