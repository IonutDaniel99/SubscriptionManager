import React from 'react'
import {
    Button,
    Icon,
    IconElement,
    ListItem as UIKittenListItem,
    ListItemProps,
    IconProps,
    Avatar
} from '@ui-kitten/components'
import { StyleSheet } from 'react-native'

interface IListItemProps extends ListItemProps {
    title: string
    description: string
    imageUrl: string
}

export const ListItem = ({
    title,
    description,
    imageUrl,
    index,
    ...props
}: IListItemProps & { index: number }): React.ReactElement => {
    const renderItemIcon = (props: IconProps): IconElement => (
        <Avatar source={{ uri: imageUrl }} size="large" style={styles.avatar} shape="square" />
    )
    const renderItemAccessory = (props: IconProps): React.ReactElement => {
        return (
            <>
                <Icon {...props} name="edit-outline" />
                <Icon {...props} name="trash-outline" />
            </>
        )
    }

    return (
        <UIKittenListItem
            style={styles.container}
            title={`${title}`}
            description={`${Math.floor(Math.random() * 100)} $`}
            accessoryLeft={renderItemIcon}
            accessoryRight={renderItemAccessory}
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 64
    },
    avatar: {
        margin: 8,
        height: 40,
        width: 40
    }
})
