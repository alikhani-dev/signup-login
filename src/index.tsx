import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// * Provider & Context :
import Provider from './context'
// * Global styles
import GlobalStyle from './styles/global'

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
	<StrictMode>
		<Provider>
			<App />
			<GlobalStyle />
		</Provider>
	</StrictMode>,
)
