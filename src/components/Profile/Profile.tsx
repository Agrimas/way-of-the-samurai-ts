import React from 'react';
import Classes from './Profile.module.css';
import {InfoProfile} from './InfoProfile/InfoProfile';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import Preloader from '../common/Preloader/Preloader';
import {ProfilePagePropsType} from './ProfileContainer';

export function Profile({profile, updateProfile, updatePhoto, isOwner}: ProfilePagePropsType & {isOwner: boolean}) {
    return (
        <div className={Classes.container}>
            <img className={Classes.main_photo} src="https://storge.pic2.me/c/1360x800/778/58619cae890e5.jpg"
                 alt="Main photo"/>
            {profile !== null ?
                <>
                    <InfoProfile profile={profile} updateProfile={updateProfile} updatePhoto={updatePhoto} isOwner={isOwner}/>
                    <MyPostsContainer/>
                </> :
                <Preloader/>}
        </div>
    )
}

