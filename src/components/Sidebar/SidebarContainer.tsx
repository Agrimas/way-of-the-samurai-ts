import React from 'react';
import {connect} from 'react-redux';
import {Sidebar} from './Sidebar';
import {StateType} from '../../redux/redux-store';

function mapStateToProps(state: StateType) {
    return {
        friends: state.friends
    }
}

export const SidebarContainer = connect(mapStateToProps, {})(Sidebar);