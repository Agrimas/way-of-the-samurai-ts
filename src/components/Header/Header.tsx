import React from 'react';
import {NavLink} from 'react-router-dom';
import Classes from './Header.module.css';
import {authStateType} from '../../redux/auth-reducer';

export function Header(props: authStateType) {

    return (
        <div className={Classes.Header}>
            <div className={Classes.logoBlock}>
                <img
                    src="https://image.winudf.com/v2/image1/Y29tLmRveHVhbnZpbmgucmVhY3RibG9nc19pY29uXzE1ODg4MDQ2MTdfMDY4/icon.png?w=100&fakeurl=1"
                    alt=""/>
            </div>
            <div className={Classes.navBlock}>
                <NavLink to={'/login'} className={Classes.navLink}>
                    {props.profileInfo ? props.profileInfo.fullName: 'Log in'}
                </NavLink>
            </div>
        </div>
    )
}