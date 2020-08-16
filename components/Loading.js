import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		alignSelf: 'center'
	}
})

export default () => (
		<View style={styles.container}>
			<ActivityIndicator size="large" />
		</View>
)