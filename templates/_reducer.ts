import * as {{ camelCase name }} from '{{position "actions"}}/{{ dashCase name }}.actions';

export interface {{properCase name}}State {
  loading: boolean;
  result: any[];
}

export const initialState: {{properCase name}}State = {
  loading: false,
  result: []
}

export function {{ camelCase name }}Command(state:  {{properCase name}}State):  {{properCase name}}State {
  return {
    ...state,
    loading: true
  };
}

export function {{ camelCase name }}SuccessCommand(state:  {{properCase name}}State, payload: any):  {{properCase name}}State {
  return  {
      ...payload,
      loading: false
  };
}

export function reducer(state = initialState, action: {{ camelCase name }}.Actions): {{properCase name}}State {
  switch (action.type) {
    case {{ camelCase name }}.LOAD_{{upperCase name }}: return {{ camelCase name }}Command(state);
    case {{ camelCase name }}.LOAD_{{upperCase name }}_SUCCESS: return {{ camelCase name }}SuccessCommand(state, action.payload);
    default: return state;
  }
}

