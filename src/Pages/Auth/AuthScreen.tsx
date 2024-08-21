import React from 'react'
import { Button, Text, ToastAndroid, View } from 'react-native'
import { currentUserAtom } from '../../atoms/useCurrentUserAtom'
import { useAtom } from 'jotai'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin'
import { GoogleSingInConfigs } from '../../configs/GoogleSingInConfig'
import { CustomShowToast } from '../../Components/Toast/ToastComponent'
import auth from '@react-native-firebase/auth'

export default function AuthScreen() {
    const onGoogleButtonPress = async () => {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
        const { idToken } = await GoogleSignin.signIn()
        const googleCredential = auth.GoogleAuthProvider.credential(idToken)
        return auth().signInWithCredential(googleCredential)
    }

    const loginAnonymous = async () => {
        await auth()
            .signInAnonymously()
            .catch((error) => {
                console.error(error)
            })
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
            <Button title="annon" onPress={() => loginAnonymous()} />
        </View>
    )
}
