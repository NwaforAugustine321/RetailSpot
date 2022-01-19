import React, { memo } from 'react';
import { css, jsx } from '@emotion/react';
import leftArrow from '../../../assets/left-arrow.svg';
import rightArrow from '../../../assets/right-arrow.svg';
import styled from 'styled-components';

const Arrow = ({ direction, handleClick }: any) => {
	let Container = styled.div`
		display: flex;
		position: absolute;
		top: 25%;
		${direction === 'right' ? `right: 25px` : `left: 25px`};
		height: 50px;
		width: 50px;
		justify-content: center;
		color: white;
		border-radius: 50%;
		cursor: pointer;
		align-items: center;
		transition: transform ease-in 0.1s;

		&:hover {
			transform: scale(1.1);
		}

		img {
			transform: translateX(${direction === 'left' ? '-2' : '2'}px);

			&:focus {
				outline: 0;
			}
		}
	`;
	return (
		<Container onClick={handleClick}>
			{direction === 'right' ? (
				<img src={rightArrow} />
			) : (
				<img src={leftArrow} />
			)}
		</Container>
	);
};

export default memo(Arrow);
