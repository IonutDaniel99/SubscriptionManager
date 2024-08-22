import { createNativeStackNavigator } from '@react-navigation/native-stack'
import useSession from '../../hooks/useSession'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../../Pages/Home/HomeScreen'
import AuthScreen from '../../Pages/Auth/AuthScreen'
import { APP_ROUTES } from '../../utils/appRoutes'
import { GoogleSingInConfigs } from '../../configs/GoogleSingInConfig'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { Text } from '@ui-kitten/components'
export default function RootNavigation() {
    const { user, isLoading } = useSession()
    const Stack = createNativeStackNavigator()
    GoogleSignin.configure(GoogleSingInConfigs)
    if (isLoading) return <Text>Loading...</Text>
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={user ? APP_ROUTES.HOME : APP_ROUTES.AUTH}
                screenOptions={{
                    headerShown: false,
                    animation: 'slide_from_left',
                    animationTypeForReplace: 'pop'
                }}
            >
                {user ? (
                    <Stack.Screen name={APP_ROUTES.HOME} component={HomeScreen} />
                ) : (
                    <Stack.Screen name={APP_ROUTES.AUTH} component={AuthScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
