import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import Container from '../../../../Template/Container/Container';
import { ReactComponent as NewBookingIcon } from '../../../../assets/feature-1.svg';
import { ReactComponent as SpotBookingIcon } from '../../../../assets/feature-2.svg';
import { ReactComponent as CheckIcon } from '../../../../assets/feature-3.svg';

const data = [
	{
		title: 'New Booking',
		value: '872',
		color: '#59D7FF',
	},
	{
		title: 'Booked Spots',
		value: '892',
		color: '#57F998',
	},
	{
		title: 'Check In',
		value: '82',
		color: '#FFE485',
	},
	{
		title: 'view',
		value: '82',
		color: '#E3562A',
	},
];

let icon = [NewBookingIcon, SpotBookingIcon, CheckIcon, CheckIcon];

const Grid = styled.div`
	display: flex;
	width: 100%;
	gap: 1rem;
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
	color: var(--bg-color);
	@media (max-width: 1380px) {
		font-size: 1.5rem;
	}
`;

const StyledTitle = styled.p`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: 500;
	font-size: 1.23rem;
	color: var(--bg-color);
	@media (max-width: 1380px) {
		font-size: 0.8rem;
	}
`;

const StyledContainer = styled(Container)`
	display: flex;
	width: 100%;
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
		// {
		// 	breakpoint: 480,
		// 	settings: {
		// 		slidesToShow: 1,
		// 		slidesToScroll: 1,
		// 	},
		// },
	],
};

export default function Features() {
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
