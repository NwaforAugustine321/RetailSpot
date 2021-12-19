import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Paths from './Routes/Route';
import GlobalStyle from './GlobalStyles/GlobalStyled.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
	return (
		<>
			<GlobalStyle />
			<Paths />
		</>
	);
}

export default App;
