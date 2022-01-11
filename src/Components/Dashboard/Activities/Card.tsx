import styled from 'styled-components';
import { useState } from 'react';

import { ReactComponent as Icon } from '../../../assets/bookingIcon.svg';
import { ReactComponent as DetailIcon } from '../../../assets/view.svg';
import { ReactComponent as ApprovedIcon } from '../../../assets/approved.svg';
import { ReactComponent as UnApprovedIcon } from '../../../assets/unapproved.svg';
import { ReactComponent as InfoIcon } from '../../../assets/info.svg';

const Table = styled.div``;
const TableHeader = styled.div`
	display: grid;
	margin-bottom: 0.4rem;
	padding: 2rem 1rem;
	min-height: 70px;
	background: #f4e0da;
	border-bottom: 1px solid #e3e3e3;
	@media (max-width: 1230px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-areas:
			'header-admin header-action'
			'header-status header-status';
	}

	@media (min-width: 1230px) {
		padding: 2rem 3rem;
		grid-template-columns: repeat(3, 1fr);
		grid-template-areas: 'header-admin header-action header-status ';
	}
`;

const HeaderText = styled.h5`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: 700;
	font-size: 1.13rem;
	@media (max-width: 1100px) {
		font-size: 0.9rem;
	}
`;

const CardContainer = styled.div`
	display: grid;
	cursor: pointer;
	margin-bottom: 0.4rem;
	position: relative;
	padding: 2rem 1rem;
	background: var(--bg-color);
	border-radius: 8px;
	grid-template-areas:
		'admin'
		'action'
		'status';
	@media (max-width: 1230px) {
		grid-template-columns: repeat(2, 1fr);
		padding: 1rem;
		grid-row-gap: 1.5rem;
		grid-template-areas:
			'admin action'
			'status status';
	}
	@media (min-width: 1230px) {
		grid-template-columns: repeat(3, 1fr);
		grid-template-areas: 'admin action status';
	}
	@media (max-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
		grid-row-gap: 1.5rem;
		grid-template-areas:
			'admin admin admin '
			'status status action';
	}
`;
const AdminColumn = styled.div`
	grid-area: admin;
	display: flex;
	gap: 1rem;
	align-items: center;
`;

const Status = styled.div`
	max-width: 73px;
	height: 30px;
	font-style: normal;
	font-weight: normal;
	font-size: 0.9rem;
	background: var(--pri-color);
	display: flex;
	color: var(--bg-color);
	align-items: center;
	justify-content: center;
	padding: 0.9rem 2rem;
	@media (max-width: 1100px) {
		height: 35px;
	}
`;
const StatusColumn = styled.div`
	grid-area: status;
	display: flex;
	align-items: center;
	padding-right: 0.8rem;
	gap: 1rem;
	justify-content: space-between;
`;

const ActionColumn = styled.div`
	grid-area: action;
	display: flex;
	align-items: center;
	@media (max-width: 768px) {
		justify-self: flex-end;
	}
`;
const Time = styled.h5`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 0.7rem;
	color: #666666;
`;
const Action = styled.h4`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: bold;
	font-size: 0.9rem;
	@media (max-width: 1100px) {
		font-size: 0.6rem;
	}
`;

const Date = styled.h4`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 0.9rem;
	color: #666666;
	@media (max-width: 1100px) {
		font-size: 0.6rem;
	}
`;
const HeaderAdmin = styled.div`
	grid-area: header-admin;
`;

const HeaderAction = styled.div`
	grid-area: header-action;
	@media (max-width: 768px) {
		display: none;
	}
`;
const HeaderStatus = styled.div`
	grid-area: header-status;
	@media (max-width: 1230px) {
		display: none;
	}
`;

const Address = styled.h1`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 0.9rem;
	color: #bebab3;
	@media (max-width: 400px) {
		font-size: 0.7rem;
	}
`;
const TitleText = styled.h1`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: 400;
	font-size: 1.13rem;
	margin-bottom: 0.4rem;
	color: #3c3a36;
	@media (max-width: 400px) {
		font-size: 0.8rem;
	}
`;

const Profile = styled.div`
	height: 63px;
	width: 63px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	@media (max-width: 768px) {
		height: 40px;
		width: 40px;
		font-size: 0.8rem;
	}
	background: #c7d4e1;
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 1.13rem;
	color: #707070;
`;

export default function Card() {
	return (
		<Table>
			<TableHeader>
				<HeaderAdmin>
					<HeaderText>ADMIN</HeaderText>
				</HeaderAdmin>
				<HeaderAction>
					<HeaderText>LAST ACTION</HeaderText>
				</HeaderAction>
				<HeaderStatus>
					<HeaderText>DATE/TIME</HeaderText>
				</HeaderStatus>
			</TableHeader>
			<CardContainer>
				<AdminColumn>
					<Profile>CJ</Profile>
					<div>
						<TitleText>Heldo Foods Limited</TitleText>
						<Address>Collinsjays@gmail.com</Address>
					</div>
				</AdminColumn>

				<ActionColumn>
					<div>
						<Action>Logged in </Action>
						<Time>#ID345235</Time>
					</div>
				</ActionColumn>

				<StatusColumn>
					<div>
						<Date>07 July, 2021.</Date>
						<Time>04:02 PM</Time>
					</div>
					<Status style={{ cursor: 'pointer' }}>View</Status>
				</StatusColumn>
			</CardContainer>
			<CardContainer>
				<AdminColumn>
					<Profile>CJ</Profile>
					<div>
						<TitleText>Heldo Foods Limited</TitleText>
						<Address>Collinsjays@gmail.com</Address>
					</div>
				</AdminColumn>

				<ActionColumn>
					<div>
						<Action>Logged in </Action>
						<Time>#ID345235</Time>
					</div>
				</ActionColumn>

				<StatusColumn>
					<div>
						<Date>07 July, 2021.</Date>
						<Time>04:02 PM</Time>
					</div>
					<Status style={{ cursor: 'pointer' }}>View</Status>
				</StatusColumn>
			</CardContainer>
		</Table>
	);
}
