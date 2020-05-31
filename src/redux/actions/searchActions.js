import { LOADING_SEARCHING, SUCCESS_SEARCHING, ERROR_SEARCHING } from './actionTypes';
import axios from 'axios';

export const successSearching = (dispatch, users) => {
    dispatch({
        type: SUCCESS_SEARCHING,
        payload: users
    })
}

export const errorSearching = (dispatch, error) => {
    dispatch({
        type: ERROR_SEARCHING,
        payload: error
    })
}

export const loadingSearching = (dispatch) => {
    dispatch({
        type:LOADING_SEARCHING,
        payload:true
    })
}

export const getSearch = (userName) => {
    return dispatch => {
        loadingSearching(dispatch);
        return axios.get('https://api.github.com/search/users?q=alperen').then((response) => {
            successSearching(dispatch, response.data.items);
            console.log(response);
        }).catch(error => {
            errorSearching(dispatch, error);
            console.log(error);
        })
    }
}


