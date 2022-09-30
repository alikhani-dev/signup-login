import { createContext, useContext, useState, FC, PropsWithChildren } from 'react'
// * Types :
type Context = { switchSingUp: () => void; switchSingIn: () => void; active: Form; IsExpended: boolean }
type Form = 'singIn' | 'singUp'

const AccountContext = createContext<Context>({
	switchSingUp() {},
	switchSingIn() {},
	IsExpended: false,
	active: 'singIn',
})

export const useAccount = () => {
	const context = useContext(AccountContext)

	if (!context) throw new Error('useAccount must be used Provider')

	return context
}

const Provider: FC<PropsWithChildren> = ({ children }) => {
	const [IsExpended, setExpended] = useState(false)
	const [active, setActive] = useState<Form>('singIn')
	const delay = 1.2

	const playExpandingAnimation = () => {
		setExpended(true)
		setTimeout(() => {
			setExpended(false)
		}, delay * 1000)
	}

	const switchSingUp = () => {
		playExpandingAnimation()
		setTimeout(() => {
			setActive('singUp')
		}, delay * 1000)
	}

	const switchSingIn = () => {
		playExpandingAnimation()
		setTimeout(() => {
			setActive('singIn')
		}, delay * 1000)
	}

	return (
		<AccountContext.Provider value={{ switchSingUp, switchSingIn, IsExpended, active }}>
			{children}
		</AccountContext.Provider>
	)
}

export default Provider
