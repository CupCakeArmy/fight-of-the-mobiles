import React from 'react'

import Button from '../components/Button'
import Spacer from '../components/Spacer'

import sync from '../assets/sync.png'

function scan() {
	try {
		cordova.plugins.barcodeScanner.scan(
			function (result) {
				alert("We got a barcode\n" +
					"Result: " + result.text + "\n" +
					"Format: " + result.format + "\n" +
					"Cancelled: " + result.cancelled);
			},
			function (error) {
				alert("Scanning failed: " + error);
			},
			{
				preferFrontCamera: true, // iOS and Android
				showFlipCameraButton: true, // iOS and Android
				showTorchButton: true, // iOS and Android
				torchOn: true, // Android, launch with the torch switched on (if available)
				saveHistory: true, // Android, save scan history (default false)
				prompt: "Place a barcode inside the scan area", // Android
				resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
				formats: "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
				orientation: "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
				disableAnimations: true, // iOS
				disableSuccessBeep: false // iOS and Android
			}
		);
	}
	catch (e) {
		console.log(e)
	}
}

export default class Home extends React.Component {

	constructor(props) {
		super(props)

		scan()
	}

	render() {
		return <div id="Home" className="center fill">
			<div className="column center">
				<Spacer height={120} />
				<Button text="Success" onPress={() => this.props.navigate('success')} />
				<Spacer height={120} />
				<div>Scanning...</div>
				<Spacer height={20} />
				<img className="spinning" src={sync} height="32" width="32" />
			</div>
		</div>
	}
}