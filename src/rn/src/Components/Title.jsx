import React, {Component} from 'React'
import {StyleSheet, Text, View} from 'react-native'

const Badge = (props) => <View style={styles.badge}>
    <Text style={styles.label}>{props.number}</Text>
</View>

export default class extends Component {
    render() {
        return <View>
            <Text style={styles.title}>QR NOTIFICATOR</Text>
            <Badge number={2}/>
        </View>
    }
}

const styles = StyleSheet.create({
    badge: {
        width: 20,
        height: 20,
        borderRadius: 100,
        backgroundColor: '#f00',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: -20,
        top: -5,
    },
    label: {
        fontFamily: 'Jaapokki enchance',
    },
    title: {
        fontFamily: 'Jaapokki enchance',
        fontSize: 30,
    },
    container: {
        width: 150,
        height: 40,
        borderRadius: 100,
        borderColor: '#000000',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

