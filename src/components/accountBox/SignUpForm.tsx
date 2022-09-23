import { useState, ChangeEvent } from 'react'
// * Contexts :
import { useAccount } from '../../context/accountContext'
// * Components :
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './Common'
// * Utils :
import Margin from '../margin'

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
				<Input
					onChange={handleChange}
					autoComplete='new-password'
					placeholder='Password'
					type='password'
					name='password'
				/>
				<Input
					placeholder='Confirm Password'
					autoComplete='new-password'
					onChange={handleChange}
					type='password'
					name='confirm-password'
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
