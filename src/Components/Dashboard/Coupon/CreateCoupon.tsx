import styled from 'styled-components';

import DashboardContainer from '../../../Components/Dashboard/Dashboard/DashboardContainer/DashboardContainer';
import Input from '../../../Template/Input/Input';
import Button from '../../../Template/Button/Button';

const Grid = styled.div`
	padding: 4rem 6rem;
	@media (max-width: 1200px) {
		padding: 4rem 2rem;
	}
	@media (max-width: 768px) {
		padding: 4rem 1rem;
	}
`;

const Form = styled.div`
	min-height: 700px;
	width: 100%;
	padding: 3.5rem 4rem;
	background: var(--bg-color);
	@media (max-width: 640px) {
		padding: 3.5rem 1rem;
	}
`;

const StyledButton = styled(Button)`
	border-radius: 0px;
	height: 64px;
	max-width: 465px;
	cursor: pointer;
	margin: 0;
	margin-bottom: 3.8rem;
	font-size: 0.9rem;
`;

const StyledInput = styled(Input)`
	border: 1px solid #dddfe1;
	max-width: 100%;
	height: 56px;
	padding: 1.2rem 1.7rem;
`;

const StyledTextInput = styled.textarea`
	border: 1px solid #dddfe1;
	width: 100%;
	height: 100px;
	padding: 1.2rem 1.7rem;
`;

const FormContainer = styled.div`
	width: 100%;
	display: flex;
	gap: 4rem;
	margin-bottom: 2rem;
	justify-content: center;
	@media (max-width: 768px) {
		flex-direction: column;
	}
	div {
		width: 100%;
	}
`;

const Field = styled.div`
	margin-bottom: 1.4rem;
`;

const Label = styled.label`
	display: block;
	margin-bottom: 1.9rem;
	// font-family: var(--ft-style);
	font-style: normal;
	font-weight: 400;
	text-align: left;
	font-size: 0.9rem;
	line-height: 120%;
	letter-spacing: 0.05em;
	color: var(--pri-text-color);
`;

const Title = styled.h1`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 1.13rem;
	letter-spacing: -0.5px;
	color: #252b1d;
	width: 100%;
	margin-bottom: 3rem;
	@media (max-width: 1330px) {
		width: 100%;
		max-width: 700px;
		margin: 0rem 0rem 1.5rem 0rem;
	}
`;

export default function CreateCoupon(props: { handleOpen: () => void }) {
	return (
		<Grid>
			<Title>Create Coupon</Title>

			<Form>
				<Field>
					<Label>Coupon name</Label>
					<StyledInput type='text' />
				</Field>
				<FormContainer>
					<div>
						<Field>
							<Label>Coupon Code</Label>
							<StyledInput type='text' />
						</Field>
						<Field>
							<Label>Limit</Label>
							<StyledInput type='text' />
						</Field>
						<Field>
							<Label>Discount Amount</Label>
							<StyledInput type='text' />
						</Field>
						<div>
							<Label>Start Date</Label>
							<StyledInput type='text' />
						</div>
					</div>
					<Field>
						<Field>
							<Label>Item count</Label>
							<StyledInput type='text' />
						</Field>
						<Field>
							<Label>Discount type</Label>
							<StyledInput type='text' />
						</Field>
						<Field>
							<Label>Minimum spend</Label>
							<StyledInput type='text' />
						</Field>
						<div>
							<Label>End Date</Label>
							<StyledInput type='text' />
						</div>
					</Field>
				</FormContainer>
				<Field>
					<Label>Description</Label>
					<StyledTextInput placeholder='Add description here' />
				</Field>
				<StyledButton
					text='Create coupon'
					margin='0rem auto'
					width='542px'
					onClick={props.handleOpen}
				/>
			</Form>
		</Grid>
	);
}
