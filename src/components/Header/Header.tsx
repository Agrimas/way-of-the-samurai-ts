import React from 'react';
import {NavLink} from 'react-router-dom';
import Classes from './Header.module.css';
import {authStateType} from '../../redux/auth-reducer';

export function Header(props: authStateType & { logout: () => void }) {

    return (
        <div className={Classes.Header}>
            <div className={Classes.logoBlock}>
                <img
                    src="https://image.winudf.com/v2/image1/Y29tLmRveHVhbnZpbmgucmVhY3RibG9nc19pY29uXzE1ODg4MDQ2MTdfMDY4/icon.png?w=100&fakeurl=1"
                    alt=""/>
            </div>
            <div className={Classes.navBlock}>
                {props.profileInfo &&
                <>
                    <NavLink to={'/profile'} className={Classes.navLink}>
                        {props.profileInfo.fullName}
                    </NavLink>
                    <button className={Classes.navLink} onClick={props.logout}>Logout</button>
                </>}
            </div>
        </div>
    )
}