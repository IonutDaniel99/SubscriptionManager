import React from 'react'
import useSession from '../../hooks/useSession'
import { Button, Layout, Text } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'
import { ThemeContext } from '../../context/theme-context'
import { TopNavigationBar } from '../../Components/Tabs/TopNavigation'
import { NavigationProp } from '@react-navigation/native'

export default function CalendarScreen({ navigation }: { navigation: NavigationProp<any> }) {
    return (
        <>
            <TopNavigationBar navigation={navigation} displayProfileIcon title={`Your year ahead!`} />
            <Layout style={styles.container}>
                <Text style={styles.text} category="h1">
                    Welcome to Calendar
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
