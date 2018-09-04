import React from 'react'

import Home from './Home'
import Scan from './Scan'
import Success from './Success'

const Screens = {
	home: Home,
	scan: Scan,
	success: Success,
}

export default class App extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			route: 'home',
			data: {},
		}

		this.navigate = this.navigate.bind(this)
	}

	navigate(route, data = {}) {
		this.setState({
			route, data
		})
	}


	render() {
		const Current = Screens[this.state.route]


		return <div id="app">
			<div className="bg" />
			<div className="content">
				{Current && <Current data={this.state.data} navigate={this.navigate} />}
			</div>
		</div>
	}
}