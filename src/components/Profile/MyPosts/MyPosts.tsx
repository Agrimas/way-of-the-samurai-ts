import React, {ChangeEvent} from 'react';
import Classes from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostType, profilePageStateType} from '../../../redux/profile-reducer';

type MyPosts =  profilePageStateType & {
    // posts: Array<PostType>
    // textareaValue: string
    textareaUpdateValue: (text: string) => void
    addPost: () => void
}

export function MyPosts(props: MyPosts) {
    let dataMyPosts = props.myPosts.map(post => <Post key={post.id} id={post.id} text={post.text}
                                                    likesCount={post.likesCount}/>)

    const textareaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.textareaUpdateValue(event.currentTarget.value);
    }

    const addPost = () => {
        props.addPost();
    }

    return (
        <div className={Classes.container}>
            <h2>My Posts</h2>
            <div className={Classes.addPostForm}>
                <textarea className={Classes.textarea} value={props.textareaValue} onChange={textareaHandler}/>
                <button className={Classes.button} onClick={addPost}>add Post</button>
            </div>
            {dataMyPosts}
        </div>
    )
}

