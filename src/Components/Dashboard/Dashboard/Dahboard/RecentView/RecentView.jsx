import React from 'react';

import styled from 'styled-components';
import Card from './Card';

const data = [
	{
		name: 'Ebeano Supermarket',
		address: 'Lekki Phase 1, Lagos',
		active: 'Active',
		amount: '500',
	},
	{
		name: 'Ebeano Supermarket',
		address: 'Lekki Phase 1, Lagos',
		active: 'Inactive',
		amount: '500',
	},
	{
		name: 'Ebeano Supermarket',
		address: 'Lekki Phase 1, Lagos',
		active: 'Inactive',
		amount: '500',
	},
	{
		name: 'Ebeano Supermarket',
		address: 'Lekki Phase 1, Lagos',
		active: 'Active',
		amount: '500',
	},
	{
		name: 'Ebeano Supermarket',
		address: 'Lekki Phase 1, Lagos',
		active: 'Inactive',
		amount: '500',
	},
];

const customer = [
	{
		name: 'Ebeano Supermarket',
		address: 'Lekki Phase 1, Lagos',
		active: 'Active',
	},
	{
		name: 'Ebeano Supermarket',
		address: 'Lekki Phase 1, Lagos',
		active: 'Inactive',
	},
	{
		name: 'Ebeano Supermarket',
		address: 'Lekki Phase 1, Lagos',
		active: 'Inactive',
	},
	{
		name: 'Ebeano Supermarket',
		address: 'Lekki Phase 1, Lagos',
		active: 'Active',
	},
	{
		name: 'Ebeano Supermarket',
		address: 'Lekki Phase 1, Lagos',
		active: 'Inactive',
	},
];
const RecentViewContainer = styled.div`
	display: flex;
	list-style: none;
	gap: 1.5rem;
	justify-content: space-between;
	@media (max-width: 640px) {
		flex-direction: column;
	}
`;

const InnerContainer = styled.div`
	width: 50%;
	@media (max-width: 640px) {
		width: 100%;
	}
`;

const StyledTitle = styled.h6`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 0.9rem;
	line-height: 21px;
	color: #9fa2b4;
	margin: 1.9rem 0rem;
`;

export default function RecentView() {
	return (
		<div>
			<RecentViewContainer>
				<InnerContainer>
					<StyledTitle>Recent Outlets</StyledTitle>

					{data.map((item, index) => {
						return <Card data={item} key={index} />;
					})}
				</InnerContainer>

				<InnerContainer>
					<StyledTitle>Recent Customers</StyledTitle>
					{customer.map((item, index) => {
						return <Card data={item} type='customer' key={index} />;
					})}
				</InnerContainer>
			</RecentViewContainer>
		</div>
	);
}
