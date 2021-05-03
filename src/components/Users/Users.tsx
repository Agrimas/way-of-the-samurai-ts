import React, {useEffect} from 'react';
import {userPageStateType, userType} from '../../redux/users-reducer';
import User from './User/User';
import {v1} from 'uuid';

type UsersPageType = userPageStateType & {
    follow: (id: string) => void
    unFollow: (id: string) => void
    setUsers: (users: Array<userType>) => void
}

function Users(props: UsersPageType) {

    useEffect(()=>{
            props.setUsers([
                {
                    id: v1(),
                    name: 'Anton',
                    status: 'Tomorrow',
                    location: {
                        country: 'Belarus',
                        city: 'Minsk'
                    },
                    followed: true
                }
            ]);
        },[])

    const users = props.users.map(u => <User key={u.id}
                                             id={u.id}
                                             name={u.name}
                                             status={u.status}
                                             location={u.location}
                                             followed={u.followed}
                                             follow={props.follow}
                                             unFollow={props.unFollow}
    />);
    return (
        <div>
            {users}
        </div>
    );
}

export default Users;