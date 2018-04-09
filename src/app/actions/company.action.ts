
import {Action} from "@ngrx/store";
import {Company} from "../models/company.model";
/**
 * Created by asus on 08/04/2018.
 */
export const ADD_COMPANY = '[COMPANY] Add';
export const DEL_COMPANY = '[COMPANY] Del';
export const UPDATE_COMPANY = '[COMPANY] Update';

export class AddCompany implements Action{
  readonly type = ADD_COMPANY;

  constructor(public payload: Company){}
}

export class DelCompany implements Action{
  readonly type = DEL_COMPANY;

  constructor(public payload: number){}
}

export class UpdateCompany implements Action{
  readonly type = UPDATE_COMPANY;

  constructor(public payload: Company){}
}

export type Actions = AddCompany | DelCompany | UpdateCompany;


