import {UsersAPI} from '../api/api';
import {Dispatch} from 'react';
import {StateType} from './redux-store';
import {ThunkAction} from 'redux-thunk';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_FETCHING = 'SET-FETCHING';
const SET_FOLLOW_PROCESS = 'SET-FOLLOW-PROCESS';

// export type userPageStateType = {
//     users: Array<userType>
//     pageSize: number
//     currentPage: number
//     totalUsersCount: number
//     isFetching: boolean
//     isFollowProcess: Array<string>
// }
export type userType = {
    id: string,
    name: string,
    status: string | null,
    photos: photosType,
    followed: boolean,
    uniqueUrlName: string | null
    isFollowProcess: boolean
}
type photosType = {
    small: string | null
    large: string | null
}
type ActionsTypes =
    followActionType
    | unFollowActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setTotalUsersCountActionType
    | setFetchingActionType
    | setFollowProcessActionType


const initialState = {
    users: [] as Array<userType>,
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 20,
    isFetching: false,
    isFollowProcess: [] as Array<string>,
}
export type initialStateType = typeof initialState;

function usersReducer(state = initialState, action: ActionsTypes): initialStateType {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            if (action.users) {
                return {
                    ...state,
                    users: [...action.users],
                }
            }
            return state;
        case SET_CURRENT_PAGE:
            if (action.currentPage) {
                return {
                    ...state,
                    currentPage: action.currentPage
                }
            }
            return state;
        case SET_TOTAL_USERS_COUNT:
            if (action.totalUsersCount) {
                return {
                    ...state,
                    totalUsersCount: action.totalUsersCount
                }
            }
            return {...state};
        case SET_FETCHING:
            if (typeof action.isFetching != 'undefined') {
                return {
                    ...state,
                    isFetching: action.isFetching
                }
            }
            return state;
        case SET_FOLLOW_PROCESS:
            if (typeof action.isFollowProcess !== 'undefined' && action.id) {
                return {
                    ...state,
                    isFollowProcess: action.isFollowProcess ?
                        [...state.isFollowProcess, action.id] :
                        state.isFollowProcess.filter(id => id !== action.id),
                }
            }
            return state;
        default:
            return state;
    }
}

type followActionType = {
    type: typeof FOLLOW
    id: string
}

export function acceptFollow(id: string): followActionType {
    return {
        type: FOLLOW,
        id: id
    }
}

type unFollowActionType = {
    type: typeof UNFOLLOW
    id: string
}

export function acceptUnFollow(id: string): unFollowActionType {
    return {
        type: UNFOLLOW,
        id: id
    }
}

type setUsersActionType = {
    type: typeof SET_USERS
    users: Array<userType>
}

export function setUsers(users: Array<userType>): setUsersActionType {
    return {
        type: SET_USERS,
        users: users
    }
}

type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

export function setCurrentPage(currentPage: number): setCurrentPageActionType {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}

type setTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}

export function setTotalUsersCount(totalUsersCount: number): setTotalUsersCountActionType {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount
    }
}

type setFetchingActionType = {
    type: typeof SET_FETCHING
    isFetching: boolean
}

export function setFetching(isFetching: boolean): setFetchingActionType {
    return {
        type: SET_FETCHING,
        isFetching: isFetching,
    }
}

type setFollowProcessActionType = {
    type: typeof SET_FOLLOW_PROCESS
    isFollowProcess: boolean
    id: string
}

export function setFollowProcess(isFollowProcess: boolean, id: string): setFollowProcessActionType {
    return {
        type: SET_FOLLOW_PROCESS,
        isFollowProcess: isFollowProcess,
        id: id,
    }
}

export const getUsers = (currentPage: number, pageSize: number): ThunkAction<Promise<void>, StateType, unknown, ActionsTypes> =>
    async (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(setFetching(true));
        UsersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setFetching(false));
            dispatch(setUsers(data));
            // this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

export const follow = (id: string): ThunkAction<Promise<void>, StateType, unknown, ActionsTypes> =>
    async (dispatch) => {
        dispatch(setFollowProcess(true, id));
        UsersAPI.follow(id).then(result => {
            dispatch(setFollowProcess(false, id));
            if (result === 0) {
                dispatch(acceptFollow(id));
            }
        })
    };

export const unFollow = (id: string): ThunkAction<Promise<void>, StateType, unknown, ActionsTypes> =>
    async (dispatch) => {
        dispatch(setFollowProcess(true, id));
        UsersAPI.unFollow(id).then(result => {
            dispatch(setFollowProcess(false, id));
            if (result === 0) {
                dispatch(acceptUnFollow(id));
            }
        })
    };

export default usersReducer;