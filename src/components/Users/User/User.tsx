import React, {useState} from 'react';
import {UserType} from '../../../api/api';
import Classes from './User.module.css';
import userPhoto from '../../../assets/img/user.jpg';
import {NavLink} from 'react-router-dom';
import {withFetching} from '../../../utilites/withFetching';

type UserPropsType = UserType & {
    follow: (id: string) => void
    unFollow: (id: string) => void
}

function User({id, name, status, photos, followed, follow, unFollow}: UserPropsType) {

    let [isFetching, setFetching] = useState(false);

    function followHandler(id: string) {
        withFetching(async () => {
            await follow(id)
        }, setFetching);
    }

    async function unFollowHandler(id: string) {
        withFetching(async () => {
            await unFollow(id)
        }, setFetching);
    }

    return (
        <div className={Classes.container}>
            <div className={Classes.avatarBlock}>
                <NavLink to={`/profile/${id}`}>
                    <img src={photos.small ? photos.small : userPhoto} alt=""/>
                </NavLink>
                <button disabled={isFetching}
                        onClick={() => {
                            followed ? unFollowHandler(id) : followHandler(id)
                        }}>
                    {followed ? 'Unfollow' : 'Follow'}
                </button>
            </div>
            <div>
                {name}, <br/>
                <div className={Classes.status}>
                    {status}
                </div>
            </div>

        </div>
    );
}

export default User;