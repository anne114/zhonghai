// 跳转到tab首页，并关闭其他非tab页面
export function switch_tab_index() {
    uni.switchTab({
        url: 'pages/index/index'
    })
}
// 跳转到联系我们页面，保留当前页
export function nav_to_contact() {
    console.log('111',uni);
    uni.navigateTo({
        url: 'pages/index/contact/index'
    })
}