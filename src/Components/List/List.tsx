import React, { useEffect, useState } from 'react'
import { List } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'
import { ListItem } from './ListItem' // assuming both components are in the same directory
import { getAllServicesLogoUrls } from '../../utils/firebase_storage/FirebaseStorage'

interface IListItem {
    title: string
    description: string
    imageUrl: string
}

export const CustomList = (): React.ReactElement => {
    const [services, setService] = useState<{ name: string; url: string }[]>()

    useEffect(() => {
        getAllServicesLogoUrls().then((items) => setService(items))
    }, [])

    const items = services?.map((item) => {
        return {
            title: item.name,
            description: `Service ${item.name}`,
            imageUrl: item.url
        } as IListItem
    })

    const renderItem = ({ item, index }: { item: IListItem; index: number }): React.ReactElement => (
        <ListItem title={item.title} description={item.description} index={index} imageUrl={item.imageUrl} />
    )

    return <List style={styles.container} data={items} renderItem={renderItem} />
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 16
    }
})
