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
}

export const ListItem = ({
    title,
    description,
    index,
    ...props
}: IListItemProps & { index: number }): React.ReactElement => {
    const renderItemIcon = (props: IconProps): IconElement => (
        <Avatar source={require('../../assets/servicesLogos/netflix.png')} />
    )
    const renderItemAccessory = (): React.ReactElement => <Button size="tiny">FOLLOW</Button>

    return (
        <UIKittenListItem
            title={`${title} ${index + 1}`}
            description={`${description} ${index + 1}`}
            accessoryLeft={renderItemIcon}
            accessoryRight={renderItemAccessory}
            {...props}
        />
    )
}
