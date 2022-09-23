import { useState, ChangeEvent } from 'react'
// * Components :
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './Common'
// * Contexts :
import { useAccount } from '../../context/accountContext'
// * Utils :
import Margin from '../margin'

const SingInForm = () => {
	const { switchSingUp } = useAccount()
	const [fields, setFields] = useState({ email: '', password: '' })

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFields({ ...fields, [e.target.name]: e.target.value })
	}

	return (
		<BoxContainer>
			<FormContainer>
				<Input
					onChange={handleChange}
					autoComplete='username'
					value={fields.email}
					placeholder='Email'
					type='email'
					name='email'
				/>
				<Input
					autoComplete='current-password'
					placeholder='Password'
					onChange={handleChange}
					value={fields.password}
					type='password'
					name='password'
				/>
			</FormContainer>
			<Margin height={30} />
			<SubmitButton type='submit'>SingIn</SubmitButton>
			<Margin height={15} />
			<MutedLink onClick={switchSingUp}>
				Don't have an account ? <BoldLink> SingUp </BoldLink>
			</MutedLink>
			<Margin height={10} />
			<MutedLink>forget your password ?</MutedLink>
		</BoxContainer>
	)
}

export default SingInForm
