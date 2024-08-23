import React from 'react'
import useSession from '../../hooks/useSession'
import { Button, Layout, Text } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'
import { ThemeContext } from '../../context/theme-context'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabsBar } from '../../Components/Tabs/BottomTabsBar'
import { APP_ROUTES } from '../../common/enums/appRoutes'
import ProfileScreen from '../Statistics/StatisticsScreen'
import HomeScreen from '../Home/HomeScreen'
import CalendarScreen from '../Calendar/CalendarScreen'
import { TopNavigationBar } from '../../Components/Tabs/TopNavigation'
import AboutScreen from '../ProfileContent/ProfileContentScreen'
import { NavigationProp, NavigationState } from '@react-navigation/native'

interface IPrincipalScreen {
    navigation: NavigationProp<any>
}

export default function PrincipalScreen({ navigation }: IPrincipalScreen): React.JSX.Element {
    const { Navigator, Screen } = createBottomTabNavigator()

    return (
        <>
            <TopNavigationBar navigation={navigation} />
        </>
    )
}
