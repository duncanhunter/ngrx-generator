import { Action } from '@ngrx/store';

export const LOAD_{{upperCase name}} = '[{{titleCase name}}] Load';
export const LOAD_{{upperCase name}}_SUCCESS = '[{{titleCase name}}] Load Success';
export const LOAD_{{upperCase name}}_FAIL = '[{{titleCase name}}] Load Fail';

export class Load{{properCase name}}Action implements Action {
  readonly type = LOAD_{{upperCase name}};
}

export class Load{{properCase name}}SuccessAction implements Action {
  readonly type = LOAD_{{upperCase name}}_SUCCESS;
  constructor(public payload: any) { }
}

export class Load{{properCase name}}FailAction implements Action {
  readonly type = LOAD_{{upperCase name}}_FAIL;
  constructor(public payload: any) { }
}

export type Actions =
  | Load{{properCase name}}Action
  | Load{{properCase name}}SuccessAction
  | Load{{properCase name}}FailAction;
