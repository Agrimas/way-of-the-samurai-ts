import React from 'react';
import Classes from './Profile.module.css';
import {InfoProfile} from './InfoProfile/InfoProfile';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {StoreContext} from '../../StoreContext';


export function Profile() {
    return (
        <div className={Classes.container}>
            <InfoProfile/>
            <StoreContext.Consumer>
                {store => <MyPostsContainer store={store}/>}
            </StoreContext.Consumer>
        </div>
    )
}

