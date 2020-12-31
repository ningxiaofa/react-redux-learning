import { FETCH_USER_SUCCESS, FETCH_USER_REQUEST, FETCH_USER_FAILURE } from "../constants"

export function fetch_user_success(user) {
    return {
        type: FETCH_USER_SUCCESS,
        user // user: user 简写为 user
    }
}

export function fetch_user_request() {
    return {
        type: FETCH_USER_REQUEST,
    }
}

export function fetch_user_failure(error) {
    return {
        type: FETCH_USER_FAILURE,
        error
    }
}

export const get_user = () => {
    return dispatch => {
        dispatch(fetch_user_request())
        fetch("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php")
        .then(res => res.json())
        .then(data => {
            dispatch(fetch_user_success(data.chengpinDetails[0]))
        })  // data.data 中后一个data是返回的数据格式中字段
        .catch(error => {
            console.error(error)
            dispatch(fetch_user_failure(error.response.error))
        })
    }
}
