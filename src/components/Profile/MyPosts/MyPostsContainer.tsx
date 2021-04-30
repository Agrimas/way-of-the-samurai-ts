import React from 'react';
import {addPostActionCreator, updateTextareaValueMyPosts} from '../../../redux/profile-reducer';
import {StoreType} from '../../../redux/redux-store';
import {MyPosts} from './MyPosts';

type MyPostsContainer = {
    store: StoreType
}

export function MyPostsContainer(props: MyPostsContainer) {
    let posts = props.store.getState().profilePage.myPosts;

    let textareaValue = props.store.getState().profilePage.textareaValue;

    const textareaHandler = (text: string) => {
        props.store.dispatch(updateTextareaValueMyPosts(text))
    }

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    return <MyPosts textareaValue={textareaValue} posts={posts} textareaUpdateValue={textareaHandler}
                    addPost={addPost}/>
}

