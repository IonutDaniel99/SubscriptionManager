import React from 'react'
import useSession from '../../hooks/useSession'
import { Button, Layout, Text } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'
import { ThemeContext } from '../../context/theme-context'

export default function HomeScreen() {
    const { user, removeUser } = useSession()
    const themeContext = React.useContext(ThemeContext)
    return (
        <Layout style={styles.container}>
            <Text style={styles.text} category="h1">
                Welcome to React Navigation 5 Guide
            </Text>
            <Button style={{ marginVertical: 4 }} onPress={themeContext.toggleTheme}>
                TOGGLE THEME
            </Button>
        </Layout>
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
