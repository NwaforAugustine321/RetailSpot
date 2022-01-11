import { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as Icon } from '../../../assets/view.svg';
import url from '../../../assets/store.png';

const Container = styled.div`
	background: var(--bg-color);
	display: flex;
	width: 100%;
	height: 92px;
	position: relative;

	cursor: pointer;
	border-radius: 8px;
	padding: 1rem 2rem;
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
	&:hover {
		background: #f2f7fc;
	}
`;

const ViewIcon = styled(Icon)`
	cursor: pointer;
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

const RightContainer = styled.div`
	display: flex;
	width: 2%;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

const LeftContainer = styled.div`
	display: flex;
	width: 98%;
  align-items: center;
	gap
  1rem;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

export default function Card(props: any) {
	const [user, setuser] = useState<Boolean>(false);
	const handleview = () => {
		setuser(!user);
	};

	return (
		<Container onClick={handleview}>
			<LeftContainer>
				<Profile>CJ</Profile>
				<div>
					<TitleText>Platform Fee</TitleText>
					<Address>10%</Address>
				</div>
			</LeftContainer>

			<RightContainer>
				<ViewIcon onClick={handleview} />
			</RightContainer>
		</Container>
	);
}
