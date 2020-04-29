<script>
import { red_to_login } from "@/static/script/routerLink";
import { refreshToken } from "@/static/script/http/login";
import { check_token } from "@/static/script/common";

export default {
  onLaunch: function() {
    console.log("App Launch");
    // try {
    //   const userinfo = uni.getStorageSync("userinfo");
    //   if (!userinfo) {
    //     red_to_login();
    //   } else {
    //     !check_token() && refreshToken();
    //   }
    // } catch (error) {}
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  },
  globalData: {
    test: "",
  },
};
</script>

<style lang="scss">
@import "./static/styles/common.scss";
</style>
