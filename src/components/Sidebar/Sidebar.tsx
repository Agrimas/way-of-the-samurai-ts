import React from 'react';
import Classes from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';
import {MyFriends} from '../MyFriends/MyFriends';
import {FriendsType} from '../../redux/sidebar-reducer';


type SidebarType = {
    friends: Array<FriendsType>
}

export function Sidebar(props: SidebarType) {
    return (
        <div className={Classes.Sidebar}>
            <nav>
                <NavLink to={'/profile'} className={Classes.navlink} activeClassName={Classes.active}>Profile</NavLink>
                <NavLink to={'/messages'} className={Classes.navlink}
                         activeClassName={Classes.active}>Messages</NavLink>
                <NavLink to={'/users'} className={Classes.navlink}
                         activeClassName={Classes.active}>Users</NavLink>
            </nav>
            <MyFriends friends={props.friends}/>
        </div>
    )
}


