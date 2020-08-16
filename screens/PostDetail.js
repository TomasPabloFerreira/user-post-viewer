import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'flex-start',
	},
	titleContainer: {
		paddingVertical: 20,
		paddingHorizontal: 25,
		borderBottomColor: '#7E8D85',
		borderBottomWidth: 1,
		backgroundColor: '#297373',
		alignSelf: 'stretch'
	},
	title: {
		fontSize: 35,
		color: 'white',
		textShadowColor: '#7E8D85',
		textShadowOffset: {width: 1, height: 1},
		textShadowRadius: 2
	},
	bodyContainer: {
		paddingHorizontal: 25,
		paddingVertical: 20,
		alignSelf: 'stretch',
		flexDirection: 'row',
		flexGrow: 1,
	},
	body: {
		fontSize: 18,
	},
	authorContainer: {
		paddingVertical: 20,
		backgroundColor: '#3e45c2',
		alignItems: 'center',
		alignSelf: 'stretch'
	},
	author: {
		fontSize: 16,
		color: '#FFF'
	}
})

const Title = ({ title }) => (
	<View style={styles.titleContainer}>
		<Text style={styles.title}>{title}</Text>
	</View>
)

const Author = ({ userName }) => (
	<View style={styles.authorContainer}>
		<Text style={styles.author}>Author: {userName}</Text>
	</View>
)

const Body = ({ body }) => (
	<View style={styles.bodyContainer}>
		<Text style={styles.body}>{body}</Text>
	</View>
)

export default ({ navigation }) => {
	const post = navigation.getParam('post')
	const user = navigation.getParam('user')

	return (
		<View style={styles.container}>
				<Title title={post.title} />
				<Body body={post.body} />
			<Author userName={user.name} />
		</View>
	)
}
