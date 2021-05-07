import {ProfileType} from './profile-reducer';

export type authStateType = {
    userData: null | userDataType
    isLogin: boolean
    profileInfo: ProfileType | null
}
type actionType = {
    type: string
    userData: userDataType
    profileInfo: ProfileType
}
export type userDataType = {
    id: number
    email: string
    login: string
}

const SET_USER_DATA = 'SET-USER-DATA';
const initialState: authStateType = {
    userData: null,
    isLogin: false,
    profileInfo: null,
}

function authReducer(state = initialState, action: actionType) {
    switch (action.type) {
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

export const setUserData = (userData: userDataType, profileInfo: ProfileType) => ({
    type: SET_USER_DATA,
    userData: userData,
    profileInfo: profileInfo,
})

export default authReducer;
