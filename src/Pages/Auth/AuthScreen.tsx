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
            <View className="w-full h-screen grid-cols-2 lg:grid lg:min-h-screen">
                <View className="flex items-center justify-center h-1/6 bg-primary lg:h-full">
                    <View className="flex items-center max-w-md gap-8 text-center lg:space-y-4 text-primary-foreground lg:block">
                        <Text className="text-2xl font-bold lg:text-5xl text-foreground">Welcome Back!</Text>
                        <Text className="hidden lg:block lg:text-xl text-foreground">
                            Sign in to your account and start exploring our local events.
                        </Text>
                    </View>
                </View>
                <View className="flex items-center justify-center h-5/6 lg:h-full ">
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
