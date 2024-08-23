import React, { ReactText } from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import {
    Avatar,
    Divider,
    Icon,
    IconElement,
    IconProps,
    Layout,
    MenuItem,
    OverflowMenu,
    Spinner,
    Text,
    TopNavigation,
    TopNavigationAction
} from '@ui-kitten/components'
import useSession from '../../hooks/useSession'
import { APP_ROUTES } from '../../common/enums/appRoutes'
import { NavigationProp, NavigationState, useNavigation } from '@react-navigation/native'
import { RenderProp, TouchableWebElement } from '@ui-kitten/components/devsupport'
import { TextProps } from 'react-native-svg'
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto'

interface ITopNavBar {
    navigation: NavigationProp<any>
    displayBackButton?: boolean
    title?: string
    displayProfileIcon?: boolean
}

const BackIcon = (props: IconProps): IconElement => <Icon {...props} name="arrow-back" />

export const TopNavigationBar = ({
    displayBackButton = false,
    title = '',
    displayProfileIcon = false
}: ITopNavBar): React.ReactElement => {
    const { user, isLoading } = useSession()
    const navigation = useNavigation()

    const renderTitle = () => {
        return <Text category="h6">{title}</Text>
    }

    const renderMenuAction = (): React.ReactElement => {
        if (!displayProfileIcon) return <></>
        return (
            <TopNavigationAction
                icon={<ProfilePhoto user={user} isLoading={isLoading} />}
                onPress={() => navigation?.navigate(APP_ROUTES.PROFILE as never)}
            />
        )
    }
    const renderBackAction = (): TouchableWebElement => {
        if (!displayBackButton) return <></>
        return <TopNavigationAction icon={BackIcon} onPress={navigation?.goBack} />
    }

    return (
        <Layout style={styles.container} level="1">
            <TopNavigation
                alignment="center"
                title={renderTitle}
                accessoryRight={renderMenuAction}
                accessoryLeft={renderBackAction}
            />
            <Divider />
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight
    }
})
