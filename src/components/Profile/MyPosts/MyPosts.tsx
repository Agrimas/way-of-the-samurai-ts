import React, {TextareaHTMLAttributes, useRef} from 'react';
import Classes from './MyPosts.module.css';
import {Post} from './Post/Post';
import {myPostsType} from '../../../redux/state';
import {log} from 'util';

type MyPostsType = {
    myPosts: Array<myPostsType>
    addPost: (text: string) => void
}

export function MyPosts(props: MyPostsType) {
    let dataMyPosts = props.myPosts.map(post => <Post key={post.id} id={post.id} text={post.text}
                                                      likesCount={post.likesCount}/>)

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const buttonHandler = () => {
        if (textareaRef && textareaRef.current) {
            props.addPost(textareaRef.current.value);
        }
    }

    return (
        <div className={Classes.container}>
            <h2>My Posts</h2>
            <div className={Classes.addPostForm}>
                <textarea className={Classes.textarea} ref={textareaRef}/>
                <button className={Classes.button} onClick={buttonHandler}>add Post</button>
            </div>
            {dataMyPosts}
        </div>
    )
}

