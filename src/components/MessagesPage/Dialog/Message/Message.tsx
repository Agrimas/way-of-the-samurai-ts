import React from 'react';
import Classes from './Message.module.css';
import {MessageType} from '../../../../redux/dialogs-reducer';

export function Message(props: MessageType) {
    if (props.isMine) {
        return (
            <p className={Classes.item + ' ' + Classes.isMine}>{props.text}</p>
        );
    }
    return (
        <p className={Classes.item + ' ' + Classes.fromThem}>{props.text}</p>
    );
}