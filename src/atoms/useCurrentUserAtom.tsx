import { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { atom } from 'jotai'

export const currentUserAtom = atom<FirebaseAuthTypes.User | null>()
