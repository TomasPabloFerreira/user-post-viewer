import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { ListItem } from '../components/index'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	list: {
		alignSelf: 'stretch'
	}
})

const users = [
	{ id: '1', name: 'Pepito' },
	{ id: '2', name: 'Juansin' },
	{ id: '3', name: 'Juansin' },
	{ id: '4', name: 'Juansin' },
	{ id: '5', name: 'Juansin' },
	{ id: '6', name: 'Juansin' },
	{ id: '7', name: 'Juansin' },
	{ id: '8', name: 'Juansin' },
	{ id: '9', name: 'Juansin' },
]

const renderUser = ({ item }) => {
	return (
		<ListItem
			title={item.name}
		/>
	)
}

export default () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={users}
				keyExtractor={x => x.id}
				renderItem={renderUser}
				style={styles.list}
			/>
		</View>
	)
}
