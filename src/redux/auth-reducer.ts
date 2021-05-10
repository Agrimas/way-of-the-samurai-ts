import {ProfileType} from './profile-reducer';
import {AuthAPI, ProfileAPI} from '../api/api';
import {ThunkAction} from 'redux-thunk';
import {StateType} from './redux-store';

export type authStateType = {
    userData: null | userDataType
    isLogin: boolean
    profileInfo: ProfileType | null
}
type actionType = setUserDataActionCreator | setAuthActionCreatorType
export type userDataType = {
    id: number
    email: string
    login: string
}

const SET_USER_DATA = 'SET-USER-DATA';
const SET_AUTH = 'SET-AUTH';

const initialState: authStateType = {
    userData: null,
    isLogin: false,
    profileInfo: null,
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
        default:
            return state;
    }
}

type setUserDataActionCreator = {
    type: typeof SET_USER_DATA
    userData: userDataType
    profileInfo: ProfileType
}
export const setUserData = (userData: userDataType, profileInfo: ProfileType): setUserDataActionCreator => ({
    type: SET_USER_DATA,
    userData: userData,
    profileInfo: profileInfo,
})

type setAuthActionCreatorType = {
    type: typeof SET_AUTH
    isLogin: boolean
}
export const setAuth = (isLogin: boolean): setAuthActionCreatorType => ({type: SET_AUTH, isLogin: isLogin})

export const getUserData = (): ThunkAction<Promise<void>, StateType, unknown, actionType> => async (dispatch) => {
    AuthAPI.auth().then(response => {
        if (response.resultCode === 0) {
            debugger
                dispatch(setAuth(true))
            ProfileAPI.getProfileInfo(response.data.id).then(profileInfo => {
                dispatch(setUserData(response.data, profileInfo));
            })
        }
    });
}

export default authReducer;
