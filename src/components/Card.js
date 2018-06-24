import React from 'react';

const Card = ({ flight }) => {
	const formatDate = dateStr => new Date(dateStr).toLocaleString();
	return (
		<li className="collection-item avatar">
			<div>
				<p>{flight.direction.from}</p>
				<p>{flight.direction.to}</p>
			</div>
			<div className="secondary-content">
				<div className="right-time">
					<i className="material-icons">flight_takeoff</i>
					{formatDate(flight.arrival)}
				</div>
				<div className="right-time">
					<i className="material-icons">flight_land</i>
					{formatDate(flight.departure)}
				</div>
			</div>
		</li>
	);
};
export default Card;
