import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Company} from "../models/company.model";
import {AppState} from "../app.state";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  companies : Observable<Company[]>;
  success : boolean = true;

  constructor(private store : Store<AppState>) {
    this.companies = store.select('companies');

  }

  notifySuccess(success:boolean){
    this.success = success;
  }

  ngOnInit() {

  }

}
