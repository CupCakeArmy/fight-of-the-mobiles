import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import * as PushNotification from 'react-native-push-notification'

import { Styles } from '../Helper'
import BG from '../BG'
import QRButton from '../Components/Button'

export default class extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props)

        const { navigation } = props

        const code = navigation.getParam('code', undefined)

        this.state = { code }

        if (code === undefined) navigation.navigate('scan')
        else PushNotification.localNotificationSchedule({
            id: 0,
            title: '🚀 Scan succeded!',
            message: `Your super sercret code is: ${code}`,
            date: new Date(Date.now() + (5 * 1000))
        })
    }

    render() {
        const { navigate } = this.props.navigation

        return <BG>
            <View style={Styles.center}>
                <QRButton text={'Back'} callback={() => navigate('Home')} />
                <Text style={{ ...styles.bold, ...styles.space }}>Success</Text>
                <Image
                    resizeMode="contain"
                    style={styles.image}
                    source={require('../../assets/images/check.png')}
                />

            </View>
        </BG>
    }
}

const styles = StyleSheet.create({
    space: {
        paddingTop: 100,
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