import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4e70ea14-87f8-403e-9a3c-6012dce2b89c'
    },
})

type ResponseType = {
    resultCode: number,
    messages: Array<string>,
}

// AUTH
export type requestLoginType = {
    email: string,
    password: string,
    remember: boolean,
    captcha: string
}
export type userDataType = {
    id: number
    email: string
    login: string
}
export const AuthAPI = {
    auth() {
        return instance.get<Promise<ResponseType & { data: userDataType }>>(`auth/me/`).then(response => response.data);
    },
    login(data: any) {
        return instance.post<Promise<ResponseType & { data: { userId: number } }>>('auth/login/', data).then(response => response.data);
    },
    logout() {
        return instance.delete<Promise<ResponseType & { data: {} }>>('auth/login/').then(response => response.data);
    },
    getCaptcha() {
        return instance.get<{ url: string }>('security/get-captcha-url').then(response => response.data.url)
    }
}

// USERS
export type UsersType = Array<UserType>
export type UserType = {
    id: string,
    name: string,
    status: string | null,
    photos: ProfilePhotosType,
    followed: boolean,
}
export type UsersResponseType = {
    error: null | string
    items: UsersType
    totalCount: number
}
export type FollowUnfollowResponseType = ResponseType & { data: {} };
export const UsersAPI = {
    getUsers(pageNumber: number, pageSize: number) {
        return instance.get<Promise<UsersResponseType>>(`users?page=${pageNumber}&count=${pageSize}`).then(response => response.data);
    },
    follow(id: string) {
        return instance.post<FollowUnfollowResponseType>(`follow/${id}`).then(response => response.data)
    },
    unFollow(id: string) {
        return instance.delete<FollowUnfollowResponseType>(`follow/${id}`).then(response => response.data)
    },
}

// PROFILE
export type ProfileType = {
    aboutMe: string,
    contacts: ProfileContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: ProfilePhotosType,
}
export type ProfileContactsType = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string,
}
export type ProfilePhotosType = {
    small: string,
    large: string,
}
export type updateProfileRequestType = {
    aboutMe: string,
    contacts: ProfileContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
}
export type PostType = {
    id: number
    text: string
    likesCount: number
}
export const ProfileAPI = {
    getProfile(id: number) {
        return instance.get<Promise<ProfileType>>(`profile/${id}`).then(response => response.data);
    },
    updateProfile(data: updateProfileRequestType) {
        return instance.put<Promise<ResponseType & { data: object }>>(`profile`, data).then(response => response.data);
    },
    updatePhoto(image: File) {
        const formData = new FormData();
        formData.append('image', image);
        return instance.put<ResponseType & { data: { photos: ProfilePhotosType } }>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then(response => response.data)
    }
}