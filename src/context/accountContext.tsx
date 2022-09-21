import { createContext, useContext, useState, FC, PropsWithChildren } from 'react'
import { expendingTransition } from '../components/accountBox/AccountBox'

type Context = {
	switchSingUp: () => void
	switchSingIn: () => void
	IsExpended: boolean
	active: 'singIn' | 'singUp'
}

const AccountContext = createContext<Context>({
	switchSingUp() {},
	switchSingIn() {},
	IsExpended: false,
	active: 'singIn'
})

export const useAccount = () => {
	const context = useContext(AccountContext)

	if (!context) throw new Error('useAccount must be used Provider')

	return context
}

const Provider: FC<PropsWithChildren> = ({ children }) => {
	const [IsExpended, setExpended] = useState(false)
	const [active, setActive] = useState<'singIn' | 'singUp'>('singIn')

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
