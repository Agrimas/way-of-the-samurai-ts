import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import ThunkMiddleWare from 'redux-thunk';
import dialogsReducer from './reducers/dialogs-reducer';
import profileReducer from './reducers/profile-reducer';
import sidebarReducer from './reducers/sidebar-reducer';
import usersReducer from './reducers/users-reducer';
import authReducer from './reducers/auth-reducer';
import appReducer from './reducers/app-reducer';

let reducers = combineReducers({
    friends: sidebarReducer,
    messagesPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
});

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(reducers, composeEnhancers(applyMiddleware(ThunkMiddleWare)));

export type StateType = ReturnType<typeof Store.getState>

export type StoreType = typeof Store;