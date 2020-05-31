import { LOADING_SEARCHING, SUCCESS_SEARCHING, ERROR_SEARCHING } from '../actions/actionTypes';
import { successSearching, errorSearching } from '../actions/searchActions';

const INITIAL_STATE = {
    users: [],
    error: null,
    loading: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SUCCESS_SEARCHING:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case ERROR_SEARCHING:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case LOADING_SEARCHING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
};
