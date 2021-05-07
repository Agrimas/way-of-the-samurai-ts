type actionProfilePageType = {
    type: string
    text?: string
    profile?: ProfileType | null
    isFetching: boolean
}
export type profilePageStateType = {
    isFetching: boolean
    textareaValue: string
    myPosts: Array<PostType>
    profile: ProfileType | null
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

const initialState: profilePageStateType = {
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
    profile: null,
    isFetching: false,
};

function profileReducer(state = initialState, action: actionProfilePageType) {
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
            return {
                ...state,
                isFetching: action.isFetching,
            }
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

export default profileReducer;