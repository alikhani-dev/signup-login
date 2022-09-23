import styled from 'styled-components'
// * Types :
import { Color } from '../../theme/variable'

export const BoxContainer = styled.div`
	width: 100%;
	display: flex;
	margin-top: 10px;
	align-items: center;
	flex-direction: column;
`

export const FormContainer = styled.form`
	width: 100%;
	display: flex;
	overflow: hidden;
	border-radius: 5px;
	flex-direction: column;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
	&:hover {
		box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
	}
`

export const MutedLink = styled.span`
	cursor: pointer;
	font-weight: 500;
	font-size: 0.8rem;
	text-decoration: none;
	transition: all 0.25s linear;
	color: ${Color.TEXT_EMAIL_FORGET};
	&:hover {
		color: ${Color.TEXT};
	}
`

export const BoldLink = styled.span`
	font-weight: 600;
	font-size: 0.85rem;
	color: ${Color.TEXT};
	text-decoration: none;
`

export const Input = styled.input`
	width: 100%;
	height: 45px;
	outline: none;
	padding: 0 10px;
	transition: all 0.3s linear;
	border-bottom: 1px solid transparent;
	border: 1px solid rgba(200, 200, 200, 0.3);

	&::placeholder {
		color: ${Color.TEXT_INPUT};
		font-size: 0.95rem;
	}

	&:not(:last-of-type) {
		border-bottom: 1px solid rgba(200, 200, 200, 0.4);
	}

	&:focus {
		outline: none;
		border-bottom: 2px solid ${Color.BORDER};
	}

	&:focus::placeholder {
		color: ${Color.TEXT_INPUT_FOCUS};
	}
`

export const SubmitButton = styled.button`
	width: 100%;
	height: 45px;
	border: none;
	color: #fff;
	font-size: 1rem;
	cursor: pointer;
	font-family: 600;
	padding: 11px 40%;
	border-radius: 100px;
	transition: all 0.3s linear;
	background: ${Color.BACKGROUND};

	&:hover {
		filter: brightness(1.07);
	}
`
