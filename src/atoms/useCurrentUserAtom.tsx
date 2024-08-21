import { User } from '@react-native-google-signin/google-signin'
import { atom } from 'jotai'

export const currentUserAtom = atom<User | null>()
