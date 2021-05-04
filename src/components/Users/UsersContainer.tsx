import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {
    actionUserPageType,
    followAC, setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    userType
} from '../../redux/users-reducer';
import {StateType} from '../../redux/redux-store';

function mapStateToProps(state: StateType) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount
    }
}

function mapDispatchToProps(dispatch: (action: actionUserPageType) => void) {
    return {
        follow: (id: string) => dispatch(followAC(id)),
        unFollow: (id: string) => dispatch(unFollowAC(id)),
        setUsers: (users: Array<userType>) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage: number)=> dispatch(setCurrentPageAC(currentPage)),
        setTotalUsersCount: (totalUsersCount:number)=>dispatch(setTotalUsersCountAC(totalUsersCount)),
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;