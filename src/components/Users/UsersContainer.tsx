import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage, setFetching,
    setTotalUsersCount,
    setUsers,
    unFollow,
    userPageStateType, userType,
} from '../../redux/users-reducer';
import {StateType} from '../../redux/redux-store';
import {Users} from './Users';
import {UsersAPI} from '../../api/api';

export type UsersPageType = userPageStateType & {
    follow: (id: string) => void
    unFollow: (id: string) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setFetching: (isFetching: boolean) => void
}


class UsersContainer extends React.Component<UsersPageType> {

    componentDidMount() {
        this.props.setFetching(true);
        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setFetching(false);
            this.props.setUsers(data);
            // this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onClickPaginationHandler(pageNumber: number) {
        this.props.setFetching(true);
        this.props.setCurrentPage(pageNumber);
        UsersAPI.getUsers(this.props.currentPage, pageNumber).then(data => {
            this.props.setFetching(false);
            // this.props.setUsers(data.items);
        })
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
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setFetching,
})(UsersContainer);
