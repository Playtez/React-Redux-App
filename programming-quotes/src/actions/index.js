import axios from "axios";

export const FETCH_QUOTE_START = "FETCH_QUOTE_START";
export const FETCH_QUOTE_SUCCESS = "FETCH_QUOTE_SUCCESS";
export const FETCH_QUOTE_FAILURE = "FETCH_QUOTE_FAILURE";

export const getQuote = () => dispatch => {
  dispatch({ type: FETCH_QUOTE_START });
  axios
    .get("https://programming-quotes-api.herokuapp.com/quotes")
    .then(res => {
      // console.log(res, "This call is in actions/index.js");
      dispatch({ type: FETCH_QUOTE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_QUOTE_FAILURE, payload: err.response });
    });
};
