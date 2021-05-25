import React from 'react';
import {connect} from 'react-redux';
import {DialogsNav} from './DialogsNav';
import {StateType} from '../../../redux/redux-store';

function mapStateToProps(state: StateType) {
    return {
        dialogs: state.messagesPage.dialogs
    }
}

export const DialogsNavContainer = connect(mapStateToProps, {})(DialogsNav);