import React, { useEffect, useState } from 'react'
import { Divider, List, Text } from '@ui-kitten/components'
import { ScrollView, StyleSheet, View } from 'react-native'
import { ListItem } from './ListItem' // assuming both components are in the same directory
import { format } from 'date-fns'
import { getObjectValueData } from '../../common/utils/async_storage/AsyncStorage'
import { useAtom } from 'jotai'
import { servicesLogoAtom } from '../../common/atoms/useServicesLogoAtom'
interface IListItem {
    title: string
    description: string
    imageUrl: string
    payDate: number
}

type GroupedList = {
    date: number
    items: IListItem[]
}

export const CustomList = () => {
    const [services] = useAtom(servicesLogoAtom)
    const items = services?.map((item, index) => {
        let unixMockDate = 1724644000

        switch (index) {
            case 1:
            case 3:
            case 4:
                unixMockDate = 1724344000
                break
            case 2:
            case 5:
                unixMockDate = 1726495200
                break
            case 10:
                unixMockDate = 1743365600
                break
            case 7:
            case 8:
            case 6:
            case 9:
                unixMockDate = 1749591200
                break
        }

        return {
            title: item.name,
            description: `Service ${item.name}`,
            imageUrl: item.url,
            payDate: unixMockDate
        } as IListItem
    })

    const groupedItems: GroupedList[] = []

    items?.forEach((item) => {
        const existingGroup = groupedItems.find((group) => group.date === item.payDate)

        if (existingGroup) {
            existingGroup.items.push(item)
        } else {
            groupedItems.push({ date: item.payDate, items: [item] })
        }
    })

    const sortedGroupedItems = groupedItems.sort((a, b) => a.date - b.date)
    return (
        <ScrollView style={styles.listContainer}>
            {sortedGroupedItems.map((item) => {
                const convertedTime = format(new Date(item.date * 1000), 'd MMMM yyyy')
                return (
                    <View key={item.date} style={styles.listView}>
                        <Text style={styles.listViewText} category="s1">
                            {convertedTime}
                        </Text>
                        <Divider />
                        {item.items.map((item, index2) => (
                            <ListItem {...item} key={item.title} />
                        ))}
                    </View>
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
        paddingHorizontal: 16,
        paddingBottom: 160
    },
    listView: {
        paddingVertical: 16
    },
    listViewText: {
        fontWeight: '700',
        paddingBottom: 8
    }
})
