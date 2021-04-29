import React from 'react';
import Classes from './MessagesPage.module.css';
import {DialogsNav} from './DialogsNav/DialogsNav';
import {dispatchType, messagesPageStateType} from '../../redux/state';
import {Dialog} from './Dialog/Dialog';

type messagesPageType = messagesPageStateType & {
    dispatch: dispatchType
}

export function MessagesPage(props: messagesPageType) {
    return (
        <div className={Classes.container}>
            <DialogsNav dialogs={props.dialogs}/>
            <Dialog messages={props.messages} dispatch={props.dispatch}/>
        </div>
    );
}