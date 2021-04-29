import React from 'react';
import Classes from './App.module.css';
import {Header} from '../Header/Header';
import {Sidebar} from '../Sidebar/Sidebar';
import {dispatchType, StateType} from '../../redux/state';
import {Profile} from '../Profile/Profile';
import {Route} from 'react-router-dom';
import {MessagesPage} from '../MessagesPage/MessagesPage';

type AppType = {
    appState: StateType
    dispatch: dispatchType
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
                       render={() =>
                           <Profile myPosts={props.appState.profilePage.myPosts}
                                    textareaValue={props.appState.profilePage.textareaValue}
                                    dispatch={props.dispatch}
                           />
                       }
                />


                <Route path={'/messages'}
                       render={() =>
                           <MessagesPage dialogs={props.appState.messagesPage.dialogs}
                                         textareaValue={props.appState.messagesPage.textareaValue}
                                         messages={props.appState.messagesPage.messages}
                                         dispatch={props.dispatch}
                           />
                       }
                />
            </main>
        </div>
    );
}

export default App;
