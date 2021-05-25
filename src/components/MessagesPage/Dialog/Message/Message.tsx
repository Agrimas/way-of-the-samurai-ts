import React from 'react';
import Classes from './Message.module.css';
import {MessageType} from '../../../../redux/reducers/dialogs-reducer';
import cn from 'classnames';

export function Message({isMine, text}: MessageType) {
    if (isMine) {
        return (
            <p className={cn(Classes.item, Classes.isMine)}>{text}</p>
        );
    }
    return (
        <p className={cn(Classes.item, Classes.fromThem)}>{text}</p>
    );
}