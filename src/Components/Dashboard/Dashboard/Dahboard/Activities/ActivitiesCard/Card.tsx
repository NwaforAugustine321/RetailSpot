import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 94px;
	margin: 0rem auto;
	text-align: right;
	background: var(--bg-color);
	border-radius: 5px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	@media (max-width: 640px) {
		max-width: 350px;
	}
	@media (min-width: 1100px) {
		max-width: 180px;
	}
	@media (min-width: 1250px) {
		max-width: 350px;
	}
`;

const StyledTitle = styled.h6`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 0.8rem;
	line-height: 18px;
	color: #bebab3;
	margin-bottom: 0.5rem;
`;

const StyledAmount = styled.h6`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 1.23rem;
	line-height: 18px;
`;

export default function Card(props: any) {
	let Icon = props.icon;
	const { text, amount } = props.data;
	return (
		<Container>
			<p>hi</p>
			<div>
				<StyledTitle>{text}</StyledTitle>
				<StyledAmount>{amount}</StyledAmount>
			</div>
		</Container>
	);
}
