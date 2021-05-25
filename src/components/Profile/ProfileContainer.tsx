import React, {useEffect, useState} from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {
    getProfile,
    updatePhoto,
    updateProfile
} from '../../redux/reducers/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';
import {withFetching} from '../../utilites/withFetching';
import {StateType} from '../../redux/redux-store';
import {ProfileType, updateProfileRequestType} from '../../api/api';

export type ProfilePagePropsType = RouteComponentProps<{ userID: string }> & {
    authUserID: number
    getProfile: (id: number) => void
    profile: ProfileType | null
    updateProfile: (data: updateProfileRequestType) => void
    updatePhoto: (image: File) => void
}

function ProfileContainer(props: ProfilePagePropsType) {

    const [isFirstRender, setFirstRender] = useState(true);
    const [isFetching, setFetching] = useState(false);

    useEffect(() => {
        if (isFirstRender) {
            setFirstRender(false)
        }

        const userID = props.match.params.userID ?? props.authUserID;

        withFetching(async () => {
            await props.getProfile(+userID)
        }, setFetching)

    }, [props.match.params.userID])

    return (
        <>
            {isFetching || isFirstRender ? <Preloader/> : <Profile {...props} isOwner={!props.match.params.userID}/>}
        </>
    );
}

const mapStateToProps = (state: StateType) => {
    return {
        profile: state.profilePage.profile,
        authUserID: state.auth.userData?.id
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {
    getProfile,
    updateProfile,
    updatePhoto
}), withRouter, WithAuthRedirect)(ProfileContainer)