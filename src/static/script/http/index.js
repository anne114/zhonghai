import {
    refreshToken
} from './login';
import {
    check_token,
    get_userinfo
} from "@/static/script/common";
import {
    nav_to_login
} from "@/static/script/routerLink";

export default function request({
    url,
    data = {},
    header = {},
    method = 'get',
    timeout = 5000,
    dataType = 'json'
}) {
    if (uni.getStorageSync("expires_time") && !check_token()) {
        refreshToken();
        return;
    }
    const header_basic = {
        'content-type': 'application/json',
        // 'token': get_userinfo('access_token')
        'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MGYzNDIzOS1mMzA4LTRmOWMtYjU2ZS1hZGU5MmJkY2JhMDgiLCJuYW1lIjoi6LaF57qn566h55CG5ZGYIiwiZXhwIjoxNTg4MTY0NTc0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdCJ9.9Z2lPV_kdXSm5_P1q0bXzxLON2Br_w_GSWvIkDBKUp0'
    }
    return new Promise((resolve, reject) => {
        uni.request({
            url: 'http://zh.clappyun.com' + url,
            data,
            header: Object.assign({}, header_basic, header),
            method,
            timeout,
            dataType,
            success(res) {
                const {
                    statusCode
                } = res;
                console.log('res:::', res)
                if (statusCode >= 200 && statusCode < 300) {
                    resolve(res.data)
                } else if (statusCode === 400) {
                    uni.showToast({
                        title: '登录信息已失效，请重新登录'
                    });
                    setTimeout(() => {
                        nav_to_login();
                    }, 1700)
                } else {
                    reject(res)
                }
            },
            fail(res) {
                reject(res)
            }
        })
    })

}