import {createStore, combineReducers} from 'redux'
import dialogsReducer, {messagesPageStateType} from './dialogs-reducer';
import profileReducer, {profilePageStateType} from './profile-reducer';
import sidebarReducer, {FriendsType} from './sidebar-reducer';

export type  dispatchType = (action: actionType) => void;
export type actionType = {
    type: string
    text?: string
}

let reducers = combineReducers({
    friends: sidebarReducer,
    messagesPage: dialogsReducer,
    profilePage: profileReducer
});

export const Store = createStore(reducers);

export type StoreType = typeof Store;