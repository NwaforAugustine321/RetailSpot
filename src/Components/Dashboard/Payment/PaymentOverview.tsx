import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import Container from '../../../Template/Container/Container';
import { ReactComponent as TotalPaymentIcon } from '../../../assets/paymentIcon-1.svg';
import { ReactComponent as PaidPaymentIcon } from '../../../assets/paymentIcon-2.svg';
import { ReactComponent as UnPaidPaymentIcon } from '../../../assets/paymentIcon-3.svg';

let icon = [TotalPaymentIcon, PaidPaymentIcon, UnPaidPaymentIcon];

const data = [
	{
		title: 'Total Requests',
		value: '872',
		color: '#ffff',
	},
	{
		title: 'Paid Requests',
		value: '892',
		color: '#ffff',
	},
	{
		title: 'Total Unpaid Requests',
		value: '82',
		color: '#ffff',
	},
];

const Grid = styled.div`
	display: flex;
	gap: 1rem;
	margin-bottom: 2rem;
	justify-content: space-between;
	@media (max-width: 1024px) {
		display: none;
	}
`;

const StyledValue = styled.h1`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: 600;
	font-size: 2.25rem;
	@media (max-width: 1380px) {
		font-size: 1.5rem;
	}
`;

const StyledTitle = styled.p`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: 500;
	font-size: 1.13rem;
	@media (max-width: 1380px) {
		font-size: 0.8rem;
	}
`;

const StyledContainer = styled(Container)`
	display: flex;
	width: 100%;
	margin: 0;
	align-items: center;
	padding: 2.4rem;
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

export default function Overview() {
	return (
		<Grid>
			{data.map((item, index) => {
				const Icon = icon[index];
				return (
					<StyledContainer
						width='339'
						height='164'
						key={index}
						color={item.color}
						boarder='22'
					>
						<div>
							<StyledValue>{item.value}</StyledValue>
							<StyledTitle>{item.title}</StyledTitle>
						</div>
						<Icon />
					</StyledContainer>
				);
			})}
		</Grid>
	);
}
