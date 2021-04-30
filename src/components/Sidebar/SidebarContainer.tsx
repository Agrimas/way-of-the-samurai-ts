import React from 'react';
import {connect} from 'react-redux';
import {Sidebar} from './Sidebar';
import {dispatchType, StateType} from '../../redux/redux-store';

function mapStateToProps(state: StateType) {
    return {
        friends: state.friends
    }
}

function mapDispatchToProps(dispatch: dispatchType) {
    return {}
}

export const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);