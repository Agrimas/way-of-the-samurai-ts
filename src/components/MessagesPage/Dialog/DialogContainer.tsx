import React from 'react';
import {addMessage, updateTextareaValueDialog} from '../../../redux/dialogs-reducer';
import {Dialog} from './Dialog';
import {connect} from 'react-redux';
import {StateType} from '../../../redux/redux-store';

function mapStateToProps(state: StateType) {
    return {
        messages: state.messagesPage.messages,
        textareaValue: state.messagesPage.textareaValue,
    }
}

export const DialogContainer = connect(mapStateToProps, {updateTextareaValueDialog, addMessage})(Dialog);