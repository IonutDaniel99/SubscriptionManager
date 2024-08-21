import { ToastAndroid, type ToastAndroidStatic } from 'react-native'

export const CustomShowToast = (message: string, toastType?: 'SHORT' | 'LONG') => {
    ToastAndroid.show(message, ToastAndroid[toastType || 'SHORT'])
}
