import styled from 'styled-components';
import { useState } from 'react';

import { ReactComponent as Icon } from '../../../assets/bookingIcon.svg';
import { ReactComponent as DetailIcon } from '../../../assets/view.svg';
import { ReactComponent as ApprovedIcon } from '../../../assets/approved.svg';
import { ReactComponent as UnApprovedIcon } from '../../../assets/unapproved.svg';
import { ReactComponent as InfoIcon } from '../../../assets/info.svg';

const Table = styled.div`
	min-height: 800px;
	background: var(--bg-color);
	border-radius: 22px;
`;
const TableHeader = styled.div`
	display: grid;
	padding: 2rem 1rem;
	min-height: 70px;
	border-bottom: 1px solid #e3e3e3;
	grid-template-areas:
		'header-reference'
		'header-date'
		'header-store'
		'header-amount'
		'header-type'
		'header-status';
	@media (max-width: 1100px) {
		grid-template-columns: repeat(4, 1fr);
		grid-template-areas: 'header-reference header-date header-amount header-status';
	}
	@media (min-width: 1100px) {
		grid-template-columns: repeat(6, 1fr);
		grid-template-areas: 'header-reference header-date header-store header-amount header-type header-status';
	}

	@media (max-width: 640px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 1.5rem;
		grid-template-areas: 'header-reference header-date';
	}
`;

const HeaderText = styled.h4`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: bold;
	font-size: 1.13rem;
	@media (max-width: 1100px) {
		font-size: 0.9rem;
	}
`;

const CardContainer = styled.div`
	display: grid;
	cursor: pointer;
	position: relative;
	padding: 2rem 1rem;
	background: var(--bg-color);
	border-bottom: 1px solid #e3e3e3;
	grid-template-areas:
		'reference'
		'date'
		'store'
		'amount'
		'type'
		'status';
	@media (max-width: 1100px) {
		grid-template-columns: repeat(4, 1fr);
		padding: 1rem;
		grid-row-gap: 1.5rem;
		grid-template-areas: 'reference date amount status';
	}
	@media (min-width: 1100px) {
		grid-template-columns: repeat(6, 1fr);
		grid-template-areas: 'reference date store amount type status';
	}
	@media (max-width: 640px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 1.5rem;
		grid-template-areas:
			'reference date '
			'status amount';
	}
`;
const ReferenceColumn = styled.div`
	grid-area: reference;
	display: flex;
	gap: 1rem;
	align-items: center;
`;
const Reference = styled.h5`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 1rem;
	@media (max-width: 1100px) {
		font-size: 0.9rem;
	}
`;
const Status = styled.div`
	max-width: 130px;
	height: 49px;
	border: 1px solid #ff9548;
	border-radius: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.9rem 2rem;
	@media (max-width: 1100px) {
		height: 35px;
	}
`;
const StatusColumn = styled.div`
	grid-area: status;
	display: flex;
	align-items: center;
	padding-right: 0.8rem;
	gap: 1rem;
	justify-content: space-between;
`;
const TypeColumn = styled.div`
	grid-area: type;
	display: flex;
	align-items: center;
	gap: 1rem;
	@media (max-width: 1100px) {
		display: none;
	}
`;
const Type = styled.h5`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 1rem;
	@media (max-width: 1100px) {
		font-size: 0.9rem;
	}
`;
const AmountColumn = styled.div`
	grid-area: amount;
	display: flex;
	align-items: center;
	justify-self: center;
`;
const Amount = styled.h5`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 1rem;
	@media (max-width: 1100px) {
		font-size: 0.9rem;
	}
`;
const StoreColumn = styled.div`
	grid-area: store;
	display: flex;
	align-items: center;
	@media (max-width: 1100px) {
		display: none;
	}
`;
const Store = styled.h5`
	//	font-family: SF UI Text;
	font-style: normal;
	font-weight: 600;
	font-size: 1rem;
	@media (max-width: 1100px) {
		font-size: 0.9rem;
	}
`;
const DateColumn = styled.div`
	grid-area: date;
	display: flex;
	align-items: center;
	justify-self: center;
`;
const Time = styled.h5`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 0.7rem;
	color: #666666;
`;
const Date = styled.h4`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 1rem;
	@media (max-width: 1100px) {
		font-size: 0.9rem;
	}
`;
const HeaderReference = styled.div`
	grid-area: header-reference;
`;
const HeaderStatus = styled.div`
	grid-area: header-status;
	@media (max-width: 640px) {
		display: none;
	}
`;
const HeaderType = styled.div`
	grid-area: header-type;
	@media (max-width: 1100px) {
		display: none;
	}
`;
const HeaderAmount = styled.div`
	grid-area: header-amount;
	@media (max-width: 640px) {
		display: none;
	}
`;
const HeaderStore = styled.div`
	grid-area: header-store;
	@media (max-width: 1100px) {
		display: none;
	}
`;
const HeaderDate = styled.div`
	grid-area: header-date;
	justify-self: center;
`;
const CheckInput = styled.input`
	max-width: 19px;
	height: 19px;
	border: 2px solid #e1e1e1;
	border-radius: 3px;
`;

const StyledDetailIcon = styled(DetailIcon)`
	@media (max-width: 1100px) {
		display: none;
	}
`;

const DropDown = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 5px;
	text-align: center;

	background: var(--bg-color);
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	filter: drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.102));
	}
`;
const DropDownItem = styled.h4`
	padding: 1.3rem 1rem 1.9rem 1rem;
	cursor: pointer;
	background: #f7f7f7;
	display: flex;
	gap: 1rem;
	&:hover {
		background-color: var(--bg-color);
	}
`;

const DropDownContainer = styled.div`
	position: absolute;
	max-width: 257px;
	width: 100%;
	margin: 0rem auto;
	min-height: 225px;
	z-index: 999;
	top: 4rem;
	right: 2.5rem;
	@media (max-width: 768px) {
		top: 6rem;
		right: 3rem;
	}
`;

export default function Card() {
	const [open, setopen] = useState<Boolean>(false);
	const handleview = () => {
		setopen(!open);
	};
	return (
		<Table>
			<TableHeader>
				<HeaderReference>
					<HeaderText>Reference</HeaderText>
				</HeaderReference>
				<HeaderDate>
					<HeaderText> Date</HeaderText>
				</HeaderDate>
				<HeaderStore>
					<HeaderText> Store</HeaderText>
				</HeaderStore>
				<HeaderAmount>
					<HeaderText>Amount</HeaderText>
				</HeaderAmount>
				<HeaderType>
					<HeaderText>Type</HeaderText>
				</HeaderType>
				<HeaderStatus>
					<HeaderText>Status</HeaderText>
				</HeaderStatus>
			</TableHeader>
			<CardContainer onClick={handleview}>
				<ReferenceColumn>
					<CheckInput></CheckInput>
					<Reference>#123412</Reference>
				</ReferenceColumn>
				<DateColumn>
					<div>
						<Date>June 1, 2020 </Date>
						<Time>08:22 AM</Time>
					</div>
				</DateColumn>
				<StoreColumn>
					<Store>Ebeano Lekki</Store>
				</StoreColumn>
				<AmountColumn>
					<Amount>₦783.22</Amount>
				</AmountColumn>
				<TypeColumn>
					<Icon />
					<Type>Booking</Type>
				</TypeColumn>
				<StatusColumn>
					<Status>Pending</Status>
					<StyledDetailIcon
						onClick={handleview}
						style={{ cursor: 'pointer' }}
					/>
				</StatusColumn>
				{open && (
					<DropDownContainer>
						<DropDown>
							<DropDownItem>
								<InfoIcon />
								View Details
							</DropDownItem>
							<DropDownItem>
								{' '}
								<ApprovedIcon />
								Approve Payment
							</DropDownItem>
							<DropDownItem>
								{' '}
								<UnApprovedIcon />
								Decline Payment
							</DropDownItem>
						</DropDown>
					</DropDownContainer>
				)}
			</CardContainer>
		</Table>
	);
}
