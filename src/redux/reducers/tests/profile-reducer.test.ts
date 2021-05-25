import profileReducer, {addPost, setUserProfile} from '../profile-reducer';
import {ProfileContactsType, ProfilePhotosType, ProfileType} from '../../../api/api';


const state = {
    myPosts: [
        {
            id: 1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id itaque obcaecati pariatur sit veniam! Accusantium adipisci delectus dolor doloribus dolorum ea harum in ipsum iste minus, quo ratione temporibus unde.',
            likesCount: 5
        },
        {
            id: 2,
            text: 'Lorem ipsum dolor sit amet.',
            likesCount: 6
        },
        {
            id: 3,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, tempora!',
            likesCount: 8
        }
    ],
    profile: {} as ProfileType,
    authProfile: {} as ProfileType,
};


test('myPosts length should be 4', () => {
    const newState = profileReducer(state, addPost('lola'));

    expect(newState.myPosts).toHaveLength(4);
});

test('new post text should be "lola"', () => {
    const newState = profileReducer(state, addPost('lola'));

    expect(newState.myPosts[3].text).toBe('lola');
});

const newProfile = {
    userId: 16941,
    fullName: 'Anton',
    aboutMe: 'Lorem',
    contacts: {
        facebook: '',
        website: '',
        vk: '',
        twitter: '',
        instagram: '',
        youtube: '',
        github: '',
        mainLink: '',
    },
    lookingForAJob: true,
    lookingForAJobDescription: 'React JS',
    photos: {
        small: '',
        large: '',
    },
}

test('new profile should be "Anton"', () => {
    const newState = profileReducer(state, setUserProfile(newProfile as ProfileType));

    expect(newState.profile.fullName).toBe('Anton');
});

