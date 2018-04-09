import {Company} from "../models/company.model";
import * as CompanyAction from "../actions/company.action"
/**
 * Created by asus on 08/04/2018.
 */


export function companyReducer(state : Company[] = [],action: CompanyAction.Actions){
  switch (action.type){
    case CompanyAction.ADD_COMPANY:
      return [...state,action.payload];
    case CompanyAction.DEL_COMPANY:
      state.splice(action.payload, 1);
      return state;
    case CompanyAction.UPDATE_COMPANY:
      return state;
    default:
      return state;
  }

}
