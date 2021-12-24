import { useState } from 'react';
import styled from 'styled-components';
import { MenuOutlined } from '@ant-design/icons';

import Container from '../../../../../Template/Container/Container';
import { ReactComponent as Logo } from '../../../../../assets/logo.svg';
import { ReactComponent as OverViewIcon } from '../../../../../assets/home.svg';
import { ReactComponent as SpotIcon } from '../../../../../assets/store.svg';
import { ReactComponent as StoreIcon } from '../../../../../assets/spot.svg';
import { ReactComponent as Setting } from '../../../../../assets/setting.svg';
import { ReactComponent as Report } from '../../../../../assets/report.svg';
import { ReactComponent as UserIcon } from '../../../../../assets/user.svg';
import { ReactComponent as TransactionIcon } from '../../../../../assets/transaction.svg';
import { ReactComponent as PaymentIcon } from '../../../../../assets/payment.svg';
import { ReactComponent as LogOutIcon } from '../../../../../assets/logout.svg';

const SideBar = styled(Container)`
	margin: 0px;
	height: 100%;
	min-height: 100px;
	background: none;
	max-width: 100%;
	grid-area: sidebar;
	border-radius: 0px;
	display: flex;
	@media (max-width: 1024px) {
		height: 100px;
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		align-items: center;
		padding: 0rem 1rem;
		background: var(--bg-color);
	}
`;

const StyledMobileSiderBar = styled.div`
	width: 100%;
	@media (max-width: 1024px) {
		display: none;
	}
`;

const StyledList = styled.ul`
	list-style: none;
	display: flex;
	height: 100%;
	background: var(--bg-color);
	padding: 2rem 0rem;
	justify-content: space-between;
	max-height: 1050px;
	flex-direction: column;
`;

const StyledListItem = styled.li`
	display: flex;
	align-items: center;
	height: 50px;
	cursor: pointer;
	padding: 0rem 2rem;
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 1rem;
	gap: 1rem;
	align-items: center;
	line-height: 22px;
	color: var(-sec-text-color);
`;

const MobileView = styled.div`
	display: flex;
	justify-content: space-between;
	align-item: center;
	width: 100%;
	@media (min-width: 640px) {
		max-width: 600px;
		margin: auto;
	}
	@media (min-width: 1024px) {
		flex-direction: column;
		display: none;
	}
`;

const View = styled.div`
	text-align: center;
`;

const Text = styled.span`
	display: block;
	font-size: 0.7rem;
	cursor: pointer;
	@media (min-width: 350px) {
		font-size: 0.9rem;
	}
`;

const MenuContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-item: center;
	padding: 1rem 0rem 2rem 0rem;
	background: var(--bg-color);
`;

const StyledMenuOutlined = styled(MenuOutlined)`
	cursor: pointer;
	font-size: 23px;
	margin-top: 0.5rem;
	margin-right: 2rem;
`;

export default function DashboardSideBar() {
	const [tab, settab] = useState<number>(1);

	const handleview = (tab: number) => {
		settab(tab);
	};
	return (
		<SideBar>
			<MobileView>
				<View>
					<Setting fill='#E3562A' className='Mobile-span-icon' />
					<Text>Settings</Text>
				</View>
				<View>
					<SpotIcon className='Mobile-span-icon' fill='#E3562A' />
					<Text>Stores</Text>
				</View>
				<View>
					<a href='/'>
						<OverViewIcon fill='#E3562A' className='Mobile-span-icon' />
					</a>

					<Text>
						<a href='/'> Overview</a>
					</Text>
				</View>

				<View>
					<Report className='Mobile-span-icon' fill='#E3562A' />
					<Text> Reports</Text>
				</View>

				<View>
					<StoreIcon fill='#E3562A' className='Mobile-span-icon' />
					<Text>Spots</Text>
				</View>
			</MobileView>

			<StyledMobileSiderBar>
				<MenuContainer>
					<Logo />
					<StyledMenuOutlined />
				</MenuContainer>
				<StyledList>
					<StyledListItem
						className={tab === 1 ? 'active' : ''}
						onClick={() => {
							handleview(1);
						}}
					>
						<OverViewIcon fill={tab === 1 ? '#FFFF' : '#4F4F4F'} />
						<a href='/'> Overview</a>
					</StyledListItem>
					<StyledListItem
						className={tab === 2 ? 'active' : ''}
						onClick={() => {
							handleview(2);
						}}
					>
						<UserIcon fill={tab === 2 ? '#FFFF' : '#4F4F4F'} />

						<a href='/account/users'>Users</a>
					</StyledListItem>
					<StyledListItem
						className={tab === 3 ? 'active' : ''}
						onClick={() => {
							handleview(3);
						}}
					>
						<StoreIcon fill={tab === 3 ? '#FFFF' : '#4F4F4F'} />
						Bookings
					</StyledListItem>
					<StyledListItem
						className={tab === 4 ? 'active' : ''}
						onClick={() => {
							handleview(4);
						}}
					>
						<StoreIcon fill={tab === 4 ? '#FFFF' : '#4F4F4F'} />
						Deliveries
					</StyledListItem>
					<StyledListItem
						className={tab === 5 ? 'active' : ''}
						onClick={() => {
							handleview(5);
						}}
					>
						<TransactionIcon fill={tab === 5 ? '#FFFF' : '#4F4F4F'} />
						Transactions
					</StyledListItem>
					<StyledListItem
						className={tab === 6 ? 'active' : ''}
						onClick={() => {
							handleview(6);
						}}
					>
						<PaymentIcon fill={tab === 6 ? '#FFFF' : '#4F4F4F'} />
						Payments
					</StyledListItem>
					<StyledListItem
						className={tab === 7 ? 'active' : ''}
						onClick={() => {
							handleview(7);
						}}
					>
						<UserIcon fill={tab === 7 ? '#FFFF' : '#4F4F4F'} />
						Coupons
					</StyledListItem>
					<StyledListItem
						className={tab === 8 ? 'active' : ''}
						onClick={() => {
							handleview(8);
						}}
					>
						<UserIcon fill={tab === 8 ? '#FFFF' : '#4F4F4F'} />
						Reviews
					</StyledListItem>
					<StyledListItem
						className={tab === 9 ? 'active' : ''}
						onClick={() => {
							handleview(9);
						}}
					>
						<Report fill={tab === 9 ? '#FFFF' : '#4F4F4F'} />
						Reports
					</StyledListItem>
					<StyledListItem
						className={tab === 10 ? 'active' : ''}
						onClick={() => {
							handleview(10);
						}}
					>
						<Setting fill={tab === 10 ? '#FFFF' : '#4F4F4F'} />
						Settings
					</StyledListItem>
					<StyledListItem>
						<LogOutIcon />
						Sign Out
					</StyledListItem>
				</StyledList>
			</StyledMobileSiderBar>
		</SideBar>
	);
}
