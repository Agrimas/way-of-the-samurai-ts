import React from 'react';
import Classes from './MessagesPage.module.css';
import {DialogContainer} from './Dialog/DialogContainer';
import {DialogsNavContainer} from './DialogsNav/DialogsNavContainer';

export function MessagesPage() {
    return (
        <div className={Classes.container}>
            <DialogsNavContainer />
            <DialogContainer/>
        </div>
    );
}