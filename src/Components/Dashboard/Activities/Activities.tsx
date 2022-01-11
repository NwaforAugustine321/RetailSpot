import { useReducer, useState } from 'react';
import styled from 'styled-components';

import DashboardContainer from '../Dashboard/DashboardContainer/DashboardContainer';
import Card from './Card';
import Input from '../../../Template/Input/Input';
import { SearchOutlined } from '@ant-design/icons';

const Grid = styled.div`
	padding: 4rem 2rem;

	@media (max-width: 1100px) {
		padding: 1rem;
	}
`;

const Container = styled.div`
	margin-bottom: 1.63rem;
`;

const Title = styled.h1`
	//	font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 1.13rem;
	letter-spacing: -0.5px;
	margin-bottom: 2.1rem;
`;

const CustomeInputContainer = styled.div`
	max-width: 50%;
	max-height: 53px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
	border-radius: 8px;
	opacity: 0.7;
	appearance: none;
	background: var(--bg-color);
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 0rem 1rem;
	@media (max-width: 1190px) {
		max-width: 60%;
	}
`;

export default function Activities() {
	return (
		<DashboardContainer>
			<Grid>
				<Title>Settings / User Activities</Title>
				<Container>
					<CustomeInputContainer>
						<Input type='text' width='100%' placeholder={`Search here`} />
						<SearchOutlined />
					</CustomeInputContainer>
				</Container>

				<Card />
			</Grid>
		</DashboardContainer>
	);
}
