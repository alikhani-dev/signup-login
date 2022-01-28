import { useState } from 'react'
import { useAccount } from '../../context/accountContext'
import Margin from '../margin'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './Common'

const SingInForm = () => {
	const { switchSingUp } = useAccount()
	const [fields, setFields] = useState({
		email: '',
		password: '',
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
				<Input
					onChange={handleChange}
					value={fields.email}
					type='email'
					name='email'
					placeholder='Email'
					autoComplete='username'
				/>
				<Input
					onChange={handleChange}
					value={fields.password}
					type='password'
					name='password'
					placeholder='Password'
					autoComplete='current-password'
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
