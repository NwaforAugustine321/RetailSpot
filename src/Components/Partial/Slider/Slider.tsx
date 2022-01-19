import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';
import { access } from 'fs';

const getWidth = () => window.innerWidth;
//console.log(document.querySelector('#SliderContent')?.clientWidth);
const Slider = (props: any) => {
	const SliderContainer = styled.div`
		position: relative;
		height: 200px;
		margin: 0 auto;
		@media (max-width: 1000px) {
			display: none;
		}
	`;

	const { slides } = props;

	const FirstSlide = slides[0];
	// const SecondSlide = slides[1];
	// const LastSlide = slides[slides.length - 1];

	const [state, setState] = useState({
		activeSlide: 0,
		translate: 0,
		transition: 0.45,
		transitioning: false,
		_slides: [FirstSlide],
	});

	const { activeSlide, translate, _slides, transition, transitioning } = state;

	const autoPlayRef = useRef<any>();
	const transitionRef = useRef<any>();
	const resizeRef = useRef<any>();
	const sliderRef = useRef<any>();
	const throttleRef = useRef<any>();

	useEffect(() => {
		autoPlayRef.current = nextSlide;
		transitionRef.current = smoothTransition;
		resizeRef.current = handleResize;
		throttleRef.current = throttleArrows;
	});

	useEffect(() => {
		const slider = sliderRef.current;

		const smooth = (e: any) => {
			if (e.target.className.includes('SliderContent')) {
				transitionRef.current();
			}
		};

		const resize = () => {
			resizeRef.current();
		};

		const throttle = (e: any) => {
			if (e.target.className.includes('SliderContent')) {
				throttleRef.current();
			}
		};

		const transitionStart = slider.addEventListener(
			'transitionstart',
			throttle
		);
		const transitionEnd = slider.addEventListener('transitionend', smooth);
		const onResize: any = window.addEventListener('resize', resize);

		return () => {
			slider.removeEventListener('transitionend', transitionStart);
			slider.removeEventListener('transitionend', transitionEnd);
			window.removeEventListener('resize', onResize);
		};
	}, []);

	useEffect(() => {
		const play = () => {
			autoPlayRef.current();
		};

		let interval: any = null;

		if (props.autoPlay) {
			interval = setInterval(play, props.autoPlay * 1000);
		}

		return () => {
			if (props.autoPlay) {
				clearInterval(interval);
			}
		};
	}, [activeSlide]);

	useEffect(() => {
		if (transition === 0)
			setState({ ...state, transition: 0.45, transitioning: false });
	}, [transition]);

	const throttleArrows = () => {
		setState({ ...state, transitioning: true });
	};

	const handleResize = () => {
		setState({ ...state, translate: getWidth(), transition: 0 });
	};

	const nextSlide = () => {
		if (transitioning) return;
		setState({
			...state,
			translate: 300,
			activeSlide:
				state.activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
		});
	};

	const prevSlide = () => {
		if (transitioning) return;

		setState({
			...state,
			activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
			translate: 0,
		});
	};

	const smoothTransition = () => {
		let _slides = [FirstSlide];

		// // We're at the last slide.
		// if (activeSlide === slides.length - 1) _slides = [FirstSlide];
		// // We're back at the first slide. Just reset to how it was on initial render
		// else if (activeSlide === 0) _slides = [FirstSlide];
		// // Create an array of the previous last slide, and the next two slides that follow it.
		// else _slides = slides.slice(activeSlide - 1, activeSlide + 2);

		setState({
			...state,
			_slides,
			transition: 0,
			translate: getWidth(),
		});
	};

	return (
		<SliderContainer ref={sliderRef}>
			<SliderContent
				translate={translate}
				transition={transition}
				width={getWidth()}
			>
				{_slides.map((_slide, i) => {
					let Content = _slide;
					return (
						<Slide width={getWidth()} key={i}>
							<Content />
						</Slide>
					);
				})}
			</SliderContent>

			<Arrow direction='left' handleClick={prevSlide} />
			<Arrow direction='right' handleClick={nextSlide} />

			<Dots slides={slides} activeSlide={activeSlide} />
		</SliderContainer>
	);
};

export default Slider;
