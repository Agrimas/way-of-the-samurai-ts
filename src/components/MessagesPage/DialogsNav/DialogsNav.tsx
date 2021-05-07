import React from 'react';
import Classes from './DialogsNav.module.css';
import {DialogType} from '../../../redux/dialogs-reducer';
import {DialogNav} from './DialogNav/DialogNav';

type DialogsType = {
    dialogs: Array<DialogType>
}

export function DialogsNav(props: DialogsType) {
    let dialogsNav = props.dialogs.map(dialog => <DialogNav key={dialog.id} id={dialog.id} name={dialog.name}/>)
    return (
        <div className={Classes.container}>
            <h3 className={Classes.title}>
                My Dialogs
            </h3>
            {dialogsNav}
        </div>
    );
}

