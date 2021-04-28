import React from 'react';
import Classes from './App.module.css';
import {Header} from '../Header/Header';
import {Sidebar} from '../Sidebar/Sidebar';
import {StateType} from '../../redux/state';
import {Profile} from '../Profile/Profile';
import {Route} from 'react-router-dom';
import {MessagesPage} from '../MessagesPage/MessagesPage';

type AppType = {
    appState: StateType
    addPost: () => void
    updateTextareaValueMyPosts: (text: string) => void
    addMessage: () => void
    updateTextareaValueDialog: (text: string) => void
}


function App(props: AppType) {
    return (
        <div className={Classes.App}>
            <Header/>
            <aside>
                <Sidebar friends={props.appState.friends}/>
            </aside>
            <main>
                <Route path={'/profile'}
                       render={() => <Profile myPosts={props.appState.profilePage.myPosts}
                                              textareaValue={props.appState.profilePage.textareaValue}
                                              addPost={props.addPost}
                                              updateTextareaValueMyPosts={props.updateTextareaValueMyPosts}/>}/>


                <Route path={'/messages'} render={() => <MessagesPage dialogs={props.appState.messagesPage.dialogs}
                                                                      textareaValue={props.appState.messagesPage.textareaValue}
                                                                      messages={props.appState.messagesPage.messages}
                                                                      addMessage={props.addMessage}
                                                                      updateTextareaValueDialog={props.updateTextareaValueDialog}/>}/>
            </main>
        </div>
    );
}

export default App;
