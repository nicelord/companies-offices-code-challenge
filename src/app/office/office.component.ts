import {Component, OnInit, Input} from '@angular/core';
import {Office} from "../models/office.model";
import {Company} from "../models/company.model";
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";
import * as CompanyActions from "../actions/company.action"

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {
 @Input() office : Office;
 @Input() company : Company;

  constructor(private store : Store<AppState>) { }

  delOffice(){
    this.company.offices.splice(this.company.offices.indexOf(this.office));
    this.store.dispatch(new CompanyActions.UpdateCompany(this.company));
  }

  ngOnInit() {
  }

}
