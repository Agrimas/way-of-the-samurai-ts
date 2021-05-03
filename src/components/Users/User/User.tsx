import React from 'react';
import {userType} from '../../../redux/users-reducer';

type UserPropsType = userType & {
    follow: (id: string) => void
    unFollow: (id: string) => void
}

function User(props: UserPropsType) {
    return (
        <div>
            <div>{props.name}</div>
            <button onClick={() => {
                props.followed ? props.unFollow(props.id) : props.follow(props.id)
            }}>
                {props.followed ? 'Unfollow' : 'Follow'}
            </button>
        </div>
    );
}

export default User;