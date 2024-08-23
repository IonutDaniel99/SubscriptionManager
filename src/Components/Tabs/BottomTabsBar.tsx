import React from 'react'
import { Animated } from 'react-native'
import { BottomNavigation, BottomNavigationTab, Divider, Icon, IconElement, IconProps } from '@ui-kitten/components'
import { APP_ROUTES } from '../../common/enums/appRoutes'
import useSession from '../../hooks/useSession'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
const ROOT_ROUTES: string[] = [APP_ROUTES.HOME, APP_ROUTES.CALENDAR, APP_ROUTES.STATS]

export const BottomTabsBar = ({ navigation, state }: BottomTabBarProps): React.ReactElement | null => {
    const currentRouteName = state.routeNames[state.index]
    const shouldDisplayBar = ROOT_ROUTES.includes(currentRouteName)

    if (!shouldDisplayBar) {
        return null
    }

    const HouseIcon = (props: IconProps): IconElement => <Icon {...props} name="home-outline" />

    const CalendarIcon = (props: IconProps): IconElement => <Icon {...props} name="calendar-outline" />
    const StatsIcon = (props: IconProps): IconElement => <Icon {...props} name="pie-chart-outline" />
    const onSelect = (index: number): void => {
        const selectedTabRoute: string = state.routeNames[index]
        navigation.navigate(selectedTabRoute)
    }

    return (
        <Animated.View>
            <BottomNavigation selectedIndex={state.index} onSelect={onSelect}>
                <BottomNavigationTab title={APP_ROUTES.HOME} icon={HouseIcon} />
                <BottomNavigationTab title={APP_ROUTES.CALENDAR} icon={CalendarIcon} />
                <BottomNavigationTab title={APP_ROUTES.STATS} icon={StatsIcon} />
            </BottomNavigation>
        </Animated.View>
    )
}
