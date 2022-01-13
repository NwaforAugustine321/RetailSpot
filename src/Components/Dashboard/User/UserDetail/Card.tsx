import styled from 'styled-components';
import { useState } from 'react';

import url from '../../../../assets/spots.png';

const Table = styled.div``;
const TableHeader = styled.div`
	display: grid;
	padding: 2rem 0rem;
	min-height: 70px;
	border-bottom: 1px solid #e3e3e3;
	grid-template-areas:
		'header-reference'
		'header-date'
		'header-store'
		'header-amount'
		'header-type'
		'header-status';

	@media (max-width: 1230px) {
		grid-template-columns: repeat(4, 1fr);
		grid-template-areas: 'header-spot header-spot header-spot header-booking';
	}

	@media (min-width: 1230px) {
		grid-template-columns: repeat(8, 1fr);
		grid-template-areas: 'header-spot header-spot header-store  header-store header-service header-add-on header-add-on header-booking ';
	}

	@media (max-width: 768px) {
		grid-row-gap: 1.5rem;
		grid-template-areas: 'header-spot';
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
	padding: 1rem 0rem;
	background: var(--bg-color);
	border-bottom: 1px solid #e3e3e3;

	@media (max-width: 1230px) {
		padding: 1rem 0rem;
		grid-row-gap: 1.5rem;
		grid-template-columns: repeat(4, 1fr);
		grid-template-areas: 'spot spot spot  booking';
	}

	@media (min-width: 1230px) {
		grid-template-columns: repeat(8, 1fr);
		grid-row-gap: 0.9rem;
		grid-template-areas: 'spot spot store  store service add-on add-on booking';
	}

	@media (max-width: 768px) {
		grid-row-gap: 1.5rem;
		grid-template-areas:
			'spot spot spot spot'
			'booking booking booking booking';
	}
`;

const SpotColumn = styled.div`
	grid-area: spot;
	display: flex;
	gap: 1rem;
	align-items: center;
`;
const PreviewContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	justify-content: space-between;
	@media (max-width: 768px) {
		gap: 3rem;
	}
`;

const Image = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 11px;
	@media (max-width: 768px) {
		width: 50px;
		height: 50px;
	}
`;

const BookingColumn = styled.div`
	grid-area: booking;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const AddOnColumn = styled.div`
	grid-area: add-on;
	display: flex;
	align-items: center;
	@media (max-width: 768px) {
		display: none;
	}
	@media (max-width: 1230px) {
		display: none;
	}
`;
const Items = styled.h5`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 1rem;
	@media (max-width: 1100px) {
		font-size: 0.9rem;
	}
`;
const Text = styled.h5`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 0.9rem;
	color: #e3562a;
`;

const Title = styled.h5`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 0.9rem;
	color: #262626;
	margin: 0.3rem 0rem;
`;

const StoreColumn = styled.div`
	grid-area: store;
	display: flex;
	align-items: center;
	@media (max-width: 1230px) {
		display: none;
	}
	@media (max-width: 768px) {
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

const ServiceColumn = styled.div`
	grid-area: service;
	display: flex;
	align-items: center;
	@media (max-width: 768px) {
		display: none;
	}
	@media (max-width: 1230px) {
		display: none;
	}
`;
const Customer = styled.h5`
	//	font-family: SF UI Text;
	font-style: normal;
	font-weight: 600;
	font-size: 1rem;
	@media (max-width: 1100px) {
		font-size: 0.9rem;
	}
`;

const HeaderSpot = styled.div`
	grid-area: header-spot;
	@media (max-width: 768px) {
		display: none;
	}
`;

const HeaderBooking = styled.div`
	grid-area: header-booking;
	@media (max-width: 768px) {
		display: none;
	}
`;
const HeaderService = styled.div`
	grid-area: header-service;
	@media (max-width: 768px) {
		display: none;
	}
	@media (max-width: 1230px) {
		display: none;
	}
`;

const HeaderAddOn = styled.div`
	grid-area: header-add-on;

	@media (max-width: 1230px) {
		display: none;
	}
	@media (max-width: 640px) {
		display: none;
	}

	@media (max-width: 768px) {
		display: none;
	}
	@media (max-width: 1230px) {
		display: none;
	}
`;
const HeaderStore = styled.div`
	grid-area: header-store;
	@media (max-width: 1230px) {
		display: none;
	}
	@media (max-width: 768px) {
		display: none;
	}
`;
const CheckInput = styled.input`
	max-width: 19px;
	height: 19px;
	border: 2px solid #e1e1e1;
	border-radius: 3px;
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
	margin-bottom: 0.5rem;
	@media (max-width: 1100px) {
		font-size: 0.9rem;
	}
`;

export default function Card() {
	return (
		<Table>
			<TableHeader>
				<HeaderSpot>
					<HeaderText>Spot Name</HeaderText>
				</HeaderSpot>
				<HeaderStore>
					<HeaderText>Store Name</HeaderText>
				</HeaderStore>
				<HeaderService>
					<HeaderText>Services</HeaderText>
				</HeaderService>
				<HeaderAddOn>
					<HeaderText>Add ons</HeaderText>
				</HeaderAddOn>
				<HeaderBooking>
					<HeaderText>Book Date</HeaderText>
				</HeaderBooking>
			</TableHeader>
			<CardContainer>
				<SpotColumn>
					<CheckInput></CheckInput>
					<PreviewContainer>
						<Image src={url} />
						<div>
							<Text>#0005</Text>
							<Title>Queen A-0001</Title>
							<Text>₦50,000</Text>
						</div>
					</PreviewContainer>
				</SpotColumn>

				<StoreColumn>
					<Store>Ebeano Lekki</Store>
				</StoreColumn>
				<ServiceColumn>
					<Customer>Floor G-05</Customer>
				</ServiceColumn>
				<AddOnColumn>
					<Items>
						AC, Shower, Double Bed, <br /> Towel Bathup, Coffee Set, <br />
						LED TV, Wifi
					</Items>
				</AddOnColumn>
				<BookingColumn>
					<div>
						<Date>June 1, 2020 </Date>
						<Time>08:22 AM</Time>
					</div>
				</BookingColumn>
			</CardContainer>
		</Table>
	);
}
