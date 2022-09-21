import { useAccount } from '../../context/accountContext'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './Common'
import Margin from '../margin'
import { useState, ChangeEvent } from 'react'

const SignUpForm = () => {
	const { switchSingIn } = useAccount()
	const [fields, setFields] = useState({ fullName: '', email: '', password: '', 'confirm-password': '' })

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFields({ ...fields, [e.target.name]: e.target.value })
	}

	return (
		<BoxContainer>
			<FormContainer>
				<Input onChange={handleChange} type='text' name='fullName' placeholder='Full Name' />
				<Input onChange={handleChange} type='email' name='email' placeholder='Email' autoComplete='username' />
				<Input onChange={handleChange} type='password' name='password' placeholder='Password' autoComplete='new-password' />
				<Input onChange={handleChange} type='password' name='confirm-password' placeholder='Confirm Password' autoComplete='new-password'/>
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
