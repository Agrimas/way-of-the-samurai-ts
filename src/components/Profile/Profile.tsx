import React from 'react';
import Classes from './Profile.module.css';
import {InfoProfile} from './InfoProfile/InfoProfile';
import {MyPosts} from './MyPosts/MyPosts';
import {dispatchType, profilePageStateType} from '../../redux/state';

export type ProfilePropsType = profilePageStateType & {
    dispatch: dispatchType
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={Classes.container}>
            <InfoProfile/>
            <MyPosts myPosts={props.myPosts} textareaValue={props.textareaValue} dispatch={props.dispatch}/>
        </div>
    )
}

