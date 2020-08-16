import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})

export default ({ navigation }) => {
	const post = navigation.getParam('post')
	const user = navigation.getParam('user')

	return (
		<View style={styles.container}>
		</View>
	)
}
