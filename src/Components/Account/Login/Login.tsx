import React from 'react';
import styled from 'styled-components';

import Container from '../../../Template/Container/Container';
import Header from '../../../Components/Partial/Header';
import Input from '../../../Template/Input/Input';
import Button from '../../../Template/Button/Button';

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
	margin-bottom: 1.6rem;
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

const Reset = styled.p`
	display: block;
	margin-bottom: 2.6rem;
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: bold;
	font-size: 0.8rem;
	line-height: 120%;
	letter-spacing: 0.05em;
	color: #9a9ab0;
	align-self: flex-end;
`;

const Title = styled.h1`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: bold;
	font-size: 1.13rem;
	border-bottom: 4px solid var(--pri-color);
	line-height: 120%;
	padding: 2.5rem 1.5rem 0.6rem 1.5rem;
	letter-spacing: 0.05em;
	@media (min-width: 1024px) {
		padding: 2.5rem 6.5rem 0.6rem 6.5rem;
	}
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
`;

export default function Login() {
	return (
		<>
			<Header />
			<Container width='600' margin='5rem auto 10rem auto' boarder='0'>
				<Title>Sign In</Title>
				<Wrapper>
					<Label>Email:</Label>
					<CustomeInput
						type='text'
						placeholder='input your email in here'
						height='54px'
					/>
					<Label>Password:</Label>
					<CustomeInput
						type='password'
						placeholder='input your password in here'
						height='54px'
					/>

					<Reset>
						<a href='/account/reset'>Forgot passwod?</a>
					</Reset>

					<Button text='Sign in' margin='0rem auto 4rem auto' />
				</Wrapper>
			</Container>
		</>
	);
}
