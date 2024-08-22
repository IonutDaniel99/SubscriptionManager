import { createNativeStackNavigator } from '@react-navigation/native-stack'
import useSession from '../../hooks/useSession'
import { NavigationContainer } from '@react-navigation/native'
import AuthScreen from '../../Pages/Auth/AuthScreen'
import { APP_ROUTES } from '../../utils/appRoutes'
import { GoogleSingInConfigs } from '../../configs/GoogleSingInConfig'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { Text } from '@ui-kitten/components'
import ProfileScreen from '../../Pages/Statistics/StatisticsScreen'
import { BottomTabsBar } from '../Tabs/BottomTabsBar'
import PrincipalScreen from '../../Pages/Principal/PrincipalScreen'
export default function RootNavigation() {
    const { user, isLoading } = useSession()
    const Stack = createNativeStackNavigator()

    GoogleSignin.configure(GoogleSingInConfigs)
    if (isLoading) return <Text>Loading...</Text>
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={user ? APP_ROUTES.PRINCIPAL : APP_ROUTES.AUTH}
                screenOptions={{
                    headerShown: false,
                    animation: 'slide_from_left',
                    animationTypeForReplace: 'pop'
                }}
            >
                <Stack.Screen name={APP_ROUTES.AUTH} component={AuthScreen} />
                <Stack.Screen name={APP_ROUTES.PRINCIPAL} component={PrincipalScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
