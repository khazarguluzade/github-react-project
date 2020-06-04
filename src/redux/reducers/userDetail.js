import { LOADING_USERDETAIL, SUCCESS_USERDETAIL, ERROR_USERDETAIL } from '../actions/actionTypes';


const INITIAL_STATE = {
    userDetail: {},
    error: null,
    loading: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SUCCESS_USERDETAIL:
            return {
                ...state,
                userDetail: action.payload,
                loading: false
            }
        case ERROR_USERDETAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case LOADING_USERDETAIL:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
};
