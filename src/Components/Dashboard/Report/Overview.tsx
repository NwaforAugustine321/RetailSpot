import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import Container from '../../../Template/Container/Container';
import { ReactComponent as TotalPaymentIcon } from '../../../assets/paymentIcon-1.svg';
import { ReactComponent as PaidPaymentIcon } from '../../../assets/paymentIcon-2.svg';
import { ReactComponent as UnPaidPaymentIcon } from '../../../assets/paymentIcon-3.svg';
import { ReactComponent as PaymentArrowIcon } from '../../../assets/paymentArrow.svg';

const data = [
	{
		title: 'All Payments',
		value: '₦5,540',
		color: '#41B1440D',
	},
	{
		title: 'Successful',
		value: '₦5,540',
		color: '#fd67211c',
	},
	{
		title: 'Pedding',
		value: '₦5,540',
		color: '#E9FDF8',
	},
];

const Grid = styled.div`
	display: flex;
	gap: 1rem;
	margin-bottom: 2rem;
	justify-content: space-between;
	@media (max-width: 1230px) {
		display: none;
	}
`;

const StyledValue = styled.h1`
	//	font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 1rem;
	color: #425a70;
	@media (max-width: 1380px) {
		font-size: 1.5rem;
	}
`;

const StyledTitle = styled.p`
	//font-family: SF UI Text;
	font-style: normal;
	white-space: nowrap;
	font-weight: normal;
	font-size: 1rem;
	color: #425a70;
	@media (max-width: 1380px) {
		font-size: 0.8rem;
	}
`;

const StyledContainer = styled(Container)`
	display: flex;
	margin: 0;
	width: 184px;
	height: 74px;
	align-items: center;
	padding: 2.4rem 1rem;
	gap: 1rem;
	justify-content: space-between;
	@media (max-width: 1200px) {
		padding: 1rem;
		height: 120px;
	}
`;

const settings = {
	slidesToShow: 3,
	slidesToScroll: 1,

	speed: 2000,
	dots: true,
	autoplaySpeed: 2000,
	cssEase: 'linear',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};

export default function ReportOverview() {
	return (
		<Grid>
			{data.map((item, index) => {
				return (
					<StyledContainer key={index} color={item.color} boarder='22'>
						<PaymentArrowIcon />
						<div>
							<StyledTitle>{item.title}</StyledTitle>
							<StyledValue>{item.value}</StyledValue>
						</div>
					</StyledContainer>
				);
			})}
		</Grid>
	);
}
