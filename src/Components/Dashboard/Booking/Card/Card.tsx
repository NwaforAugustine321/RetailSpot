import React from 'react';
import styled from 'styled-components';

import { ReactComponent as DotIcon } from '../../../../assets/dot.svg';

const CardContainer = styled.div`
	min-height: 125px;
	display: flex;
	padding: 0rem 1rem;
	gap: 5rem;
	width: 1440px;
	justify-content: space-between;
	background: var(--bg-color);
	border-bottom: 1px solid #e3e3e3;
	&:hover {
		box-shadow: 0px 2px 49px rgba(0, 0, 0, 0.19);
	}
	// @media (max-width: 1250px) {
	// 	flex-direction: column;
	// }
	@media (max-width: 1250px) {
		gap: 1rem;
	}
`;
const LeftContainer = styled.div`
	display: flex;
	width: 45%;
	align-items: center;
	justify-content: space-between;
	@media (min-width: 1250px) {
		width: 50%;
	}
`;
const RightContainer = styled.div`
	display: flex;
	width: 60%;
	align-items: center;
	gap: 3rem;
	//justify-content: space-between;
	@media (min-width: 1250px) {
		width: 50%;
	}
`;

const ProfileContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
`;

const Profile = styled.img`
	width: 58px;
	height: 58px;
	background: #c4c4c4;
	border-radius: 22px;
	@media (max-width: 1250px) {
		width: 40px;
		height: 40px;
	}
`;

const CheckInput = styled.input`
	width: 19px;
	height: 19px;
	border: 2px solid #e1e1e1;
	border-radius: 3px;
`;

const ID = styled.h1`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	white-space: nowrap;
	font-size: 1rem;
	margin-bottom: 0.6rem;
	color: var(--pri-color);
	@media (max-width: 1250px) {
		font-size: 0.8rem;
	}
`;
const Name = styled.h2`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: 600;
	white-space: nowrap;
	font-size: 1.13rem;
	color: #262626;
	@media (max-width: 1250px) {
		font-size: 0.7rem;
	}
`;
const Date = styled.h1`
	//font-family: Poppins;
	font-style: normal;
	white-space: nowrap;
	font-weight: 600;
	font-size: 1rem;
	color: #262626;
	@media (max-width: 1250px) {
		font-size: 0.8rem;
	}
`;

const Time = styled.h2`
	font-family: var(--ft-style);
	font-style: normal;
	white-space: nowrap;
	font-weight: normal;
	font-size: 14px;
	color: #262626;
	@media (max-width: 1250px) {
		font-size: 0.8rem;
	}
`;

const StatusContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 35%;
`;

const Checked = styled.div`
	width: 9px;
	height: 9px;
	background: #e3562a;
	border-radius: 2px;
`;

const Status = styled.h1`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: 600;
	font-size: 1rem;
	color: #ff4242;
	@media (max-width: 1250px) {
		font-size: 0.8rem;
	}
`;

export default function Card(props: any) {
	return (
		<CardContainer>
			<LeftContainer>
				<ProfileContainer>
					<CheckInput></CheckInput>
					<Profile />
					<div>
						<ID>#GS-2234</ID>
						<Name>Yonna</Name>
					</div>
				</ProfileContainer>

				<div>
					<Date>Sunday, Oct 24th, 2020</Date>
					<Time>08:29 AM</Time>
				</div>
			</LeftContainer>

			<RightContainer>
				<div>
					<Date>Oct 29th, 2020</Date>
					<Time>08:29 AM</Time>
				</div>

				<div>
					<Date>Oct 29th, 2020</Date>
					<Time>08:29 AM</Time>
				</div>

				<StatusContainer>
					<Status>Refunded</Status>
					<DotIcon />
				</StatusContainer>
			</RightContainer>
		</CardContainer>
	);
}
