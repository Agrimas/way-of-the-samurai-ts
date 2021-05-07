import React from 'react';
import {userType} from '../../../redux/users-reducer';
import Classes from './User.module.css';
import userPhoto from '../../../assets/img/user.jpg';
import {NavLink} from 'react-router-dom';
import {UsersAPI} from '../../../api/api';

type UserPropsType = userType & {
    follow: (id: string) => void
    unFollow: (id: string) => void
}

function User(props: UserPropsType) {

    function follow(id: string) {
        UsersAPI.follow(id).then(result => {
            if (result === 0) {
                props.follow(id)
            }
        })

    }

    function unFollow(id: string) {
        UsersAPI.unFollow(id).then(result => {
            if (result === 0) {
                props.unFollow(id)
            }
        })
    }

    return (
        <div className={Classes.container}>
            <div className={Classes.avatarBlock}>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={props.photos.small ? props.photos.small : userPhoto} alt=""/>
                </NavLink>
                <button onClick={() => {
                    props.followed ? unFollow(props.id) : follow(props.id)
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