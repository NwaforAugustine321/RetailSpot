import styled from 'styled-components';

import DashboardContainer from '../../Dashboard/DashboardContainer/DashboardContainer';

const Grid = styled.div`
	display: grid;
	padding: 4rem 2rem;
	grid-template-columns: 1fr;
	grid-template-areas:
		'top'
		'main'
		'side'
		'footer';
	gap: 2rem;
	@media (min-width: 1024px) {
		grid-template-columns: auto 365px;
		grid-template-areas:
			'top top'
			'main side'
			'footer footer';
	}
`;

const GridMain = styled.div`
	grid-area: main;
	height: 540px;
	background: var(--bg-color);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
	border-radius: 14px;
`;

const Title = styled.h1`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 1.13rem;
	letter-spacing: -0.5px;
	color: #252b1d;
	width: 100%;
	margin-bottom: 1.5rem;
	@media (max-width: 1330px) {
		width: 100%;
		max-width: 700px;
		margin: 0rem 0rem 1.5rem 0rem;
	}
`;

const GridTop = styled.div`
	grid-area: top;
`;

const GridSide = styled.div`
	height: 540px;
	background: var(--bg-color);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
	border-radius: 14px;
`;

const GridFooter = styled.div`
	grid-area: footer;
	height: 568px;
	background: var(--bg-color);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
	border-radius: 14px;
`;

export default function UserDetail() {
	return (
		<DashboardContainer>
			<Grid>
				<GridTop>
					<Title>Customers / Chinedu Ike</Title>
				</GridTop>

				<GridMain></GridMain>

				<GridSide></GridSide>
				<GridFooter></GridFooter>
			</Grid>
		</DashboardContainer>
	);
}
