import {actionType} from './redux-store';

export type profilePageStateType = {
    textareaValue: string
    myPosts: Array<PostType>
}
export type PostType = {
    id: number
    text: string
    likesCount: number
}

const ADD_POST = 'ADD-POST';
const UPDATE_TEXTAREA_VALUE_MY_POSTS = 'UPDATE-TEXTAREA-VALUE-MY-POSTS';

export const addPostActionCreator = () => {
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
};

function profileReducer(state: profilePageStateType = initialState, action: actionType) {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 123,
                text: state.textareaValue,
                likesCount: 0
            }
            state.myPosts.push(newPost);
            state.textareaValue = '';
            break;
        case UPDATE_TEXTAREA_VALUE_MY_POSTS:
            if (action.text) {
                state.textareaValue = action.text;
            }
            break;
    }
    return state;
}

export default profileReducer;