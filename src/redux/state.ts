type StoreType = {
    _state: StateType
    getState: () => StateType
    subscriber: (observer: () => void) => void
    _callSubscriber: () => void
    dispatch: dispatchType

}
export type StateType = {
    friends: Array<FriendsType>
    profilePage: profilePageStateType
    messagesPage: messagesPageStateType
}
export type FriendsType = {
    id: number
    name: string
}
export type profilePageStateType = {
    textareaValue: string
    myPosts: Array<PostType>
}
export type PostType = {
    id: number
    text: string
    likesCount: number
}
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
export type  dispatchType = (action: actionType) => void;
type actionType = {
    type: string
    text?: string
}

const ADD_POST = 'ADD-POST';
const UPDATE_TEXTAREA_VALUE_MY_POSTS = 'UPDATE-TEXTAREA-VALUE-MY-POSTS';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXTAREA_VALUE_DIALOG = 'UPDATE-TEXTAREA-VALUE-DIALOG';

let store: StoreType = {
    _state: {
        friends: [
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
        ],
        profilePage: {
            textareaValue: '',
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
        },
        messagesPage: {
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
        }
    },
    getState() {
        return this._state;
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log('call subscriber');
    },

    dispatch(action) {
        let text = ''
        switch (action.type) {
            case ADD_POST:
                text = this._state.profilePage.textareaValue;
                let newPost: PostType = {
                    id: 123,
                    text: text,
                    likesCount: 0
                }
                this._state.profilePage.myPosts.push(newPost);
                this._state.profilePage.textareaValue = '';
                this._callSubscriber();
                break;
            case UPDATE_TEXTAREA_VALUE_MY_POSTS:
                if (action.text) {
                    this._state.profilePage.textareaValue = action.text;
                    this._callSubscriber();
                }
                break;
            case ADD_MESSAGE:
                text = this._state.messagesPage.textareaValue;
                let newMessage: MessageType = {
                    id: 456,
                    text: text,
                    isMine: true
                }
                this._state.messagesPage.messages.push(newMessage);
                this._state.messagesPage.textareaValue = '';
                this._callSubscriber();
                break;
            case UPDATE_TEXTAREA_VALUE_DIALOG:
                if (action.text) {
                    this._state.messagesPage.textareaValue = action.text;
                    this._callSubscriber();
                }
                break;
        }
    }
}


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateTextareaValueMyPosts = (text: string) => {
    return {
        type: UPDATE_TEXTAREA_VALUE_MY_POSTS,
        text: text
    }
}
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

export default store;