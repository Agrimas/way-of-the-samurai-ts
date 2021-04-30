import React from 'react';
import Classes from './App.module.css';
import {Header} from '../Header/Header';
import {SidebarContainer} from '../Sidebar/SidebarContainer';
import {Profile} from '../Profile/Profile';
import {Route} from 'react-router-dom';
import {MessagesPage} from '../MessagesPage/MessagesPage';

function App() {
    return (
        <div className={Classes.App}>
            <Header/>
            <aside>
                <SidebarContainer/>
            </aside>
            <main>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/messages'} render={() => <MessagesPage/>}/>
            </main>
        </div>
    );
}

export default App;
