import React from 'react';
import styled from 'styled-components';

import { ReactComponent as RateIcon } from '../../../assets/rate.svg';
import { ReactComponent as MarkedIcon } from '../../../assets/marked.svg';
import { ReactComponent as UnMarkedIcon } from '../../../assets/unmarked.svg';

const CardContainer = styled.div`
	min-height: 125px;
	display: flex;
	padding: 0rem 1rem;
	justify-content: space-between;
	background: var(--bg-color);
	border-bottom: 1px solid #e3e3e3;
	@media (max-width: 1060px) {
		flex-direction: column;
		margin-bottom: 1rem;
	}
	@media (max-width: 550px) {
		padding: 0rem;
	}
`;
const LeftContainer = styled.div`
	display: flex;
	width: 30%;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 1060px) {
		margin-bottom: 1rem;
	}
	@media (max-width: 768px) {
		width: 100%;
	}
`;
const RightContainer = styled.div`
	display: flex;
	width: 70%;
	align-items: center;
	gap: 3rem;
	@media (max-width: 1060px) {
		width: 100%;
	}
`;

const ProfileContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
`;

const ActionContainer = styled.div`
	display: flex;
	gap: 1rem;
	@media (max-width: 550px) {
		display: none;
	}
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

const Comment = styled.p`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 0.9rem;
	margin-top: 0.9rem;
	color: rgba(0, 0, 0, 0.7);
	@media (max-width: 1250px) {
		font-size: 0.7rem;
	}

	@media (max-width: 1060px) {
		padding-bottom: 1rem;
	}
`;

const Date = styled.p`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 0.8rem;
	color: var(--pri-text-color);
	@media (max-width: 1250px) {
		font-size: 0.6rem;
	}
`;

const ID = styled.h1`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	white-space: nowrap;
	font-size: 1rem;
	margin-bottom: 0.6rem;
	color: var(--pri-color);
`;
const Name = styled.h2`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: 600;
	white-space: nowrap;
	font-size: 1.13rem;
	color: #262626;
	@media (max-width: 1250px) {
		font-size: 0.8rem;
	}
`;

export default function Card(props: any) {
	return (
		<CardContainer>
			<LeftContainer>
				<ProfileContainer>
					<Profile />
					<div>
						<ID>{props.data?.id}</ID>
						<Name>{props.data?.name}</Name>
						<Date>{props.data?.date}</Date>
					</div>
				</ProfileContainer>
			</LeftContainer>

			<RightContainer>
				<div>
					<RateIcon />
					<Comment>{props.data?.comment}</Comment>
				</div>

				<ActionContainer>
					<MarkedIcon />
					<UnMarkedIcon />
				</ActionContainer>
			</RightContainer>
		</CardContainer>
	);
}
