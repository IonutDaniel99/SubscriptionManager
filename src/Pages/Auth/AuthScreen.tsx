import React from 'react'
import { StyleSheet, View } from 'react-native'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'
import { ImageOverlay } from '../../Components/ImageOverlay'
import { Text } from '@ui-kitten/components'
import { GoogleButton } from '../../Components/GoogleSigninButton/GoogleButton'

export default function AuthScreen({ navigation }: { navigation: any }) {
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
        <ImageOverlay style={styles.container} source={require('../../assets/backgrounds/auth-background.jpg')}>
            <View style={styles.headerContainer}>
                <Text category="h1" status="control">
                    Hello there!
                </Text>
                <Text style={{ paddingTop: 16 }} category="h6" status="control">
                    Sign in to your account
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <GoogleButton onPress={() => onGoogleButtonPress()} />
            </View>
        </ImageOverlay>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 40
    },
    headerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 216
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
