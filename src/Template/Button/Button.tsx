import React from 'react';
import styled from 'styled-components';

interface IuseButton {
	width?: string;
	height?: string;
	padding?: string;
	margin?: string;
	text: string;
}

const CustomButton = styled.button<IuseButton>`
	padding: 0.9rem 1.5rem;
	width: 100%;
	margin: ${(props) => (props.margin ? props.margin : ' 0rem auto')};
	max-width: ${(props) => (props.width ? props.width : '400px')};
	height: ${(props) => (props.height ? props.height : '48px')};
	background: var(--pri-color);
	border-radius: 8px;
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: bold;
	font-size: 1rem;
	border: none;
	line-height: 120%;
	text-align: center;
	letter-spacing: 0.05rem;
	color: var(--bg-color);
`;

export default function Button(props: IuseButton) {
	return <CustomButton {...props}>{props.text}</CustomButton>;
}
