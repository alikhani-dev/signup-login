import { createContext, useContext, useState } from 'react'
import { expendingTransition } from '../components/accountBox/AccountBox'

const AccountContext = createContext()

export const useAccount = () => {
	const context = useContext(AccountContext)

	if (!context) {
		throw new Error('useAccount must be used Provider')
	}

	return context
}

const Provider = ({ children }) => {
	const [IsExpended, setExpended] = useState(false)
	const [active, setActive] = useState('singIn')

	const playExpandingAnimation = () => {
		setExpended(true)
		setTimeout(() => {
			setExpended(false)
		}, expendingTransition.duration * 1000 - 1500)
	}

	const switchSingUp = () => {
		playExpandingAnimation()
		setTimeout(() => {
			setActive('singUp')
		}, 400)
	}

	const switchSingIn = () => {
		playExpandingAnimation()
		setTimeout(() => {
			setActive('singIn')
		}, 400)
	}

	return (
		<AccountContext.Provider value={{ switchSingUp, switchSingIn, IsExpended, active }}>
			{children}
		</AccountContext.Provider>
	)
}

export default Provider
