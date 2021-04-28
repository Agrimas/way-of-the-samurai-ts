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

let state: StateType = {
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
}

let rerender = () => {
    console.log('state was changed');
}

export function addPost() {
    const text = state.profilePage.textareaValue;
    let newPost: PostType = {
        id: 123,
        text: text,
        likesCount: 0
    }
    state.profilePage.myPosts.push(newPost);
    state.profilePage.textareaValue = '';
    rerender();
}

export function updateTextareaValueMyPosts(text: string) {
    state.profilePage.textareaValue = text;
    rerender();
}

export function addMessage() {
    const text = state.messagesPage.textareaValue;
    let newMessage: MessageType = {
        id: 456,
        text: text,
        isMine: true
    }
    state.messagesPage.messages.push(newMessage);
    state.messagesPage.textareaValue = '';
    rerender();
}

export function updateTextareaValueDialog(text: string) {
    state.messagesPage.textareaValue = text;
    rerender();
}


export function subscriber(observer: () => void) {
    rerender = observer;
}


export default state;