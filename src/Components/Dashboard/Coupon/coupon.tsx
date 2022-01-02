import styled from 'styled-components';

import DashboardContainer from '../../../Components/Dashboard/Dashboard/DashboardContainer/DashboardContainer';
import Button from '../../../Template/Button/Button';

const Grid = styled.div`
	display: grid;
	padding: 4rem 2rem;
	grid-template-columns: 1fr;
	grid-template-areas:
		'main'
		'side';
	gap: 2rem;
	@media (min-width: 1024px) {
		grid-template-columns: auto 365px;
		grid-template-areas: 'main side';
	}
`;
const Container = styled.div`
	padding: 4rem 2rem;
`;
const GridMain = styled.div`
	grid-area: main;
`;

const Wrapper = styled.div`
	height: 540px;
	background: var(--bg-color);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
	border-radius: 14px;
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
	margin: 0rem 0rem 4.4rem 0rem;
	color: var(--pri-color);
`;

const GridSide = styled.div`
	height: 540px;
	background: var(--bg-color);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
	border-radius: 14px;
`;

export default function Coupon() {
	return (
		<DashboardContainer>
			<Container>
				<Title>Coupons</Title>
				<Grid>
					<GridMain>
						<ContainerButton>
							<StyledButton text='Add New' />
						</ContainerButton>

						<Wrapper></Wrapper>
					</GridMain>

					<GridSide></GridSide>
				</Grid>
			</Container>
		</DashboardContainer>
	);
}
