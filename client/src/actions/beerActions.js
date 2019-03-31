import axios from "axios";

import {
  GET_BEER,
  GET_BEERS,
  BEER_LOADING,
  GET_ERRORS,
  GET_BREWERY
} from "./types";

// Search beers
export const searchBeers = (search, page) => dispatch => {
  dispatch(setBeerLoading());
  axios
    .get(`/api/beer/search`, { params: { search: search, page: page } })
    .then(res =>
      dispatch({
        type: GET_BEERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_BEERS,
        payload: null
      })
    );
};
// Get beer by Id
export const getBeerById = id => dispatch => {
  console.log(id);
  dispatch(setBeerLoading());
  axios
    .get(`/api/beer/id=${id}`)
    .then(res =>
      dispatch({
        type: GET_BEER,
        payload: res.data.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_BEER,
        payload: null
      })
    );
};

//Get related beers
export const getBeersByStyle = style => dispatch => {
  axios
    .get("/api/beer/style", { params: { style: style } })
    .then(res =>
      dispatch({
        type: GET_BEERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_BEERS,
        payload: null
      })
    );
};

// Get brewery by Id
export const getBreweryById = id => dispatch => {
  console.log(id);
  dispatch(setBeerLoading());
  axios
    .get(`/api/beer/brewery/id=${id}`)
    .then(res =>
      dispatch({
        type: GET_BREWERY,
        payload: res.data.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_BREWERY,
        payload: null
      })
    );
};

//  Loading
export const setBeerLoading = () => {
  return {
    type: BEER_LOADING
  };
};
