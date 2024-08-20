import { useState, useEffect } from 'react'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

const useSession = () => {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    return { user, loading }
}

export default useSession
