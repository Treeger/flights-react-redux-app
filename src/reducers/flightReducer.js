import {
	FLIGHTS_FETCH_SUCCESS,
	FLIGHTS_FETCH_FAILED,
	SELECT_CARIER
} from '../actions/types';

const INITIAL_STATE = {
	flights: [],
	selected: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FLIGHTS_FETCH_SUCCESS:
			return { ...state, flights: action.payload };
		case FLIGHTS_FETCH_FAILED:
			return { ...state, error: action.payload };
		case SELECT_CARIER:
			if (action.payload === 'All') return { ...state, selected: [] };
			return {
				...state,
				selected: state.flights.filter(f => f.carrier === action.payload)
			};
		default:
			return state;
	}
};
