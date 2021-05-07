import React, {Component} from 'react';
import {Header} from './Header';
import {AuthAPI, ProfileAPI} from '../../api/api';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {authStateType, setUserData, userDataType} from '../../redux/auth-reducer';
import {ProfileType} from '../../redux/profile-reducer';

type HeaderType = authStateType & {
    setUserData: (userData: userDataType, profileInfo: ProfileType) => void
    profileInfo: ProfileType | null
}

class HeaderContainer extends Component<HeaderType> {
    componentDidMount() {
        AuthAPI.auth().then(response => {
            ProfileAPI.getProfileInfo(response.data.id).then(profileInfo => {
                this.props.setUserData(response.data, profileInfo);
            })
        });
    }

    render() {
        return (
            <Header {...this.props}/>
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

export default connect(mapStateToProps, {setUserData})(HeaderContainer);