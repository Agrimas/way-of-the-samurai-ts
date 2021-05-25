import {PostType, ProfileAPI, ProfilePhotosType, ProfileType, updateProfileRequestType} from '../../api/api';
import {ThunkAction} from 'redux-thunk';
import {StateType} from '../redux-store';

type actionType =
    | addPostActionType
    | setUserProfileActionType
    | setUserPhotosActionType

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_PHOTOS = 'SET-USER-PHOTOS';

const initialState = {
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
    profile: {} as ProfileType,
    authProfile: {} as ProfileType,
};

function profileReducer(state = initialState, action: actionType) {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 123,
                text: action.text,
                likesCount: 0
            }
            return {
                ...state,
                myPosts: [...state.myPosts, newPost],
            }
        case SET_USER_PROFILE:
            if (action.profile) {
                return {
                    ...state,
                    profile: action.profile
                }
            }
            return state;
        case SET_USER_PHOTOS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: {...action.photos},
                }
            }
    }
    return state;
}

type addPostActionType = { type: typeof ADD_POST, text: string }
export const addPost = (text: string): addPostActionType => {
    return {
        type: ADD_POST,
        text,
    }
}
type setUserProfileActionType = { type: typeof SET_USER_PROFILE, profile: ProfileType | null }
export const setUserProfile = (profile: ProfileType | null): setUserProfileActionType => ({
    type: SET_USER_PROFILE,
    profile
})
type setUserPhotosActionType = { type: typeof SET_USER_PHOTOS, photos: ProfilePhotosType }
export const setUserPhotos = (photos: ProfilePhotosType): setUserPhotosActionType => ({type: SET_USER_PHOTOS, photos});

export const getProfile = (id: number): ThunkAction<Promise<void>, StateType, unknown, actionType> => async dispatch => {
    const data = await ProfileAPI.getProfile(id)
    dispatch(setUserProfile(data));
}
export const updateProfile = (newProfileData: updateProfileRequestType): ThunkAction<Promise<void>, StateType, unknown, actionType> => async (dispatch, getState) => {
    const response = await ProfileAPI.updateProfile(newProfileData);
    if (response.resultCode === 0) {
        const id = getState().auth.userData!.id;
        await dispatch(getProfile(id));
    }
}
export const updatePhoto = (image: File): ThunkAction<Promise<void>, StateType, unknown,
    actionType> => async (dispatch) => {
    const response = await ProfileAPI.updatePhoto(image);
    if (response.resultCode === 0) {
        await dispatch(setUserPhotos(response.data.photos));
    }
}

export default profileReducer;