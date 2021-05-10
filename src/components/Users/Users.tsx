import React, {Component} from 'react';
import User from './User/User';
import Classes from './Users.module.css';
import {UsersPageType} from './UsersContainer';
import Preloader from '../common/Preloader/Preloader';

export class Users extends Component<UsersPageType & { onClickPaginationHandler: (pageNumber: number) => void }> {

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={Classes.container}>

                <div className={Classes.pagination}>
                    {pages.map(pageNumber => <span
                        key={pageNumber}
                        className={this.props.currentPage === pageNumber ? Classes.selectedPage : ''}
                        onClick={() => {
                            this.props.onClickPaginationHandler(pageNumber);
                        }
                        }>{pageNumber}</span>)}
                </div>

                {this.props.isFetching ?
                    <Preloader/> :
                    this.props.users.map(u => <User key={u.id}
                                                    id={u.id}
                                                    name={u.name}
                                                    status={u.status}
                                                    photos={u.photos}
                                                    followed={u.followed}
                                                    uniqueUrlName={u.uniqueUrlName}
                                                    isFollowProcess={this.props.isFollowProcess.some(id => id === u.id)}

                                                    follow={this.props.follow}
                                                    unFollow={this.props.unFollow}
                                                    setFollowProcess={this.props.setFollowProcess}
                    />)
                }
            </div>
        );
    }

}


