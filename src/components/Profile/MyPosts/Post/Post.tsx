import React from 'react';
import Clasess from './Post.module.css';
import {myPostsType} from '../../../../redux/state';

export function Post(props: myPostsType) {
    return (
        <div className={Clasess.container}>
            <div className={Clasess.infoProfile}>
                <img className={Clasess.avatar} src="https://img.novosti-n.org/upload/ukraine/499685.jpg" alt=""/>
                <span>Anton</span>
            </div>
            <div className={Clasess.postText}>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

