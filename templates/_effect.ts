import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { switchMap, map } from 'rxjs/operators';
import { SwaggerClient } from './../../swagger-client';
import * as {{camelCase name}}Actions from '{{position "actions"}}/{{dashCase name}}.actions';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class {{ properCase name }}Effects {

  constructor(
    private swaggerClient: SwaggerClient,
    private actions$: Actions
  ) { }
  
  @Effect() get$ = this.actions$
     .ofType({{ camelCase name }}Actions.LOAD_{{upperCase name}})
     .pipe(
        switchMap(payload => this.swaggerClient.get()),
        map(data => (new {{camelCase name}}Actions.load_{{properCase name }}Success(payload: data))
     )).catch(() => Observable.of(new {{camelCase name}}Actions.load_{{properCase name }}Fail(payload: data)));

}
