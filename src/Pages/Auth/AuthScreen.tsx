import React from 'react'
import { Button, Image, Text, ToastAndroid, View } from 'react-native'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin'
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
            <View>
                <View>
                    <View>
                        <Text>Welcome Back!</Text>
                        <Text>Sign in to your account and start manage your subscriptions.</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <GoogleSigninButton
                            style={{ width: 192, height: 48 }}
                            size={GoogleSigninButton.Size.Wide}
                            color={GoogleSigninButton.Color.Dark}
                            onPress={() => onGoogleButtonPress()}
                        />
                        <Button title="annon" onPress={() => loginAnonymous()} />
                    </View>
                </View>
            </View>
            <Text>Login</Text>
        </View>
    )
}
