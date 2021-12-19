import React from 'react';
import styled from 'styled-components';

const CustomeInput = styled.input`
	opacity: 0.7;
	border: none;
	border-radius: 3px;
	width: 100%;
	appearance: none;
	outline: none;
	max-width: ${(props) => (props.width ? props.width : '320px')};
	height: ${(props) => (props.height ? props.height : '40px')};
	margin: 0rem auto;
	&::placeholder {
		font-style: italic;
		font-weight: normal;
		font-size: 12px;
		line-height: 1.8rem;
		font-style: var(--ft-style);
		color: var(--pri-text-color);
	}
`;

interface iuseIputProps {
	placeholder?: string;
	width?: string;
	height?: string;
	type: string;
	className?: string;
}
export default function Input({
	placeholder,
	height,
	width,
	type,
	className,
}: iuseIputProps) {
	return (
		<CustomeInput
			className={className}
			placeholder={placeholder}
			width={width}
			height={height}
			type={type}
		/>
	);
}
