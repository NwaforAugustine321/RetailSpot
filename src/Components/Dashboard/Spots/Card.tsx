import { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as Icon } from '../../../assets/view.svg';
import url from '../../../assets/spots.png';

const Container = styled.div`
	background: var(--bg-color);
	display: flex;
	width: 100%;
	max-width: 700px;
	height: 92px;
	position: relative;

	cursor: pointer;
	border-radius: 8px;
	padding: 1rem 2rem;
	align-items: center;
	margin-bottom: 1rem;
	justify-content: space-between;
	@media (max-width: 768px) {
		flex-direction: column;
		height: auto;
		gap: 1rem;
	}

	@media (max-width: 1330px) {
		margin: 0rem auto 1rem auto;
	}
	&:hover {
		background: #fef0f0;
	}
`;

const ViewIcon = styled(Icon)`
	cursor: pointer;
`;

const Profile = styled.img`
	height: 40px;
	width: 38px;
	background: #c4c4c4;
	border-radius: 5px;
	@media (max-width: 768px) {
		height: 25px;
		width: 25px;
	}
`;

const Status = styled.div`
	@media (max-width: 768px) {
		display: flex;
		gap: 1rem;
	}
`;

const TitleText = styled.h1`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 16px;
	margin-bottom: 0.4rem;
	color: #3c3a36;
	@media (max-width: 400px) {
		font-size: 10px;
	}
`;

const ParagraphText = styled.h1`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 18px;
	color: #bebab3;
	@media (max-width: 400px) {
		font-size: 8px;
	}
`;

const IsViewed = styled.div`
	width: 53px;
	height: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--pri-color);
	border: 1px solid #e3562a;
	box-sizing: border-box;
	border-radius: 8px;
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: 600;
	font-size: 0.8rem;
	line-height: 16px;
	color: var(--bg-color);
`;

const IsActive = styled.div`
	background: #f5fffc;
	border-radius: 8px;
	padding: 0.3rem 0.8rem;
	font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 0.8rem;
	line-height: 18px;
	display: flex;
	align-items: center;
	margin-bottom: 0.4rem;
	color: #29cc97;
`;
const NotActive = styled.div`
	background: #ef494914;
	border-radius: 8px;
	padding: 0.3rem 0.8rem;
	font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 0.8rem;
	line-height: 18px;
	display: flex;
	align-items: center;
	margin-bottom: 0.4rem;
	color: #ef4949;
`;
const RightContainer = styled.div`
	display: flex;
	width: 50%;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	@media (max-width: 768px) {
		width: 100%;
	}
`;
const LeftContainer = styled.div`
	display: flex;
	width: 50%;
	gap
  1rem;
	@media (max-width: 768px) {
		width: 100%;
	}
`;
const DropDown = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 5px;
	text-align: center;

	background: var(--bg-color);
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	filter: drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.102));
	padding-top: 1rem;
	h4 {
		&:nth-child(5) {
			border-bottom: none;
		}
		&:nth-child(1) {
			padding-top: 0rem;
		}
	}
`;
const DropDownItem = styled.h4`
	border-bottom: 1px solid #9597a6;
	padding: 1.3rem 0rem 1.9rem 0rem;
	opacity: 0.2;
	cursor: pointer;
`;

const DropDownContainer = styled.div`
	position: absolute;
	max-width: 257px;
	width: 100%;
	margin: 0rem auto;
	min-height: 225px;
	z-index: 999;
	top: 4rem;
	right: 2.5rem;
	@media (max-width: 768px) {
		top: 6rem;
		right: 3rem;
	}
`;

export default function Card(props: any) {
	const [user, setuser] = useState<Boolean>(false);
	const handleview = () => {
		setuser(!user);
	};

	return (
		<Container onClick={handleview}>
			<LeftContainer>
				<Profile src={url} />
				<div>
					<TitleText>{props.data?.name}</TitleText>
					<ParagraphText>{props.data?.address}</ParagraphText>
				</div>
			</LeftContainer>

			<RightContainer>
				<div>
					<TitleText>{props.data?.amount}</TitleText>
					<ParagraphText>Spots</ParagraphText>
				</div>

				<Status>
					{props.data?.active === 'Active' ? (
						<IsActive>Active</IsActive>
					) : (
						<NotActive>Inactive</NotActive>
					)}

					<IsViewed>view</IsViewed>
				</Status>
				<ViewIcon onClick={handleview} />
			</RightContainer>
			{user && (
				<DropDownContainer>
					<DropDown>
						<DropDownItem>View Spots</DropDownItem>
						<DropDownItem>Edit Spot</DropDownItem>
						<DropDownItem>Deactivate Spots</DropDownItem>
						<DropDownItem>Delete Spots</DropDownItem>
					</DropDown>
				</DropDownContainer>
			)}
		</Container>
	);
}
