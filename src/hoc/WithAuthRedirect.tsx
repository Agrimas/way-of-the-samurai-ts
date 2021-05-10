import React from 'react';
import {Redirect} from 'react-router-dom';
import {StateType} from '../redux/redux-store';
import {connect} from 'react-redux';


const mapStateToPropsAuth = (state: StateType) => ({
    isLogin: state.auth.isLogin,
})

type MapPropsType = ReturnType<typeof mapStateToPropsAuth>;

export function WithAuthRedirect<WCP>(Component: React.ComponentType<WCP>) {
    const RedirectComponent: React.FC<MapPropsType & {}> = ({isLogin, ...restProps}) => {
        if (!isLogin) return <Redirect to="/login"/>
        return (
            <Component {...restProps as WCP}/>
        );
    }

    return connect(mapStateToPropsAuth, {})(RedirectComponent);
}
