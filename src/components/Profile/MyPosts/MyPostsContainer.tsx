import React from 'react';
import {addPostActionCreator, updateTextareaValueMyPosts} from '../../../redux/profile-reducer';
import {dispatchType, StateType} from '../../../redux/redux-store';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';

function mapStateToProps(state: StateType) {
    return {
        posts: state.profilePage.myPosts,
        textareaValue: state.profilePage.textareaValue
    }
}

function mapDispatchToProps(dispatch: dispatchType) {
    return {
        textareaUpdateValue: (text: string) => dispatch(updateTextareaValueMyPosts(text)),
        addPost: () => dispatch(addPostActionCreator())
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
