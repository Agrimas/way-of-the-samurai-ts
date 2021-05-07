import {createStore, combineReducers} from 'redux'
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';

export type  dispatchType = (action: actionType) => void;
export type actionType = {
    type: string
    text?: string
}

let reducers = combineReducers({
    friends: sidebarReducer,
    messagesPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

export const Store = createStore(reducers);

export type StateType = ReturnType<typeof Store.getState>

export type StoreType = typeof Store;