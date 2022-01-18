import React, { memo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	position: absolute;
	bottom: 25px;
	width: 100%;
	//	top: 70%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Dot = ({ active }: any) => {
	const Span = styled.span`
		padding: 10px;
		margin-right: 5px;
		cursor: pointer;
		border-radius: 50%;
		background: ${active ? 'black' : 'white'};
	`;
	return <Span />;
};

const MemoDot = memo(Dot);

const Dots = ({ slides, activeSlide }: any) => {
	return (
		<Container>
			{slides.map((slide: any, i: number) => (
				<MemoDot key={slide} active={activeSlide === i} />
			))}
		</Container>
	);
};

export default Dots;
