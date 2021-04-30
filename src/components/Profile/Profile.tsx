import React from 'react';
import Classes from './Profile.module.css';
import {InfoProfile} from './InfoProfile/InfoProfile';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';


export function Profile() {
    return (
        <div className={Classes.container}>
            <InfoProfile/>
            <MyPostsContainer/>
        </div>
    )
}

