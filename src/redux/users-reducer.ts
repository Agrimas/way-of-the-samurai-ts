const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

export type userPageStateType = {
    users: Array<userType>
    pageSize: number
    currentPage: number
    totalUsersCount: number
}
export type userType = {
    id: string,
    name: string,
    status: string | null,
    photos: photosType,
    followed: boolean,
    uniqueUrlName: string | null
}
type photosType = {
    small: string | null,
    large: string | null
}
export type actionUserPageType = {
    type: string
    id?: string
    users?: Array<userType>
    currentPage?: number
    totalUsersCount?: number
}

const initialState: userPageStateType = {
    users: [],
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 20
}

function usersReducer(state = initialState, action: actionUserPageType): userPageStateType {
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
        default:
            return state;
    }
}

export function followAC(id: string) {
    return {
        type: FOLLOW,
        id: id
    }
}

export function unFollowAC(id: string) {
    return {
        type: UNFOLLOW,
        id: id
    }
}

export function setUsersAC(users: Array<userType>) {
    return {
        type: SET_USERS,
        users: users
    }
}

export function setCurrentPageAC(currentPage: number) {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}

export function setTotalUsersCountAC(totalUsersCount: number) {
    return{
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount
    }
}

export default usersReducer;