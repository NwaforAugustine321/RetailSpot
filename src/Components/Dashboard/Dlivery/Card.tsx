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

const Status = styled.div`
	width: 60%;
	@media (max-width: 768px) {
		display: flex;
		gap: 1rem;
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

const ParagraphText = styled.h1`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	width: 40%;
	font-size: 12px;
	color: #bebab3;
	@media (max-width: 400px) {
		font-size: 8px;
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
	max-width: max-content;
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
	max-width: max-content;
	font-weight: normal;
	font-size: 0.8rem;
	line-height: 18px;
	display: flex;
	align-items: center;
	margin-bottom: 0.4rem;
	color: #ef4949;
`;
const RightContainer = styled.div`
	display: flex;
	width: 50%;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

const CheckInput = styled.input`
	width: 19px;
	height: 19px;
	border: 2px solid #e1e1e1;
	border-radius: 3px;
`;
const LeftContainer = styled.div`
	display: flex;
	width: 50%;
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
					<TitleText>Heldo Foods Limited</TitleText>
					<Address>14b wole ariya street, Lekki phase 1</Address>
				</div>
			</LeftContainer>

			<RightContainer>
				<ParagraphText>PARCEL</ParagraphText>

				<Status>
					{/* {props.data?.active === 'Active' ? (
						<IsActive>New</IsActive>
					) : (
						<NotActive>Inactive</NotActive>
					)} */}
					{true ? <IsActive>New</IsActive> : <NotActive>Inactive</NotActive>}
				</Status>
				<ViewIcon onClick={handleview} />
				<CheckInput type='checkbox' />
			</RightContainer>
		</Container>
	);
}
