import React from 'react'
import useSession from '../../hooks/useSession'
import { Button, Layout, Text } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'
import { ThemeContext } from '../../context/theme-context'
import { TopNavigationBar } from '../../Components/Tabs/TopNavigation'
import { NavigationProp } from '@react-navigation/native'
import { CustomList } from '../../Components/List/List'
interface IHomeScreen {
    navigation: NavigationProp<any>
}
export default function HomeScreen({ navigation }: IHomeScreen) {
    const themeContext = React.useContext(ThemeContext)
    const { user } = useSession()

    return (
        <>
            <TopNavigationBar navigation={navigation} displayProfileIcon title={`Welcome, ${user?.displayName}`} />
            <Layout style={styles.container}>
                <CustomList />
            </Layout>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center'
    }
})
