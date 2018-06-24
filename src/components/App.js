import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';
import Flight from './Flight';

class App extends Component {
	render() {
		const store = createStore(reducers, applyMiddleware(reduxThunk));
		return (
			<Provider store={store}>
				<div className="row">
					<div className="col s8">
						<Flight />
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;
