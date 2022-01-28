import { useAccount } from '../../context/accountContext'
import { BoldLink, BoxContainer, FormContainer, Input, InputWrapper, MutedLink, SubmitButton } from './Common'
import Margin from '../margin'
import { useState } from 'react'

const SignUpForm = () => {
	const { switchSingIn } = useAccount()
	const [showPassword, setShowPassword] = useState(false)
	const [fields, setFields] = useState({
		fullName: '',
		email: '',
		password: '',
		'confirm-password': '',
	})

	const handleChange = (e) => {
		setFields({
			...fields,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<BoxContainer>
			<FormContainer>
				<Input onChange={handleChange} name='fullName' type='text' placeholder='Full Name' />
				<Input onChange={handleChange} name='email' type='email' placeholder='Email' autoComplete='username' />
				<Input onChange={handleChange} name='password' type='password' placeholder='Password' autoComplete='new-password' />
				<Input
					onChange={handleChange}
					name='confirm-password'
					type='password'
					placeholder='Confirm Password'
					autoComplete='new-password'
				/>
			</FormContainer>
			<Margin height={20} />
			<SubmitButton type='submit'>SingUp</SubmitButton>
			<Margin />
			<MutedLink onClick={switchSingIn}>
				have an account ? <BoldLink> SingIn </BoldLink>
			</MutedLink>
		</BoxContainer>
	)
}

export default SignUpForm
