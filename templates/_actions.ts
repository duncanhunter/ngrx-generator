import { Action } from '@ngrx/store';

export const LOAD_{{upperCase name}} = '[{{ titleCase name }}] Load';
export const LOAD_{{upperCase name}}_SUCCESS = '[{{ titleCase name }}] Load Success';
export const LOAD_{{upperCase name}}_FAIL = '[{{ titleCase name }}] Load Fail';

export class Load{{titleCase name}}Action implements Action {
  readonly type = LOAD_{{ upperCase name }};
}

export class Load{{titleCase name}}SuccessAction implements Action {
  readonly type = LOAD_{{ upperCase name }}_SUCCESS;
  constructor(public payload: any) { }
}

export class Load{{titleCase name}}FailAction implements Action {
  readonly type = LOAD_{{ upperCase name }}_FAIL;
  constructor(public payload: any) { }
}

export type Actions =
  | Load{{ titleCase name }}Action
  | Load{{ titleCase name }}SuccessAction
  | Load{{ titleCase name }}FailAction;
