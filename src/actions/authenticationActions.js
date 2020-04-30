import * as types from './index';

export const registerUserActions = (user) => {

    return {
        type: types.REGISTER_USER,
        user
    }
}

export const loginUserAction = (user) => {
    return {
        type: types.LOGIN_USER,
        user
    }
}