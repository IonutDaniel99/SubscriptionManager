import { createNativeStackNavigator } from '@react-navigation/native-stack'
import useSession from '../../hooks/useSession'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../../Pages/Home/HomeScreen'
import WelcomeScreen from '../../Pages/Welcome/WelcomeScreen'

export default function RootNavigation() {
    const { user } = useSession()
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={user ? 'Home' : 'Welcome'}
                screenOptions={{
                    headerShown: false,
                    animation: 'slide_from_right',
                    animationTypeForReplace: 'pop'
                }}
            >
                {user ? (
                    <Stack.Screen name="Home" component={HomeScreen} />
                ) : (
                    <Stack.Screen name="Welcome" component={WelcomeScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
