import { useReducer } from 'react';
import styled from 'styled-components';

import { ReactComponent as DateIcon } from '../../../../../assets/date.svg';
import Card from './ActivitiesCard/Card';
import ServiceCard from './ServiceCard/ServiceCard';

const data = [
	{
		text: 'Rentals',
		amount: '4,550',
	},
	{
		text: 'Services',
		amount: '2,250',
	},
	{
		text: 'Remittances',
		amount: '2,250',
	},
	{
		text: 'Available Spots',
		amount: '4,550',
	},
	{
		text: 'Store owners',
		amount: '4,550',
	},
	{
		text: 'Spots',
		amount: '2,250',
	},
	{
		text: 'Available Spots',
		amount: '4,550',
	},
	{
		text: 'Booked Spots',
		amoutn: '4,550',
	},
];

const service = [
	{
		text: 'Customers',
		total: '300',
	},
	{
		text: 'Completed Bookings',
		total: '300',
	},
	{
		text: 'On-going Bookings',
		total: '1300',
	},
];
const Container = styled.div`
	padding: 1.5rem 1rem;
	@media (min-width: 768px) {
		padding: 1.5rem 1.7rem;
	}
`;

const StyledDate = styled.h6`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 0.8rem;
	line-height: 136%;
	display: flex;
	gap: 0.5rem;
	letter-spacing: 0.0481318px;
	color: #78746d;
	margin-bottom: 2.4rem;
	margin-top: 3.8rem;
`;

const StyledHeaderItem = styled.li`
	cursor: pointer;
`;
const Grid = styled.div`
	display: grid;
	margin-bottom: 1.8rem;
	grid-template-columns: repeat(1, 1fr);
	gap: 1rem;
	@media (min-width: 400px) {
		gap: 1rem;
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 1100px) {
		gap: 1rem;
		grid-template-columns: repeat(3, 1fr);
	}
	@media (min-width: 1250px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;
const GridService = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 1rem;
	@media (min-width: 640px) {
		gap: 1rem;
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 1300px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;
const InnerContainer = styled.div`
	max-width: 700px;
	width: 100%;
	display: flex;
	list-style: none;
	align-items: center;
	justify-content: space-between;
`;
const StyledHeader = styled.ul`
	height: 60px;
	margin: 0rem 0rem 3rem 0rem;
	background: rgba(91, 160, 146, 0.2);
	opacity: 0.5;
	padding: 0.4rem;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

export default function Activities() {
	const reducer = (
		state: { tab: string; title: string },
		action: { type: string }
	) => {
		switch (action.type) {
			case 'Lifetime':
				return {
					tab: '1',
					title: 'Lifetime',
				};
			case 'Daily':
				return {
					tab: '2',
					title: 'Daily',
				};
			case 'Weekly':
				return {
					tab: '3',
					title: 'Weekly',
				};
			case 'Monthly':
				return {
					tab: '4',
					title: 'Monthly',
				};
			default:
				return state;
		}
	};
	let initialState = {
		tab: '1',
		title: 'Lifetime',
	};
	const [state, dispatch] = useReducer(reducer, initialState);

	const handTab = (payload: string) => {
		dispatch({
			type: payload,
		});
	};

	return (
		<Container>
			<StyledDate>
				<DateIcon /> 22-Jul-21
			</StyledDate>
			<StyledHeader>
				<InnerContainer>
					<StyledHeaderItem
						className={state.tab === '1' ? 'activities-active' : undefined}
						onClick={() => {
							handTab('Lifetime');
						}}
					>
						Lifetime
					</StyledHeaderItem>
					<StyledHeaderItem
						className={state.tab === '2' ? 'activities-active' : undefined}
						onClick={() => {
							handTab('Daily');
						}}
					>
						Daily
					</StyledHeaderItem>
					<StyledHeaderItem
						className={state.tab === '3' ? 'activities-active' : undefined}
						onClick={() => {
							handTab('Weekly');
						}}
					>
						Weekly
					</StyledHeaderItem>
					<StyledHeaderItem
						className={state.tab === '4' ? 'activities-active' : undefined}
						onClick={() => {
							handTab('Monthly');
						}}
					>
						Monthly
					</StyledHeaderItem>
				</InnerContainer>
			</StyledHeader>
			<Grid>
				{data.map((item, index) => {
					return <Card data={item} Icon={''} key={index} />;
				})}
			</Grid>
			<GridService>
				{service.map((item, index) => {
					if (index === 0) {
						return <ServiceCard data={item} index={index} key={index} />;
					} else {
						return <ServiceCard data={item} key={index} />;
					}
				})}
			</GridService>
		</Container>
	);
}
