import React, {ChangeEvent, TextareaHTMLAttributes, useRef} from 'react';
import Classes from './MyPosts.module.css';
import {Post} from './Post/Post';
import {ProfilePropsType} from '../Profile';

export function MyPosts(props: ProfilePropsType) {
    let dataMyPosts = props.myPosts.map(post => <Post key={post.id} id={post.id} text={post.text}
                                                      likesCount={post.likesCount}/>)

    const textareaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateTextareaValueMyPosts(event.currentTarget.value);
    }

    return (
        <div className={Classes.container}>
            <h2>My Posts</h2>
            <div className={Classes.addPostForm}>
                <textarea className={Classes.textarea} value={props.textareaValue} onChange={textareaHandler}/>
                <button className={Classes.button} onClick={props.addPost}>add Post</button>
            </div>
            {dataMyPosts}
        </div>
    )
}

