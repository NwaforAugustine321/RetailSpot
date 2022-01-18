import { useReducer, useState } from 'react';
import styled from 'styled-components';

import DashboardContainer from '../Dashboard/DashboardContainer/DashboardContainer';
import Card from './Card';
import Input from '../../../Template/Input/Input';
import Button from '../../../Template/Button/Button';
import { SearchOutlined } from '@ant-design/icons';
import { ReactComponent as BtnIcon } from '../../../assets/btnIcon.svg';
import { ReactComponent as PhoneIcon } from '../../../assets/phone.svg';
import { ReactComponent as PrintIcon } from '../../../assets/print.svg';
import PiginationButton from '../../../Components/Partial/NextButton';
import ModalContainer from '../../Partial/ModalContainer';
import url from '../../../assets/spots.png';

const Grid = styled.div`
	padding: 4rem 1rem;

	@media (max-width: 1100px) {
		padding: 1rem;
	}
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
	@media (max-width: 640px) {
		max-width: 90px;
		height: 50px;
	}
`;

const ActionButton = styled.button`
	width: 168px;
	height: 47px;
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
	border-radius: 8px;
	border: none;
`;

const DownloadButton = styled.button`
	max-width: 200px;
	height: 48px;
	background: var(--pri-color);
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	margin: 0;
	padding: 0.9rem 1rem;
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: bold;
	font-size: 0.9rem;
	color: var(--bg-color);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
	border-radius: 25px;
	@media (max-width: 800px) {
		max-width: 200px;
		height: 50px;
		span {
			display: none;
		}
	}
	border: none;
	@media (max-width: 640px) {
		max-width: 90px;
	}
`;

const PrintButton = styled.button`
	max-width: 113px;
	height: 48px;
	background: var(--bg-color);
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	margin: 0;
	padding: 0.9rem 1rem;
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: bold;
	font-size: 0.9rem;
	color: var(--pri-color);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
	border-radius: 25px;
	border: 1px solid #e3562a;
	@media (max-width: 800px) {
		max-width: 200px;
		height: 50px;
		span {
			display: none;
		}
	}

	@media (max-width: 640px) {
		max-width: 90px;
	}
`;

const TelButton = styled.button`
	width: 273px;
	height: 80px;
	background: var(--bg-color);
	display: flex;
	text-align: left;
	align-items: center;
	gap: 1rem;
	margin: 0;
	padding: 0rem 1rem;
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: bold;
	font-size: 0.9rem;
	justify-content: space-evenly;
	color: var(--pri-color);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
	border-radius: 30px;
	border: 1px solid #e3562a;
	span {
		display: block;
	}
	@media (max-width: 800px) {
		width: 90px;
		height: 50px;
		span {
			display: none;
		}
	}

	@media (max-width: 640px) {
		max-width: 90px;
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
const CustomerTitle = styled.h1`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: 600;
	font-size: 1.2rem;
	margin-bottom: 1.5rem;
	@media (max-width: 640px) {
		font-size: 0.9rem;
	}
`;

const IDTitle = styled.h1`
	//	font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 0.8rem;
	letter-spacing: -0.5px;
	margin-bottom: 1rem;
	@media (max-width: 640px) {
		font-size: 0.8rem;
	}
`;
const ID = styled.h1`
	//	font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 2rem;
	letter-spacing: -0.5px;
	@media (max-width: 1024px) {
		font-size: 1.5rem;
	}

	@media (max-width: 640px) {
		font-size: 1rem;
	}
`;

const DetailContainer = styled.div`
	max-width: 939px;
	min-height: 600px;

	background: var(--bg-color);
	box-shadow: 0px 4px 6px rgba(62, 73, 84, 0.04);
	border-radius: 30px;
	margin: 0rem auto 5rem auto;
	padding: 3rem;
	@media (max-width: 640px) {
		padding: 3rem 1rem;
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

const ModalTitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 2.4rem;
`;
const ModalCustomerContainer = styled.div`
	display: flex;
	align-items: center;
	border-top: 1px solid #e4e4e4;
	padding-top: 2rem;
	justify-content: space-between;
	margin-bottom: 2.4rem;
	@media (max-width: 640px) {
		flex-direction: column;
		gap: 1.5rem;
		align-items: flex-start;
	}
`;

const CustomerDetailContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 400px;
	gap: 1rem;
`;
const ButtonContainer = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: space-between;
`;
const Profile = styled.img`
	width: 85px;
	height: 85px;
	background: #c4c4c4;
	border-radius: 48px;
`;
const Email = styled.h5`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 1rem;
	color: #464646; ;
`;
const Name = styled.h1`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: 600;
	font-size: 1.15rem;
	margin-bottom: 0.4rem;
	@media (max-width: 640px) {
		font-size: 0.9rem;
	}
`;

const StoreDetailContainer = styled.div`
	min-height: 145px;
	background: #ededed;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 3rem;
	border-radius: 30px;
`;

const Wrapper = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 768px) {
		flex-direction: column;
		gap: 1.5rem;
		align-items: flex-start;
		justify-content: space-between;
		padding: 1rem 0rem;
	}
`;

const StoreImage = styled.img`
	width: 81px;
	height: 87px;
	border-radius: 7px;
`;
const StoreDetail = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	justify-content: space-between;
`;

const StoreName = styled.h1`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: 600;
	font-size: 0.9rem;
	margin-bottom: 0.3rem;
	@media (max-width: 640px) {
		font-size: 0.9rem;
	}
`;
const StoreAmount = styled.h1`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: 600;
	font-size: 1.15rem;
	@media (max-width: 640px) {
		font-size: 0.9rem;
	}
`;

const StorePreviewName = styled.h5`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: 600;
	font-size: 0.7rem;
	margin-bottom: 0.3rem;
`;
const StoreAdress = styled.h5`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 0.6rem;
	color: #464646;
	margin-bottom: 0.3rem;
`;

const TableHeader = styled.div`
	display: grid;
	margin-bottom: 1rem;
	@media (max-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
		grid-template-areas: 'header-payment header-payment header-status';
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(4, 1fr);
		grid-template-areas: 'header-payment header-transaction header-paid header-status';
	}
`;

const HeaderText = styled.h4`
	//	font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 0.9rem;
	color: rgba(0, 0, 0, 0.8);
`;

const CardContainer = styled.div`
	display: grid;
	margin-bottom: 3rem;
	@media (max-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
		grid-template-areas: 'payment payment status';
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(4, 1fr);
		grid-template-areas: 'payment transaction paid status';
	}
`;

const PaymentColumn = styled.div`
	grid-area: payment;
	display: flex;
	gap: 1rem;
	align-items: center;
`;

const Status = styled.div`
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	font-size: 0.8rem;
	color: #29cc97;
`;
const StatusColumn = styled.div`
	grid-area: status;
	display: flex;
	align-items: center;
	padding-right: 0.8rem;
	gap: 1rem;
	justify-content: space-between;
`;

const PaidColumn = styled.div`
	grid-area: paid;
	display: flex;
	align-items: center;
	@media (max-width: 1230px) {
		display: none;
	}
	@media (max-width: 1230px) {
		display: none;
	}
`;

const TransactionColumn = styled.div`
	grid-area: transaction;
	display: flex;
	align-items: center;
	@media (max-width: 1230px) {
		display: none;
	}
`;

const Text = styled.h4`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 1rem;
	@media (max-width: 1100px) {
		font-size: 0.9rem;
	}
`;
const HeaderPayment = styled.div`
	grid-area: header-payment;
`;
const HeaderStatus = styled.div`
	grid-area: header-status;
`;

const HeaderTransaction = styled.div`
	grid-area: header-transaction;
	@media (max-width: 1230px) {
		display: none;
	}
`;

const HeaderPaid = styled.div`
	grid-area: header-paid;
	@media (max-width: 1230px) {
		display: none;
	}
`;
export default function Transaction() {
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

			case 'Completed':
				return {
					tab: '3',
					title: 'Completed',
				};
			case 'Cancelled':
				return {
					tab: '4',
					title: 'Cancelled',
				};
			case 'Refunded':
				return {
					tab: '5',
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
						<Title>Transactions</Title>
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
								handTab('Completed');
							}}
						>
							Completed
						</NavItem>
						<NavItem
							className={state.tab === '4' ? 'review-active' : undefined}
							onClick={() => {
								handTab('Cancelled');
							}}
						>
							Cancelled
						</NavItem>
						<NavItem
							className={state.tab === '5' ? 'review-active' : undefined}
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

				<Card />
			</Grid>

			<PiginationButton align='flex-end' />
			{/* <ModalContainer>
				<DetailContainer>
					<ModalTitleContainer>
						<div>
							<IDTitle>ID Payment</IDTitle>
							<ID>#00123521</ID>
						</div>
						<ButtonContainer>
							<PrintButton>
								<PrintIcon />
								<span>Print</span>
							</PrintButton>
							<DownloadButton>
								<BtnIcon />
								<span>Generate Report</span>
							</DownloadButton>
						</ButtonContainer>
					</ModalTitleContainer>
					<TableHeader>
						<HeaderPayment>
							<HeaderText>Payment Method</HeaderText>
						</HeaderPayment>
						<HeaderTransaction>
							<HeaderText>Transaction Date</HeaderText>
						</HeaderTransaction>
						<HeaderPaid>
							<HeaderText>Date Paid</HeaderText>
						</HeaderPaid>
						<HeaderStatus>
							<HeaderText>Status</HeaderText>
						</HeaderStatus>
					</TableHeader>

					<CardContainer>
						<PaymentColumn>
							<Text>Card Payment</Text>
						</PaymentColumn>
						<TransactionColumn>
							<Text>April 29, 2020</Text>
						</TransactionColumn>
						<PaidColumn>
							<Text>June 5, 2020</Text>
						</PaidColumn>
						<StatusColumn>
							<Status>Successful</Status>
						</StatusColumn>
					</CardContainer>
					<StoreDetailContainer>
						<Wrapper>
							<StoreDetail>
								<StoreImage src={url} />
								<div>
									<StoreName>Prime Spot</StoreName>
									<StorePreviewName>Ebeano Supermarket</StorePreviewName>
									<StoreAdress>Lekki Phase 1</StoreAdress>
									<StoreAmount>₦50,0000</StoreAmount>
								</div>
							</StoreDetail>
							<ActionButton>Cancel</ActionButton>
						</Wrapper>
					</StoreDetailContainer>
					<ModalCustomerContainer>
						<div>
							<CustomerTitle>Customer Information</CustomerTitle>
							<CustomerDetailContainer>
								<Profile />
								<div>
									<Name>Heldo Foods</Name>
									<Email>samuel222@mail.com</Email>
								</div>
							</CustomerDetailContainer>
						</div>
						<TelButton>
							<PhoneIcon />
							<div>
								<span>Telepone</span>
								<span>08170000560</span>
							</div>
						</TelButton>
					</ModalCustomerContainer>
				</DetailContainer>
			</ModalContainer> */}
		</DashboardContainer>
	);
}
