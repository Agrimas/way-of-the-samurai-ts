import {createStore, combineReducers} from 'redux'
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

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

export type StateType = ReturnType<typeof Store.getState>

export type StoreType = typeof Store;