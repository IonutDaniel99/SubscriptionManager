import { createNativeStackNavigator } from '@react-navigation/native-stack'
import useSession from '../../hooks/useSession'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../../Pages/Home/HomeScreen'
import AuthScreen from '../../Pages/Auth/AuthScreen'
import { NavigationNames } from '../../utils/stackNavigatorNames'
import { useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth'
import { GoogleSingInConfigs } from '../../configs/GoogleSingInConfig'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { View } from 'react-native'
export default function RootNavigation() {
    const { user, isLoading } = useSession()
    const Stack = createNativeStackNavigator()
    GoogleSignin.configure(GoogleSingInConfigs)
    if (isLoading) return null

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={user ? NavigationNames.HOME : NavigationNames.AUTH}
                screenOptions={{
                    headerShown: false,
                    animation: 'slide_from_left',
                    animationTypeForReplace: 'pop'
                }}
            >
                {user ? (
                    <Stack.Screen name={NavigationNames.HOME} component={HomeScreen} />
                ) : (
                    <Stack.Screen name={NavigationNames.AUTH} component={AuthScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
