import axios from 'axios';
import {userType} from '../redux/users-reducer';
import {ProfileType} from '../redux/profile-reducer';
import {userDataType} from '../redux/auth-reducer';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '1ff6f51d-e642-44e0-a765-1ec1a2baad4a'
    },
})

type AuthAPIType = {
    auth: () => Promise<authResponseType>
}

type authResponseType = {
    data: userDataType
    resultCode: number
    messages: Array<string> | string
    fieldsErrors: Array<string>
}

export const AuthAPI: AuthAPIType = {
    auth() {
        return instance.get(`auth/me/`).then(response => response.data);
    }
}


type UsersAPIType = {
    getUsers: (pageNumber: number, pageSize: number) => Promise<Array<userType>>
    follow: (id: string) => Promise<number> // !!!!
    unFollow: (id: string) => Promise<number> // !!!!
}

export const UsersAPI: UsersAPIType = {
    getUsers(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => response.data.items);
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data.resultCode)
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data.resultCode)
    },
}

type ProfileAPIType = {
    getProfileInfo: (id: number) => Promise<ProfileType>
}

export const ProfileAPI: ProfileAPIType = {
    getProfileInfo(id) {
        return instance.get(`profile/${id}`).then(response => response.data);
    }
}