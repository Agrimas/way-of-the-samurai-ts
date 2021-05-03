import {v1} from 'uuid';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

export type userPageStateType = {
    users: Array<userType>
}
export type userType = {
    id: string,
    name: string,
    status: string,
    location: locationType,
    followed: boolean
}
type locationType = {
    country: string,
    city: string
}
export type actionUserPageType = {
    type: string
    id?: string
    users?: Array<userType>
}

const initialState: userPageStateType = {
    users: []
}

function usersReducer(state = initialState, action: actionUserPageType): userPageStateType {
    switch (action.type) {
        case FOLLOW:
            return {
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
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
                    users: [...state.users, ...action.users],
                }
            }
            return state;
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

export default usersReducer;