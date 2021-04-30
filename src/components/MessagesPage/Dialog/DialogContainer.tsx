import React, {ChangeEvent} from 'react';
import {Message} from './Message/Message';
import {addMessageActionCreator, updateTextareaValueDialogActionCreator} from '../../../redux/dialogs-reducer';
import {Dialog} from './Dialog';
import {StoreType} from '../../../redux/redux-store';

type DialogContainerType = {
    store: StoreType
}


export function DialogContainer(props: DialogContainerType) {
    let messages = props.store.getState().messagesPage.messages;

    let textareaValue = props.store.getState().messagesPage.textareaValue;

    function updateTextareaValue(text: string) {
        props.store.dispatch(updateTextareaValueDialogActionCreator(text));
    }

    function addMessage() {
        props.store.dispatch(addMessageActionCreator())
    }

    return <Dialog messages={messages} updateTextareaValue={updateTextareaValue} addMessage={addMessage}
                   textareaValue={textareaValue}/>
}