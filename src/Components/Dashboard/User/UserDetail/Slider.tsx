import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import Container from '../../../../Template/Container/Container';
import url from '../../../../assets/spots.png';
import url2 from '../../../../assets/spots.png';
import url3 from '../../../../assets/spots.png';

let image = [url, url2, url3];

const Grid = styled.div`
	display: flex;
	gap: 1rem;
	margin: 0rem auto 3rem auto;
	justify-content: space-between;
	@media (max-width: 1024px) {
		display: none;
	}
`;

const StyledContainer = styled.img`
	max-width: 100%;
	height: 164;
	boarder-radius: 22px;
	margin: 0;
	// @media (max-width: 1400px) {
	// 	padding: 1rem;
	// 	height: 120px;
	// }
`;

const settings = {
	slidesToShow: 3,
	slidesToScroll: 1,

	speed: 2000,
	dots: true,
	autoplaySpeed: 2000,
	cssEase: 'linear',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};

export default function ImageSlider() {
	return (
		<Grid>
			{image.map((url, index) => {
				return <StyledContainer key={index} src={url} />;
			})}
		</Grid>
	);
}
