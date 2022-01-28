import styled from 'styled-components'
import {
	COLOR_BORDER,
	COLOR_TEXT,
	COLOR_TEXT_EMAIL_FORGET,
	COLOR_TEXT_INPUT,
	COLOR_TEXT_INPUT_FOCUS,
	GRADIENT_BACKGROUND,
} from '../../theme/variable'



export const BoxContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
`

export const FormContainer = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	overflow: hidden;

	&:hover {
		box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
	}
`

export const MutedLink = styled.span`
	font-size: 0.8rem;
	color: ${COLOR_TEXT_EMAIL_FORGET};
	font-weight: 500;
	text-decoration: none;
	transition: all 0.25s linear;
	cursor: pointer;

	&:hover {
		color: ${COLOR_TEXT};
	}
`

export const BoldLink = styled.span`
	font-size: 0.85rem;
	color: ${COLOR_TEXT};
	font-weight: 600;
	text-decoration: none;
`

export const Input = styled.input`
	height: 45px;
	width: 100%;
	border: 1px solid rgba(200, 200, 200, 0.3);
	border-bottom: 1px solid transparent;
	padding: 0 10px;
	outline: none;
	transition: all 0.3s linear;

	&::placeholder {
		color: ${COLOR_TEXT_INPUT};
		font-size: 0.95rem;
	}

	&:not(:last-of-type) {
		border-bottom: 1px solid rgba(200, 200, 200, 0.4);
	}

	&:focus {
		outline: none;
		border-bottom: 2px solid ${COLOR_BORDER};
	}

	&:focus::placeholder {
		color: ${COLOR_TEXT_INPUT_FOCUS};
	}
`

export const SubmitButton = styled.button`
	height: 45px;
	width: 100%;
	padding: 11px 40%;
	color: #fff;
	font-size: 1rem;
	font-family: 600;
	border: none;
	border-radius: 100px;
	cursor: pointer;
	transition: all 0.3s linear;
	background: ${GRADIENT_BACKGROUND};

	&:hover {
		filter: brightness(1.07);
	}
`
