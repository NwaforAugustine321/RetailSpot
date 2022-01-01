import { useState } from 'react';
import styled from 'styled-components';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';

import Container from '../../../../../Template/Container/Container';
import Input from '../../../../../Template/Input/Input';
import { ReactComponent as Avatar } from '../../../../../assets/avatar.svg';
import { ReactComponent as NotifyIcon } from '../../../../../assets/notify.svg';
import { ReactComponent as Logo } from '../../../../../assets/logo.svg';
import { ReactComponent as UserIcon } from '../../../../../assets/user.svg';
import { ReactComponent as StoreIcon } from '../../../../../assets/store.svg';
import { ReactComponent as TransactionIcon } from '../../../../../assets/transaction.svg';
import { ReactComponent as PaymentIcon } from '../../../../../assets/payment.svg';

const Header = styled(Container)`
	margin: 0rem 0rem 0rem 0rem;
	min-height: 90px;
	max-width: 100%;
	border-radius: 0px;
	padding: 1rem 1rem;
	position: relative;
	grid-area: content;
`;

const StyledNotifyIcon = styled(NotifyIcon)`
	font-size: 30px;
`;

const StyledLogo = styled(Logo)`
	@media (min-width: 1024px) {
		display: none;
	}
`;

const Grid = styled.div`
	grid-template-columns: 1fr;
	grid-template-areas:
		'title'
		'profile';
	@media (min-width: 1024px) {
		grid-template-columns: 1fr 2fr;
		grid-template-areas:
			'title title'
			'profile profile';
	}
`;

const Title = styled.h1`
	font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	grid-area: title;
	display: flex;
	align-items: center;
	line-height: 26px;
	letter-spacing: -0.5px;
	color: #e3562a;
	@media (max-width: 1024px) {
		display: none;
	}
`;

const CustomeInputContainer = styled.div`
	opacity: 0.7;
	border: 1px solid #bfbfbf;
	border-radius: 3px;
	appearance: none;
	background: #ffff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin: 0rem auto;
	@media (max-width: 1420px) {
		max-width: 500px;
	}
	@media (max-width: 1150px) {
		max-width: 400px;
	}

	@media (max-width: 768px) {
		max-width: 700px;
	}

	@media (min-width: 1420px) {
		max-width: 700px;
	}

	padding: 0rem 1rem;
`;

const Profile = styled.div`
	grid-area: profile;
	display: flex;
	margin-bottom: 1rem;
	width: 100%;
	justify-content: space-between;
`;

const SearchContainer = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	@media (min-width: 1024px) {
		display: none;
	}
`;

const PrifileAvatarContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	@media (min-width: 1024px) {
		width: 100%;
	}
`;

const StyledMobileSiderBar = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: -999px;
	width: 200px;
	z-index: 9999;
	transition: right 0.5s;
	background-color: var(--bg-color);
`;

const StyledList = styled.ul`
	list-style: none;
	display: flex;
	height: 100%;
	padding: 2rem 0rem;
	justify-content: space-between;
	flex-direction: column;
`;

const StyledMenuOutlined = styled(MenuOutlined)`
	cursor: pointer;
	font-size: 23px;
`;
const MenuContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	padding-right: 1rem;
`;

const StyledListItem = styled.li`
	display: flex;
	padding: 0rem 2rem;
	height: 50px;
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 1rem;
	gap: 1rem;
	align-items: center;
	line-height: 22px;
	color: var(-sec-text-color);
`;

const StyledTextContainer = styled.div`
	@media (max-width: 400px) {
		display: none;
	}
`;

const ProfileName = styled.h1`
	font-famaily: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 1rem;
	line-height: 22px;
	letter-spacing: -0.5px;
	color: var(--sec-text-color);
`;

const Role = styled.h2`
	font-famaily: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 0.8rem;
	line-height: 22px;
	letter-spacing: -0.5px;
	color: var(--pri-color);
`;

export default function DashboardHeader({ className }: any) {
	const [tab, settab] = useState<number>(1);
	const [open, setopen] = useState<boolean>(false);

	const handleview = (tab: number) => {
		settab(tab);
	};
	const handledropDown = () => {
		setopen(!open);
	};

	return (
		<Header className={className}>
			<Grid>
				<Profile>
					<Title>RetailSpot</Title>
					<StyledLogo />
					<PrifileAvatarContainer>
						<CustomeInputContainer className='isopen'>
							<Input type='text' width='700px' placeholder='Search' />
							<SearchOutlined />
						</CustomeInputContainer>
						<StyledNotifyIcon />
						<StyledNotifyIcon />
						<Avatar />
						<StyledTextContainer>
							<ProfileName>John Doe</ProfileName>
							<Role>Admin</Role>
						</StyledTextContainer>
					</PrifileAvatarContainer>
				</Profile>
				<SearchContainer>
					<CustomeInputContainer>
						<Input type='text' width='700px' placeholder='Search' />
						<SearchOutlined />
					</CustomeInputContainer>
					<StyledMenuOutlined onClick={handledropDown} />
				</SearchContainer>
			</Grid>
			<StyledMobileSiderBar className={open ? 'view' : ''}>
				<StyledList>
					<MenuContainer onClick={handledropDown}>
						<StyledMenuOutlined onClick={handledropDown} />
					</MenuContainer>

					<StyledListItem
						className={tab === 1 ? 'active' : ''}
						onClick={() => {
							handleview(1);
						}}
					>
						<UserIcon fill={tab === 1 ? '#FFFF' : '#4F4F4F'} />
						<a href='/account/users'>Users</a>
					</StyledListItem>
					<StyledListItem
						className={tab === 2 ? 'active' : ''}
						onClick={() => {
							handleview(2);
						}}
					>
						<StoreIcon fill={tab === 2 ? '#FFFF' : '#4F4F4F'} />
						Bookings
					</StyledListItem>
					<StyledListItem
						className={tab === 3 ? 'active' : ''}
						onClick={() => {
							handleview(3);
						}}
					>
						<StoreIcon fill={tab === 3 ? '#FFFF' : '#4F4F4F'} />
						Deliveries
					</StyledListItem>
					<StyledListItem
						className={tab === 4 ? 'active' : ''}
						onClick={() => {
							handleview(4);
						}}
					>
						<TransactionIcon fill={tab === 4 ? '#FFFF' : '#4F4F4F'} />
						Transactions
					</StyledListItem>
					<StyledListItem
						className={tab === 5 ? 'active' : ''}
						onClick={() => {
							handleview(5);
						}}
					>
						<PaymentIcon fill={tab === 5 ? '#FFFF' : '#4F4F4F'} />
						Payments
					</StyledListItem>
					<StyledListItem
						className={tab === 6 ? 'active' : ''}
						onClick={() => {
							handleview(6);
						}}
					>
						<UserIcon fill={tab === 6 ? '#FFFF' : '#4F4F4F'} />
						Coupons
					</StyledListItem>
					<StyledListItem
						className={tab === 7 ? 'active' : ''}
						onClick={() => {
							handleview(7);
						}}
					>
						<a href='/user/review'>
							<UserIcon fill={tab === 7 ? '#FFFF' : '#4F4F4F'} />
						</a>
						<a href='/user/review'>Reviews</a>
					</StyledListItem>
					<StyledListItem>Sign Out</StyledListItem>
				</StyledList>
			</StyledMobileSiderBar>
		</Header>
	);
}
