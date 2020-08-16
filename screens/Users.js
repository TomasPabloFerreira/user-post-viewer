import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
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

const renderUser = ({ item }) => {
	return (
		<ListItem
			title={item.name}
		/>
	)
}

export default () => {
	const [loading, setLoading] = useState(true)
	const [users, setUsers] = useState([])

	const fetchUsers = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/users')
		const data = await response.json()
		setUsers(data)
		setLoading(false)
	}

	useEffect(() => { fetchUsers() }, [])

	return (
		<View style={styles.container}>
			{
				loading
					?	<Text>Loading...</Text>
					:	<FlatList
							data={users}
							keyExtractor={x => String(x.id)}
							renderItem={renderUser}
							style={styles.list}
						/>
			}
		</View>
	)
}
