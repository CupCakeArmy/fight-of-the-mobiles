import React from 'react'
import ReactDOM from 'react-dom'

import './styles.less'
import './assets/fonts/fonts.less'

import App from './screens/App'

document.addEventListener('deviceready', () => {
	ReactDOM.render(
		<App />
		, document.getElementById('root')
	)
}, false)