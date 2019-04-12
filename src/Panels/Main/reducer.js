import {getUserGroups, getUserFriends} from '../../vk-api';

const ACTIONS = {
    CHANGE_VIEW: "MAIN_CHANGE_VIEW",
    CHANGE_PANEL: "MAIN_CHANGE_PANEL",
    CHANGE_FETCHED_USER: "MAIN_CHANGE_FETCHED_USER",
    CHANGE_USER_GROUPS: "MAIN_CHANGE_USER_GROUPS",
    CHANGE_USER_FRIENDS: "MAIN_CHANGE_USER_FRIENDS",
    CHANGE_AUTH_TOKEN: "MAIN_CHANGE_AUTH_TOKEN"
}

const initialState = {
    activeView: 'main',
    activePanel: 'main',
    fetchedUser: null,
    userGroups: [],
    userFriends: [],
    authToken: null
}

const MainReducer = (state = initialState, action) => {
    const payload = action.payload;
    switch (action.type) {
        case ACTIONS.CHANGE_VIEW:
            return {
                ...state,
                activeView: payload.view,
                activePanel: payload.panel
            };
        case ACTIONS.CHANGE_PANEL:
            return {
                ...state,
                activePanel: payload
            };
        case ACTIONS.CHANGE_FETCHED_USER:
            return {
                ...state,
                fetchedUser: payload
            };
        case ACTIONS.CHANGE_USER_GROUPS:
            return {
                ...state,
                userGroups: payload
            }
        case ACTIONS.CHANGE_USER_FRIENDS:
            return {
                ...state,
                userFriends: payload
            }
        case ACTIONS.CHANGE_AUTH_TOKEN:
            return {
                ...state,
                authToken: payload
            };
        default:
            return state
    }
}

export const changeView = (view, panel) => dispatch => {
    dispatch({
        type: ACTIONS.CHANGE_VIEW,
        payload: {
            view: view,
            panel: panel
        }
    });
}

export const changePanel = panel => dispatch => {
    console.log("new panel: ", panel);
    dispatch({type: ACTIONS.CHANGE_PANEL, payload: panel})
}

export const changeAuthToken = token => dispatch => {
    console.log("new token: ", token);
    dispatch({type: ACTIONS.CHANGE_AUTH_TOKEN, payload: token})
}

export const fetchUserGroups = (authToken, userId) => async dispatch => {
    getUserGroups(authToken, userId).then(res => {
        const groups = res.data.response.items;
        console.log("new groups: ", groups);
        dispatch({type: ACTIONS.CHANGE_USER_GROUPS, payload: groups})
    });
}

export const fetchUserFriends = (authToken, userId) => async dispatch => {
    getUserFriends(authToken, userId).then(res => {
        const friends = res.data.response.items;
        console.log("new friends: ", friends);
        dispatch({type: ACTIONS.CHANGE_USER_FRIENDS, payload: friends})
    });
}

export const changeFetchedUser = fetchedUser => dispatch => {
    console.log("new fetchedUser: ", fetchedUser);
    dispatch({type: ACTIONS.CHANGE_FETCHED_USER, payload: fetchedUser})
}

export default MainReducer;