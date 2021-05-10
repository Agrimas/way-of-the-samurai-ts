import {ProfileAPI} from '../api/api';
import {ThunkAction} from 'redux-thunk';
import {StateType} from './redux-store';

type actionProfilePageType = {
    type: string
    text?: string
    profile?: ProfileType | null
    isFetching?: boolean
}
export type PostType = {
    id: number
    text: string
    likesCount: number
}
export type ProfileType = {
    aboutMe: string,
    contacts: ProfileContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: ProfilePhotosType,
}
type ProfileContactsType = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string,
}
type ProfilePhotosType = {
    small: string,
    large: string,
}

const ADD_POST = 'ADD-POST';
const UPDATE_TEXTAREA_VALUE_MY_POSTS = 'UPDATE-TEXTAREA-VALUE-MY-POSTS';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_FETCHING = 'SET-FETCHING';

const initialState = {
    textareaValue: '',
    myPosts: [
        {
            id: 1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id itaque obcaecati pariatur sit veniam! Accusantium adipisci delectus dolor doloribus dolorum ea harum in ipsum iste minus, quo ratione temporibus unde.',
            likesCount: 5
        },
        {
            id: 2,
            text: 'Lorem ipsum dolor sit amet.',
            likesCount: 6
        },
        {
            id: 3,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, tempora!',
            likesCount: 8
        }
    ],
    profile: null as null | ProfileType,
    isFetching: false,
};

export type initialStateType = typeof initialState;

function profileReducer(state = initialState, action: actionProfilePageType): initialStateType {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 123,
                text: state.textareaValue,
                likesCount: 0
            }
            return {
                ...state,
                myPosts: [...state.myPosts, newPost],
                textareaValue: '',
            }
        case UPDATE_TEXTAREA_VALUE_MY_POSTS:
            if (action.text) {
                return {
                    ...state,
                    textareaValue: action.text,
                }
            }
            return state;
        case SET_USER_PROFILE:
            if (action.profile) {
                return {
                    ...state,
                    profile: action.profile
                }
            }
            return state;
        case SET_FETCHING:
            if (typeof action.isFetching !== 'undefined') {
                return {
                    ...state,
                    isFetching: action.isFetching,
                }
            }
            return state;
    }
    return state;
}

export const addPost = () => {
    return {
        type: ADD_POST
    }
}
export const updateTextareaValueMyPosts = (text: string) => {
    return {
        type: UPDATE_TEXTAREA_VALUE_MY_POSTS,
        text: text
    }
}
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile: profile})
export const setFetching = (isFetching: boolean) => ({type: SET_FETCHING, isFetching: isFetching})

export const getProfile = (id: number): ThunkAction<Promise<void>, StateType, unknown, actionProfilePageType> => async (dispatch) => {
    dispatch(setFetching(true));
    ProfileAPI.getProfileInfo(id).then(data => {
        dispatch(setUserProfile(data));
        dispatch(setFetching(false));
    })
}

export default profileReducer;