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

export default ({ navigation }) => {
	const [loading, setLoading] = useState(true)
	const [users, setUsers] = useState([])

	const fetchUsers = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/users')
		const data = await response.json()
		setUsers(data)
		setLoading(false)
	}
	const navigateToPosts = (user) => {
		navigation.navigate('Posts', { user_id: user.id, user_name: user.name })
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
							renderItem={({ item }) =>
								<ListItem
									title={item.name}
									handlePress={() => navigateToPosts(item)}
								/>
							}
							style={styles.list}
						/>
			}
		</View>
	)
}
