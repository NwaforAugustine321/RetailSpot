import { useReducer } from 'react';
import styled from 'styled-components';

import DashboardContainer from '../../../Components/Dashboard/Dashboard/DashboardContainer/DashboardContainer';
import CreatePlatformFess from './CreatePlatformFess';
import ManageCategories from './ManageCategories';
const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;

	@media (min-width: 640px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 1130px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;
const Container = styled.div`
	@media (max-width: 640px) {
		padding: 4rem 1rem;
	}

	@media (min-width: 640px) {
		padding: 4rem 2rem;
	}
	@media (min-width: 1200px) {
		padding: 4rem 3rem;
	}
`;

const Title = styled.h1`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 1.13rem;
	letter-spacing: -0.5px;
	color: #252b1d;
	margin-bottom: 3.3rem;
	cursor: pointer;
`;
const Label = styled.label`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: bold;
	font-size: 1.13rem;
	color: var(--pri-color);
	margin-bottom: 1rem;
	display: block;
	cursor: pointer;
`;

const Link = styled.p`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: 400;
	font-size: 1.13rem;

	margin-bottom: 0.7rem;
`;
export default function Setting() {
	const reducer = (
		state: { tab: string; title: string },
		action: { type: string }
	) => {
		switch (action.type) {
			case 'Settings':
				return {
					tab: '1',
					title: 'Settings',
				};
			case 'Category':
				return {
					tab: '2',
					title: 'Category',
				};
			case 'Fees':
				return {
					tab: '3',
					title: 'Fees',
				};

			default:
				return state;
		}
	};
	let initialState = {
		tab: '1',
		title: 'Settings',
	};
	const [state, dispatch] = useReducer(reducer, initialState);

	const handTab = (payload: string) => {
		dispatch({
			type: payload,
		});
	};
	return (
		<DashboardContainer>
			<Container>
				<Title
					onClick={() => {
						handTab('Settings');
					}}
				>
					Settings
				</Title>
				{state.tab === '2' ? <ManageCategories /> : undefined}
				{state.tab === '3' ? <CreatePlatformFess /> : undefined}
				{state.tab === '1' ? (
					<Grid>
						<div>
							<Label>Edit Profile Information</Label>
							<Link>Create New Admin</Link>
							<Link>Change Password</Link>
						</div>
						<div>
							<Label>Staff Settings</Label>
							<Link>Manage Staff</Link>
							<Link>Roles and Permission</Link>
							<Link>
								<a href={'/user/activities'}> User Activities</a>
							</Link>
						</div>
						<div>
							<Label
								onClick={() => {
									handTab('Fees');
								}}
							>
								Platform Fees
							</Label>
							<Link>Create Fees </Link>
							<Link>Manage Fees</Link>
						</div>
						<div>
							<Label>Logistics Settings</Label>
							<Link>Activate / Deactivate </Link>
						</div>
						<div>
							<Label
								onClick={() => {
									handTab('Category');
								}}
							>
								Categories
							</Label>
							<Link>Manage Store Categories </Link>
							<Link>Manaage Spot Categories</Link>
						</div>
						<div>
							<Label>Booking Settings</Label>
							<Link>Set Booking Start time </Link>
							<Link>Set Reservation Cancellation Time</Link>
							<Link>Set Booking Fees</Link>
						</div>
						<div>
							<Label>Transaction Settings</Label>
							<Link>Refunds</Link>
							<Link>Set Refund fees</Link>
						</div>
						<div></div>
					</Grid>
				) : undefined}
			</Container>
		</DashboardContainer>
	);
}
