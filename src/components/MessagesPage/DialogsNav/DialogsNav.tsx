import React from 'react';
import Classes from './DialogsNav.module.css';
import {DialogType} from '../../../redux/reducers/dialogs-reducer';
import {NavLink} from 'react-router-dom';

type DialogsType = {
    dialogs: Array<DialogType>
}

export function DialogsNav({dialogs}: DialogsType) {
    return (
        <div className={Classes.container}>
            <h3 className={Classes.title}>
                My Dialogs
            </h3>
            {dialogs.map(dialog =>
                <NavLink
                    key={dialog.id}
                    to={'/messages/' + dialog.id}
                    className={Classes.navLink}>

                    {dialog.name}
                </NavLink>)}
        </div>
    );
}

