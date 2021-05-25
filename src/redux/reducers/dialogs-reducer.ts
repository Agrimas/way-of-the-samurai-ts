const ADD_MESSAGE = 'ADD-MESSAGE';

type actionType = | addMessageActionType

export type DialogType = {
    id: number
    name: string
}
export type MessagesType = Array<MessageType>;
export type MessageType = {
    id: number
    text: string
    isMine: boolean
}

const initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Dima'
        },
        {
            id: 2,
            name: 'Sveta'
        },
    ],
    messages: [
        {
            id: 1,
            text: 'Hi',
            isMine: true
        },
        {
            id: 2,
            text: 'Hi',
            isMine: false
        },
        {
            id: 3,
            text: 'How are you?',
            isMine: true
        }
    ]
};

function dialogsReducer(state = initialState, action: actionType) {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: MessageType = {
                id: 456,
                text: action.text,
                isMine: true
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        default:
            return state
    }
}

type addMessageActionType = {
    type: typeof ADD_MESSAGE
    text: string
}
export const addMessage = (text: string): addMessageActionType => ({
    type: ADD_MESSAGE,
    text
})

export default dialogsReducer;