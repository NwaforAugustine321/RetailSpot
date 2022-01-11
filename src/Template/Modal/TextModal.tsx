import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const MainContainer = styled.div`
	width: 100%;
	max-width: 779px;
	min-height: 626px;
	margin: 0rem auto;
	padding: 4rem 3.7rem;
	border-radius: 8px;
	background: var(--bg-color);
	@media (max-width: 640px) {
		padding: 4rem 1rem;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 1rem;
	@media (max-width: 1024px) {
		flex-direction: column;
	}
`;

const StyledLeftButton = styled(Button)`
	background: var(--bg-color);
	border: 1px solid #4f4f4f;
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	color: #50555c;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	@media (min-width: 1024px) {
		height: 26px;
		max-width: 105px;
	}
`;

const StyledRightButton = styled(Button)`
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	@media (min-width: 1024px) {
		height: 26px;
		max-width: 105px;
	}
`;

export default function TextModal({ children, buttonText1, buttonText2 }: any) {
	return (
		<MainContainer>
			{children}
			<ButtonContainer>
				<StyledLeftButton text={buttonText1} />
				<StyledRightButton text={buttonText2} />
			</ButtonContainer>
		</MainContainer>
	);
}
