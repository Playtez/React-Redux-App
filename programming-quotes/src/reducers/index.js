import { FETCH_QUOTE_START, FETCH_QUOTE_SUCCESS } from "../actions";

export const initialState = {
  quote: [],
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTE_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_QUOTE_SUCCESS:
      return {
        ...state,
        quote: action.payload,
        isFetching: false,
        error: ""
      };
    default:
      return state;
  }
};
