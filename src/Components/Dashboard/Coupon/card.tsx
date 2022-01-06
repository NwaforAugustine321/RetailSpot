import { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as Icon } from '../../../assets/view.svg';

const Container = styled.div`
	background: var(--bg-color);
	min-height: 98px;
	padding: 2.5rem 1.5rem;
	cursor:pointer:
	@media (min-width: 124px) {
		max-width: 720px;
		margin: 0rem auto;
	}
	@media (max-width: 600px) {
		padding: 1.5rem;
	}
`;

const Wrapper = styled.div`
	display: flex;
	gap: 3rem;
	position: relative;
	margin: 0rem auto;
	align-items: center;
	@media (min-width: 1100px) {
		max-width: 90%;
	}
	@media (max-width: 600px) {
		flex-direction: column;
		gap: 1.5rem;
	}
`;

const RightContainer = styled.div`
	width: 50%;
	@media (max-width: 1230px) {
		width: 90%;
	}
	display: flex;
	justify-content: space-between;
`;

const LeftContainer = styled.div`
	width: 50%;
	@media (max-width: 1230px) {
		width: 90%;
	}
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Status = styled.h5`
	height: 43px;
	width: 150px;
	background: rgba(192, 250, 235, 0.79);
	opacity: 0.44;
	border-radius: 22px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 1rem;
	color: #425a70;

	@media (min-width: 1000px) {
		width: 120px;
	}
	@media (max-width: 330px) {
		width: 90px;
	}
`;

const CoupoPreview = styled.h6`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 0.9rem;
	color: #425a70;
	@media (max-width: 600px) {
		font-size: 0.5rem;
	}
`;
const Amount = styled.h6`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 1.13rem;
	color: #425a70;
`;

const Detail = styled.div`
	@media (max-width: 1050px) {
		top: 0;
		right: 0;
		margin: 0rem auto;
		left: 0;
		position: absolute;
		height: 540px;
		background: var(--bg-color);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
		border-radius: 14px;
	}
`;

const CouponTitle = styled.h5`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: bold;
	font-size: 1.13rem;
	color: #425a70;
	@media (max-width: 1330px) {
		font-size: 0.9rem;
	}
	@media (max-width: 600px) {
		font-size: 0.7rem;
	}
`;
const Code = styled.h5`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 1.5rem;
	color: #425a70;
	@media (max-width: 1330px) {
		font-size: 1.2rem;
	}
	@media (max-width: 600px) {
		font-size: 0.9rem;
	}
`;

export default function Card() {
	const [open, setopen] = useState(false);
	const handleOpen = () => {
		setopen(!open);
	};
	return (
		<Container onClick={handleOpen}>
			<Wrapper>
				<RightContainer>
					<Code>VAL021</Code>
					<div>
						<CouponTitle>Valentine Discount</CouponTitle>
						<CoupoPreview>Valentine discount</CoupoPreview>
					</div>
				</RightContainer>
				<LeftContainer>
					<Status>Active</Status>
					<Amount>₦1,500</Amount>
					<Icon />
				</LeftContainer>
				{open && <Detail onClick={handleOpen}></Detail>}
			</Wrapper>
		</Container>
	);
}
