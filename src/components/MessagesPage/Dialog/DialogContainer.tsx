import React from 'react';
import {addMessageActionCreator, updateTextareaValueDialogActionCreator} from '../../../redux/dialogs-reducer';
import {Dialog} from './Dialog';
import {connect} from 'react-redux';
import {dispatchType, StateType} from '../../../redux/redux-store';

function mapStateToProps(state: StateType) {
    return {
        messages: state.messagesPage.messages,
        textareaValue: state.messagesPage.textareaValue,
    }
}

function mapDispatchToProps(dispatch: dispatchType) {
    return {
        updateTextareaValue: (text: string) => dispatch(updateTextareaValueDialogActionCreator(text)),
        addMessage: () => dispatch(addMessageActionCreator())
    }
}

export const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);