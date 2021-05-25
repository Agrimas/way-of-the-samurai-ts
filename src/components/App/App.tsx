import React, {Suspense, useEffect} from 'react';
import Classes from './App.module.css';
import {SidebarContainer} from '../Sidebar/SidebarContainer';
import {Redirect, Route, Switch} from 'react-router-dom';
import UsersContainer from '../Users/UsersContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import HeaderContainer from '../Header/HeaderContainer';
import Login from '../Login/Login';
import {connect} from 'react-redux';
import {setInitialisation} from '../../redux/reducers/app-reducer';
import {StateType} from '../../redux/redux-store';
import Preloader from '../common/Preloader/Preloader';

const MessagesPage = React.lazy(() => import('../MessagesPage/MessagesPage'));

type AppType = {
    isInitialisation: boolean
    setInitialisation: () => void
}

function App({isInitialisation, setInitialisation}: AppType) {

    useEffect(() => {
        if (!isInitialisation) {
            setInitialisation()
        }
    }, [isInitialisation])

    return <>
        {
            isInitialisation ?
                <div className={Classes.App}>
                    <HeaderContainer/>
                    <aside>
                        <SidebarContainer/>
                    </aside>
                    <main>
                        <Switch>
                            <Route path={'/login'} render={() => <Login/>}/>
                            <Route path={'/profile/:userID?'} render={() => <ProfileContainer/>}/>

                            <Route path={'/messages'} render={() => {
                                return (
                                    <Suspense
                                        fallback={<div>Загрузка...</div>}>
                                        <MessagesPage/>
                                    </Suspense>
                                )
                            }}/>
                            <Route path={'/users'} render={() => <UsersContainer/>}/>
                            <Redirect from={'/'} to={'/profile'}/>
                        </Switch>
                    </main>
                </div> :
                <div style={{height: '100vh'}}>
                    <Preloader/>
                </div>
        }
    </>
}

export default connect((state: StateType) => ({isInitialisation: state.app.isInitialisation}), {setInitialisation})(App);
