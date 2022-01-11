import { useReducer } from 'react';
import styled from 'styled-components';

import Input from '../../../Template/Input/Input';
import Button from '../../../Template/Button/Button';
import Card from './card';
import { ReactComponent as Icon } from '../../../assets/date.svg';

const Grid = styled.div`
	display: flex;
`;
const GridBottom = styled.div`
	display: flex;
	gap: 1rem;
	@media (max-width: 1100px) {
		flex-direction: column;
		gap: 2rem;
	}
`;
const RightContainer = styled.div`
	width: 45%;
	@media (max-width: 1100px) {
		width: 100%;
	}
`;
const LeftContainer = styled.div`
	width: 50%;
	@media (max-width: 1100px) {
		width: 100%;
	}
`;

const Container = styled.div`
	min-height: 483px;
	margin-bottom: 3.3rem;
	background: var(--bg-color);
	box-shadow: 1.5px 2.6px 10px rgba(119, 119, 119, 0.1);
	padding: 2rem;
	@media (max-width: 640px) {
		padding: 2rem 1rem;
	}
`;

const Title = styled.h1`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 1.13rem;
	letter-spacing: -0.5px;
	color: var(--pri-color);
	margin-bottom: 3.3rem;
`;
const FormTitle = styled.h1`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: bold;
	font-size: 1.4rem;
	color: #464a53;
	margin-bottom: 3.3rem;
`;

const Label = styled.label`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 1.13rem;
	height: 54px;
	color: var(--pri-text-color);
	margin-bottom: 1rem;
	display: block;
`;

const ManageLabel = styled.label`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 1.13rem;
	color: var(--pri-text-color);
	margin-bottom: 0.5rem;
	display: block;
`;
const LabelContainer = styled.div`
	width: 15%;
	@media (max-width: 900px) {
		display: none;
	}
`;

const InputContainer = styled.div`
	width: 80%;
	@media (max-width: 900px) {
		width: 100%;
	}
`;
const StyledButton = styled(Button)`
	border-radius: 0px;
	height: 82px;
	margin-bottom: 0.7rem;
	font-size: 0.9rem;
`;

const StyledInput = styled(Input)`
	border: 1px solid #dddfe1;
	max-width: 100%;
	height: 54px;
	padding: 1.2rem 1.7rem;
`;

const StyledCheckInput = styled.div`
	width: 26px;
	height: 26px;
	cursor: pointer;
	border: 1px solid #dddfe1;
	border-radius: 50%;
`;

const Field = styled.div`
	margin-bottom: 1rem;
`;
const CheckField = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	@media (max-width: 640px) {
		font-size: 1rem;
	}
`;

const CheckContainer = styled.div`
	margin-bottom: 1rem;
	display: flex;
	justify-content: space-between;
	max-width: 80%;
	@media (max-width: 640px) {
		flex-direction: column;
		gap: 1rem;
	}
`;

const ManageTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem 3rem;
	background: #f4e0da;
	border-radius: 6px;
	margin-bottom: 0.5rem;
`;

const Text = styled.h1`
	font-family: SF UI Text;
	font-style: normal;
	font-weight: bold;
	font-size: 1.13rem;
	color: #707070;
	@media (max-width: 768px) {
		font-size: 0.9rem;
	}
`;

const FormContainer = styled.div`
	margin-bottom: 2rem;
	text-align: left;
`;
const Form = styled.div`
	padding: 2rem 1.5rem;
	background: var(--bg-color);
	text-align: center;
	@media (max-width: 640px) {
		padding: 2rem 1rem;
	}
`;
const FeeContainer = styled.div`
	display: flex;
	gap: 1rem;
`;
const FeeMainContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1rem;
`;
const TitleText = styled.h1`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: 400;
	font-size: 0.8rem;
	color: #3c3a36;
	@media (max-width: 400px) {
		font-size: 0.7rem;
	}
`;
const FeePercent = styled.h1`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 0.7rem;
	color: #bebab3;
	@media (max-width: 400px) {
		font-size: 0.5rem;
	}
`;

export default function CreatePlatformFess() {
	const reducer = (
		state: { checked: boolean; title: string },
		action: { title: string; checked: boolean }
	) => {
		switch (action.title) {
			case 'Store Owners':
				return {
					checked: action.checked ? action.checked : false,
					title: 'Store Owners',
				};
			case 'Customer':
				return {
					checked: action.checked ? action.checked : false,
					title: 'Customer',
				};
			case 'Both':
				return {
					checked: action.checked ? action.checked : false,
					title: 'Both',
				};
			default:
				return state;
		}
	};

	let initialState = {
		checked: true,
		title: 'Store Owners',
	};
	const [state, dispatch] = useReducer(reducer, initialState);

	const handChecked = (payload: string) => {
		dispatch({
			title: payload,
			checked: true,
		});
	};

	return (
		<>
			<Title>Create Platform Fees</Title>
			<Container>
				<FormTitle>Platform Fees</FormTitle>
				<Grid>
					<LabelContainer>
						<Field>
							<Label>Title*</Label>
						</Field>
						<Field>
							<Label>User Type*</Label>
						</Field>
						<Field>
							<Label>Fee Type*</Label>
						</Field>
						<Field>
							<Label>Rate*</Label>
						</Field>
					</LabelContainer>
					<InputContainer>
						<Field>
							<StyledInput
								type='text'
								placeholder='Enter title of platform fee'
							/>
						</Field>
						<Field>
							<CheckContainer>
								<CheckField>
									<StyledCheckInput
										className={`${
											state.title === 'Store Owners' ? 'checked' : ''
										}`}
										onClick={() => {
											handChecked('Store Owners');
										}}
									/>
									Store Owners
								</CheckField>
								<CheckField>
									<StyledCheckInput
										className={`${state.title === 'Customer' ? 'checked' : ''}`}
										onClick={() => {
											handChecked('Customer');
										}}
									/>
									Customer
								</CheckField>
								<CheckField>
									<StyledCheckInput
										className={`${state.title === 'Both' ? 'checked' : ''}`}
										onClick={() => {
											handChecked('Both');
										}}
									/>
									Both
								</CheckField>
							</CheckContainer>
						</Field>
						<Field>
							<StyledInput
								type='text'
								placeholder='Select Percentage or Amount'
							/>
						</Field>
						<Field>
							<StyledInput type='text' placeholder='Enter the rate' />
						</Field>
						<StyledButton text='Create Fee' />
					</InputContainer>
				</Grid>
			</Container>
			<Title>Manage Platform Fees</Title>
			<GridBottom>
				<LeftContainer>
					<ManageTitle>
						<Text>Name</Text>
						<Text>Manage</Text>
					</ManageTitle>
					<Card />
				</LeftContainer>
				<RightContainer>
					<Form>
						<FormContainer>
							<FeeMainContainer>
								<FeeContainer>
									<Icon />
									<div>
										<TitleText>Platform Fee</TitleText>
										<FeePercent>10%</FeePercent>
									</div>
								</FeeContainer>
								<TitleText>Edit</TitleText>
							</FeeMainContainer>
							<Field>
								<Field>
									<ManageLabel>Type</ManageLabel>
									<StyledInput type='text' placeholder='Percentage' />
								</Field>
								<Field>
									<ManageLabel>Rate</ManageLabel>
									<StyledInput type='text' placeholder='Enter Rate' />
								</Field>
							</Field>
						</FormContainer>
						<StyledButton text='Update' margin='0rem auto' width='542px' />
					</Form>
				</RightContainer>
			</GridBottom>
		</>
	);
}
