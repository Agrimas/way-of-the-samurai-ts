import React from 'react';
import Classes from './MessagesPage.module.css';
import {DialogsNav} from './DialogsNav/DialogsNav';
import {StoreContext} from '../../StoreContext';
import {DialogContainer} from './Dialog/DialogContainer';


export function MessagesPage() {
    return (
        <div className={Classes.container}>

            <StoreContext.Consumer>
                {store => <DialogsNav dialogs={store.getState().messagesPage.dialogs}/>}
            </StoreContext.Consumer>

            <StoreContext.Consumer>
                {store => <DialogContainer store={store}/>}
            </StoreContext.Consumer>
        </div>
    );
}