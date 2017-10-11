import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { {{properCase name }}Service } from '{{position "services"}}/{{ dashCase name }}.service';
import * as {{ camelCase name }}Actions from '{{position "actions"}}/{{ dashCase name }}.actions';
import { map, filter, switchMap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class {{ properCase name }}Effects {

  constructor(
    private {{ camelCase name }}Service: {{ properCase name }}Service,
    private actions$: Actions
  ) { }

  @Effect() get$ = this.actions$
      .pipe(
        filter(action => action.type === {{ camelCase name }}Actions.LOAD_{{upperCase name }}),
        switchMap(_ => this.{{ camelCase name }}Service.get()),
        map({{camelCase name}} => ( new {{ camelCase name }}Actions.Load{{properCase name }}SuccessAction({{camelCase name}})),
      ))
      .catch(error => Observable.of(new {{ camelCase name }}Actions.Load{{properCase name }}FailAction(error)))
     );
}
