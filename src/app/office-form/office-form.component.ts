import {Component, OnInit, Input} from '@angular/core';
import {Office} from "../models/office.model";
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";
import {NgForm} from "@angular/forms";
import {isNullOrUndefined} from "util";
import * as CompanyActions from "../actions/company.action";
import {Company} from "../models/company.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-office-form',
  templateUrl: './office-form.component.html',
  styleUrls: ['./office-form.component.css']
})
export class OfficeFormComponent implements OnInit {

  office: Office;
  @Input() companies: Company[];
  selectedCompany: Company;

  constructor(private store: Store<AppState>) {
    this.office = new Office();
  }

  addOffice(form: NgForm) {

    if(!isNullOrUndefined(this.office.name) && !isNullOrUndefined(this.office.lat) && !isNullOrUndefined(this.office.log) && !isNullOrUndefined(this.office.date)){
      this.selectedCompany.offices.push(this.office);
      this.store.dispatch(new CompanyActions.UpdateCompany(this.selectedCompany));
      this.office = new Office();
      form.resetForm()
    }

  }


  ngOnInit() {
  }

}
