import React from 'react';
import {connect} from 'react-redux';
import {
    initialStateType,
    follow,
    setFollowProcess,
    unFollow,
    getUsers,
} from '../../redux/users-reducer';
import {StateType} from '../../redux/redux-store';
import {Users} from './Users';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';


export type UsersPageType = initialStateType & {
    follow: (id: string) => void
    unFollow: (id: string) => void
    setFollowProcess: (isFollowProcess: boolean, id: string) => void
    getUsers: (currentPage: number, pageSize: number) => void
}


class UsersContainer extends React.Component<UsersPageType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onClickPaginationHandler(pageNumber: number) {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return (
            <Users {...this.props} onClickPaginationHandler={this.onClickPaginationHandler.bind(this)}/>
        );
    }
}

function mapStateToProps(state: StateType) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        isFollowProcess: state.usersPage.isFollowProcess,
    }
}

export default compose<React.ComponentType>(WithAuthRedirect, connect(mapStateToProps, {
    follow,
    unFollow,
    setFollowProcess,
    getUsers,
}))(UsersContainer);
