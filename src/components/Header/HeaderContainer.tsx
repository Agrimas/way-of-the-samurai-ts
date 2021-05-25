import React from 'react';
import {Header} from './Header';
import {logout} from '../../redux/reducers/auth-reducer';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';

export type HeaderType = {
    login: string | undefined
    isLogin: boolean
    logout: () => void
}

const HeaderContainer = (props: HeaderType) => {
    return (
        <Header login={props.login}
                isLogin={props.isLogin}
                logout={props.logout}
        />
    );
}

function mapStateToProps(state: StateType) {
    return {
        login: state.auth.userData?.login,
        isLogin: state.auth.isLogin,
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer);