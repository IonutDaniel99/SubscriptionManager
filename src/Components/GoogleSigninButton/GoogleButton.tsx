import { Button, Icon, Layout, Text } from '@ui-kitten/components'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'

interface IGoogleButton {
    onPress: () => void
}

export const GoogleButton = ({ onPress }: IGoogleButton) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.5}>
            <>
                <View style={styles.iconContainer}>
                    <Image source={require('../../assets/logo/Google.png')} style={styles.signInGoogleImage} />
                </View>
                <Text style={styles.text} onPress={onPress}>
                    Login with Google!
                </Text>
            </>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        maxHeight: 56,
        backgroundColor: '#1c73e8',
        borderRadius: 6,
        padding: 2,
        gap: 16
    },
    iconContainer: {
        height: 48,
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 48,
        borderRadius: 4,
        marginHorizontal: 2
    },
    text: {
        marginLeft: 8,
        marginRight: 20,
        borderWidth: 0,
        fontSize: 18,
        fontWeight: 'bold'
    },
    signInGoogleImage: {
        borderRadius: 4,
        height: 28,
        position: 'relative',
        width: 28
    }
})
