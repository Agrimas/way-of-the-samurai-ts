import {FollowUnfollowResponseType, UsersAPI, UsersType} from '../../api/api';
import {StateType} from '../redux-store';
import {ThunkAction} from 'redux-thunk';
import {Dispatch} from 'react';
import {updateObjectInArray} from '../../utilites/object-helper';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

type ActionsTypes =
    followActionType
    | unFollowActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setTotalUsersCountActionType


const initialState = {
    users: [] as UsersType,
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 0,
}

function usersReducer(state = initialState, action: ActionsTypes) {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, 'id', action.id, {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, 'id', action.id, {followed: false})
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
        default:
            return state;
    }
}

type followActionType = {
    type: typeof FOLLOW
    id: string
}
export const acceptFollow = (id: string): followActionType => ({
    type: FOLLOW,
    id,
})
type unFollowActionType = {
    type: typeof UNFOLLOW
    id: string
}
export const acceptUnFollow = (id: string): unFollowActionType => ({
    type: UNFOLLOW,
    id,
})
type setUsersActionType = {
    type: typeof SET_USERS
    users: UsersType
}
export const setUsers = (users: UsersType): setUsersActionType => ({
    type: SET_USERS,
    users
})
type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): setCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    currentPage,
})
type setTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
})

export const getUsers = (currentPage: number, pageSize: number): ThunkAction<Promise<void>, StateType, unknown, ActionsTypes> => async dispatch => {
    dispatch(setCurrentPage(currentPage));
    const data = await UsersAPI.getUsers(currentPage, pageSize);
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount))
}
const followUnfollow = async (id: string, method: (id: string) => Promise<FollowUnfollowResponseType>, actionCreator: (id: string) => ActionsTypes, dispatch: Dispatch<ActionsTypes>) => {
    const result = await method(id)
    if (result.resultCode === 0) {
        dispatch(actionCreator(id));
    }
}
export const follow = (id: string): ThunkAction<Promise<void>, StateType, unknown, ActionsTypes> => async dispatch => {
    await followUnfollow(id, UsersAPI.follow, acceptFollow, dispatch)
};
export const unFollow = (id: string): ThunkAction<Promise<void>, StateType, unknown, ActionsTypes> => async dispatch => {
    await followUnfollow(id, UsersAPI.unFollow, acceptUnFollow, dispatch)
};

export default usersReducer;