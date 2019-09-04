import { createAppContainer, createStackNavigator } from 'react-navigation';

import QuizScreen from './App/src/screens/QuizScreen';
import QuizIndex from './App/src/screens/QuizIndex';

const navigator = createStackNavigator({
    Quiz: {
        screen: QuizScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.getParam('title')
        })
    },
    Index: QuizIndex
}, {
        initialRouteName: 'Index',

        defaultNavigationOptions: {
            title: 'Quiz'
        }
    });

export default createAppContainer(navigator);