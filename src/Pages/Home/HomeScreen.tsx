import React, { useEffect } from 'react'
import useSession from '../../hooks/useSession'
import { Button, Icon, IconElement, Layout, Text } from '@ui-kitten/components'
import { StyleSheet, ToastAndroid, TouchableOpacity } from 'react-native'
import { ThemeContext } from '../../context/theme-context'
import { TopNavigationBar } from '../../Components/Tabs/TopNavigation'
import { NavigationProp } from '@react-navigation/native'
import { CustomList } from '../../Components/List/List'
import { getObjectValueData, storeObjectValueData } from '../../common/utils/async_storage/AsyncStorage'
import { useAtom } from 'jotai'
import { servicesLogoAtom } from '../../common/atoms/useServicesLogoAtom'
import { getAllServicesLogoUrls } from '../../common/utils/firebase_storage/FirebaseStorage'
import Logger from '../../common/utils/logger/logger'
import { APP_ROUTES } from '../../common/enums/appRoutes'
interface IHomeScreen {
    navigation: NavigationProp<any>
}

export default function HomeScreen({ navigation }: IHomeScreen) {
    const { user } = useSession()
    const [, setServiceLogo] = useAtom(servicesLogoAtom)

    const fetchServicesData = async () => {
        try {
            const result = await getObjectValueData('servicesLogo')
            if (result !== null) {
                Logger.info('HomeScreen', 'Services loaded from local storage')
                setServiceLogo(result)
            } else {
                Logger.warn('HomeScreen', 'Services loaded from firebase storage')
                const items = await getAllServicesLogoUrls()
                await storeObjectValueData('servicesLogo', items)
                setServiceLogo(items)
            }
        } catch (error) {
            Logger.error('HomeScreen', 'Failed to fetch data from local storage')
        }
    }

    useEffect(() => {
        fetchServicesData()
    }, [])

    const IconSimpleUsageShowcase = (): IconElement => <Icon name="plus-outline" style={styles.icon} />

    return (
        <>
            <TopNavigationBar navigation={navigation} displayProfileIcon title={`Welcome, ${user?.displayName}`} />
            <Layout style={styles.container} level="2">
                <CustomList />
                <Button
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        bottom: 40,
                        right: 40,
                        width: 56,
                        height: 56
                    }}
                    onPress={() => navigation.navigate(APP_ROUTES.ADD_SUBSCRIPTION)}
                    accessoryRight={IconSimpleUsageShowcase}
                ></Button>
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
    },
    icon: {
        width: 32,
        height: 32,
        tintColor: '#fff'
    }
})
