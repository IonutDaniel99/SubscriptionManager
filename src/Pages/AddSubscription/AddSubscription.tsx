import React from 'react'
import useSession from '../../hooks/useSession'
import { Button, Layout, Text } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'
import { ThemeContext } from '../../context/theme-context'
import { TopNavigationBar } from '../../Components/Tabs/TopNavigation'
import { NavigationProp } from '@react-navigation/native'
interface IAddSubscriptionScreen {
    navigation: NavigationProp<any>
}
export default function AddSubscriptionScreen({ navigation }: IAddSubscriptionScreen) {
    return (
        <>
            <TopNavigationBar navigation={navigation} displayBackButton title={'Add new subscription'} />
            <Layout style={styles.container}>
                <Text style={styles.text} category="h1">
                    Subscription
                </Text>
            </Layout>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center'
    }
})
