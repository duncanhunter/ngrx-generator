import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { {{properCase name }}Service } from '{{position "services"}}/{{ lowerCase name }}.service';
import * as {{ camelCase name }}Actions from '{{position "actions"}}/{{ lowerCase name }}.actions';
import { switchMap, catch, map } from 'rxjs/operators';
import { of } from 'rxjs/Observable/of';

@Injectable()
export class {{ properCase name }}Effects {

  @Effect() get$ = this.actions$
     .pipe(
        ofType({{ camelCase name }}Actions.LOAD_{{upperCase name}}),
        switchMap(payload => this.{{camelCase name}}Service.get(),
        map(data => ({ type: {{camelCase name}}Actions.LOAD_{{upperCase name }}_SUCCESS, payload: data})),
        catch(() => of({ type: {{camelCase name}}Actions.LOAD_{{upperCase name }}_FAIL}))
     ));

  constructor(
    private {{ camelCase name }}Service: {{ properCase name }}Service,
    private actions$: Actions
  ) { }

}
