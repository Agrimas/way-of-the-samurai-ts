import React from 'react';
import Clasess from './Post.module.css';
import {PostType} from '../../../../redux/state';

export function Post({id,text, likesCount}: PostType) {
    return (
        <div className={Clasess.container}>
            <div className={Clasess.infoProfile}>
                <img className={Clasess.avatar} src="https://img.novosti-n.org/upload/ukraine/499685.jpg" alt=""/>
                <span>Anton</span>
            </div>
            <div className={Clasess.likesCount}>
                {likesCount}
            </div>
            <div className={Clasess.postText}>
                <p>{text}</p>
            </div>
        </div>
    )
}

