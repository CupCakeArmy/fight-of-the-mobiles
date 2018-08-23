import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Styles } from '../Helper'
import BG from '../BG'
import QRButton from '../Components/Button'
import QRTitle from '../Components/Title'

export default class extends Component {
	static navigationOptions = {
		header: null,
	}

	render() {
		const { navigate } = this.props.navigation

		return <BG>
			<View style={Styles.center}>
				<QRTitle />
				<View style={styles.space}>
					<QRButton text='Scan' callback={() => navigate('Scan')} />
				</View>
				<View style={styles.space}>
					<Text style={styles.listText}><Text style={styles.listNumber}>1. </Text>Open camera.</Text>
					<Text style={styles.listText}><Text style={styles.listNumber}>2. </Text>Scan QR code.</Text>
					<Text style={styles.listText}><Text style={styles.listNumber}>3. </Text>Get notificated.</Text>
				</View>
			</View>
		</BG>
	}
}

const styles = StyleSheet.create({
	space: {
		marginTop: 100
	},
	listNumber: {
		fontWeight: 'bold',
	},
	listText: {
	}
})