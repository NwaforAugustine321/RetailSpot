import React from 'react';
import styled from 'styled-components';
import Container from '../../Template/Container/Container';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const MainHeader = styled(Container)`
	margin: 0rem 0rem 4.4rem 0rem;
	height: 110px;
	width: 100%;
	max-width: 100%;
	padding: 2rem 2rem 0rem 2rem;
	border-radius: 0px;
`;

export default function Header({ children, className }: any) {
	return (
		<MainHeader className={className}>
			<Logo />
			{children}
		</MainHeader>
	);
}
