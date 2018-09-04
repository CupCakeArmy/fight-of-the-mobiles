import React from 'react'

import Button from '../components/Button'
import Spacer from '../components/Spacer';
import Logo from '../components/Logo';

const list = {
	1: 'Open camera.',
	2: 'Scan QR code.',
	3: 'Get notified',
}

export default class Home extends React.Component {
	render() {
		return <div id="Home" className="center fill">
			<div className="column center">
				<Logo />
				<Spacer height={120} />
				<Button text="Scan" onPress={() => this.props.navigate('scan')} />
				<Spacer height={120} />
				<div className="list">
					{Object.entries(list).map((entry, i) => <div key={i}>
						<span className="bold">{entry[0]}. </span>
						<span>{entry[1]}</span>
					</div>)}
				</div>
			</div>
		</div>
	}
}