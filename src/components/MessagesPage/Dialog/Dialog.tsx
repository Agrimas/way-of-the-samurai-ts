import React from 'react';
import Classes from './Dialog.module.css';
import {Message} from './Message/Message';
import {MessageType} from '../../../redux/state';

type DialogType = {
    messages: Array<MessageType>
}

export function Dialog(props: DialogType) {
    let messages = props.messages.map(message => <Message id={message.id} text={message.text} isMine={message.isMine}/>)
    return (
        <div className={Classes.container}>
            {messages}
        </div>
    );
}