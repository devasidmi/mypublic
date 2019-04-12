import connect from '@vkontakte/vkui-connect-promise';

export const getUserGroups = async(authToken, userId) => {
    return await connect.send("VKWebAppCallAPIMethod", {
        "method": "groups.get",
        "params": {
            "user_id": userId,
            "fields": "members_count",
            "extended": true,
            "v": "5.95",
            "access_token": authToken
        }
    });
}

export const getUserFriends = async(authToken, userId) => {
    return await connect.send("VKWebAppCallAPIMethod", {
        "method": "friends.get",
        "params": {
            "user_id": userId,
            "order": "random",
            "fields": "photo_100",
            "name_case": "nom",
            "v": "5.95",
            "access_token": authToken
        }
    });
}