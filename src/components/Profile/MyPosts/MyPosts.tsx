import React from 'react';
import Clasess from './MyPosts.module.css';
import {Post} from './Post/Post';
import {myPostsType} from '../../../redux/state';

type MyPostsType = {
    myPosts: Array<myPostsType>
}

export function MyPosts(props: MyPostsType) {
    let dataMyPosts = props.myPosts.map(post => <Post id={post.id} text={post.text}/>)

    return (
        <div className={Clasess.container}>
            <h2>My Posts</h2>
            {dataMyPosts}
        </div>
    )
}

