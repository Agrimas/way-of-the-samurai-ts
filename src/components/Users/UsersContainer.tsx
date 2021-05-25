import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {UsersType} from '../../api/api';
import {follow, getUsers, unFollow,} from '../../redux/reducers/users-reducer';
import {StateType} from '../../redux/redux-store';
import {Users} from './Users';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';
import Preloader from '../common/Preloader/Preloader';
import {withFetching} from '../../utilites/withFetching';
import Pagination from '../common/Pagination/Pagination';
import {getCurrentPageS, getPageSizeS, getTotalUsersCountS, getUsersS} from '../../redux/selectors/users-selector';

export type UsersPageType = {
    users: UsersType,
    pageSize: number,
    currentPage: number,
    totalUsersCount: number,
    follow: (id: string) => void
    unFollow: (id: string) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

function UsersContainer(props: UsersPageType) {
    let [isFetching, setFetching] = useState(false);
    let [isFirstRender, setFirstRender] = useState(true);

    useEffect(() => {
        if (isFirstRender) {
            setFirstRender(false);
        }

        withFetching(async () => {
            await props.getUsers(props.currentPage, props.pageSize)
        }, setFetching)

    }, [props.currentPage])

    const onClickPaginationHandler = (pageNumber: number) => {
        withFetching(async () => {
            await props.getUsers(pageNumber, props.pageSize);
        }, setFetching)
    }

    return (
        <>
            <Pagination totalUsersCount={props.totalUsersCount} currentPage={props.currentPage}
                        pageSize={props.pageSize} onClickPaginationHandler={onClickPaginationHandler}
                        portionSize={5}/>
            {
                isFetching || isFirstRender ?
                    <Preloader/> :
                    <Users {...props}/>
            }
        </>
    );
}

function mapStateToProps(state: StateType) {
    return {
        users: getUsersS(state),
        pageSize: getPageSizeS(state),
        currentPage: getCurrentPageS(state),
        totalUsersCount: getTotalUsersCountS(state),
    }
}

export default compose<React.ComponentType>(WithAuthRedirect, connect(mapStateToProps, {
    follow,
    unFollow,
    getUsers,
}))(UsersContainer);
