import styled from 'styled-components';

import Button from '../../../../Template/Button/Button';
import Input from '../../../../Template/Input/Input';

const Form = styled.div`
	min-height: 700px;
	width: 100%;
	padding: 3.5rem 2.6rem;
	background: var(--bg-color);
	text-align: center;
	@media (max-width: 640px) {
		padding: 3.5rem 1rem;
	}
`;

const StyledButton = styled(Button)`
	border-radius: 0px;
	height: 82px;
	margin-bottom: 3.8rem;
	font-size: 0.9rem;
`;

const StyledInput = styled(Input)`
	border: 1px solid #dddfe1;
	max-width: 100%;
	height: 73px;
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

export default function Owner() {
	return (
		<Form>
			<FormContainer>
				<div>
					<Field>
						<Label>Select user type</Label>
						<StyledInput type='text' placeholder='Store Owner' />
					</Field>
					<Field>
						<Label>First name</Label>
						<StyledInput type='text' placeholder='Type first name' />
					</Field>
					<div>
						<Label>Phone number</Label>
						<StyledInput type='text' placeholder='080147023233' />
					</div>
				</div>
				<Field>
					<Field>
						<Label>Role</Label>
						<StyledInput type='text' placeholder='Seller' />
					</Field>
					<Field>
						<Label>Last name</Label>
						<StyledInput type='text' placeholder='Type last name' />
					</Field>
					<div>
						<Label>E-mail Address</Label>
						<StyledInput type='text' placeholder='You@gmail.com' />
					</div>
				</Field>
			</FormContainer>
			<StyledButton text='Create' margin='0rem auto' width='542px' />
		</Form>
	);
}
