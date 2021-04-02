export type StateType = {
    friends: Array<FriendsType>
    myPosts: Array<myPostsType>
    messagesPage: messagesPageType
}

export type messagesPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type FriendsType = {
    id: number
    name: string
}

export type myPostsType = {
    id: number
    text: string
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
    myPosts: [
        {
            id: 1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id itaque obcaecati pariatur sit veniam! Accusantium adipisci delectus dolor doloribus dolorum ea harum in ipsum iste minus, quo ratione temporibus unde.'
        },
        {
            id: 2,
            text: 'Lorem ipsum dolor sit amet.'
        },
        {
            id: 3,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, tempora!'
        }
    ],
    messagesPage: {
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


export default state;