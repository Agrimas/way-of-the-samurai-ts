import React from 'react';
import Classes from './Profile.module.css';
import {InfoProfile} from './InfoProfile/InfoProfile';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileStateType} from './ProfileContainer';
import Preloader from '../common/Preloader/Preloader';

export function Profile(props: ProfileStateType) {
    return (
        <div className={Classes.container}>
            {props.profile !== null ? <><InfoProfile {...props.profile}/><MyPostsContainer/></> : <Preloader/>}
        </div>
    )
}

