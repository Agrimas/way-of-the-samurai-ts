import React from 'react';
import Classes from './InfoProfile.module.css';
import {ProfileType} from '../../../redux/profile-reducer';

export function InfoProfile(props: ProfileType) {
    return (
        <div className={Classes.container}>
            <img className={Classes.main_photo} src="https://storge.pic2.me/c/1360x800/778/58619cae890e5.jpg"
                 alt="Main photo"/>
            <h1>{props.fullName}</h1>
            <p>{props.aboutMe}</p>
        </div>
    )
}

