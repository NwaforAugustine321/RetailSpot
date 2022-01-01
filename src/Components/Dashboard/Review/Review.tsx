import React from 'react';
import styled from 'styled-components';

import DashboardContainer from '../Dashboard/DashboardContainer/DashboardContainer';
import { ReactComponent as RateIcon } from '../../../assets/rate.svg';
import Card from './Card';
import PiginationButton from '../../../Components/Partial/NextButton';

const comment = [
	{
		name: 'Martin Chuaks',
		id: '#C01234',
		comment:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
		date: 'Posted on 26/04/2020, 12:42 AM',
	},
	{
		name: 'Oliver Jean',
		id: '#C01234',
		comment:
			'I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and  was very helpful and excellent',
		date: 'Posted on 26/04/2020, 12:42 AM',
	},
	{
		name: 'Kevin Mandala',
		id: '#C01234',
		comment:
			'I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and  was very helpful and excellent',
		date: 'Posted on 26/04/2020, 12:42 AM',
	},
	{
		name: 'Martin Chuaks',
		id: '#C01234',
		comment:
			'I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and  was very helpful and excellent',
		date: 'Posted on 26/04/2020, 12:42 AM',
	},
	{
		name: 'Mc. Kowalski',
		id: '#C01234',
		comment:
			'I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and  was very helpful and excellent',
		date: 'Posted on 26/04/2020, 12:42 AM',
	},
	{
		name: 'Martin Chuaks',
		id: '#C01234',
		comment:
			'I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and  was very helpful and excellent',
		date: 'Posted on 26/04/2020, 12:42 AM',
	},
];

const Grid = styled.div`
	padding: 3rem 2rem;
	width: 100%;
	@media (max-width: 640px) {
		padding: 1rem;
	}
`;

const PageTitle = styled.h1`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 1.13rem;
	margin-bottom: 2.5rem;
	color: #252b1d;
`;

const Header = styled.div`
	display: flex;
	min-height: 50px;
	justify-content: space-between;
	margin-bottom: 1rem;
	border-bottom: 1px solid #e3e3e3;
	@media (max-width: 1060px) {
		flex-direction: column;
	}
`;

const HeaderList = styled.div``;

const HeaderListItem = styled.li`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: 500;
	font-size: 1.13rem;
	height: 100%;
	color: rgba(0, 0, 0, 0.3);
	@media (max-width: 640px) {
		font-size: 0.9rem;
	}
`;

const HeaderListContainer = styled.ul`
	display: flex;
	list-style: none;
	height: 100%;
	gap: 2rem;
	@media (max-width: 640px) {
		gap: 1rem;
	}
`;

const RateContainer = styled.div`
	display: flex;
	gap: 0.9rem;
	height: 100%;
	align-items: center;
	justify-content: flex-end;
	@media (max-width: 640px) {
		justify-content: flex-start;
	}
	@media (max-width: 1060px) {
		margin-bottom: 1rem;
		margin-top: 1rem;
	}
`;

const RateTitle = styled.h1`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 1.13rem;
	@media (max-width: 400px) {
		font-size: 0.9rem;
	}
`;

const Table = styled.div`
	min-height: 800px;
	width: 100%;
	background: var(--bg-color);
	border-radius: 22px;
	padding: 2rem 1.5rem;
	@media (max-width: 640px) {
		padding: 2rem 1rem;
	}
`;

export default function Review() {
	return (
		<DashboardContainer>
			<Grid>
				<PageTitle>Reviews</PageTitle>

				<Table>
					<Header>
						<HeaderList>
							<HeaderListContainer>
								<HeaderListItem className='review-active'>
									All Reviews
								</HeaderListItem>
								<HeaderListItem>Published</HeaderListItem>
								<HeaderListItem>Deleted</HeaderListItem>
							</HeaderListContainer>
						</HeaderList>

						<RateContainer>
							<RateTitle>Sort by rate :</RateTitle>
							<RateIcon />
						</RateContainer>
					</Header>
					{comment.map((item, index) => {
						return <Card data={item} key={index} />;
					})}
				</Table>
				<PiginationButton align='flex-end' />
			</Grid>
		</DashboardContainer>
	);
}
