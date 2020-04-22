<script>
    export default {
        onLaunch: function() {
            console.log('App Launch');
            // #ifdef APP-PLUS
            // 检测升级
            
            // #endif
        },
        onShow: function() {
            console.log('App Show')
        },
        onHide: function() {
            console.log('App Hide')
        },
		globalData: {
			test: ''
		}
    }
</script>

<style>
    /* #ifndef APP-PLUS-NVUE */
    /* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
    @import './static/styles/common.scss';

    
</style>
