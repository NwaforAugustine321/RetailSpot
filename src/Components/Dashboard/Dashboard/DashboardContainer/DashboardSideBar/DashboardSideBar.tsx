import { useState } from 'react';
import styled from 'styled-components';
import { MenuOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';

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
		font-size: 0.7rem;
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
	const path = useLocation();
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
					<a href='/user/store'>
						<SpotIcon className='Mobile-span-icon' fill='#E3562A' />
					</a>

					<Text>
						<a href='/user/store'> Stores</a>
					</Text>
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
					<a href='/user/report'>
						<Report className='Mobile-span-icon' fill='#E3562A' />
					</a>

					<Text>
						<a href='/user/report'> Reports</a>
					</Text>
				</View>

				<View>
					<a href='/spots'>
						<StoreIcon fill='#E3562A' className='Mobile-span-icon' />
					</a>

					<Text>
						<a href='/spots'> Spots</a>
					</Text>
				</View>
			</MobileView>

			<StyledMobileSiderBar>
				<MenuContainer>
					<Logo />
					<StyledMenuOutlined />
				</MenuContainer>
				<StyledList>
					<StyledListItem className={path.pathname === '/' ? 'active' : ''}>
						<OverViewIcon fill={path.pathname === '/' ? '#FFFF' : '#4F4F4F'} />
						<a href='/'> Overview</a>
					</StyledListItem>
					<StyledListItem
						className={path.pathname === '/account/users' ? 'active' : ''}
					>
						<UserIcon
							fill={path.pathname === '/account/users' ? '#FFFF' : '#4F4F4F'}
						/>

						<a href='/account/users'>Users</a>
					</StyledListItem>
					<StyledListItem
						className={path.pathname === '/user/store' ? 'active' : ''}
					>
						<UserIcon
							fill={path.pathname === '/user/store' ? '#FFFF' : '#4F4F4F'}
						/>

						<a href='/user/store'>Store</a>
					</StyledListItem>
					<StyledListItem
						className={path.pathname === '/spots' ? 'active' : ''}
					>
						<UserIcon fill={path.pathname === '/spots' ? '#FFFF' : '#4F4F4F'} />

						<a href='/spots'>Spots</a>
					</StyledListItem>
					<StyledListItem
						className={path.pathname === '/user/booking' ? 'active' : ''}
					>
						<StoreIcon
							fill={path.pathname === '/user/booking' ? '#FFFF' : '#4F4F4F'}
						/>

						<a href='/user/booking'>Bookings</a>
					</StyledListItem>
					<StyledListItem
						className={path.pathname === '/user/delivery' ? 'active' : ''}
					>
						<StoreIcon
							fill={path.pathname === '/user/delivery' ? '#FFFF' : '#4F4F4F'}
						/>
						<a href='/user/delivery'> Deliveries</a>
					</StyledListItem>
					<StyledListItem
						className={path.pathname === '/user/transactions' ? 'active' : ''}
					>
						<TransactionIcon
							fill={
								path.pathname === '/user/transactions' ? '#FFFF' : '#4F4F4F'
							}
						/>

						<a href='/user/transactions'>Transactions</a>
					</StyledListItem>
					<StyledListItem
						className={path.pathname === '/user/payment' ? 'active' : ''}
					>
						<PaymentIcon
							fill={path.pathname === '/user/payment' ? '#FFFF' : '#4F4F4F'}
						/>
						<a href='/user/payment'> Payments</a>
					</StyledListItem>
					<StyledListItem
						className={path.pathname === '/user/coupon' ? 'active' : ''}
					>
						<UserIcon
							fill={path.pathname === '/user/coupon' ? '#FFFF' : '#4F4F4F'}
						/>

						<a href='/user/coupon'> Coupons</a>
					</StyledListItem>
					<StyledListItem
						className={path.pathname === '/user/review' ? 'active' : ''}
					>
						<a href='/user/review'>
							<UserIcon
								fill={path.pathname === '/user/review' ? '#FFFF' : '#4F4F4F'}
							/>
						</a>
						<a href='/user/review'>Reviews</a>
					</StyledListItem>

					<StyledListItem
						className={path.pathname === '/user/report' ? 'active' : ''}
					>
						<a href='/user/report'>
							<Report
								fill={path.pathname === '/user/report' ? '#FFFF' : '#4F4F4F'}
							/>
						</a>
						<a href='/user/report'> Reports</a>
					</StyledListItem>

					<StyledListItem
						className={path.pathname === '/user/settings' ? 'active' : ''}
					>
						<a href='/user/settings'>
							<Setting
								fill={path.pathname === '/user/settings' ? '#FFFF' : '#4F4F4F'}
							/>
						</a>

						<a href='/user/settings'>Settings</a>
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
