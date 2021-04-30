import React, {ChangeEvent} from 'react';
import Classes from './Dialog.module.css';
import {Message} from './Message/Message';
import {dispatchType} from '../../../redux/redux-store';
import {MessageType} from '../../../redux/dialogs-reducer';
import {addMessageActionCreator, updateTextareaValueDialogActionCreator} from '../../../redux/dialogs-reducer';

type DialogType = {
    messages: Array<MessageType>
    textareaValue: string
    updateTextareaValue: (text: string) => void
    addMessage: () => void
}

export function Dialog(props: DialogType) {
    let messages = props.messages.map(message => <Message id={message.id} text={message.text} isMine={message.isMine}/>)

    function onChangeTextareaHandler(event: ChangeEvent<HTMLTextAreaElement>) {
        props.updateTextareaValue(event.currentTarget.value)
    }

    function addMessage() {
        props.addMessage()
    }

    return (
        <div className={Classes.container}>
            <div className={Classes.messagesBody}>
                {messages}

            </div>
            <div className={Classes.messagesForm}>
                <textarea className={Classes.textarea} onChange={onChangeTextareaHandler} value={props.textareaValue}/>
                <input type="button" value={'Send'} className={Classes.button} onClick={addMessage}/>
            </div>
        </div>

    );
}