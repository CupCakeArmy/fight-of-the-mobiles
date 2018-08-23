import React from 'react'
import { Styles } from './Helper'
import LinearGradient from 'react-native-linear-gradient'

const start = 0
const end = 1 - start

export default (props) => {
	return <LinearGradient start={{ x: start, y: start }} end={{ x: end, y: end }} colors={['#6FABFF', '#E4FF71']} style={{ ...Styles.fill, paddingTop: 16 }}>
		{props.children}
	</LinearGradient>
}