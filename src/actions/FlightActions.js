import axios from 'axios';
import {
	FLIGHTS_FETCH_SUCCESS,
	FLIGHTS_FETCH_FAILED,
	SELECT_CARIER
} from './types';

export const flightsFetch = () => dispatch => {
	try {
		axios.get('data.json').then(response =>
			dispatch({
				type: FLIGHTS_FETCH_SUCCESS,
				payload: response.data.flights
			})
		);
	} catch (e) {
		dispatch({ type: FLIGHTS_FETCH_FAILED, payload: 'Cant get server' });
	}
};

export const selectCarrier = carrier => {
	return {
		type: SELECT_CARIER,
		payload: carrier
	};
};
