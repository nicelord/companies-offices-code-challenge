import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Company} from "../models/company.model";
import {AppState} from "../app.state";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Office} from "../models/office.model";

@Component({
  selector: 'app-company-office',
  templateUrl: './company-office.component.html',
  styleUrls: ['./company-office.component.css']
})
export class CompanyOfficeComponent implements OnInit {

  company : Company;

  constructor(private route: ActivatedRoute, private store : Store<AppState>) {

  }

  ngOnInit() {
    let companies : Observable<Company[]> = this.store.select('companies');
    companies.subscribe(res=>{
      this.company = res[this.route.snapshot.paramMap.get('id')]
    })

  }

}
