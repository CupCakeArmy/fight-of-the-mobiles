import React from 'react'

import Button from '../components/Button'
import Spacer from '../components/Spacer'

import check from '../assets/check.png'

export default class Home extends React.Component {

	constructor(props) {
		super(props)

		if ('Notification' in window) {
			Notification.requestPermission(function (permission) {
				// If the user accepts, let's create a notification
				if (permission === 'granted') {
					var notification = new Notification('My title', {
						tag: 'message1',
						body: 'My body'
					});
					notification.onshow = function () { console.log('show'); };
					notification.onclose = function () { console.log('close'); };
					notification.onclick = function () { console.log('click'); };
				}
			});
		}
	}

	render() {
		return <div id="Home" className="center fill">
			<div className="column center">
				<Spacer height={120} />
				<Button text="Back" onPress={() => this.props.navigate('home')} />
				<Spacer height={120} />
				<div>Success</div>
				<Spacer height={20} />
				<img src={check} height="32" width="32" />
			</div>
		</div>
	}
}