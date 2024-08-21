import { useState, useEffect } from 'react'
import { currentUserAtom } from '../atoms/useCurrentUserAtom'
import { useAtom } from 'jotai'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { CustomShowToast } from '../Components/Toast/ToastComponent'
const useSession = () => {
    const [user, setUser] = useAtom(currentUserAtom)
    const [isAuth, setIsAuth] = useState<boolean>(false)

    useEffect(() => {
        const currentUser = GoogleSignin.getCurrentUser()
        if (currentUser) {
            setUser(currentUser)
            setIsAuth(true)
        }
    }, [])

    const removeUser = async () => {
        try {
            await GoogleSignin.signOut().then(() => {
                setIsAuth(false)
                setUser(null)
                CustomShowToast('Logged out')
            })
        } catch (error) {
            console.error('Failed to sign out', error)
        }
    }
    return { user, removeUser, isAuth }
}

export default useSession
