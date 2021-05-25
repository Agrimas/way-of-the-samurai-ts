import React, {ChangeEvent, useState} from 'react';
import Classes from './Dialog.module.css';
import {Message} from './Message/Message';
import {MessagesType} from '../../../redux/reducers/dialogs-reducer';

type DialogType = {
    messages: MessagesType
    addMessage: (text: string) => void
}

export function Dialog(props: DialogType) {
    const [textareaValueDialog, setTextareaValueDialog] = useState('');

    const messages = props.messages.map(message => <Message key={message.id}
                                                            id={message.id}
                                                            text={message.text}
                                                            isMine={message.isMine}/>)

    function onChangeTextareaHandler(event: ChangeEvent<HTMLTextAreaElement>) {
        setTextareaValueDialog(event.currentTarget.value)
    }

    function addMessage() {
        props.addMessage(textareaValueDialog);
        setTextareaValueDialog('');
    }


    return (
        <div className={Classes.container}>
            <div className={Classes.messagesBody}>
                {messages}

            </div>
            <div className={Classes.messagesForm}>
                <textarea className={Classes.textarea} onChange={onChangeTextareaHandler} value={textareaValueDialog}/>
                <input type="button" value={'Send'} className={Classes.button} onClick={addMessage}/>
            </div>
        </div>
    );
}