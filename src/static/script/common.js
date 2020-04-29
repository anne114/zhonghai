export function save_userinfo(userinfo) {
    const s_user = uni.getStorageSync('userinfo');
    if (s_user) {
        Object.assign(userinfo, s_user)
    }
    uni.setStorageSync('userinfo', userinfo)
}
export function get_userinfo(key) {
    const s_user = uni.getStorageSync('userinfo');
    if (s_user) {
        return s_user[key] || ''
    } else {
        return ''
    }
}
export function check_token() {
    const e_time = uni.getStorageSync("expires_time");
    if(!e_time){
        return false
    }
    const d_time = e_time * 1000 - new Date().getTime();
    return d_time < 1000 * 60 * 5 && d_time > 0
}