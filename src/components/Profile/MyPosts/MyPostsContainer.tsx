import React from 'react';
import {addPost, setFetching, updateTextareaValueMyPosts} from '../../../redux/profile-reducer';
import {StateType} from '../../../redux/redux-store';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';

function mapStateToProps(state: StateType) {
    return {
        myPosts: state.profilePage.myPosts,
        textareaValue: state.profilePage.textareaValue,
        profile: state.profilePage.profile
    }
}

export const MyPostsContainer = connect(mapStateToProps, {updateTextareaValueMyPosts, addPost})(MyPosts);
