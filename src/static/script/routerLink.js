// 跳转到tab首页，并关闭其他非tab页面
export function switch_tab_index() {
    uni.switchTab({
        url: 'pages/index/index'
    })
}
// 跳转到联系我们页面，保留当前页
export function nav_to_contact() {
    uni.navigateTo({
        url: "/pages/index/contact/index"
    });
}
// 跳转到登录页
export function nav_to_login() {
    uni.navigateTo({
        url: "/pages/login/index"
    });
}
// 跳转到注册页
export function nav_to_register() {
    uni.navigateTo({
        url: "/pages/login/register"
    });
}