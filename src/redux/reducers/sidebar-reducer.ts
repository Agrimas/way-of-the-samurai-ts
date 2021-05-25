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

function sidebarReducer(state = initialState, action: {}) {
    return state;
}

export default sidebarReducer;