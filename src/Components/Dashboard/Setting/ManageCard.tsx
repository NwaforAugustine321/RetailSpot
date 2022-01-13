import { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as Icon } from '../../../assets/view.svg';
import url from '../../../assets/store.png';
import { ReactComponent as ApprovedIcon } from '../../../assets/approved.svg';
import { ReactComponent as UnApprovedIcon } from '../../../assets/unapproved.svg';
import { ReactComponent as InfoIcon } from '../../../assets/info.svg';

const Container = styled.div`
	background: var(--bg-color);
	display: flex;
	max-width: 1057px;
	height: 92px;
	position: relative;
	cursor: pointer;
	border-radius: 8px;
	padding: 1rem 2rem;
	align-items: center;
	margin-bottom: 1rem;
	justify-content: space-between;

	@media (max-width: 1330px) {
		margin: 0rem auto 1rem auto;
	}
	&:hover {
		background: #f2f7fc;
	}
`;

const ViewIcon = styled(Icon)`
	cursor: pointer;
`;

const Profile = styled.div`
	height: 63px;
	width: 63px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	@media (max-width: 768px) {
		height: 40px;
		width: 40px;
		font-size: 0.8rem;
	}
	background: #c7d4e1;
	//font-family: SF UI Text;
	font-style: normal;
	font-weight: normal;
	font-size: 1.13rem;
	color: #707070;
`;

const TitleText = styled.h1`
	font-family: var(--ft-style);
	font-style: normal;
	font-weight: 400;
	font-size: 1.13rem;
	margin-bottom: 0.4rem;
	color: #3c3a36;
	@media (max-width: 400px) {
		font-size: 0.8rem;
	}
`;

const RightContainer = styled.div`
	display: flex;
	width: 2%;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
`;

const LeftContainer = styled.div`
	display: flex;
	width: 98%;
  align-items: center;
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
	}
`;
const DropDownItem = styled.h4`
	padding: 1.3rem 1rem 1.9rem 1rem;
	cursor: pointer;
	background: #f7f7f7;
	display: flex;
	gap: 1rem;
	&:hover {
		background-color: var(--bg-color);
	}
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

export default function ManageCard(props: any) {
	const [open, setopen] = useState<Boolean>(false);
	const handleopen = () => {
		setopen(!open);
	};

	return (
		<Container onClick={handleopen}>
			<LeftContainer>
				<Profile>CJ</Profile>
				<div>
					<TitleText>Super Market</TitleText>
				</div>
			</LeftContainer>

			<RightContainer>
				<ViewIcon onClick={handleopen} />
			</RightContainer>
			{open && (
				<DropDownContainer>
					<DropDown>
						<DropDownItem>
							<ApprovedIcon />
							Activate
						</DropDownItem>
						<DropDownItem>
							<UnApprovedIcon />
							Delete Fees
						</DropDownItem>
					</DropDown>
				</DropDownContainer>
			)}
		</Container>
	);
}
