import React from 'react'
import type { ReactNode } from 'react'
import { SafeAreaView, StatusBar, Text, useColorScheme, View } from 'react-native'
import RootNavigation from './Common/Navigation/RootNavigator'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const App: () => ReactNode = () => {
    const isDarkMode = useColorScheme() === 'dark'
    return (
        <SafeAreaView className={'bg-neutral-300 dark:bg-slate-900 h-screen w-screen'}>
            <StatusBar barStyle={'default'} />
            <RootNavigation />
        </SafeAreaView>
    )
}

export default App

