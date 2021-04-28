import React from 'react';
import Classes from './MessagesPage.module.css';
import {DialogsNav} from './DialogsNav/DialogsNav';
import {messagesPageStateType} from '../../redux/state';
import {Dialog} from './Dialog/Dialog';

type messagesPageType = messagesPageStateType & {
    addMessage: () => void
    updateTextareaValueDialog: (text: string) => void
}

export function MessagesPage(props: messagesPageType) {
    return (
        <div className={Classes.container}>
            <DialogsNav dialogs={props.dialogs}/>
            <Dialog messages={props.messages} addMessage={props.addMessage}
                    updateTextareaValueDialog={props.updateTextareaValueDialog}/>
        </div>
    );
}