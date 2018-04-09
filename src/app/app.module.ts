import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from "@ngrx/store";
import {companyReducer} from "./reducers/company.reducer";
import { OverviewComponent } from './overview/overview.component';
import { CompanyComponent } from './company/company.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OfficeComponent } from './office/office.component';
import { OfficeFormComponent } from './office-form/office-form.component';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { CompanyOfficeComponent } from './company-office/company-office.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    CompanyComponent,
    CompanyFormComponent,
    OfficeComponent,
    OfficeFormComponent,
    CompanyOfficeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      companies : companyReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
