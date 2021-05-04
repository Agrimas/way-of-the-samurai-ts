import React from 'react';
import {userType} from '../../../redux/users-reducer';
import Classes from './User.module.css';
import userPhoto from '../../../assets/img/user.jpg';

type UserPropsType = userType & {
    follow: (id: string) => void
    unFollow: (id: string) => void
}

function User(props: UserPropsType) {
    return (
        <div className={Classes.container}>
            <div className={Classes.avatarBlock}>
                <img src={props.photos.small ? props.photos.small : userPhoto} alt=""/>
                <button onClick={() => {
                    props.followed ? props.unFollow(props.id) : props.follow(props.id)
                }}>
                    {props.followed ? 'Unfollow' : 'Follow'}
                </button>
            </div>
            <div>
                {props.name}, <br/>
                {props.status}
            </div>

        </div>
    );
}

export default User;