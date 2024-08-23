import React from 'react'
import useSession from '../../hooks/useSession'
import { Button, Layout, Text } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'
import { ThemeContext } from '../../context/theme-context'
import { NavigationProp } from '@react-navigation/native'
import { TopNavigationBar } from '../../Components/Tabs/TopNavigation'

export default function StatisticsScreen({ navigation }: { navigation: NavigationProp<any> }) {
    const themeContext = React.useContext(ThemeContext)

    return (
        <>
            <TopNavigationBar navigation={navigation} displayProfileIcon title={`Statistics`} />
            <Layout style={styles.container}>
                <Text style={styles.text} category="h1">
                    Welcome to Calendar
                </Text>
                <Button style={{ marginVertical: 4 }} onPress={themeContext.toggleTheme}>
                    TOGGLE THEME
                </Button>
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
