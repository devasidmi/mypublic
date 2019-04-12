import React, {Fragment, useState} from 'react';
import {Tabs, TabsItem, HorizontalScroll, PanelHeader, FixedLayout} from '@vkontakte/vkui';
import {connect as ReactConnect} from 'react-redux';

import {changeUserGroups, changeUserFriends} from '../Main/reducer';
import UserGroupsList from '../../Containers/UserGroupsList';
import UserFriendsList from '../../Containers/UserFriendsList';

const MainPanel = (props) => {

    const {
        changeView,
        changePanel,
        changeUserGroups,
        changeUserFriends,
        userGroups,
        userFriends,
        fetchedUser,
        authToken
    } = props;
    const [activeTab,
        setActiveTab] = useState('groups');

    if (fetchedUser && authToken && userGroups.length === 0) {
        changeUserGroups(authToken, fetchedUser.id);
        changeUserFriends(authToken, fetchedUser.id);
    }

    const renderTab = tab => {
        switch (tab) {
            case "groups":
                return (<UserGroupsList userGroups={userGroups}/>)
            case "friends":
                return (<UserFriendsList userFriends={userFriends}/>)
            default:
                return (
                    <div>default</div>
                )
        }
    }

    return (
        <Fragment>
            <PanelHeader noShadow={true}>Мой паблик</PanelHeader>
            <FixedLayout vertical="top">
                <Tabs type="buttons" theme="header">
                    <HorizontalScroll>
                        <TabsItem
                            onClick={() => {
                            setActiveTab('groups')
                        }}
                            selected={activeTab === 'groups'}>
                            Мои группы
                        </TabsItem>
                        <TabsItem
                            onClick={() => {
                            setActiveTab('friends')
                        }}
                            selected={activeTab === 'friends'}>
                            Мои друзья
                        </TabsItem>
                        <TabsItem
                            onClick={() => {
                            setActiveTab('friendsRecommendations')
                        }}
                            selected={activeTab === 'friendsRecommendations'}>
                            Рекомендации друзей
                        </TabsItem>
                    </HorizontalScroll>
                </Tabs>
            </FixedLayout>
            <div id="content" style={{
                marginTop: '50px'
            }}>{renderTab(activeTab)}
            </div>
        </Fragment>
    )
}

const mapStateToProps = state => state.main
const mapDispatchToProps = {
    changeUserGroups,
    changeUserFriends
}
export default ReactConnect(mapStateToProps, mapDispatchToProps)(MainPanel);