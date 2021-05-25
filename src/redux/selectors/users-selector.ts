import {StateType} from '../redux-store';

export const getUsersS = (state: StateType) => {
    return state.usersPage.users
}
export const getPageSizeS = (state: StateType) => {
    return state.usersPage.pageSize
}
export const getCurrentPageS = (state: StateType) => {
    return state.usersPage.currentPage
}
export const getTotalUsersCountS = (state: StateType) => {
    return state.usersPage.totalUsersCount
}