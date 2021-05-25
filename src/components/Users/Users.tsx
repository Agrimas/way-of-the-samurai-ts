import React from 'react';
import User from './User/User';
import Classes from './Users.module.css';
import {UsersPageType} from './UsersContainer';

export function Users({users, follow, unFollow}: UsersPageType) {
    return (
        <div className={Classes.container}>
            {users.map(u => <User key={u.id}
                                  id={u.id}
                                  name={u.name}
                                  status={u.status}
                                  photos={u.photos}
                                  followed={u.followed}

                                  follow={follow}
                                  unFollow={unFollow}
            />)}
        </div>
    );
}


