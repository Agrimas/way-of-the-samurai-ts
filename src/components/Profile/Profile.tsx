import React from 'react';
import Clasess from './Profile.module.css';
import {InfoProfile} from './InfoProfile/InfoProfile';
import {MyPosts} from './MyPosts/MyPosts';
import {myPostsType} from '../../redux/state';

type ProfileType = {
    myPosts: Array<myPostsType>
    addPost: (text: string)=>void
}

export function Profile(props: ProfileType) {
    return (
        <div className={Clasess.container}>
            <InfoProfile/>
            <MyPosts myPosts={props.myPosts} addPost={props.addPost}/>
        </div>
    )
}

