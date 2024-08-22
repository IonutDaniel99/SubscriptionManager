import React from 'react'
import useSession from '../../hooks/useSession'
import { Button, Layout, Text } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'
import { ThemeContext } from '../../context/theme-context'

export default function StatisticsScreen() {
    return (
        <Layout style={styles.container}>
            <Text style={styles.text} category="h1">
                StatisticsScreen
            </Text>
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