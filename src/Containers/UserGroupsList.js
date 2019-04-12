import React from 'react';
import {Avatar, List, Cell} from '@vkontakte/vkui'

const UserGroupsList = (props) => {

    const {userGroups} = props;

    return (
        <List>
            {userGroups.map(group => {
                return (
                    <Cell
                        key={group.id}
                        before={< Avatar src = {
                        group.photo_200
                    } />}
                        description={`${group.members_count} Подписчиков`}>{group.name}</Cell>
                )
            })
}
        </List>
    )
}

export default UserGroupsList;