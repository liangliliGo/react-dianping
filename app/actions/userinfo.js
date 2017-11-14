import * as actionType from '../constants/userinfo'

export function login(data) {
    return {
        type: actionType.USERINFO_LOGIN,
        data
    }
}