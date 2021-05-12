import {ProfileType} from './profile-reducer';
import {AuthAPI, ProfileAPI} from '../api/api';
import {ThunkAction} from 'redux-thunk';
import {StateType} from './redux-store';
import {Dispatch} from 'react';

const SET_USER_DATA = 'SET-USER-DATA';
const SET_AUTH = 'SET-AUTH';
const SET_ERROR = 'SET-ERROR';

export type authStateType = {
    userData: userDataType | null
    isLogin: boolean
    profileInfo: ProfileType | null
    errorMessage?: string,
}
type actionType = setUserDataActionCreator | setAuthActionCreatorType | setErrorActionCreatorType
export type userDataType = {
    id: number
    email: string
    login: string
}

const initialState: authStateType = {
    userData: null,
    isLogin: false,
    profileInfo: null,
    errorMessage: '',
}

function authReducer(state = initialState, action: actionType) {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                isLogin: action.isLogin,
            }
        case SET_USER_DATA:
            return {
                ...state,
                userData: action.userData,
                profileInfo: action.profileInfo,
            }
        case SET_ERROR:
            return {
                ...state,
                errorMessage: action.error,
            }
        default:
            return state;
    }
}

type setUserDataActionCreator = {
    type: typeof SET_USER_DATA
    userData: userDataType | null
    profileInfo: ProfileType | null
}
export const setUserData = (userData: userDataType | null, profileInfo: ProfileType | null): setUserDataActionCreator => ({
    type: SET_USER_DATA,
    userData: userData,
    profileInfo: profileInfo,
})
type setAuthActionCreatorType = {
    type: typeof SET_AUTH
    isLogin: boolean
}
export const setAuth = (isLogin: boolean): setAuthActionCreatorType => ({type: SET_AUTH, isLogin})

type setErrorActionCreatorType = {
    type: typeof SET_ERROR
    error: string
}
export const setError = (error: string): setErrorActionCreatorType => ({type: SET_ERROR, error})

export const getUserData = (): ThunkAction<Promise<void>, StateType, unknown, actionType> => async (dispatch) => {
    AuthAPI.auth().then(response => {
        if (response.resultCode === 0) {
            ProfileAPI.getProfileInfo(response.data.id).then(profileInfo => {
                dispatch(setUserData(response.data, profileInfo));
            })
        }
    });
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<Promise<void>, StateType, unknown, actionType> => async (dispatch) => {
    return AuthAPI.login(email, password, rememberMe).then(response => {
        if (response.resultCode === 0) {
            dispatch(setAuth(true));
            dispatch(setError(''))
            dispatch(getUserData());
        } else {
            dispatch(setError(response.messages.join()))
        }
    })
}

export const logout = () => async (dispatch: Dispatch<actionType>) => {
    return AuthAPI.logout().then(response => {
        if (response.resultCode === 0) {
            dispatch(setAuth(false));
            dispatch(setUserData(null, null));
        }
    })
}


export default authReducer;
