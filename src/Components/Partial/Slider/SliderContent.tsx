import React from 'react';
import styled from 'styled-components';

const SliderContent = (props: any) => {
	const Container = styled.div`
		transform: translateX(-${props.translate}px);
		height: 100%;
		width: ${props.width}px;
		transition: transform ease-out ${props.transition}s;
		display: flex;
	`;

	return <Container id='SliderContent'>{props.children}</Container>;
};

export default SliderContent;
