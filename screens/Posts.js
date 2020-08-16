import React, { useEffect, useState, useMemo } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
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
	const userId = navigation.getParam('user_id')
	const userName = navigation.getParam('user_name')
	const [posts, setPosts] = useState([])
	const filterPosts = (posts, userId) => posts.filter(post => post.userId === userId)
	const userPosts = useMemo(() => filterPosts(posts, userId), [posts, userId])

	const [loading, setLoading] = useState(true)
	const fetchPosts = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts')
		const data = await response.json()
		setPosts(data)
		setLoading(false)
	}

	const navigateToPostDetail = (post) => {
		navigation.navigate('PostDetail', {
			post: {
				title: post.title,
				body: post.body
			},
			user: {
				id: userId,
				name: userName
			}
		})
	}

	useEffect(() => { fetchPosts() }, [])

	return (
		<View style={styles.container}>
			{
				loading
					?	<Text>Loading...</Text>
					:	<FlatList
							data={userPosts}
							keyExtractor={x => String(x.id)}
							renderItem={({ item }) =>
								<ListItem
									title={item.title}
									handlePress={() => {navigateToPostDetail(item)}}
								/>
							}
							style={styles.list}
						/>
			}
		</View>
	)
}
