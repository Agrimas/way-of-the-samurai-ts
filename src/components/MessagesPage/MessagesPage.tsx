import React from 'react';
import Classes from './MessagesPage.module.css';
import {DialogContainer} from './Dialog/DialogContainer';
import {DialogsNavContainer} from './DialogsNav/DialogsNavContainer';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';

function MessagesPage() {
    return (
        <div className={Classes.container}>
            <DialogsNavContainer/>
            <DialogContainer/>
        </div>
    );
}

export default WithAuthRedirect(MessagesPage);
