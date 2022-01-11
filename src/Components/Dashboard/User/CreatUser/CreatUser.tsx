import { useState, useReducer } from 'react';
import styled from 'styled-components';

import DashboardContainer from '../../Dashboard/DashboardContainer/DashboardContainer';
import Customer from './Customer';
import Staff from './Staff';
import Owner from './Owner';
import ModalContainer from '../../../Partial/ModalContainer';
import ConfirmModal from '../../../../Template/Modal/ConfirmModal';
import TextModal from '../../../../Template/Modal/TextModal';

const Grid = styled.div`
	padding: 4rem 1rem;
	@media (min-width: 1300px) {
		padding: 4rem 3rem 0rem 3rem;
		
`;

const GridMain = styled.div`
	grid-area: main;
`;

const StyledList = styled.ul`
	display: grid;
	list-style: none;
	gap: 1rem;
	width: 100%;
	max-width: 700px;
	grid-template-columns: repeat(4, 1fr);
	justify-content: space-between;
	margin-bottom: 3.8rem;
	@media (max-width: 1330px) {
		margin: 0rem 0rem 1rem 0rem;
	}
	@media (max-width: 640px) {
		grid-template-columns: repeat(4, 1fr);
	}
	@media (max-width: 599px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (max-width: 467px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const Title = styled.h1`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 1.13rem;
	letter-spacing: -0.5px;
	color: #252b1d;
	width: 100%;
	margin-bottom: 1.5rem;
	@media (max-width: 1330px) {
		width: 100%;
		max-width: 700px;
		margin: 0rem 0rem 1.5rem 0rem;
	}
`;
const CreateText = styled.p`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 1.6rem;
	text-align: center;
	@media (max-width: 1024px) {
		font-size: 1rem;
	}
`;

const DetailContainer = styled.div`
	max-width: 40ch;
	margin: 0rem auto 2rem auto;
`;
const DetailName = styled.p`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: 400;
	font-size: 0.9rem;
	margin-bottom: 0.3rem;
	color: #3c3a36;
`;

const DetailCompanyName = styled.p`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 0.8rem;
	color: #bebab3;
`;

const DetailInnerContainer = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: center;
`;

const Avatar = styled.div`
	width: 58px;
	height: 58px;
	background: #c4c4c4;
	border-radius: 50%;
`;

const StyledTextArea = styled.textarea`
	width: 100%;
	max-width: 661px;
	height: 263px;
	background: #fbfbfb;
	border-radius: 8px;
	margin-bottom: 2.2rem;
	border: none;
	outline: none;
	padding: 2rem;
`;

const DetailHeader = styled.h1`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 1.5rem;
	margin-bottom: 1.13rem;
	letter-spacing: -0.5px;
	text-align: center;
	color: var(--pri-text-color);
	@media (max-width: 640px) {
		font-size: 1rem;
	}
`;

const StyledListItem = styled.li`
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 21px;
	color: #50555c;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 49px;
	cursor: pointer;
	width: 100%;
	margin: 0rem auto;

	border: 1.8px solid #ccd4e0;
	background: #f4f4f4;
	@media (min-width: 467px) {
		max-width: 150px;
	}
	@media (min-width: 640px) {
		width: 145px;
	}
`;

export default function CreatUser() {
	const reducer = (
		state: { tab: string; title: string },
		action: { type: string }
	) => {
		switch (action.type) {
			case 'owner':
				return {
					tab: '1',
					title: 'Add Store Owner',
				};
			case 'customer':
				return {
					tab: '2',
					title: 'Add Customer',
				};
			case 'staff':
				return {
					tab: '3',
					title: 'Add Staff',
				};
			default:
				return state;
		}
	};
	let initialState = {
		tab: '1',
		title: 'Add Store Owner',
	};
	const [state, dispatch] = useReducer(reducer, initialState);
	const [user, setuser] = useState<Boolean>(false);

	const handTab = (payload: string) => {
		dispatch({
			type: payload,
		});
	};

	return (
		<DashboardContainer>
			<Grid>
				<GridMain>
					<Title>{state.title}</Title>
					<StyledList>
						<StyledListItem
							className={state.tab === '1' ? 'user-active' : undefined}
							onClick={() => {
								handTab('owner');
							}}
						>
							Store Owners
						</StyledListItem>
						<StyledListItem
							className={state.tab === '2' ? 'user-active' : undefined}
							onClick={() => {
								handTab('customer');
							}}
						>
							Customers
						</StyledListItem>
						<StyledListItem
							className={state.tab === '3' ? 'user-active' : undefined}
							onClick={() => {
								handTab('staff');
							}}
						>
							Add Staff
						</StyledListItem>
					</StyledList>
					{state.tab === '2' && <Customer />}
					{state.tab === '3' && <Staff />}
					{state.tab === '1' && <Owner />}
				</GridMain>
			</Grid>
			<ModalContainer>
				<TextModal buttonText1='Cancel' buttonText2='Suspend'>
					<DetailContainer>
						<DetailHeader>Do you want to delete this user?</DetailHeader>
						<DetailInnerContainer>
							<Avatar />
							<div>
								<DetailName>Mustapha Steward</DetailName>
								<DetailCompanyName>Touchcore Tech</DetailCompanyName>
							</div>
						</DetailInnerContainer>
					</DetailContainer>
					<StyledTextArea placeholder='Add a message'></StyledTextArea>
				</TextModal>
			</ModalContainer>
			<ModalContainer>
				<ConfirmModal buttonText1='Cancel' buttonText2='Suspend'>
					<CreateText>User was successfully created.</CreateText>
				</ConfirmModal>
			</ModalContainer>
		</DashboardContainer>
	);
}
