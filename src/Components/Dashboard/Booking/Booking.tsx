import React from 'react';
import styled from 'styled-components';

import DashboardContainer from '../Dashboard/DashboardContainer/DashboardContainer';
import Card from './Card/Card';

const Grid = styled.div`
	padding: 1rem 2rem;
	//width: 100%;
	overflow: hidden;
	@media (max-width: 640px) {
		padding: 1rem;
	}
`;
const Table = styled.div`
	min-height: 800px;
	width: 90%;
	overflow-x: scroll;
	overflow-y: hidden;
	background: var(--bg-color);
	border-radius: 22px;
	padding: 2rem 1rem;
`;

export default function Booking() {
	return (
		<DashboardContainer>
			<Grid>
				<div>
					<div>
						<h1>Booking History</h1>
						<h2>Spots / Prime Spot</h2>
					</div>
					<button>Generate Report</button>
				</div>
				<div>
					<ul>
						<li>All Bookings (216)</li>
						<li>Pending</li>
						<li>On-going</li>
						<li>Completed</li>
						<li>Cancelled</li>
						<li>Refunded</li>
					</ul>

					<div>
						Search here
						<input />
					</div>
				</div>
				<Table>
					<Card />
				</Table>
			</Grid>
		</DashboardContainer>
	);
}
