import AsyncStorage from '@react-native-async-storage/async-storage'
import { ToastAndroid } from 'react-native'

export const storeSingleValueData = async (key: string, value: any) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e: any) {
        ToastAndroid.show(e.message, 2)
    }
}

export const storeObjectValueData = async (key: string, value: any) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e: any) {
        ToastAndroid.show(e.message, 2)
    }
}

export const getSingleValueData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) {
            return value
        }
        return null
    } catch (e: any) {
        ToastAndroid.show(e.message, 2)
    }
}

export const getObjectValueData = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (e: any) {
        ToastAndroid.show(e.message, 2)
    }
}
