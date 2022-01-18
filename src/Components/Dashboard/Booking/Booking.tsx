import { useReducer } from 'react';
import styled from 'styled-components';

import DashboardContainer from '../Dashboard/DashboardContainer/DashboardContainer';
import Card from './Card/Card';
import Input from '../../../Template/Input/Input';
import Button from '../../../Template/Button/Button';
import { SearchOutlined } from '@ant-design/icons';
import { ReactComponent as BtnIcon } from '../../../assets/btnIcon.svg';
import PiginationButton from '../../../Components/Partial/NextButton';

const Grid = styled.div`
	padding: 4rem 2rem;
	@media (max-width: 640px) {
		padding: 1rem;
	}
`;
const Table = styled.div`
	min-height: 800px;
	background: var(--bg-color);
	border-radius: 22px;
	padding: 2rem 1rem;
`;

const StyledButton = styled.button`
	max-width: 246px;
	height: 69px;
	background: var(--pri-color);
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	margin: 0;
	padding: 0.9rem 1.5rem;
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: bold;
	font-size: 1rem;
	color: var(--bg-color);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
	border-radius: 20px;
	@media (max-width: 800px) {
		max-width: 200px;
		height: 69px;
		span {
			display: none;
		}
	}
	border: none;
	height: 69px;
	@media (max-width: 640px) {
		max-width: 90px;
		height: 50px;
	}
`;

const TableHeader = styled.ul`
	display: flex;
	align-items: center;
	padding: 0rem 0rem;
	max-width: 95%;
	margin: 0rem auto;
	min-height: 70px;
	border-bottom: 1px solid #e3e3e3;
	justify-content: space-between;
	list-style: none;
	@media (max-width: 1150px) {
		margin-bottom: 1rem;
	}
`;

const Nav = styled.nav`
	display: flex;
	list-style: none;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
	width: 73%;
	min-height: 69px;
	@media (max-width: 1400px) {
		padding: 0rem;
	}
	@media (max-width: 1190px) {
		width: 100%;
	}
	@media (min-width: 800px) {
		flex-direction: row;
		width: 100%;
		padding: 0rem 3.63rem;
		justify-content: space-between;
		background: #ffffff;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
		border-radius: 20px;
	}
`;

const NavItem = styled.li`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: 500;
	font-size: 1.13rem;
	height: 100%;
	cursor: pointer;
	display: flex;
	align-items: center;
	color: rgba(0, 0, 0, 0.3);
	@media (max-width: 1400px) {
		font-size: 1rem;
	}

	@media (max-width: 800px) {
		display: flex;
		justify-content: center;
		align-items: center;
		//padding: 0rem 3.63rem;
		border-radius: 0px;
		background: #ffffff;
		height: 60px;
		width: 100%;

		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
	}
`;

const Container = styled.div`
	display: flex;
	gap: 2rem;
	margin-bottom: 1.63rem;
	@media (max-width: 1300px) {
		flex-direction: column;
	}
`;

const TableHeaderList = styled.li`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	color: #000000;
	@media (max-width: 1150px) {
		font-size: 0.9rem;
	}
`;

const TableHeaderListStatus = styled.li`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: bold;
	width: 35%;
	font-size: 18px;
	color: #000000;
	@media (max-width: 1150px) {
		font-size: 0.9rem;
	}
`;
const LeftContainer = styled.div`
	display: flex;
	width: 40%;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 1150px) {
		width: 100%;
		align-items: center;
	}
`;
const RightContainer = styled.div`
	display: flex;
	width: 46%;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 1150px) {
		display: none;
	}
`;

const TitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 2.4rem;
`;

const Title = styled.h1`
	//	font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 1.13rem;
	letter-spacing: -0.5px;
	margin-bottom: 2.1rem;
`;

const SubTitle = styled.h1`
	//	font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 1.13rem;
	letter-spacing: -0.5px;
	color: #525252;
	span {
		color: var(--pri-color);
	}
`;

const CustomeInputContainer = styled.div`
	max-width: 25%;
	max-height: 69px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
	border-radius: 20px;
	opacity: 0.7;
	border: 1px solid #bfbfbf;
	appearance: none;
	background: var(--bg-color);
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 0rem 1rem;
	@media (max-width: 1190px) {
		max-width: 60%;
	}
`;

export default function Booking() {
	const reducer = (
		state: { tab: string; title: string },
		action: { type: string }
	) => {
		switch (action.type) {
			case 'All Bookings':
				return {
					tab: '1',
					title: 'All Bookings',
				};
			case 'Pending':
				return {
					tab: '2',
					title: 'Pending',
				};
			case 'On-going':
				return {
					tab: '3',
					title: 'On-going',
				};
			case 'Completed':
				return {
					tab: '4',
					title: 'Completed',
				};
			case 'Cancelled':
				return {
					tab: '5',
					title: 'Cancelled',
				};
			case 'Refunded':
				return {
					tab: '6',
					title: 'Refunded',
				};
			default:
				return state;
		}
	};
	let initialState = {
		tab: '1',
		title: 'All Bookings',
	};
	const [state, dispatch] = useReducer(reducer, initialState);

	const handTab = (payload: string) => {
		dispatch({
			type: payload,
		});
	};
	return (
		<DashboardContainer>
			<Grid>
				<TitleContainer>
					<div>
						<Title>Booking History</Title>
						<SubTitle>
							<span>Stores / </span> Ebeano
						</SubTitle>
					</div>
					<StyledButton>
						<BtnIcon />
						<span>Generate Report</span>
					</StyledButton>
				</TitleContainer>
				<Container>
					<Nav>
						<NavItem
							className={state.tab === '1' ? 'review-active' : undefined}
							onClick={() => {
								handTab('All Bookings');
							}}
						>
							All Bookings (216)
						</NavItem>
						<NavItem
							className={state.tab === '2' ? 'review-active' : undefined}
							onClick={() => {
								handTab('Pending');
							}}
						>
							Pending
						</NavItem>
						<NavItem
							className={state.tab === '3' ? 'review-active' : undefined}
							onClick={() => {
								handTab('On-going');
							}}
						>
							On-going
						</NavItem>
						<NavItem
							className={state.tab === '4' ? 'review-active' : undefined}
							onClick={() => {
								handTab('Completed');
							}}
						>
							Completed
						</NavItem>
						<NavItem
							className={state.tab === '5' ? 'review-active' : undefined}
							onClick={() => {
								handTab('Cancelled');
							}}
						>
							Cancelled
						</NavItem>
						<NavItem
							className={state.tab === '6' ? 'review-active' : undefined}
							onClick={() => {
								handTab('Refunded');
							}}
						>
							Refunded
						</NavItem>
					</Nav>

					<CustomeInputContainer>
						<Input type='text' width='298px' placeholder='Search here' />
						<SearchOutlined />
					</CustomeInputContainer>
				</Container>
				<Table>
					<TableHeader>
						<LeftContainer>
							<TableHeaderList>Customer</TableHeaderList>
							<TableHeaderList>Date Order</TableHeaderList>
						</LeftContainer>

						<RightContainer>
							<TableHeaderList>Check In</TableHeaderList>
							<TableHeaderList>Check Out</TableHeaderList>
							<TableHeaderListStatus>Status</TableHeaderListStatus>
						</RightContainer>
					</TableHeader>
					<Card />
				</Table>
				<PiginationButton align='flex-end' />
			</Grid>
		</DashboardContainer>
	);
}
