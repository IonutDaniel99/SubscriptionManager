import React from 'react'
import { List } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'
import { ListItem } from './ListItem' // assuming both components are in the same directory

interface IListItem {
    title: string
    description: string
}

const data = new Array(24).fill({
    title: 'Title for Item',
    description: 'Description for Item'
})

export const CustomList = (): React.ReactElement => {
    const renderItem = ({ item, index }: { item: IListItem; index: number }): React.ReactElement => (
        <ListItem title={item.title} description={item.description} index={index} />
    )

    return <List style={styles.container} data={data} renderItem={renderItem} />
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 16
    }
})
