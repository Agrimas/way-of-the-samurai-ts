import React, {ChangeEvent} from 'react';
import Classes from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostType, profilePageStateType, ProfileType} from '../../../redux/profile-reducer';

type MyPostsType = {
    textareaValue: string
    myPosts: Array<PostType>
    profile: ProfileType | null
    updateTextareaValueMyPosts: (text: string) => void
    addPost: () => void
}

export function MyPosts(props: MyPostsType) {
    let dataMyPosts = props.myPosts.map(post => <Post key={post.id} id={post.id} text={post.text}
                                                    likesCount={post.likesCount}/>)

    const textareaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateTextareaValueMyPosts(event.currentTarget.value);
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

