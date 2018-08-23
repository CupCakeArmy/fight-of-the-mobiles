import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import * as PushNotification from 'react-native-push-notification'

import {Styles} from '../Helper'
import BG from '../BG'
import QRButton from '../Components/Button'

export default class extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props)

        const {navigation} = props

        const code = navigation.getParam('code', undefined)

        this.state = {code}

        if (code === undefined) navigation.navigate('scan')
        else PushNotification.localNotification({
            title: '🚀 Scan succeded!',
            message: `Your super sercret code is: ${code}`,
        })
    }

    render() {
        const {navigate} = this.props.navigation

        return <BG>
            <View style={Styles.center}>
                <View>
                    <QRButton text={'Back'} callback={() => navigate('Home')}/>
                    <Text>{this.state.code}</Text>
                </View>
            </View>
        </BG>
    }
}