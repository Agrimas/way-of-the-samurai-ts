import React from 'react';
import Classes from './Profile.module.css';
import {InfoProfile} from './InfoProfile/InfoProfile';
import {MyPosts} from './MyPosts/MyPosts';
import {profilePageStateType} from '../../redux/state';

export type ProfilePropsType = profilePageStateType & {
    addPost: () => void
    updateTextareaValueMyPosts: (text: string) => void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={Classes.container}>
            <InfoProfile/>
            <MyPosts myPosts={props.myPosts} textareaValue={props.textareaValue} addPost={props.addPost}
                     updateTextareaValueMyPosts={props.updateTextareaValueMyPosts}/>
        </div>
    )
}

