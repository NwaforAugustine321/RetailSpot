import { useReducer } from 'react';
import styled from 'styled-components';

import DashboardContainer from '../Dashboard/DashboardContainer/DashboardContainer';
import CustuomerCard from './CustomersCard';
import Input from '../../../Template/Input/Input';
import Button from '../../../Template/Button/Button';
import { SearchOutlined } from '@ant-design/icons';
import { ReactComponent as BtnIcon } from '../../../assets/btnIcon.svg';
import PiginationButton from '../../../Components/Partial/NextButton';

const Grid = styled.div`
	padding: 4rem 2rem;

	@media (max-width: 1100px) {
		padding: 1rem;
	}
`;

const NavButtonLeft = styled(Button)`
	max-width: 135px;
	height: 49px;
	background: #5ba092;
	white-space: nowrap;
	margin: 0;
	border: 1px solid #ccd4e0;
	//	font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 0.9rem;
	padding: 0.9rem;
`;

const NavButtonRight = styled(Button)`
	max-width: 135px;
	height: 49px;
	white-space: nowrap;
	margin: 0;
	border: 1px solid #bdbdbd;
	box-sizing: border-box;
	color: var(--sec-text-color);
	background: var(--bg-color);
	//	font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 0.9rem;
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

const Wrapper = styled.div`
	display: flex;
	list-style: none;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
	min-height: 69px;
	@media (max-width: 1400px) {
		padding: 0rem;
	}
	@media (min-width: 800px) {
		max-width: 60%;
		flex-direction: row;
		width: 100%;
		justify-content: space-between;
	}
`;

const Nav = styled.nav`
	width: 73%;
	@media (max-width: 1190px) {
		width: 100%;
	}
	@media (min-width: 800px) {
		width: 100%;
		background: #ffffff;
		padding: 0rem 3.63rem;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
		border-radius: 20px;
	}
`;

const NavItem = styled.li`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: 500;
	font-size: 1.13rem;
	cursor: pointer;
	height: 100%;
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

const TitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 2.4rem;
`;
const ButtonContainer = styled.div`
	display: flex;
	gap: 2rem;
	margin-bottom: 1.4rem;
	max-width: 400px;
`;

const Title = styled.h1`
	//	font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 1.13rem;
	letter-spacing: -0.5px;
	margin-bottom: 2.1rem;
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

export default function CustomerPayment() {
	const storeReducer = (
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

			case 'Completed':
				return {
					tab: '3',
					title: 'Completed',
				};

			default:
				return state;
		}
	};
	let initialStoreState = {
		tab: '1',
		title: 'All Bookings',
	};
	const [storesState, dispatchstore] = useReducer(
		storeReducer,
		initialStoreState
	);
	const handTabNav = (payload: string) => {
		dispatchstore({
			type: payload,
		});
	};

	return (
		<>
			<Container>
				<Nav>
					<Wrapper>
						<NavItem
							className={storesState.tab === '1' ? 'review-active' : undefined}
							onClick={() => {
								handTabNav('All Bookings');
							}}
						>
							All Bookings (216)
						</NavItem>
						<NavItem
							className={storesState.tab === '2' ? 'review-active' : undefined}
							onClick={() => {
								handTabNav('Pending');
							}}
						>
							Pending
						</NavItem>
						<NavItem
							className={storesState.tab === '3' ? 'review-active' : undefined}
							onClick={() => {
								handTabNav('Completed');
							}}
						>
							Completed
						</NavItem>
					</Wrapper>
				</Nav>

				<CustomeInputContainer>
					<Input type='text' width='298px' placeholder='Search here' />
					<SearchOutlined />
				</CustomeInputContainer>
			</Container>
			<CustuomerCard />
		</>
	);
}
