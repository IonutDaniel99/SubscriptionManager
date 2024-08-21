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
            <View className="w-full h-full grid-cols-2 bg-white lg:grid lg:min-h-screen">
                <View className="flex items-center justify-center w-full h-1/3 bg-primary">
                    <View className="flex items-center w-full max-w-md gap-8 text-center lg:space-y-4 lg:block">
                        <Text className="text-2xl font-bold text-white">Welcome Back!</Text>
                        <Text className="w-2/3 text-xl font-bold text-center text-white">
                            Sign in to your account and start manage your subscriptions.
                        </Text>
                    </View>
                </View>
                <View className="flex items-center justify-center h-2/3">
                    <View className="w-full max-w-md px-6 mx-auto space-y-6 lg:px-2">
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
