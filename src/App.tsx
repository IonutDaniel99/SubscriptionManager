import React from 'react'
import type { ReactNode } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import RootNavigation from './Components/Navigation/RootNavigator'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components'
const App: () => ReactNode = () => {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <SafeAreaView>
                <StatusBar barStyle={'default'} />
                <Text>KEK</Text>
                <RootNavigation />
            </SafeAreaView>
        </ApplicationProvider>
    )
}

export default App

