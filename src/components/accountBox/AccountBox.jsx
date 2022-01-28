import { motion } from 'framer-motion'
import styled from 'styled-components'
import { GRADIENT_BACKGROUND } from '../../theme/variable'
import { useAccount } from '../../context/accountContext'
import SingInForm from './SingInForm'
import SingUpForm from './SignUpForm'

const BoxContainer = styled.section`
	width: 350px;
	min-height: 540px;
	display: flex;
	flex-direction: column;
	border-radius: 15px;
	background-color: #fff;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
	transition: all 0.25s linear;
	position: relative;
	overflow: hidden;
	&:hover {
		box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
	}
`

const TopContainer = styled.div`
	width: 100%;
	height: 225px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 0 1.8em 5em 0;
`

const BackDrop = styled(motion.div)`
	top: -290px;
	left: -70px;
	border-radius: 50%;
	display: flex;
	flex-direction: column;
	position: absolute;
	transform: rotate(60deg);
	background: ${GRADIENT_BACKGROUND};
`

const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding-left: 20px;
`

const HeaderTitle = styled.h2`
	font-size: 2rem;
	font-weight: 700;
	line-height: 1.2;
	color: #fff;
	z-index: 1;
	margin: 0;
`

const HeaderText = styled.h5`
	color: #fff;
	font-size: 0.95rem;
	font-weight: 500;
	margin: 10px 0 0 0;
	z-index: 1;
`

const InnerContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 1em 1.5em;
`

const backDropVariable = {
	expended: {
		width: '280%',
		height: '1040px',
		borderRadios: '50%',
		transform: 'rotate(60deg)',
	},
	collapsed: {
		width: '140%',
		height: '520px',
		borderRadios: '50%',
		transform: 'rotate(45deg)',
	},
}

export const expendingTransition = {
	type: 'spring',
	duration: 2.3,
	stiffness: 30,
}

const AccountBox = () => {
	const { IsExpended, active } = useAccount()

	return (
		<BoxContainer>
			<TopContainer>
				<BackDrop
					initial={false}
					variants={backDropVariable}
					transition={expendingTransition}
					animate={IsExpended ? 'expended' : 'collapsed'}
				/>
				{active === 'singIn' ? (
					<HeaderContainer>
						<HeaderTitle>Welcome</HeaderTitle>
						<HeaderTitle>Back</HeaderTitle>
						<HeaderText>Please Sign-In to continue!</HeaderText>
					</HeaderContainer>
				) : (
					<HeaderContainer>
						<HeaderTitle>Create</HeaderTitle>
						<HeaderTitle>Account</HeaderTitle>
						<HeaderText>Please Sign-up to continue!</HeaderText>
					</HeaderContainer>
				)}
			</TopContainer>
			<InnerContainer>{active === 'singIn' ? <SingInForm /> : <SingUpForm />}</InnerContainer>
		</BoxContainer>
	)
}

export default AccountBox
