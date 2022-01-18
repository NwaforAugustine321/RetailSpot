import React, { memo } from 'react';
import styled from 'styled-components';

const Slide = ({ content, width, children }: any) => {
	const Container = styled.div`
		height: 100%;
		width: ${width}%;
		// background-size: cover;
		// background-repeat: no-repeat;
		// background-position: center;
	`;
	return <Container>{children}</Container>;
};

export default memo(Slide);
