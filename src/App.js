import styled from 'styled-components'
import AccountBox from './components'

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const App = () => {
	return (
		<Container>
			<AccountBox />
		</Container>
	)
}

export default App
