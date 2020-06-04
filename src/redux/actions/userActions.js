import { LOADING_USERDETAIL, SUCCESS_USERDETAIL, ERROR_USERDETAIL } from './actionTypes';
import axios from 'axios';

export const successGetUserDetail = (dispatch, users) => {
    dispatch({
        type: SUCCESS_USERDETAIL,
        payload: users
    })
}

export const errorGetUserDetail = (dispatch, error) => {
    dispatch({
        type: ERROR_USERDETAIL,
        payload: error
    })
}

export const loadingGetUserDetail = (dispatch) => {
    dispatch({
        type: LOADING_USERDETAIL,
        payload: true
    })
}

export const getUserDetail = (userName) => {
    return dispatch => {
        loadingGetUserDetail(dispatch);
        return axios.get(`https://api.github.com/users/${userName}`).then((response) => {
            successGetUserDetail(dispatch, response.data);
        }).catch(error => {
            errorGetUserDetail(dispatch, error);
            console.log(error);
        })
    }
}


