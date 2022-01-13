import { useReducer } from 'react';
import styled from 'styled-components';

import Input from '../../../Template/Input/Input';
import Button from '../../../Template/Button/Button';
import ManageCard from './ManageCard';
import { ReactComponent as Icon } from '../../../assets/date.svg';

const Grid = styled.div`
	display: flex;
`;
const GridBottom = styled.div``;

const Container = styled.div`
	min-height: 300px;
	margin-bottom: 3.3rem;
	max-width: 1057px;
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

const Field = styled.div`
	margin-bottom: 1rem;
`;

const ManageTitle = styled.div`
	display: flex;
	align-items: center;
	height: 73px;
	max-width: 1057px;
	justify-content: space-between;
	padding: 0rem 3rem;
	background: var(--bg-color);
	border-radius: 6px;
	margin-bottom: 0.5rem;
	@media (max-width: 640px) {
		padding: 0rem 1rem;
	}
`;
const ManageFormTitle = styled.div`
	display: flex;
	align-items: center;
	height: 73px;
	max-width: 1057px;
	justify-content: space-between;
	padding: 0rem 3rem;
	background: var(--bg-color);
	border-radius: 6px;
	margin-bottom: 0.5rem;
	@media (max-width: 640px) {
		padding: 0rem 1rem;
	}
`;
const Wrapper = styled.div`
	display: flex;
	gap: 2rem;
	height: 100%;
	align-items: center;
	@media (max-width: 768px) {
		justify-content: space-between;
		width: 100%;
	}
`;

const Text = styled.h1`
	font-family: SF UI Text;
	font-style: normal;
	font-weight: bold;
	font-size: 1.13rem;
	color: #707070;
	display: flex;
	align-items: center;
	height: 100%;
	@media (max-width: 768px) {
		font-size: 0.9rem;
	}
`;

const ManageText = styled.h1`
	font-family: SF UI Text;
	font-style: normal;
	font-weight: bold;
	font-size: 1.13rem;
	color: #707070;
	@media (max-width: 768px) {
		font-size: 0.9rem;
		display: none;
	}
`;

export default function ManageCategories() {
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
			<Title>Create Categories</Title>
			<ManageFormTitle>
				<Wrapper>
					<Text className={'setting-active'}>Store Category</Text>
					<Text>Spot Category</Text>
				</Wrapper>

				<ManageText>Manage</ManageText>
			</ManageFormTitle>
			<Container>
				<FormTitle>Store Category</FormTitle>
				<Grid>
					<LabelContainer>
						<Field>
							<Label>Title*</Label>
						</Field>
					</LabelContainer>
					<InputContainer>
						<Field>
							<StyledInput
								type='text'
								placeholder='Enter title of store category'
							/>
						</Field>
						<StyledButton text='Create Store Category' />
					</InputContainer>
				</Grid>
			</Container>
			<Title>Manage Store Categories</Title>
			<GridBottom>
				<ManageTitle>
					<Wrapper>
						<Text className={'setting-active'}>Store Category</Text>
						<Text>Spot Category</Text>
					</Wrapper>

					<ManageText>Manage</ManageText>
				</ManageTitle>
				<ManageCard />
			</GridBottom>
		</>
	);
}
