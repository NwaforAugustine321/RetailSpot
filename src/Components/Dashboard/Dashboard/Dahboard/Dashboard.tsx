import React from 'react';
import styled from 'styled-components';

import { ReactComponent as BarIcon } from '../../../../assets/baricon.svg';
import DashboardContainer from '../DashboardContainer/DashboardContainer';
import Container from '../../../../Template/Container/Container';
import Features from './Features';
import Activities from '../Dahboard/Activities/Activities';

const Grid = styled.div`
	display: grid;
	padding: 1rem;
	grid-template-areas:
		'top'
		'main'
		'side'
		'footer';
	gap: 2rem;
	@media (min-width: 1024px) {
		grid-template-columns: 1fr 282px;
		grid-template-areas:
			'top top'
			'main side'
			'footer footer';
	}
`;

const GridTop = styled.div`
	grid-area: top;
`;

const GridMain = styled.div`
	grid-area: main;
	height: 604px;
	background: #f3f3f3;
	border-radius: 5px;
`;

const GridSide = styled.div`
	grid-area: side;
	height: 470px;
	background: #f2f9eb;
	border-radius: 5px;
	padding: 1.3rem 0.5rem 1.3rem 1rem;
`;

const GridFooter = styled.div`
	grid-area: footer;
`;

const TextContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 6.7rem;
	@media (max-width: 1024px) {
		max-width: 300px;
		margin: 0rem auto 6.7rem auto;
	}
`;

const StatisticsTitle = styled.h1`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: 400;
	font-size: 1.13rem;
	line-height: 22px;
	align-items: center;
	text-align: left;
	margin-bottom: 1.4rem;
	letter-spacing: -0.5px;
	color: var(--sec-text-color);
	@media (max-width: 1024px) {
		margin-bottom: 1.8rem;
		text-align: center;
	}
`;
const Title = styled.h1`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 1.13rem;
	line-height: 22px;
	margin-bottom: 1.8rem;
	margin-top: 1rem;
	padding-left: 2.5rem;
	letter-spacing: -0.5px;
	color: #252b1d;
`;
const StatusContainer = styled.div`
	display: flex;
	width: 65%;
	gap: 0.3rem;
	align-items: center;
	justify-content: space-between;
`;

const GraphBar = styled.div`
	width: 205px;
	height: 205px;
	margin: 0rem auto;
	border-radius: 50%;
	display: flex;
	transform: rotate(90deg);
	border-width: 25px;
	border-style: solid;
	border-color: #5ba092 #5ba092 #e3562a #e3562a;
`;

const GraphBarInnerContainer = styled.div`
	width: 55px;
	height: 55px;
	margin: auto;
	border-radius: 50%;
	background: var(--bg-color);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default function Dashboard() {
	return (
		<DashboardContainer>
			<Grid>
				<GridTop>
					<Title>Overview</Title>
					<Features />
				</GridTop>
				<GridMain>
					<Activities />
				</GridMain>
				<GridSide>
					<StatisticsTitle>Spot statistics</StatisticsTitle>
					<TextContainer>
						<Container
							height='27'
							width='69'
							boarder='3'
							color='#E5F1D8'
							padding='0.2 0.8'
							margin='0'
						>
							Status
						</Container>
						<StatusContainer>
							<Container height='17' width='17' boarder='5' color='#E3562A' />
							<span>Taken</span>
							<Container height='17' width='17' boarder='5' color='#5BA092' />
							<span>Available</span>
						</StatusContainer>
					</TextContainer>
					<GraphBar>
						<GraphBarInnerContainer>
							<BarIcon />
						</GraphBarInnerContainer>
					</GraphBar>
				</GridSide>
				<GridFooter></GridFooter>
			</Grid>
		</DashboardContainer>
	);
}
