import React, {Component} from 'react';
import {userPageStateType, userType} from '../../redux/users-reducer';
import User from './User/User';
import Classes from './Users.module.css';
import axios from 'axios';

type UsersPageType = userPageStateType & {
    follow: (id: string) => void
    unFollow: (id: string) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}


export class Users extends Component<UsersPageType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            // this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        const onClickPaginationHandler = (pageNumber: number) => {
            this.props.setCurrentPage(pageNumber);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
            })
        }

        return (
            <div className={Classes.container}>
                <div className={Classes.pagination}>
                    {pages.map(pageNumber => <span
                        key={pageNumber}
                        className={this.props.currentPage === pageNumber ? Classes.selectedPage : ''}
                        onClick={() => {
                            onClickPaginationHandler(pageNumber);
                        }
                        }>{pageNumber}</span>)}
                </div>

                {this.props.users.map(u => <User key={u.id}
                                                 id={u.id}
                                                 name={u.name}
                                                 status={u.status}
                                                 photos={u.photos}
                                                 followed={u.followed}
                                                 uniqueUrlName={u.uniqueUrlName}
                                                 follow={this.props.follow}
                                                 unFollow={this.props.unFollow}
                />)}
            </div>
        );
    }

}


