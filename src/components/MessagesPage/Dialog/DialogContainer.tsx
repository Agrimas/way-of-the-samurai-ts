import React from 'react';
import {addMessage} from '../../../redux/reducers/dialogs-reducer';
import {Dialog} from './Dialog';
import {connect} from 'react-redux';
import {StateType} from '../../../redux/redux-store';

function mapStateToProps(state: StateType) {
    return {
        messages: state.messagesPage.messages,
    }
}

export const DialogContainer = connect(mapStateToProps, {addMessage})(Dialog);