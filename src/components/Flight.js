import React, { Component } from 'react';
import { connect } from 'react-redux';
import { flightsFetch, selectCarrier } from '../actions';
import Card from './Card';

class Flight extends Component {
	constructor(props) {
		super(props);
		this.onSelect = this.onSelect.bind(this);
	}
	componentWillMount() {
		this.props.flightsFetch();
	}

	onSelect(e) {
		this.props.selectCarrier(e.target.value);
	}

	renderCards(flights) {
		if (!flights.length) return;
		return (
			<ul className="collection">
				{flights.map(f => <Card key={f.id} flight={f} />)}{' '}
			</ul>
		);
	}

	render() {
		const { selected, flights } = this.props;
		let carriers = flights.reduce((set, el) => {
			set.add(el.carrier);
			return set;
		}, new Set());
		carriers = Array.from(carriers).map(c => <option key={c}>{c}</option>);
		const flightsToShow = selected.length ? selected : flights;
		return (
			<div>
				<p>Please select carrier:</p>
				<div className="input-field col s12">
					<select className="material-select" onChange={this.onSelect}>
						<option>All</option>
						{carriers}
					</select>
				</div>
				{this.renderCards(flightsToShow)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { flights: state.flights.flights, selected: state.flights.selected };
}

export default connect(mapStateToProps, { flightsFetch, selectCarrier })(
	Flight
);
