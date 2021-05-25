import {ThunkAction} from 'redux-thunk';
import {StateType} from '../redux-store';
import {getUserData} from './auth-reducer';

const SET_INITIALISATION = 'SET-INITIALISATION';

type actionType = setInitialisationActionType

const initialState = {
    isInitialisation: false,
}

const appReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case SET_INITIALISATION:
            return {
                ...state,
                isInitialisation: true
            }
        default:
            return state;
    }
}

type setInitialisationActionType = {
    type: typeof SET_INITIALISATION,
}
const setInitialisationAC = (): setInitialisationActionType => ({type: SET_INITIALISATION});

export const setInitialisation = (): ThunkAction<Promise<void>, StateType, unknown, actionType> => async dispatch => {

    await dispatch(getUserData());

    dispatch(setInitialisationAC());
}

export default appReducer;