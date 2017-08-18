import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { marbles } from 'rxjs-marbles';
import { provideMockActions } from '@ngrx/effects/testing';

import { {{titleCase name}}Effects } from '{{position 'effects'}}/{{lowerCase name}}.effects';
import { {{titleCase name}}Service } from '{{position 'services'}}/{{lowerCase name}}.service';
import * as {{lowerCase name}}Actions from '{{position 'actions'}}/{{lowerCase name}}.actions';

describe('{{titleCase name}}Effects', () => {
  let {{lowerCase name}}Effects: {{titleCase name}}Effects;
  let actions: Observable<any>;
  let {{lowerCase name}}Service: {{ titleCase name}}Service;
  let httpClient: HttpClient;

   beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {{titleCase name}}Effects,
        {{titleCase name}}Service,
        provideMockActions(() => actions),
     ]
   });

    {{lowerCase name}}Effects = TestBed.get({{titleCase name}}Effects);
    {{lowerCase name}}Service = TestBed.get({{titleCase name}}Service);
    httpClient = TestBed.get(HttpClient);
   });

  describe('{{lowerCase name}}$', () => {

    it('should work', marbles((m) => {
         jest.spyOn({{lowerCase name}}Service, 'get')
         .mockReturnValue(Observable.of([]));

         const loadAction = new {{lowerCase name}}Actions.LoadAction();
         actions = m.hot('--a-', { a: loadAction });

         const loadSuccessAction = new {{lowerCase name}}Actions.LoadSuccessAction([]);
         const result = m.cold('--b', { b: { ...loadSuccessAction } });

         m.expect({{lowerCase name}}Effects.get$).toBeObservable(result);
     }));
    });
});
