import React, { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { SafeAreaView, StatusBar, Text, useColorScheme, View } from 'react-native'
import RootNavigation from './Components/Navigation/RootNavigator'

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

