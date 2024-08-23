import { useState, useEffect, useMemo } from 'react'
import { Avatar, Icon, IconElement, IconProps, Spinner } from '@ui-kitten/components'
import { FirebaseAuthTypes } from '@react-native-firebase/auth'

type User = {
    photoURL?: string
}

interface ProfilePhotoProps {
    user: FirebaseAuthTypes.User | null | undefined
    isLoading: boolean
}
const PersonIcon = (props: IconProps): IconElement => <Icon {...props} name="person" />

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ user, isLoading }) => {
    const profilePhoto = useMemo(() => {
        if (isLoading) return <Spinner />
        if (user?.photoURL) {
            return <Avatar source={{ uri: user.photoURL }} />
        } else {
            return <PersonIcon />
        }
    }, [user?.photoURL, isLoading])

    return profilePhoto
}

export default ProfilePhoto
