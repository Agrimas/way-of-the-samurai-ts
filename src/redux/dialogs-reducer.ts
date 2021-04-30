import {actionType} from './redux-store';
export type messagesPageStateType = {
    textareaValue: string
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    text: string
    isMine: boolean
}

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXTAREA_VALUE_DIALOG = 'UPDATE-TEXTAREA-VALUE-DIALOG';

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const updateTextareaValueDialogActionCreator = (text: string) => {
    return {
        type: UPDATE_TEXTAREA_VALUE_DIALOG,
        text: text
    }
}

const initialState = {
    textareaValue: '',
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

function dialogsReducer(state: messagesPageStateType = initialState, action: actionType) {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: MessageType = {
                id: 456,
                text: state.textareaValue,
                isMine: true
            }
            state.messages.push(newMessage);
            state.textareaValue = '';
            break;
        case UPDATE_TEXTAREA_VALUE_DIALOG:
            if (action.text) {
                state.textareaValue = action.text;
            }
            break;
    }

    return state
}

export default dialogsReducer;