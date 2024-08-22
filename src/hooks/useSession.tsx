import { useState, useEffect } from 'react'
import { currentUserAtom } from '../atoms/useCurrentUserAtom'
import { useAtom } from 'jotai'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { CustomShowToast } from '../Components/Toast/ToastComponent'
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { APP_ROUTES } from '../utils/appRoutes'

const useSession = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useAtom(currentUserAtom)
    const [isAuth, setIsAuth] = useState<boolean>(false)

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged((user: any) => {
            setUser(user)
            if (isLoading) setIsLoading(false)
        })
        return subscriber
    }, [])

    const removeUser = async () => {
        try {
            auth()
                .signOut()
                .then(() => {
                    setIsAuth(false)
                    setUser(null)
                    CustomShowToast('Logged out')
                })
        } catch (error) {
            console.error('Failed to sign out', error)
        }
    }
    return { user, isLoading, removeUser, isAuth }
}

export default useSession
