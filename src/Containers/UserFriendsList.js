import React from 'react';
import {Avatar, List, Cell} from '@vkontakte/vkui'

const UserFriendsList = (props) => {

    const {userFriends} = props;

    return (
        <List>
            {userFriends.map(friend => {
                return (
                    <Cell
                        key={friend.id}
                        before={< Avatar size={48} src = {
                        friend.photo_100
                    } />}>{friend.first_name} {friend.last_name}</Cell>
                )
            })
}
        </List>
    )
}

export default UserFriendsList;