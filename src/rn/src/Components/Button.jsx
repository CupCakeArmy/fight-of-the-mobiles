import React, { Component } from 'React'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

export default class extends Component {
	render() {
		return <TouchableOpacity
			style={styles.button}
			onPress={this.props.callback}>
			<Text style={styles.label}>{this.props.text}</Text>
		</TouchableOpacity>
	}
}

const styles = StyleSheet.create({
	label: {
		fontSize: 20
	},
	button: {
		width: 180,
		height: 45,
		borderRadius: 100,
		borderColor: '#000000',
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
})