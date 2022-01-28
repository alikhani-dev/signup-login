import React from 'react'
import { render } from 'react-dom'
import App from './App.js'
import Provider from './context'
import './style.css'

render(
	<React.StrictMode>
		<Provider>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
)