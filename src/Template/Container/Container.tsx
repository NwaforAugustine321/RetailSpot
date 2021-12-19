import React, { ReactElement, ReactNode } from 'react';
import { ContainerWrapper } from './container.styles';

interface iuseContainerProps {
	width?: null | string;
	height?: null | string;
	margin?: string;
	children?: ReactNode;
	className?: any;
	boarder?: string;
	color?: string;
	padding?: string;
}

export default function Container(props: iuseContainerProps) {
	return <ContainerWrapper {...props}>{props.children}</ContainerWrapper>;
}
