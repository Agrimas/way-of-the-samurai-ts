import React, {ChangeEvent} from 'react';
import Classes from './Dialog.module.css';
import {Message} from './Message/Message';
import {
    addMessageActionCreator,
    dispatchType,
    MessageType,
    updateTextareaValueDialogActionCreator
} from '../../../redux/state';

type DialogType = {
    messages: Array<MessageType>
    dispatch: dispatchType
}


export function Dialog(props: DialogType) {
    let messages = props.messages.map(message => <Message id={message.id} text={message.text} isMine={message.isMine}/>)

    function onChangeTextareaHandler(event: ChangeEvent<HTMLTextAreaElement>) {
        props.dispatch(updateTextareaValueDialogActionCreator(event.currentTarget.value));
    }

    function addMessage() {
        props.dispatch(addMessageActionCreator())
    }

    return (
        <div className={Classes.container}>
            <div className={Classes.messagesBody}>
                {messages}

            </div>
            <div className={Classes.messagesForm}>
                <textarea className={Classes.textarea} onChange={onChangeTextareaHandler}/>
                <input type="button" value={'Send'} className={Classes.button} onClick={addMessage}/>
            </div>
        </div>

    );
}