import React from 'react';
import Classes from './App.module.css';
import {SidebarContainer} from '../Sidebar/SidebarContainer';
import {Route} from 'react-router-dom';
import {MessagesPage} from '../MessagesPage/MessagesPage';
import UsersContainer from '../Users/UsersContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import HeaderContainer from '../Header/HeaderContainer';

function App() {
    return (
        <div className={Classes.App}>
            <HeaderContainer/>
            <aside>
                <SidebarContainer/>
            </aside>
            <main>
                <Route path={'/profile/:userID?'} render={() => <ProfileContainer/>}/>
                <Route path={'/messages'} render={() => <MessagesPage/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
            </main>
        </div>
    );
}

export default App;
