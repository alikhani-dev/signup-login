import { motion, Transition } from 'framer-motion'
import styled from 'styled-components'
// * Context :
import { useAccount } from '../../context/accountContext'
// * Types :
import { Color } from '../../theme/variable'
// * Components :
import SingInForm from './SingInForm'
import SingUpForm from './SignUpForm'

const BoxContainer = styled.section`
	width: 350px;
	display: flex;
	overflow: hidden;
	min-height: 540px;
	position: relative;
	border-radius: 15px;
	flex-direction: column;
	background-color: #fff;
	transition: all 0.25s linear;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
	&:hover {
		box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
	}
`

const TopContainer = styled.div`
	width: 100%;
	height: 225px;
	display: flex;
	padding: 0 1.8em 5em 0;
	flex-direction: column;
	justify-content: flex-end;
`

const BackDrop = styled(motion.div)`
	top: -290px;
	left: -70px;
	display: flex;
	border-radius: 50%;
	position: absolute;
	flex-direction: column;
	transform: rotate(60deg);
	background: ${Color.BACKGROUND};
`

const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	padding-left: 20px;
	flex-direction: column;
`

const HeaderTitle = styled.h2`
	margin: 0;
	z-index: 1;
	color: #fff;
	font-size: 2rem;
	line-height: 1.2;
	font-weight: 700;
`

const HeaderText = styled.h5`
	z-index: 1;
	color: #fff;
	font-weight: 500;
	font-size: 0.95rem;
	margin: 10px 0 0 0;
`

const InnerContainer = styled.div`
	width: 100%;
	display: flex;
	padding: 1em 1.5em;
	flex-direction: column;
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

export const expendingTransition: Transition = {
	type: 'spring',
	duration: 1.2,
	stiffness: 120,
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
