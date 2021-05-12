import React, {Component} from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {getProfile, ProfileType} from '../../redux/profile-reducer';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';

type RequestType = {
    userID: string
}

export type ProfileStateType = RouteComponentProps<RequestType> & {
    profile: ProfileType | null
    isFetching: boolean
    getProfile: (id: number) => void
}

class ProfileContainer extends Component<ProfileStateType> {
    componentDidMount() {
        const userID = this.props.match.params.userID || 2;
        this.props.getProfile(+userID);
    }

    componentDidUpdate(prevProps: Readonly<ProfileStateType>) {
        if (prevProps.match.params.userID !== this.props.match.params.userID) {
            this.props.getProfile(2);
        }
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
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {getProfile}), withRouter, WithAuthRedirect)(ProfileContainer)