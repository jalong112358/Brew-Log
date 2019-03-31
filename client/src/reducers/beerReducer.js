import {
  GET_BEERS,
  GET_BEER,
  BEER_LOADING,
  GET_BREWERY
} from "../actions/types";

const initialState = {
  brewery: {},
  beer: {},
  beers: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case BEER_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_BEERS:
      return {
        ...state,
        beers: action.payload,
        loading: false
      };
    case GET_BEER:
      return {
        ...state,
        beer: action.payload,
        loading: false
      };
    case GET_BREWERY:
      return {
        ...state,
        brewery: action.payload,
        loading: false
      };

    default:
      return state;
  }
}
