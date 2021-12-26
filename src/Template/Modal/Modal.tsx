import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const MainContainer = styled.div`
	width: 100%;
	max-width: 900px;
	height: 354px;
	margin: 0rem auto;
	padding: 4rem 5.4rem;
	background: var(--bg-color);
	@media (max-width: 1024px) {
		max-width: 500px;
		padding: 4rem 2rem;
	}
	@media (max-width: 500px) {
		max-width: 400px;
		padding: 4rem 1rem;
	}

	@media (max-width: 300px) {
		max-width: 250px;
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
	border-radius: 0px;
	background: var(--bg-color);
	border: 1px solid #4f4f4f;
	height: 71px;
	max-width: 384px;
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	color: #50555c;
	cursor: pointer;
`;

const StyledRightButton = styled(Button)`
	border-radius: 0px;
	height: 71px;
	max-width: 384px;
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	cursor: pointer;
`;

const StyledContent = styled.div`
	max-width: 384px;
	margin: 0rem auto 5.2rem auto;
	@media (max-width: 1024px) {
		margin: 0rem auto 3.5rem auto;
	}
`;

export default function SmallModal({
	children,
	buttonText1,
	buttonText2,
}: any) {
	return (
		<MainContainer>
			<StyledContent>{children}</StyledContent>
			<ButtonContainer>
				<StyledLeftButton text={buttonText1} />
				<StyledRightButton text={buttonText2} />
			</ButtonContainer>
		</MainContainer>
	);
}
