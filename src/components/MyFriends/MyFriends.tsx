import React from 'react';
import Classes from './MyFriends.module.css';
import {Friend} from './Friend/Friend';

type MyFriendsType = {
    friends: Array<{ id: number, name: string }>
}

export function MyFriends(props: MyFriendsType) {
    let friends = props.friends.map(friend => <Friend name={friend.name}/>)

    return (
        <div className={Classes.friendsWrap}>
            <h2>My friends</h2>
            <div className={Classes.friends}>
                {friends[0]}
                {friends[1]}
                {friends[2]}
            </div>
        </div>
    );
}