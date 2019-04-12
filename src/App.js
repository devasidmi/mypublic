import React from 'react';
import connect from '@vkontakte/vkui-connect';
import {connect as ReactConnect} from 'react-redux';
import {Root, View, Panel} from '@vkontakte/vkui';
import {changeView, changePanel, changeFetchedUser, changeAuthToken} from './Panels/Main/reducer';
import MainPanel from './Panels/Main/MainPanel';
import '@vkontakte/vkui/dist/vkui.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeView: 'main',
            activePanel: 'main',
            fetchedUser: null,
            authToken: null
        };
    }

    componentDidMount() {

        const {changeFetchedUser, changeAuthToken} = this.props;

        connect.subscribe((e) => {
            switch (e.detail.type) {
                case
                    'VKWebAppGetUserInfoResult':
                    changeFetchedUser(e.detail.data);
                    break;
                case
                    'VKWebAppAccessTokenReceived':
                    changeAuthToken(e.detail.data.access_token);
                    break;
                default:
                    console.log(e.detail.type);
            }
        });

        connect.send('VKWebAppGetUserInfo', {});
        connect.send('VKWebAppGetAuthToken', {
            'app_id': 6921887,
            'scope': 'groups,friends'
        });
    }

    go = (e) => {
        this.setState({activePanel: e.currentTarget.dataset.to})
    };

    render() {
        return (
            <Root activeView={this.state.activeView}>
                <View id="main" activePanel='main'>
                    <Panel id="main">
                        <MainPanel changeView={this.changeView} changePanel={this.changePanel}/>
                    </Panel>
                </View>
            </Root>

        );
    }
}

const mapStateToProps = state => state.main
const mapDispatchToProps = {
    changeView,
    changePanel,
    changeFetchedUser,
    changeAuthToken
}

export default ReactConnect(mapStateToProps, mapDispatchToProps)(App);