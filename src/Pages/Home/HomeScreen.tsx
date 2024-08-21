import React from 'react'
import { Button, Text, View } from 'react-native'
import useSession from '../../hooks/useSession'

export default function HomeScreen() {
    const { user, removeUser } = useSession()

    return (
        <View className="bg-red-400">
            <Text>{user?.user.name}</Text>
            <Button title="Disconnect" onPress={removeUser} />
        </View>
    )
}
