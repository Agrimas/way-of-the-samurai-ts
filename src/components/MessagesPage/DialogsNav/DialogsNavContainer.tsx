import React from 'react';
import {connect} from 'react-redux';
import {DialogsNav} from './DialogsNav';
import {dispatchType, StateType} from '../../../redux/redux-store';

function mapStateToProps(state: StateType) {
    return {
        dialogs: state.messagesPage.dialogs
    }
}

function mapDispatchToProps(dispatch: dispatchType) {
    return {}
}

export const DialogsNavContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsNav);