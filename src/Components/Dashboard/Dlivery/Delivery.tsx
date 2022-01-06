import styled from 'styled-components';
import { useState } from 'react';

import DashboardContainer from '../../../Components/Dashboard/Dashboard/DashboardContainer/DashboardContainer';
import Button from '../../../Template/Button/Button';
import Card from './Card';
import { ReactComponent as DateIcon } from '../../../assets/date.svg';
import { ReactComponent as Edit } from '../../../assets/view.svg';

const Grid = styled.div`
	display: grid;
	grid-template-areas:
		'main'
		'side';
	gap: 2rem;
	@media (min-width: 1230px) {
		grid-template-columns: auto 377px;
		grid-template-areas: 'main side';
	}
`;
const Container = styled.div`
	padding: 4rem 1.5rem;
	@media (max-width: 600px) {
		padding: 4rem 0.8rem;
	}
`;

const StyledDateIcon = styled(DateIcon)`
	@media (max-width: 640px) {
		display: none;
	}
`;
const GridMain = styled.div`
	grid-area: main;
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

const GridSide = styled.div`
	min-height: 900px;
	background: var(--bg-color);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
	border-radius: 14px;
	@media (max-width: 1230px) {
		display: none;
	}
`;

const Nav = styled.nav`
	display: flex;
	list-style: none;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
	width: 60%;
	min-height: 69px;

	@media (max-width: 800px) {
		width: 100%;
	}
	@media (min-width: 800px) {
		flex-direction: row;
		width: 70%;
		padding: 0rem 1.5rem;
		justify-content: space-between;
		background: #ffffff;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
	}
	@media (min-width: 1100px) {
		width: 100%;
	}
`;

const NavItem = styled.li`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: 500;
	font-size: 1.13rem;
	min-height: 69px;
	display: flex;
	align-items: center;
	color: rgba(0, 0, 0, 0.3);
	@media (max-width: 1400px) {
		font-size: 1rem;
	}

	@media (max-width: 800px) {
		display: flex;
		justify-content: center;
		align-items: center;
		//padding: 0rem 3.63rem;
		border-radius: 0px;
		background: #ffffff;
		height: 60px;
		width: 100%;

		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
	}
`;

const HeaderContainer = styled.div`
	display: flex;
	gap: 2rem;
	margin-bottom: 1.7rem;
	@media (max-width: 1520px) {
		flex-direction: column;
	}
`;

const TimeContainer = styled.div`
	max-width: 30%;
	min-height: 69px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
	appearance: none;
	background: var(--bg-color);
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 0rem 1rem;
	@media (max-width: 1520px) {
		min-height: 50px;
		max-width: 50%;
	}
	@media (max-width: 640px) {
		padding: 0rem 0.7rem;
	}
`;
const To = styled.h4`
	font-style: normal;
	font-weight: bold;
	font-size: 0.8rem;
	letter-spacing: -0.5px;
	color: #a0b1c4;
	@media (max-width: 640px) {
		font-size: 0.6rem;
	}
	@media (max-width: 360px) {
		font-size: 0.5rem;
	}
`;
const From = styled.h4`
	width: 50%;
	font-style: normal;
	font-weight: bold;
	font-size: 0.8rem;
	letter-spacing: -0.5px;
	color: #a0b1c4;
	@media (max-width: 640px) {
		font-size: 0.6rem;
	}
	@media (max-width: 360px) {
		font-size: 0.5rem;
	}
`;

const InnerContainer = styled.div`
	padding: 2rem;
	position: relative;
	@media (max-width: 640px) {
		padding: 2rem 1rem;
	}
`;
const Wrapper = styled.div`
	width: 100%;
`;

const StyledManageTrack = styled(Button)`
	background: var(--pri-color);
	height: 58px;
	max-width: 100%;
	color: var(--bg-color);
	border: none;
	margin-top: 2rem;
	margin-bottom: 1rem;
	cursor: pointer;
`;

const RefContainer = styled.div``;

const Status = styled.div`
	max-width: 276px;
	min-height: 69px;
	left: 1472px;
	margin-bottom: 2rem;
	border: 0.5px solid #5d5fef;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
`;
const StatusText = styled.h5`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 1rem;
	margin-bottom: 0.3rem;
	color: #717171;
	span {
		color: var(--pri-color);
	}
`;
const StatusTime = styled.h6`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 0.7rem;
	color: #717171;
`;
const EditIcon = styled(Edit)`
	position: absolute;
	right: 2rem;
	top: 2rem;
	cursor: pointer;
`;

const ID = styled.h6`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 0.8rem;
	color: #313942;
	margin-bottom: 2rem;
`;
const StyledParagraphContainer = styled.div`
	margin-bottom: 1rem;
`;

const Ref = styled.div`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: bold;
	font-size: 1.5rem;
	color: #707070;
	@media (max-width: 1024px) {
		font-size: 1rem;
	}
`;

const Label = styled.label`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: bold;
	font-size: 1rem;
	margin-bottom: 1rem;
	@media (max-width: 1024px) {
		font-size: 0.9rem;
	}
`;

const Paragraph = styled.p`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: bold;
	font-size: 0.9rem;
	color: #707070;
	opacity: 0.7;
	@media (max-width: 1024px) {
		font-size: 0.7rem;
	}
`;

export default function Delivery() {
	const [update, setupdate] = useState<Boolean>(false);
	const handleview = () => {
		setupdate(!update);
	};
	return (
		<DashboardContainer>
			<Container>
				<Title>Delivery Requests</Title>
				<Grid>
					<GridMain>
						<HeaderContainer>
							<Nav>
								<NavItem className='delivery-active'>All</NavItem>
								<NavItem>New</NavItem>
								<NavItem>Assigned</NavItem>
								<NavItem>In Progress</NavItem>
								<NavItem>Completed</NavItem>
							</Nav>

							<TimeContainer>
								<From>
									From : <StyledDateIcon /> 22 July, 21
								</From>
								<To>
									To : <StyledDateIcon /> 22 July, 21
								</To>
							</TimeContainer>
						</HeaderContainer>
						<Card />
					</GridMain>

					<GridSide>
						<InnerContainer>
							<EditIcon onClick={handleview} />
							<Wrapper>
								<RefContainer>
									<Ref>Order Ref No</Ref>
									<ID>#WAODD103Y452</ID>
								</RefContainer>

								<Status>
									<div>
										<StatusText>
											Status: <span>Out for Delivery</span>
										</StatusText>
										<StatusTime>40mins</StatusTime>
									</div>
								</Status>

								<StyledParagraphContainer>
									<Label>Sender </Label>
									<Paragraph>Chinedu Joseph</Paragraph>
								</StyledParagraphContainer>
								<StyledParagraphContainer>
									<Label>Pick up address</Label>
									<Paragraph>14b wole ariyo street, Lekki Phase 1</Paragraph>
								</StyledParagraphContainer>
								<StyledParagraphContainer>
									<Label>Phone </Label>
									<Paragraph>08170000560</Paragraph>
								</StyledParagraphContainer>
								<StyledParagraphContainer>
									<Label>Package type </Label>
									<Paragraph>Parcel</Paragraph>
								</StyledParagraphContainer>
								<StyledParagraphContainer>
									<Label>Receiver</Label>
									<Paragraph>Ebeano Supermarket</Paragraph>
								</StyledParagraphContainer>
								<StyledParagraphContainer>
									<Label>Drop-off address</Label>
									<Paragraph>14b wole ariyo street, Lekki Phase 1</Paragraph>
								</StyledParagraphContainer>
								<StyledParagraphContainer>
									<Label>Phone </Label>
									<Paragraph>08170000560</Paragraph>
								</StyledParagraphContainer>
								<StyledManageTrack text='Track Order' />
							</Wrapper>
						</InnerContainer>
					</GridSide>
				</Grid>
			</Container>
		</DashboardContainer>
	);
}
