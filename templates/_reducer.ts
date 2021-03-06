import * as {{ camelCase name }} from '{{position "actions"}}/{{ lowerCase name }}.actions';

export interface State {
  loading: boolean;
  result: any[];
};

export const initialState: State = {
  loading: false,
  result: []
};

export function reducer(state = initialState, action: {{ camelCase name }}.Actions): State {
  switch (action.type) {
    case {{ camelCase name }}.LOAD_{{upperCase name }}: {
      return {
        ...state,
        loading: true
      };
    }

    case {{ camelCase name }}.LOAD_{{upperCase name }}_SUCCESS: {
      return {
        ...state,
        result: action.payload,
        loading: false,
      };
    }

     case {{ camelCase name }}.LOAD_{{upperCase name }}_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
}

