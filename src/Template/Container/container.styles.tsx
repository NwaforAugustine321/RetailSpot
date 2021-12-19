import styled from 'styled-components';

interface iuseContainerProps {
	width?: null | string;
	height?: null | string;
	margin?: string;
	boarder?: string;
	color?: string;
	padding?: string;
}

export const ContainerWrapper = styled.div<iuseContainerProps>`
	width: 100%;
	max-width: ${(props) => (props.width ? `${props.width}px` : '608px')};
	background: ${(props) =>
		props.color ? `${props.color}` : 'var(--bg-color)'};
	border-radius: ${(props) => (props.boarder ? `${props.boarder}px` : '8px')};
	margin: ${(props) => (props.margin ? `${props.margin}px` : 'auto')};
	height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
	padding: ${(props) =>
		props.padding
			? `${props.padding.split(' ')[0]}rem ${props.padding.split(' ')[1]}rem`
			: '0px'};
`;
