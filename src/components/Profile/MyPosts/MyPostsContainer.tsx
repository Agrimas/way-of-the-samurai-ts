import React from 'react';
import {addPost} from '../../../redux/reducers/profile-reducer';
import {StateType} from '../../../redux/redux-store';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';

function mapStateToProps(state: StateType) {
    return {
        myPosts: state.profilePage.myPosts,
        profile: state.profilePage.profile
    }
}

export const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);
