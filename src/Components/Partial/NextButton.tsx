import React from 'react';
import styled from 'styled-components';

import { ReactComponent as PrevIcon } from '../../assets/prev.svg';
import { ReactComponent as NextIcon } from '../../assets/next.svg';
const number = [, 1, 2, 3, 4];

const PrevButton = styled.button`
	width: 158px;
	height: 61px;
	border: 1px solid #e3562a;
	border-radius: 22px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	cursor: pointer;
`;
const Container = styled.div<{ width: string; align: string }>`
	display: flex;
	align-items: center;
	justify-content: ${(props) => (props.align ? props.align : 'flex-start')};
	gap: 1rem;
	margin-top: 8rem;
	@media (max-width: ${(props) => props.width && props.width}px) {
		justify-content: center;
		margin-top: 4rem;
	}
`;
const NextButton = styled.button`
	width: 119px;
	height: 61px;
	border: 1px solid #e3562a;
	border-radius: 22px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	cursor: pointer;
`;

const PagesContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 229px;
	height: 61px;
	background: #f4f4f4;
	border-radius: 22px;
	span {
		display: block;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	@media (max-width: 530px) {
		display: none;
	}
`;

export default function PiginationButton({ adjust, align }: any) {
	return (
		<Container width={adjust} align={align}>
			<PrevButton>
				<PrevIcon /> Previous
			</PrevButton>
			<PagesContainer>
				{number.map((value, index) => {
					if (index === 1) {
						return (
							<span className='page-active' key={index}>
								{value}
							</span>
						);
					} else {
						return <span key={index}>{value}</span>;
					}
				})}
			</PagesContainer>
			<NextButton>
				Next
				<NextIcon />
			</NextButton>
		</Container>
	);
}
