import React from 'react';
import DashboardSideBar from './DashboardSideBar/DashboardSideBar';
import DashboardHeader from './DashboardHeader/DashboardHeader';
import styled from 'styled-components';

const Grid = styled.div`
	display: grid;
	grid-template-rows: auto 1fr 100px;
	grid-template-areas:
		'content'
		'body'
		'sidebar';
	@media (min-width: 1024px) {
		grid-template-columns: 209px 1fr;
		grid-template-areas:
			'sidebar content'
			'sidebar body';
			'body body';
	}
`;

const Content = styled.div`
	grid-area: body;
	border-radius: 0px;
	min-height: 1000px;
`;

export default function DashboardContainer({ children }: any) {
	return (
		<Grid>
			<DashboardHeader />
			<Content>{children}</Content>
			<DashboardSideBar />
		</Grid>
	);
}
