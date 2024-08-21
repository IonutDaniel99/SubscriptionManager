import React from 'react'
import { Text, ToastAndroid, View } from 'react-native'
import { currentUserAtom } from '../../atoms/useCurrentUserAtom'
import { useAtom } from 'jotai'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin'
import { GoogleSingInConfigs } from '../../configs/GoogleSingInConfig'
import { CustomShowToast } from '../../Components/Toast/ToastComponent'
export default function AuthScreen() {
    const [, setUser] = useAtom(currentUserAtom)
    async function onGoogleButtonPress() {
        try {
            await GoogleSignin.hasPlayServices()
            const userInfo = await GoogleSignin.signIn()
            setUser(userInfo)
        } catch (error: any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                CustomShowToast('Sing In Canceled')
            } else if (error.code === statusCodes.IN_PROGRESS) {
                CustomShowToast('Sing In is already in progress')
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                CustomShowToast('Play Services Not Available')
            } else {
                CustomShowToast('Unknown error')
            }
        }
    }

    return (
        <View>
            <Text>Login</Text>
            <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={() => onGoogleButtonPress()}
            />
        </View>
    )
}
