import React from 'react';
import styled from 'styled-components';

import { ReactComponent as ViewIcon } from '../../../assets/view.svg';

const Container = styled.div`
	background: var(--bg-color);
	display: flex;
	width: 100%;
	max-width: 700px;
	height: 92px;
	border-radius: 8px;
	padding: 1rem;
	align-items: center;
	margin-bottom: 1rem;
	justify-content: space-between;
	@media (max-width: 768px) {
		flex-direction: column;
		height: auto;
		gap: 1rem;
	}

	@media (max-width: 1330px) {
		margin: 0rem auto 1rem auto;
	}
`;

const RightContainerCustomer = styled.div`
	display: flex;
	width: 20%;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

const LeftContainerCustomer = styled.div`
	display: flex;
	width: 80%;
	gap
  1rem;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

const Profile = styled.div`
	height: 40px;
	width: 38px;
	background: #c4c4c4;
	border-radius: 5px;
	@media (max-width: 768px) {
		height: 25px;
		width: 25px;
	}
`;

const Status = styled.div`
	@media (max-width: 768px) {
		display: flex;
		gap: 1rem;
	}
`;

const TitleText = styled.h1`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 16px;
	margin-bottom: 0.4rem;
	color: #3c3a36;
	@media (max-width: 400px) {
		font-size: 10px;
	}
`;

const ParagraphText = styled.h1`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 18px;
	color: #bebab3;
	@media (max-width: 400px) {
		font-size: 8px;
	}
`;

const IsViewed = styled.div`
	width: 53px;
	height: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--pri-color);
	border: 1px solid #e3562a;
	box-sizing: border-box;
	border-radius: 8px;
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: 600;
	font-size: 0.8rem;
	line-height: 16px;
	color: var(--bg-color);
`;

const IsActive = styled.div`
	background: #f5fffc;
	border-radius: 8px;
	padding: 0.3rem 0.8rem;
	font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 0.8rem;
	line-height: 18px;
	display: flex;
	align-items: center;
	margin-bottom: 0.4rem;
	color: #29cc97;
`;
const NotActive = styled.div`
	background: #ef494914;
	border-radius: 8px;
	padding: 0.3rem 0.8rem;
	font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 0.8rem;
	line-height: 18px;
	display: flex;
	align-items: center;
	margin-bottom: 0.4rem;
	color: #ef4949;
`;

export default function Card(props: any) {
	return (
		<Container>
			<LeftContainerCustomer>
				<Profile></Profile>
				<div>
					<TitleText>{props.data?.name}</TitleText>
					<ParagraphText>{props.data?.address}</ParagraphText>
				</div>
			</LeftContainerCustomer>

			<RightContainerCustomer>
				<Status>
					{props.data?.active === 'Active' ? (
						<IsActive>active</IsActive>
					) : (
						<NotActive>inactive</NotActive>
					)}

					<IsViewed>view</IsViewed>
				</Status>
				<ViewIcon />
			</RightContainerCustomer>
		</Container>
	);
}
