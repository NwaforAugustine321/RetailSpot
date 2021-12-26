import { useState } from 'react';
import styled from 'styled-components';

import DashboardContainer from '../../Dashboard/DashboardContainer/DashboardContainer';
import Card from './card';
import PiginationButton from '../../../Partial/NextButton';
import Button from '../../../../Template/Button/Button';

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

const Grid = styled.div`
	display: grid;
	padding: 4rem 1rem;

	grid-template-areas:
		'top'
		'main'
		'footer'
		'side';
	gap: 2rem;

	@media (min-width: 1300px) {
		grid-template-columns: 1fr minmax(350px, 466px);
		gap: 0rem;
		grid-column-gap: 2rem;
		padding: 4rem 3rem 0rem 3rem;
		grid-template-areas:
			'top top'
			'main side'
			'footer footer';
	}
`;

const GridTop = styled.div`
	grid-area: top;
	display: flex;
	width: 100%;
	margin: 0rem auto;
	margin-bottom: 1rem;
	justify-content: space-between;
	@media (max-width: 1330px) {
		width: 100%;
		max-width: 700px;
		margin: 0rem auto;
	}
`;

const GridMain = styled.div`
	grid-area: main;
`;

const GridSide = styled.div`
	grid-area: side;
	margin-bottom: 4rem;
`;

const GridFooter = styled.div`
	grid-area: footer;
`;

const InnerContainer = styled.div`
	background: var(--bg-color);
	height: 878px;
	border-radius: 8px;
	padding: 3rem 1rem;
	margin: 0rem auto;
	@media (min-width: 1400px) {
		padding: 3rem 4rem;
	}
`;

const Wrapper = styled.div`
	width: 100%;
	max-width: 500px;
	margin: 0rem auto;
`;

const StyledList = styled.ul`
	display: grid;
	list-style: none;
	gap: 1rem;
	width: 100%;
	max-width: 700px;
	grid-template-columns: repeat(4, 1fr);
	justify-content: space-between;
	margin-bottom: 1rem;
	@media (max-width: 1330px) {
		margin: 0rem auto 1rem auto;
	}
	@media (max-width: 640px) {
		grid-template-columns: repeat(4, 1fr);
	}
	@media (max-width: 599px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (max-width: 467px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const StyledActionList = styled.ul`
	display: flex;
	list-style: none;
	gap: 1rem;
	justify-content: space-between;
`;
const StyledActionListItem = styled.li`
	font-family: Poppins;
	font-style: normal;
	font-weight: 700;
	font-size: 1rem;
	color: #3a3384;
`;
const Profile = styled.div`
	max-width: 143px;
	margin: 0rem auto;
	height: 143px;
	background: #c4c4c4;
	border: 10px solid #ffffff;
	border-radius: 22px;
	margin-bottom: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Title = styled.h1`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 1.13rem;
	letter-spacing: -0.5px;
	color: #252b1d;
`;

const StyledParagraph = styled.p`
	//font-family: var(--ft-style);
	font-style: normal;
	font-weight: bold;
	font-size: 0.9rem;
	color: #707070;
	margin-bottom: 2.7rem;
`;

const StyledOrderView = styled(Button)`
	background: #e3562a;
	height: 58px;
	max-width: 100%;
	margin-bottom: 1.4rem;
	cursor: pointer;
`;
const UserName = styled.h6`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: bold;
	font-size: 0.9rem;
	text-align: center;
	margin-bottom: 3.9rem;
	color: #707070;
`;
const StyledManageUser = styled(Button)`
	background: var(--bg-color);
	height: 58px;
	max-width: 100%;
	color: var(--pri-text-color);
	border: 1px solid #223564;
	margin-bottom: 1rem;
	cursor: pointer;
`;

const StyledListItem = styled.li`
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 21px;
	color: #50555c;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 49px;
	width: 100%;
	margin: 0rem auto;

	border: 1.8px solid #ccd4e0;
	background: #f4f4f4;
	@media (min-width: 467px) {
		max-width: 150px;
	}
	@media (min-width: 640px) {
		width: 145px;
	}
`;

const DropDown = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 5px;
	text-align: center;
	position: absolute;
	background: var(--bg-color);
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	filter: drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.102));
	padding-top: 1rem;
	h4 {
		&:nth-child(3) {
			border-bottom: none;
			padding: 0rem;
		}
	}
`;
const DropDownItem = styled.h4`
	border-bottom: 1px solid #9597a6;
	padding: 0rem 0rem 1rem 0rem;
	opacity: 0.2;
	cursor: pointer;
`;

const DropDownContainer = styled.div`
	position: relative;
	max-width: 257px;
	width: 100%;
	margin: 0rem auto;
	height: 225px;
`;

export default function Users() {
	const [user, setuser] = useState<Boolean>(false);
	const handleview = () => {
		setuser(!user);
	};
	return (
		<DashboardContainer>
			<Grid>
				<GridTop>
					<Title>Users</Title>

					<StyledActionList>
						<StyledActionListItem>Print</StyledActionListItem>
						<StyledActionListItem>Export</StyledActionListItem>
					</StyledActionList>
				</GridTop>
				<GridMain>
					<StyledList>
						<StyledListItem>Store Owners</StyledListItem>
						<StyledListItem className='user-active'>Customers</StyledListItem>
						<StyledListItem>Staff</StyledListItem>
						<StyledListItem>
							<a href='/user/create'>Add New</a>
						</StyledListItem>
					</StyledList>

					{customer.map((item, index) => {
						return <Card data={item} key={index} />;
					})}
					<PiginationButton adjust={1300} />
				</GridMain>
				<GridSide>
					<InnerContainer>
						<Wrapper>
							<Profile>SA</Profile>
							<UserName>Username</UserName>
							<StyledParagraph> First Name: Sodiq</StyledParagraph>
							<StyledParagraph> Last Name: Alase </StyledParagraph>
							<StyledParagraph> Email: sodiq@touchcore.com.ng</StyledParagraph>
							<StyledParagraph>Phone: 0903000000</StyledParagraph>
							<StyledParagraph>Company: Touchcore</StyledParagraph>
							<StyledOrderView text='View Orders' />
							<StyledManageUser text='Manage user' onClick={handleview} />
							{user && (
								<DropDownContainer>
									<DropDown>
										<DropDownItem>Edit user details</DropDownItem>
										<DropDownItem>Suspend user</DropDownItem>
										<DropDownItem>Delete user</DropDownItem>
									</DropDown>
								</DropDownContainer>
							)}
						</Wrapper>
					</InnerContainer>
				</GridSide>
				<GridFooter></GridFooter>
			</Grid>
		</DashboardContainer>
	);
}
