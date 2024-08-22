import React from 'react'
import { Animated, StyleSheet, ViewStyle } from 'react-native'
import {
    Avatar,
    BottomNavigation,
    BottomNavigationTab,
    Divider,
    Icon,
    IconElement,
    IconProps
} from '@ui-kitten/components'
import { APP_ROUTES } from '../../utils/appRoutes'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useSession from '../../hooks/useSession'

interface IBottomTabsBar {
    navigation: any
    state: any
}

const useVisibilityAnimation = (visible: boolean): ViewStyle => {
    const animation = React.useRef<Animated.Value>(new Animated.Value(visible ? 1 : 0))

    React.useEffect(() => {
        Animated.timing(animation.current, {
            duration: 200,
            toValue: visible ? 1 : 0,
            useNativeDriver: true
        }).start()
    }, [visible])

    return {
        transform: [
            {
                // @ts-ignore
                translateY: animation.current.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0]
                })
            }
        ],
        position: visible ? undefined : 'absolute'
    }
}

export const BottomTabsBar = ({ navigation, state }: IBottomTabsBar): React.ReactElement => {
    const { user } = useSession()
    const HouseIcon = (props: IconProps): IconElement => <Icon {...props} name="home-outline" />

    const CalendarIcon = (props: IconProps): IconElement => <Icon {...props} name="calendar-outline" />

    const StatsIcon = (props: IconProps): IconElement => <Icon {...props} name="pie-chart-outline" />
    const onSelect = (index: number): void => {
        const selectedTabRoute: string = state.routeNames[index]
        navigation.navigate(selectedTabRoute)
    }

    return (
        <Animated.View>
            <Divider />
            <BottomNavigation selectedIndex={state.index} onSelect={onSelect}>
                <BottomNavigationTab title={APP_ROUTES.HOME} icon={HouseIcon} />
                <BottomNavigationTab title={APP_ROUTES.CALENDAR} icon={CalendarIcon} />
                <BottomNavigationTab title={APP_ROUTES.STATS} icon={StatsIcon} />
            </BottomNavigation>
        </Animated.View>
    )
}
