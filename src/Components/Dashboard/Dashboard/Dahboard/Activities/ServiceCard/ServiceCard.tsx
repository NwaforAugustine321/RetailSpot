import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Cardbg } from '../../../../../../assets/cardbg.svg';

const Container = styled.div`
	width: 100%;
	height: 94px;
	background: var(--bg-color);
	border-radius: 5px;

	display: flex;
	justify-content: space-around;
	align-items: center;

	@media (min-width: 1300px) {
		max-width: 350px;
	}
`;
const ContainerWithBackground = styled.div`
	width: 100%;
	height: 94px;
	border-radius: 5px;
	background: #5ba092;
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: relative;
	@media (min-width: 1300px) {
		max-width: 350px;
	}
	p {
		z-index: 100;
		width: 50%;
	}

	h6 {
		color: white;
	}
`;

const StyledIcon = styled(Cardbg)`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	z-index: 0;
`;
const StyledTitle = styled.h6`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 0.8rem;
	line-height: 18px;
	color: #bebab3;
	margin-bottom: 0.8rem;
`;

const StyledAmount = styled.h6`
	font-family: var(--ft-style);
	font-style: normal;
	text-align: left;
	font-weight: normal;
	font-size: 1.23rem;
	line-height: 18px;
`;

export default function ServiceCard(props: any) {
	let Icon = props.icon;
	const { text, total } = props.data;
	return props.index === 0 ? (
		<ContainerWithBackground>
			<StyledIcon />
			<p>hi</p>
			<div>
				<StyledTitle>{text}</StyledTitle>
				<StyledAmount>{total}</StyledAmount>
			</div>
		</ContainerWithBackground>
	) : (
		<Container>
			<p>hi</p>
			<div>
				<StyledTitle>{text}</StyledTitle>
				<StyledAmount>{total}</StyledAmount>
			</div>
		</Container>
	);
}
