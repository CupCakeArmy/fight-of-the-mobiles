import React, {Component} from 'react'
import {Animated, StyleSheet, Text, View} from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'

import {Styles} from '../Helper'
import BG from '../BG'

export default class extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props)

        this.state = {
            rotation: new Animated.Value(0),
        }
    }

    componentDidMount() {
        Animation.loop(
            Animated.timing(
                this.state.rotation,
                {
                    toValue: 1,
                    duration: 10000,
                },
            ),
        ).start()
    }

    gotCode(e) {
        const code = e.data
        this.props.navigation.navigate('Success', {code})
    }

    render() {
        return <BG>
            <View style={Styles.center}>
                <QRCodeScanner containerStyle={styles.scanner} onRead={(e) => this.gotCode(e)}/>
                <View style={styles.space}>
                    <Text>Scanning...</Text>
                    <Image
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
    listNumber: {
        fontWeight: 'bold',
    },
    listText: {},
})