import request from './index'
import {
    save_userinfo,
    get_userinfo
} from "@/static/script/common";

export async function login(data) {
    let res = await request({
        url: '/api/_Account/Login',
        data,
        valide_token: false,
        method: 'POST',
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    })
    try {
        set_expires_time(res.expires_in)
        uni.setStorageSync('userinfo', res);
        uni.navigateBack();
    } catch (error) {

    }
}
export async function refreshToken() {
    const refresh_token = get_userinfo('refresh_token')
    let res = await request({
        url: '/api/_Account/RefreshToken',
        data: {
            refreshToken: refresh_token
        },
        valide_token: false
    })
    try {
        save_userinfo(res);
        set_expires_time(res.expires_in)

    } catch (error) {

    }
}
export function set_expires_time(expires_in) {
    const n_t = parseInt(new Date().getTime() / 1000)
    uni.setStorageSync('expires_time', expires_in + n_t);
}