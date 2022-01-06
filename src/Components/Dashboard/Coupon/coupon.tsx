import styled from 'styled-components';
import { useState } from 'react';

import DashboardContainer from '../../../Components/Dashboard/Dashboard/DashboardContainer/DashboardContainer';
import Button from '../../../Template/Button/Button';
import Card from './card';
import CreateCoupon from './CreateCoupon';

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-areas:
		'main'
		'side';
	gap: 2rem;
	@media (min-width: 1050px) {
		grid-template-columns: auto 250px;
		grid-template-areas: 'main side';
	}
	@media (min-width: 1232px) {
		grid-template-columns: auto 377px;
	}
`;
const Container = styled.div`
	padding: 4rem 1.5rem;
	@media (max-width: 600px) {
		padding: 4rem 0.8rem;
	}
`;
const GridMain = styled.div`
	grid-area: main;
`;

const Wrapper = styled.div`
	min-height: 540px;
`;

const ContainerButton = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
`;

const Title = styled.h1`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 1.13rem;
	letter-spacing: -0.5px;
	color: #252b1d;
	margin-bottom: 1.5rem;
`;

const StyledButton = styled(Button)`
	max-width: 142px;
	border: 1px solid #ccd4e0;
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	background: none;
	cursor: pointer;
	margin: 0rem 0rem 4.4rem 0rem;
	color: var(--pri-color);
`;

const GridSide = styled.div`
	height: 540px;
	background: var(--bg-color);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
	border-radius: 14px;
	@media (max-width: 1050px) {
		display: none;
	}
`;

export default function Coupon() {
	const [open, setopen] = useState(false);
	const handleOpen = () => {
		setopen(!open);
	};
	return (
		<DashboardContainer>
			{!open ? (
				<Container>
					<Title>Coupons</Title>
					<Grid>
						<GridMain>
							<ContainerButton>
								<StyledButton text='Add New' onClick={handleOpen} />
							</ContainerButton>

							<Wrapper>
								<Card />
							</Wrapper>
						</GridMain>

						<GridSide></GridSide>
					</Grid>
				</Container>
			) : (
				<CreateCoupon handleOpen={handleOpen} />
			)}
		</DashboardContainer>
	);
}
