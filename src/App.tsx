import React from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import { ApplicationProvider, IconRegistry, TopNavigation } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import * as eva from '@eva-design/eva'
import RootNavigation from './Components/Navigation/RootNavigator'
import { ThemeContext } from './context/theme-context'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { default as customTheme } from '../theme.json'

export default (): React.ReactElement => {
    const [theme, setTheme] = React.useState<'light' | 'dark'>('dark')

    const toggleTheme = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(nextTheme)
    }

    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <ApplicationProvider {...eva} theme={{ ...eva[theme], ...customTheme }} mapping={eva.mapping}>
                    <SafeAreaProvider>
                        <StatusBar barStyle={'default'} />
                        <RootNavigation />
                    </SafeAreaProvider>
                </ApplicationProvider>
            </ThemeContext.Provider>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    }
})

