import {AuthAPI, ProfileAPI, ProfileType, requestLoginType, userDataType} from '../../api/api';
import {ThunkAction} from 'redux-thunk';
import {StateType} from '../redux-store';

const SET_USER_DATA = 'SET-USER-DATA';
const SET_USER_PROFILE_DATA = 'SET-USER-PROFILE-DATA';
const SET_AUTH = 'SET-AUTH';
const SET_ERROR = 'SET-ERROR';
const SET_CAPTCHA = 'SET-CAPTCHA';

type actionType =
    setUserDataAction
    | setAuthActionType
    | setErrorActionType
    | setCaptchaActionType
    | setUserProfileDataAction

const initialState = {
    isLogin: false,
    userData: null as userDataType | null,
    error: null as string | null,
    captcha: null as string | null,
    profile: null as ProfileType | null,
}

function authReducer(state = initialState, action: actionType) {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                isLogin: action.isLogin,
            }
        case SET_USER_PROFILE_DATA:
            return {
                ...state,
                profile: action.profileData,
            }
        case SET_USER_DATA:
            return {
                ...state,
                userData: action.userData,
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.error,
            }
        case SET_CAPTCHA:
            return {
                ...state,
                captcha: action.captcha
            }
        default:
            return state;
    }
}

type setUserDataAction = {
    type: typeof SET_USER_DATA
    userData: userDataType | null
}
export const setUserData = (userData: userDataType | null): setUserDataAction => ({
    type: SET_USER_DATA,
    userData: userData,
})
type setUserProfileDataAction = {
    type: typeof SET_USER_PROFILE_DATA
    profileData: ProfileType | null
}
export const setUserProfileData = (profileData: ProfileType | null): setUserProfileDataAction => ({
    type: SET_USER_PROFILE_DATA,
    profileData,
})
type setAuthActionType = {
    type: typeof SET_AUTH
    isLogin: boolean
}
export const setAuth = (isLogin: boolean): setAuthActionType => ({type: SET_AUTH, isLogin})
type setErrorActionType = {
    type: typeof SET_ERROR
    error: string | null
}
export const setError = (error: string | null): setErrorActionType => ({type: SET_ERROR, error})
type setCaptchaActionType = {
    type: typeof SET_CAPTCHA
    captcha: string | null
}
export const setCaptcha = (captcha: string | null): setCaptchaActionType => ({type: SET_CAPTCHA, captcha})

export const getUserData = (): ThunkAction<Promise<void>, StateType, unknown, actionType> => async dispatch => {
    const response = await AuthAPI.auth()
    if (response.resultCode === 0) {
        dispatch(setUserData(response.data));
        const profile = await ProfileAPI.getProfile(response.data.id);
        dispatch(setUserProfileData(profile));
        dispatch(setAuth(true));
    }
}
export const login = (data: requestLoginType): ThunkAction<Promise<void>, StateType, unknown, actionType> => async dispatch => {
    const response = await AuthAPI.login(data)
    switch (response.resultCode) {
        case 0:
            await dispatch(getUserData());
            dispatch(setError(null))
            dispatch(setCaptcha(null));
            break;
        case 10:
            await dispatch(getCaptcha());
            break;
        default:
            dispatch(setError(response.messages.join()))
            break;
    }
}
export const logout = (): ThunkAction<Promise<void>, StateType, unknown, actionType> => async dispatch => {
    const response = await AuthAPI.logout();
    if (response.resultCode === 0) {
        dispatch(setAuth(false));
        dispatch(setUserData(null));
        dispatch(setUserProfileData(null));
    }
}
export const getCaptcha = (): ThunkAction<Promise<void>, StateType, unknown, actionType> => async dispatch => {
    const url = await AuthAPI.getCaptcha();
    if (url) {
        dispatch(setCaptcha(url));
    }
}

export default authReducer;
