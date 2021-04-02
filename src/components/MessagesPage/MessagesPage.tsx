import React from 'react';
import Classes from './MessagesPage.module.css';
import {DialogsNav} from './DialogsNav/DialogsNav';
import {messagesPageType} from '../../redux/state';
import {Dialog} from './Dialog/Dialog';

export function MessagesPage(props: messagesPageType) {
    return (
        <div className={Classes.container}>
            <DialogsNav dialogs={props.dialogs}/>
            <Dialog messages={props.messages}/>
        </div>
    );
}