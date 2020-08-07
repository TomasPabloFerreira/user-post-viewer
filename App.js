import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { UsersScreen, PostsScreen, PostDetailScreen } from './screens'

const AppNavigator = createStackNavigator({
	Users: {
		screen: UsersScreen
	},
	Posts: {
		screen: PostsScreen
	},
	PostDetail: {
		screen: PostDetailScreen
	}
}, {
	initialRouteName: 'Users'
})

export default createAppContainer(AppNavigator)
