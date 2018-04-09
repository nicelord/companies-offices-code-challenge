import {Component, OnInit, Input} from '@angular/core';
import {Company} from "../models/company.model";
import * as CompanyActions from "../actions/company.action";
import {AppState} from "../app.state";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  @Input() company : Company;
  @Input() index : number;
  constructor(private store : Store<AppState>) { }

  ngOnInit() {
  }

  delCompany(index){
    this.store.dispatch(new CompanyActions.DelCompany(index) )
  }
}
