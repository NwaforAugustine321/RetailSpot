import styled from 'styled-components';

import DashboardContainer from '../../Dashboard/DashboardContainer/DashboardContainer';
import ImageSlider from './Slider';
import { ReactComponent as BtnIcon } from '../../../../assets/btnIcon.svg';
import { ReactComponent as PhoneIcon } from '../../../../assets/phoneIcon.svg';
import { ReactComponent as EmailIcon } from '../../../../assets/emailIcon.svg';
import { ReactComponent as AddressIcon } from '../../../../assets/addressIcon.svg';

import Card from './Card';

const Grid = styled.div`
	display: grid;
	padding: 4rem 2rem;
	position: relative;
	grid-template-columns: 1fr;
	grid-template-areas:
		'top'
		'main'
		'side'
		'footer';
	gap: 2rem;
	@media (min-width: 1250px) {
		grid-template-columns: auto 365px;
		grid-template-areas:
			'top top'
			'main side'
			'footer footer';
	}
	@media (max-width: 640px) {
		padding: 4rem 1rem;
	}
`;

const GridMain = styled.div`
	grid-area: main;

	min-height: 500px;
	background: var(--bg-color);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
	border-radius: 14px;
	padding: 3rem 1.5rem;
	@media (min-width: 1550px) {
		padding: 3rem;
	}
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

const Image = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background: linear-gradient(205.37deg, #58b952 6.36%, #5ba092 100.07%);
`;
const ProfileImage = styled.img`
	width: 106px;
	height: 106px;
	background: #c4c4c4;
	border: 10px solid #ffffff;
	border-radius: 22px;
`;

const Wrapper = styled.div`
	@media (max-width: 1250px) {
		display: none;
	}
`;

const GridSide = styled.div`
	@media (min-width: 1250px) {
		height: 540px;
		padding: 3rem 2.5rem;
		background: var(--bg-color);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
		border-radius: 14px;
		display: flex;
		justify-content: center;
	}
`;

const GridFooter = styled.div`
	grid-area: footer;
	height: 568px;
	background: var(--bg-color);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
	border-radius: 14px;
	padding: 3rem 1.5rem;
	@media (max-width: 640px) {
		padding: 3rem 1rem;
	}
`;

const BookingDetailContainer = styled.div`
	display: flex;
	justify-content: space-between;
	@media (max-width: 1550px) {
		flex-direction: column;
		gap: 3rem;
	}
`;
const LeftContainer = styled.div`
	display: flex;
	gap: 1rem;
	width: 80%;
	@media (max-width: 640px) {
		width: 100%;
	}
	@media (min-width: 1550px) {
		width: 100%;
	}
`;
const RightContainer = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: space-between;
	@media (max-width: 1550px) {
		width: 90%;
	}
	@media (max-width: 800px) {
		display: none;
	}

	@media (min-width: 1550px) {
		width: 100%;
	}
`;
const Header = styled.h1`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 0.9rem;
	color: #686868;
`;
const Text = styled.h1`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: 600;
	font-size: 1rem;
`;
const BookingDescriptionContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 1250px) {
		flex-direction: column;
		gap: 0.9rem;
		align-items: flex-start;
	}
	margin-bottom: 3rem;
`;

const SpotName = styled.h1`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 1.3rem;
	@media (max-width: 1480px) {
		font-size: 0.9rem;
	}
`;
const ID = styled.h1`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 1rem;
	color: #e3562a;
	margin-bottom: 1rem;
`;
const Name = styled.h1`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: 600;
	font-size: 1.3rem;
`;
const Description = styled.h1`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 1rem;
	color: #262626;
	@media (max-width: 1480px) {
		font-size: 0.8rem;
	}
`;

const TitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 2.4rem;
	@media (max-width: 1480px) {
		flex-direction: column;
	}
`;

const HistoryTitle = styled.h1`
	font-family: SF UI Text;
	font-style: normal;
	font-weight: 600;
	font-size: 1.7rem;
	margin-bottom: 2.1rem;
`;

const ReportOverviewContainer = styled.div`
	display: flex;
	gap: 1.5rem;
`;
const ButtonContainer = styled.div`
	display: flex;
	gap: 1.5rem;
	justify-content: space-between;
	max-width: 60%;
	margin-bottom: 3rem;
`;

const StyledEditButton = styled.button`
	width: 180px;
	height: 53px;
	background: #efefef;
	white-space: nowrap;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	margin: 0;
	padding: 0.9rem 1.5rem;
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: bold;
	font-size: 1rem;
	color: var(--bg-color);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
	border-radius: 22px;
	border: none;
	@media (max-width: 1250px) {
		display: none;
	}
`;

const StyledMobileEditButton = styled.button`
	width: 180px;
	height: 53px;
	background: var(--pri-color);
	white-space: nowrap;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	margin: 0;
	padding: 0.9rem 1.5rem;
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: bold;
	font-size: 1rem;
	color: var(--bg-color);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
	border-radius: 22px;
	border: none;
	@media (min-width: 1250px) {
		display: none;
	}
`;
const StyledCloseButton = styled.button`
	max-width: 85px;
	height: 53px;
	background: var(--pri-color);
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	margin: 0;
	padding: 0.9rem 1.5rem;
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: bold;
	font-size: 1rem;
	color: var(--bg-color);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
	border-radius: 22px;
	@media (max-width: 800px) {
		max-width: 200px;
		height: 69px;
		span {
			display: none;
		}
	}
	border: none;
	@media (max-width: 640px) {
		max-width: 90px;
		height: 50px;
	}
`;
const StyledButton = styled.button`
	max-width: 246px;
	height: 53px;
	background: var(--pri-color);
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	margin: 0;
	padding: 0.9rem 1.5rem;
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: bold;
	font-size: 1rem;
	color: var(--bg-color);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
	border-radius: 22px;
	@media (max-width: 800px) {
		max-width: 200px;
		height: 69px;
		span {
			display: none;
		}
	}
	border: none;
	@media (max-width: 640px) {
		max-width: 90px;
		height: 50px;
	}
`;
const UserID = styled.h5`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 0.9rem;
	color: #e3562a;
`;

const ProfileName = styled.h5`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: 600;
	font-size: 0.9rem;
	color: #262626;
	margin: 0.3rem 0rem;
`;
const PreviewContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-bottom: 3rem;
`;
const Paragraph = styled.h5`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	color: #262626;
	display: flex;
	gap: 1rem;
	margin-bottom: 1rem;
	align-items: center;
`;
export default function UserDetail() {
	return (
		<DashboardContainer>
			<Grid>
				<GridTop>
					<Title>Customers / Chinedu Ike</Title>
				</GridTop>

				<GridMain>
					<ImageSlider />

					<BookingDescriptionContainer>
						<SpotName>Ebeano Prime Spot</SpotName>
						<Description>
							Description of the current spot is displayed here plus any other
							details.
						</Description>
					</BookingDescriptionContainer>
					<BookingDetailContainer>
						<LeftContainer>
							<Image />
							<div>
								<ID>Booking ID #0052466623</ID>
								<Name>King Deluxe B-23</Name>
							</div>
						</LeftContainer>
						<RightContainer>
							<div>
								<Header>Spot Capacity</Header>
								<Text>Dimension Details</Text>
							</div>
							<div>
								<Header>Category</Header>
								<Text>Grocery</Text>
							</div>
							<div>
								<Header>Booking Date</Header>
								<Text>Oct 25th - 28th, 2020</Text>
							</div>
						</RightContainer>
					</BookingDetailContainer>
				</GridMain>
				<GridSide>
					<StyledMobileEditButton>Edit Profile</StyledMobileEditButton>
					<Wrapper>
						<PreviewContainer>
							<ProfileImage />
							<div>
								<UserID>#0005</UserID>
								<ProfileName>Louis Khan</ProfileName>
							</div>
						</PreviewContainer>
						<ButtonContainer>
							<StyledEditButton>Edit Profile</StyledEditButton>
							<StyledCloseButton>
								<BtnIcon />
							</StyledCloseButton>
						</ButtonContainer>
						<Paragraph>
							<PhoneIcon /> 0817 0000 560
						</Paragraph>
						<Paragraph>
							<EmailIcon /> chinedu@touchcore.com.ng
						</Paragraph>
						<Paragraph>
							<AddressIcon /> Lekki Phase 1, Lagos
						</Paragraph>
					</Wrapper>
				</GridSide>
				<GridFooter>
					<TitleContainer>
						<div>
							<HistoryTitle>History Booking</HistoryTitle>
						</div>
						<ReportOverviewContainer>
							<StyledButton>
								<BtnIcon />
								<span>Date Filter</span>
							</StyledButton>
							<StyledButton>
								<BtnIcon />
								<span>Generate Report</span>
							</StyledButton>
						</ReportOverviewContainer>
					</TitleContainer>
					<Card />
				</GridFooter>
			</Grid>
		</DashboardContainer>
	);
}
