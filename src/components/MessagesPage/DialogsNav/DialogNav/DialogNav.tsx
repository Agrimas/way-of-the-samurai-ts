import React from 'react';
import Classes from './DialogNav.module.css';
import {DialogType} from '../../../../redux/state';
import {NavLink} from 'react-router-dom';

export function DialogNav(props: DialogType) {
    const path = '/messages/' + props.id;
    return (
        <NavLink to={path} className={Classes.container}>{props.name}</NavLink>
    );
}