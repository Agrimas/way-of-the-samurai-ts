import React from 'react';
import Classes from './Friend.module.css';
import {FriendsType} from '../../../redux/sidebar-reducer';

export function Friend(props: FriendsType) {
    return (
        <div className={Classes.item}>
            <img src="https://img.novosti-n.org/upload/ukraine/499685.jpg" alt=""/>
            {props.name}
        </div>
    );
}