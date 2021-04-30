import {actionType} from './redux-store';

export type FriendsType = {
    id: number
    name: string
}
const initialState = [
    {
        id: 1,
        name: 'Anton'
    },
    {
        id: 2,
        name: 'Dima'
    }, {
        id: 3,
        name: 'Sveta'
    }
];

function sidebarReducer(state: Array<FriendsType> = initialState, action: actionType) {

    return state;
}

export default sidebarReducer;