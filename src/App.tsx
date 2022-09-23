import styled from 'styled-components'
import AccountBox from './components'

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`

const App = () => (
	<Container>
		<AccountBox />
	</Container>
)

export default App
