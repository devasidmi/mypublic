import React, {Fragment, useState} from 'react';
import {Tabs, TabsItem, HorizontalScroll, PanelHeader, FixedLayout} from '@vkontakte/vkui';
import {connect as ReactConnect} from 'react-redux';

import {fetchUserGroups, fetchUserFriends} from '../Main/reducer';
import UserGroupsList from '../../Containers/UserGroupsList';
import UserFriendsList from '../../Containers/UserFriendsList';

const MainPanel = (props) => {

    const {
        changeView,
        changePanel,
        fetchUserGroups,
        fetchUserFriends,
        userGroups,
        userFriends,
        fetchedUser,
        authToken
    } = props;
    const [activeTab,
        setActiveTab] = useState('groups');

    if (fetchedUser && authToken && userGroups.length === 0) {
        fetchUserGroups(authToken, fetchedUser.id);
        fetchUserFriends(authToken, fetchedUser.id);
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
    fetchUserGroups,
    fetchUserFriends
}
export default ReactConnect(mapStateToProps, mapDispatchToProps)(MainPanel);