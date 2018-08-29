import React, {Component} from 'react'
import {Animated, StyleSheet, Text, View, Easing} from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'

import {Styles} from '../Helper'
import BG from '../BG'

export default class extends Component {
    static navigationOptions = {
        header: null,
    }


    constructor(props) {
        super(props)

        this.state = {rotation: new Animated.Value(0)}
    }

    componentDidMount() {
        Animated.loop(
            Animated.timing(
                this.state.rotation,
                {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.linear,
                },
            ),
        ).start()
    }

    gotCode(e) {
        const code = e.data
        this.props.navigation.navigate('Success', {code})
    }

    render() {

        // const spin = `${this.rotation._value}deg`
        const spin = this.state.rotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        })

        return <BG>
            <View style={Styles.center}>
                <QRCodeScanner containerStyle={styles.scanner} onRead={(e) => this.gotCode(e)}/>
                <View style={{...styles.space, ...Styles.center}}>
                    <Text style={styles.bold}>Scanning...</Text>
                    <Animated.Image
                        resizeMode="contain"
                        style={{...styles.image, transform: [{rotate: spin}]}}
                        source={require('../../assets/images/sync.png')}
                    />
                </View>
            </View>
        </BG>
    }
}

const styles = StyleSheet.create({
    scanner: {
        margin: 20,
        padding: 20,
        borderColor: '#0ff',
        borderWidth: 1,
        // width: 100,
        // height: 100
    },
    space: {
        marginTop: 100,
    },
    bold: {
        fontWeight: 'bold',
    },
    image: {
        width: 32,
        height: 32,
        margin: 16,
    },
})