import React from 'react';
import Classes from './App.module.css';
import {Header} from '../Header/Header';
import {Sidebar} from '../Sidebar/Sidebar';
import {Profile} from '../Profile/Profile';
import {Route} from 'react-router-dom';
import {MessagesPage} from '../MessagesPage/MessagesPage';
import {StoreContext} from '../../StoreContext';

function App() {
    return (
        <div className={Classes.App}>
            <Header/>
            <aside>
                <StoreContext.Consumer>
                    {store => <Sidebar friends={store.getState().friends}/>}
                </StoreContext.Consumer>
            </aside>
            <main>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/messages'} render={() => <MessagesPage/>}/>
            </main>
        </div>
    );
}

export default App;
