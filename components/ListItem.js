import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
	container: {
		height: 50,
		display: 'flex',
		justifyContent: 'center',
		borderBottomColor: '#eee',
		borderBottomWidth: 1,
		paddingHorizontal: 15
	},
	text: {
		fontSize: 18,
	}
})

export default ({ title }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{title}</Text>
		</View>
	)
}
