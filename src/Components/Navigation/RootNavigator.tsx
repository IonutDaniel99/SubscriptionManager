import useSession from '../../hooks/useSession'
import { NavigationContainer } from '@react-navigation/native'
import AuthScreen from '../../Pages/Auth/AuthScreen'
import { APP_ROUTES } from '../../common/enums/appRoutes'
import { GoogleSingInConfigs } from '../../configs/GoogleSingInConfig'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { Text } from '@ui-kitten/components'
import StatisticsScreen from '../../Pages/Statistics/StatisticsScreen'
import { BottomTabsBar } from '../Tabs/BottomTabsBar'
import CalendarScreen from '../../Pages/Calendar/CalendarScreen'
import HomeScreen from '../../Pages/Home/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProfileContentScreen from '../../Pages/ProfileContent/ProfileContentScreen'
import { StatusBar } from 'react-native'
import AddSubscriptionScreen from '../../Pages/AddSubscription/AddSubscription'

GoogleSignin.configure(GoogleSingInConfigs)

export default function RootNavigation() {
    const { user, isLoading } = useSession()
    const { Navigator, Screen } = createBottomTabNavigator()

    const initialTabRoute = user ? APP_ROUTES.HOME : APP_ROUTES.AUTH

    if (isLoading) return <Text>Loading...</Text>

    return (
        <NavigationContainer>
            <Navigator
                tabBar={(props) => <BottomTabsBar {...props} />}
                initialRouteName={initialTabRoute}
                screenOptions={{
                    headerShown: false
                }}
            >
                {/* VISIBLE BAR PAGES */}
                <Screen name={APP_ROUTES.CALENDAR} component={CalendarScreen} />
                <Screen name={APP_ROUTES.HOME} component={HomeScreen} />
                <Screen name={APP_ROUTES.STATS} component={StatisticsScreen} />
                {/* Triggered Pages */}
                <Screen name={APP_ROUTES.PROFILE} component={ProfileContentScreen} />
                <Screen name={APP_ROUTES.ADD_SUBSCRIPTION} component={AddSubscriptionScreen} />
                {/* AUTH */}
                <Screen name={APP_ROUTES.AUTH} component={AuthScreen} />
            </Navigator>
        </NavigationContainer>
    )
}
