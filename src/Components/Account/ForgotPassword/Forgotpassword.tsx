import React from 'react';
import styled from 'styled-components';

import Container from '../../../Template/Container/Container';
import Header from '../../../Components/Partial/Header';
import Input from '../../../Template/Input/Input';
import Button from '../../../Template/Button/Button';
import { ReactComponent as BackIcon } from '../../../assets/arrow.svg';
const CustomeInput = styled(Input)`
	background: var(--bg-color);
	border: 1px solid #eb5757;
	border-radius: 8px;
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 0.9rem;
	line-height: 120%;
	letter-spacing: 0.05em;
	color: #9a9ab0;
	max-width: 100%;
	margin-bottom: 2rem;
	padding: 1.2rem 1.5rem;
	@media (min-width: 1024px) {
		max-width: 400px;
	}
`;

const Label = styled.label`
	display: block;
	margin-bottom: 0.5rem;
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: bold;
	font-size: 1rem;
	line-height: 120%;
	letter-spacing: 0.05em;
	color: var(--pri-text-color);
`;

const TextWrapper = styled.div`
	padding: 1rem;
`;
const Paragraph = styled.p`
	max-width: 55ch;
	font-family: var(--ft-style);
	font-style: normal;
	margin: 0rem auto;
	font-weight: normal;
	font-size: 1rem;
	margin-bottom: 1rem;
	line-height: 120%;
	text-align: center;
	letter-spacing: 0.005em;
	color: #9a9ab0;
	@media (max-width: 640px) {
		display: none;
	}
`;
const Title = styled.h1`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: bold;
	font-size: 1.13rem;
	line-height: 120%;
	margin-bottom: 3.7rem;
	@media (max-width: 640px) {
		margin-bottom: 0rem;
	}
	letter-spacing: 0.05em;
	text-align: center;
	color: var(--pri-text-color);
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2.5rem 1.5rem;
	min-height: 100%;
	justify-content: center;
	@media (min-width: 1024px) {
		padding: 2.5rem 6.5rem;
	}

	@media (max-width: 640px) {
		padding: 2rem;
	}
`;

export default function Login() {
	return (
		<>
			<Header />
			<Container width='608' margin='5rem auto 10rem auto' boarder='0'>
				<TextWrapper>
					<a href='/'>
						<BackIcon />
					</a>
					<Title>Forgot Password</Title>
					<Paragraph>
						Enter the email address you used when you joined and we’ll send you
						instructions to reset your password.
					</Paragraph>
					<Paragraph>
						For security reasons, we do NOT store your password. So rest assured
						that we will never send your password via email.
					</Paragraph>
				</TextWrapper>

				<Wrapper>
					<Label>Email:</Label>
					<CustomeInput
						type='text'
						placeholder='input your email in here'
						height='54px'
					/>
					<Button text='Reset' margin='0rem auto 4rem auto' />
				</Wrapper>
			</Container>
		</>
	);
}
