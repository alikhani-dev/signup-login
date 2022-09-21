import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import Provider from './context'
import App from './App'
import GlobalStyle  from './styles/global'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<StrictMode>
		<Provider>
			<App />
			<GlobalStyle  />
		</Provider>
	</StrictMode>
)
