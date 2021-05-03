import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {
    actionUserPageType,
    followAC,
    setUsersAC,
    unFollowAC,
    userType
} from '../../redux/users-reducer';
import {StateType} from '../../redux/redux-store';

function mapStateToProps(state: StateType) {
    return {
        users: state.usersPage.users
    }
}

function mapDispatchToProps(dispatch: (action: actionUserPageType) => void) {
    return {
        follow: (id: string) => dispatch(followAC(id)),
        unFollow: (id: string) => dispatch(unFollowAC(id)),
        setUsers: (users: Array<userType>) => dispatch(setUsersAC(users)),
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;