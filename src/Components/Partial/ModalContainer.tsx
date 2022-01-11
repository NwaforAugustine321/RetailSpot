import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
	position: fixed;
	display: flex;

	align-items: center;
	justify-content: center;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	overflow-x: auto;

	z-index: 999;
	background: rgb(34 32 32 / 67%);
	&::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
`;

const Content = styled.div`
	margin: 0rem 1rem;
	width: 100%;
	//	position: absolute;
	transform: translateY(8%);
	@media (max-width: 700px) {
		transform: translateY(15%);
	}
`;

export default function ModalContainer({ children }: any) {
	return (
		<MainContainer>
			<Content>{children}</Content>
		</MainContainer>
	);
}
