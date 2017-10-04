import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { {{properCase name }}Service } from '{{position "services"}}/{{ lowerCase name }}.service';
import * as {{ camelCase name }}Actions from '{{position "actions"}}/{{ lowerCase name }}.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class {{ properCase name }}Effects {

  @Effect() get$ = this.actions$
     .ofType({{ camelCase name }}Actions.LOAD_{{upperCase name }})
     .map(toPayload)
     .switchMap(payload => this.{{ camelCase name }}Service.get()
      .map(data => ({ type: {{ camelCase name }}Actions.LOAD_{{upperCase name }}_SUCCESS, payload: data}))
      .catch(() => Observable.of({ type: {{ camelCase name }}Actions.LOAD_{{upperCase name }}_FAIL}))
     );

  constructor(
    private {{ camelCase name }}Service: {{ properCase name }}Service,
    private actions$: Actions
  ) { }

}
