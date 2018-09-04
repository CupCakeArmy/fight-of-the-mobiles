import React from 'react'

import Button from '../components/Button'

export default class Home extends React.Component {
	render() {
		return <div>
			<div>Scan</div>
			<Button text="Test" onPress={() => { console.log('Pressed') }} />
		</div>
	}
}