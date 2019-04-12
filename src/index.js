import 'core-js/es6/map';
import 'core-js/es6/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vkui-connect-promise';
import App from './App';

import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import main from './Panels/Main/reducer';
import thunk from 'redux-thunk';

const appReducers = {
    main
};
const store = createStore(combineReducers(appReducers), applyMiddleware(thunk));
// import registerServiceWorker from './sw'; Init VK App
connect.send('VKWebAppInit', {});
// connect.send('VKWebAppGetUserInfo', {}); connect.send('VKWebAppGetAuthToken',
// {'app_id': 6921887, 'scope': 'groups'}); Если вы хотите, чтобы ваше
// веб-приложение работало в оффлайне и загружалось быстрее, расскомментируйте
// строку с registerServiceWorker(); Но не забывайте, что на данный момент у
// технологии есть достаточно подводных камней Подробнее про сервис воркеры
// можно почитать тут — https://vk.cc/8MHpmT registerServiceWorker();

ReactDOM.render(
    <Provider store={store}><App/></Provider>, document.getElementById('root'));
