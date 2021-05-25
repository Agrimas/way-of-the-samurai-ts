import React, {ChangeEvent, useState} from 'react';
import Classes from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostType, ProfileType} from '../../../api/api';

type MyPostsType = {
    myPosts: Array<PostType>
    profile: ProfileType | null
    addPost: (text: string) => void
}

export function MyPosts(props: MyPostsType) {

    const [textareaValue, setTextareaValue] = useState('');

    let dataMyPosts = props.myPosts.map(post => <Post key={post.id} id={post.id} text={post.text}
                                                      likesCount={post.likesCount}/>)

    const textareaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaValue(event.currentTarget.value);
    }

    const addPost = () => {
        props.addPost(textareaValue);
        setTextareaValue('');
    }

    return (
        <div className={Classes.container}>
            <h2>My Posts</h2>
            <div className={Classes.addPostForm}>
                <textarea className={Classes.textarea} value={textareaValue} onChange={textareaHandler}/>
                <button className={Classes.button} onClick={addPost}>add Post</button>
            </div>
            {dataMyPosts}
        </div>
    )
}

