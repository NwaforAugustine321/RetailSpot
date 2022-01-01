import styled from 'styled-components';
import { useState, useReducer } from 'react';

import DashboardContainer from '../../../Components/Dashboard/Dashboard/DashboardContainer/DashboardContainer';
import Card from './Card';
import PiginationButton from '../../../Components/Partial/NextButton';
import Button from '../../../Template/Button/Button';
import url from '../../../assets/store.png';
import Modal from '../../../Components/Partial/Modal';
import Input from '../../../Template/Input/Input';
import { ReactComponent as Edit } from '../../../assets/edit.svg';
import { ReactComponent as EditCrossIcon } from '../../../assets/editCrossIcon.svg';

const preview = ['url', 'url1', 'url2'];
const data = [
	{
		name: 'Ebeano Supermarket',
		address: 'Lekki Phase 1, Lagos',
		active: 'Active',
		amount: '500',
	},
	{
		name: 'Ebeano Supermarket',
		address: 'Lekki Phase 1, Lagos',
		active: 'Inactive',
		amount: '500',
	},
	{
		name: 'Ebeano Supermarket',
		address: 'Lekki Phase 1, Lagos',
		active: 'Inactive',
		amount: '500',
	},
	{
		name: 'Ebeano Supermarket',
		address: 'Lekki Phase 1, Lagos',
		active: 'Active',
		amount: '500',
	},
	{
		name: 'Ebeano Supermarket',
		address: 'Lekki Phase 1, Lagos',
		active: 'Inactive',
		amount: '500',
	},
];
const activity = [
	{
		text: 'Spots',
		amount: '4,550',
	},
	{
		text: 'Available Spots',
		amount: '2,250',
	},
	{
		text: 'Transactions',
		amount: '2,250',
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
		grid-template-columns: 1fr minmax(350px, 467px);
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
	min-height: 878px;
	border-radius: 8px;
	padding: 3rem 1.5rem;
	position: relative;
	max-width: 500px;
	margin: 0rem auto;
	@media (min-width: 1400px) {
		padding: 3rem 4rem;
	}
`;

const Wrapper = styled.div`
	width: 100%;
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
const Profile = styled.img`
	max-width: 233px;
	margin: 0rem auto 1rem auto;
	height: 160px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StoreImage = styled.img`
	max-width: 233px;
	margin: 0rem 0rem 1rem 0rem;
	height: 160px;
`;

const Title = styled.h1`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 1.13rem;
	letter-spacing: -0.5px;
	color: #252b1d;
`;

const StyledOrderView = styled(Button)`
	background: #e3562a;
	height: 58px;
	max-width: 100%;
	margin-bottom: 1.4rem;
	cursor: pointer;
`;
const Preview = styled.img`
	max-width: 35px;
	height: 35px;
	border-radius: 8px;
`;
const StoreImagePreview = styled.img`
	max-width: 77px;
	height: 83px;
	border-radius: 8px;
`;

const StoreImagePreviewEdit = styled.label`
	display: block;
	text-align: center;
	max-width: 77px;
	height: 83px;
	border-radius: 8px;
	background: #f7f7f7;
	position: relative;
	cursor: pointer;
`;

const CrossEditIcon = styled(EditCrossIcon)`
	position: absolute;
	top: 45%;
	left: 50%;
	transform: translateX(-50%);
`;

const EditPreview = styled.input`
	visibility: hidden;
	max-width: 77px;
	height: 83px;
	border: none;
`;

const PreviewContainer = styled.div`
	display: flex;
	max-width: 135px;
	justify-content: space-between;
	margin: 0rem auto 2.4rem auto;
`;
const StoreImagePreviewContainer = styled.div`
	display: flex;
	gap: 1rem;
`;

const StoreDetailContainer = styled.div`
	max-width: 300px;
	text-align: center;
	margin: 0rem auto 2.4rem auto;
`;

const StoreName = styled.h1`
	font-family: SF UI Text;
	font-style: normal;
	font-weight: bold;
	font-size: 0.9rem;
	color: #707070;
	margin-bottom: 0.4rem;
`;

const StoreType = styled.p`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 0.9rem;
	color: #fb6d3a;
	margin-bottom: 1.5rem;
`;

const StoreAddress = styled.h2`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 0.9rem;
	color: #979797;
	margin-bottom: 0.4rem;
`;

const ContainerActivity = styled.div`
	width: 100%;
	height: 94px;
	margin: 0rem auto 1.3rem auto;
	text-align: right;
	background: var(--bg-color);
	border-radius: 5px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	border: 1px solid #c4c4c4;

	@media (max-width: 640px) {
		max-width: 350px;
	}
	@media (min-width: 1100px) {
		max-width: 100%;
		height: 120px;
	}
	@media (min-width: 1250px) {
		max-width: 350px;
	}
`;

const StyledTitle = styled.h6`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 0.8rem;
	line-height: 18px;
	color: #bebab3;
	margin-bottom: 0.5rem;
`;

const StyledAmount = styled.h6`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 1.23rem;
	line-height: 18px;
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

const StyledStoreUpdateContainer = styled.div`
	background: var(--bg-color);
	max-width: 514px;
	margin: 1rem auto;
	min-height: 800px;
	padding: 1.6rem 4.7rem;
	border-radius: 8px;
	@media (max-width: 500px) {
		padding: 1.6rem 2.5rem;
	}
`;

const Field = styled.div`
	margin-bottom: 1.4rem;
`;

const Label = styled.label`
	display: block;
	margin-bottom: 1rem;
	// font-family: var(--ft-style);
	font-style: normal;
	font-weight: 400;
	text-align: left;
	font-size: 0.9rem;
	line-height: 120%;
	letter-spacing: 0.05em;
	color: var(--pri-text-color);
`;
const StyledInput = styled(Input)`
	border: 1px solid #dddfe1;
	max-width: 327px;
	height: 50px;
	background: #f7f7f7;
	padding: 1.2rem 1.7rem;
	border-radius: 22px;
`;

const StyledButton = styled(Button)`
	border-radius: 0px;
	height: 70px;
	font-size: 0.9rem;
`;

const EditIcon = styled(Edit)`
	position: absolute;
	right: 2rem;
	top: 1rem;
	cursor: pointer;
`;

const StyledListItem = styled.li`
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	cursor: pointer;
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

export default function Store() {
	const [update, setupdate] = useState<Boolean>(false);
	const handleview = () => {
		setupdate(!update);
	};
	const reducer = (
		state: { tab: string; title: string },
		action: { type: string }
	) => {
		switch (action.type) {
			case 'All':
				return {
					tab: '1',
					title: 'All',
				};
			case 'Active':
				return {
					tab: '2',
					title: 'Active',
				};
			case 'Inactive':
				return {
					tab: '3',
					title: 'Inactive',
				};
			default:
				return state;
		}
	};
	let initialState = {
		tab: '1',
		title: 'All',
	};
	const [state, dispatch] = useReducer(reducer, initialState);

	const handTab = (payload: string) => {
		dispatch({
			type: payload,
		});
	};

	return (
		<DashboardContainer>
			<Grid>
				<GridTop>
					<Title>Stores</Title>

					<StyledActionList>
						<StyledActionListItem>Print</StyledActionListItem>
						<StyledActionListItem>Export</StyledActionListItem>
					</StyledActionList>
				</GridTop>
				<GridMain>
					<StyledList>
						<StyledListItem
							className={state.tab === '1' ? 'user-active' : undefined}
							onClick={() => {
								handTab('All');
							}}
						>
							All
						</StyledListItem>
						<StyledListItem
							className={state.tab === '2' ? 'user-active' : undefined}
							onClick={() => {
								handTab('Active');
							}}
						>
							Active
						</StyledListItem>
						<StyledListItem
							className={state.tab === '3' ? 'user-active' : undefined}
							onClick={() => {
								handTab('Inactive');
							}}
						>
							Inactive
						</StyledListItem>
						<StyledListItem>
							<a href='/user/create'>Add New</a>
						</StyledListItem>
					</StyledList>

					{data.map((item, index) => {
						return <Card data={item} key={index} />;
					})}
					<PiginationButton adjust={1300} />
				</GridMain>
				<GridSide>
					<InnerContainer>
						<EditIcon onClick={handleview} />
						<Wrapper>
							<Profile src={url} />
							<PreviewContainer>
								{preview.map((data, index) => {
									return <Preview src={url} key={index} />;
								})}
							</PreviewContainer>
							<StoreDetailContainer>
								<StoreName>Ebeano Supermarket</StoreName>
								<StoreAddress>
									14b Wole Ariyo Street, Lekki Phase 1
								</StoreAddress>
								<StoreType>Food Market</StoreType>
							</StoreDetailContainer>
							{activity.map((item, index) => {
								return (
									<ContainerActivity key={index}>
										<p>icon</p>
										<div>
											<StyledTitle>{item.text}</StyledTitle>
											<StyledAmount>{item.amount}</StyledAmount>
										</div>
									</ContainerActivity>
								);
							})}
							<StyledOrderView text='View Transactions' />
							<StyledManageUser text='View Spots' />
						</Wrapper>
					</InnerContainer>
				</GridSide>
				<GridFooter></GridFooter>
			</Grid>
			{update && (
				<Modal>
					<StyledStoreUpdateContainer>
						<Field>
							<Label>Store</Label>
							<StyledInput type='text' placeholder='Ebeano Supermarket' />
						</Field>
						<Field>
							<Label>Location</Label>
							<StyledInput
								type='text'
								placeholder='14b wole ariyo street, Lekki Phase 1'
							/>
						</Field>
						<Field>
							<Label>Description</Label>
							<StyledInput
								type='text'
								placeholder='Outlet for everything nice'
							/>
						</Field>
						<Field>
							<Label>Category</Label>
							<StyledInput type='text' placeholder='General Goods' />
						</Field>
						<Field>
							<Label>Main Store Image</Label>
							<StoreImage src={url} />
						</Field>
						<Field>
							<Label>Other Photos</Label>
							<StoreImagePreviewContainer>
								<StoreImagePreview src={url} />
								<StoreImagePreview src={url} />
								<StoreImagePreview src={url} />
								<StoreImagePreviewEdit>
									<CrossEditIcon />
									<EditPreview type='text' />
								</StoreImagePreviewEdit>
							</StoreImagePreviewContainer>
						</Field>
						<StyledButton text='Update' onClick={handleview} />
					</StyledStoreUpdateContainer>
				</Modal>
			)}
		</DashboardContainer>
	);
}
