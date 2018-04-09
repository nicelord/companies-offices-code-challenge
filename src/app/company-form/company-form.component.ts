import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {AppState} from "../app.state";
import {Store} from "@ngrx/store";
import * as CompanyActions from "../actions/company.action";
import {Company} from "../models/company.model";
import {isNullOrUndefined} from "util";
import {NgForm} from "@angular/forms";
import {Office} from "../models/office.model";

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {

  company : Company;
  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();



  constructor(private store : Store<AppState>) {
    this.company = new Company();
  }

  addCompany(form: NgForm){
    if(!isNullOrUndefined(this.company.name) && !isNullOrUndefined(this.company.address) && !isNullOrUndefined(this.company.revenue) && !isNullOrUndefined(this.company.code) && !isNullOrUndefined(this.company.phone)){
      this.company.offices = [];
      this.store.dispatch(new CompanyActions.AddCompany(this.company));
      this.company = new Company();
      form.resetForm();
      this.notify.emit(true);
    }

  }

  ngOnInit() {


  }

}
