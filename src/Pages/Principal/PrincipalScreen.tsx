import React from 'react'
import useSession from '../../hooks/useSession'
import { Button, Layout, Text } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'
import { ThemeContext } from '../../context/theme-context'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabsBar } from '../../Components/Tabs/BottomTabsBar'
import { APP_ROUTES } from '../../utils/appRoutes'
import ProfileScreen from '../Statistics/StatisticsScreen'
import HomeScreen from '../Home/HomeScreen'
import CalendarScreen from '../Calendar/CalendarScreen'

export default function PrincipalScreen() {
    const { Navigator, Screen } = createBottomTabNavigator()

    return (
        <Navigator
            tabBar={(props) => <BottomTabsBar {...props} />}
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name={APP_ROUTES.HOME} component={HomeScreen} />
            <Screen name={APP_ROUTES.CALENDAR} component={CalendarScreen} />
            <Screen name={APP_ROUTES.STATS} component={ProfileScreen} />
        </Navigator>
    )
}
