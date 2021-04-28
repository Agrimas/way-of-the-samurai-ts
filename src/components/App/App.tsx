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
    addPost: (text: string)=>void
}


function App(props: AppType) {
    return (
        <div className={Classes.App}>
            <Header/>
            <aside>
                <Sidebar friends={props.appState.friends}/>
            </aside>
            <main>
                <Route path={'/profile'} render={() => <Profile myPosts={props.appState.myPosts} addPost={props.addPost}/>}/>
                <Route path={'/messages'} render={() => <MessagesPage dialogs={props.appState.messagesPage.dialogs}
                                                                      messages={props.appState.messagesPage.messages}/>}/>
            </main>
        </div>
    );
}

export default App;
