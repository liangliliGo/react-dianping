import * as actionType from '../constants/userinfo'

export function update(data) {
    return {
        type: actionType.USERINFO_LOGIN,
        data
    }
}