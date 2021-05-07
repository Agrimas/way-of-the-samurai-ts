import React, {Component} from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {profilePageStateType, ProfileType, setFetching, setUserProfile} from '../../redux/profile-reducer';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {ProfileAPI} from '../../api/api';
import Preloader from '../common/Preloader/Preloader';

type RequestType = {
    userID: string
}

export type ProfileStateType = RouteComponentProps<RequestType> & {
    profile: ProfileType | null
    isFetching: boolean
    setUserProfile: (profile: ProfileType) => void,
    setFetching: (isFetching: boolean) => void
}

class ProfileContainer extends Component<ProfileStateType> {
    componentDidMount() {
        this.props.setFetching(true);
        const userID = this.props.match.params.userID || '2';
        ProfileAPI.getProfileInfo(+userID).then(data => {
            this.props.setUserProfile(data)
            this.props.setFetching(false);
        })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : <Profile {...this.props}/>}
            </>
        );
    }

}

function mapStateToProps(state: StateType) {
    return {
    profile: state.profilePage.profile
,
    isFetching: state.profilePage.isFetching
,
}
}

export default connect(mapStateToProps,
{
    setUserProfile, setFetching
}
)(withRouter(ProfileContainer));