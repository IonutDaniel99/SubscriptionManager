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
    const renderItemIcon = (props: IconProps): IconElement => <Avatar source={{ uri: imageUrl }} />
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
            title={`${title}`}
            description={`15 $`}
            accessoryLeft={renderItemIcon}
            accessoryRight={renderItemAccessory}
            {...props}
        />
    )
}
