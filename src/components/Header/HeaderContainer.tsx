import React, {Component} from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {authStateType, getUserData, logout} from '../../redux/auth-reducer';

type HeaderType = authStateType & {
    getUserData: () => void
    logout: () => void
}

class HeaderContainer extends Component<HeaderType> {
    componentDidMount() {
        this.props.getUserData();
    }

    render() {
        return (
            <Header profileInfo={this.props.profileInfo}
                    userData={this.props.userData}
                    isLogin={this.props.isLogin}
                    logout={this.props.logout}
            />
        );
    }
}

function mapStateToProps(state: StateType) {
    return {
        userData: state.auth.userData,
        isLogin: state.auth.isLogin,
        profileInfo: state.auth.profileInfo,
    }
}

export default connect(mapStateToProps, {getUserData, logout})(HeaderContainer);