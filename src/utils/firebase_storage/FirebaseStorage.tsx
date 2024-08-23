import storage from '@react-native-firebase/storage'

export const getServicesLogoImageUrl = async (name: string): Promise<string> => {
    try {
        const reference = storage().ref(`/assets/logos/${name}.png`)
        const url = await reference.getDownloadURL()
        return url
    } catch (error) {
        console.error('Error getting download URL:', error)
        throw error
    }
}

export const getAllServicesLogoUrls = async (): Promise<{ name: string; url: string }[]> => {
    try {
        const reference = storage().ref('/assets/logos')
        const result = await reference.listAll()

        // Map to get download URLs
        const filePromises = result.items.map(async (itemRef) => {
            const url = await itemRef.getDownloadURL()
            return { name: itemRef.name, url }
        })

        // Wait for all promises to resolve
        const fileList = await Promise.all(filePromises)
        return fileList
    } catch (error) {
        console.error('Error getting download URLs:', error)
        throw error
    }
}
