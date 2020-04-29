<template>
  <div>
    <clear-input
      label="账号"
      label-width="80"
      tag="phone"
      :value="name"
      maxlength="11"
      placeholder="请输入账号"
      type="text"
    />
    <clear-input
      label="密码"
      label-width="80"
      tag="phone"
      :value="pwd"
      maxlength="20"
      placeholder="请输入密码"
      type="password"
    />
    <clear-input
      label="密码"
      label-width="80"
      tag="phone"
      :value="confirm_pwd"
      maxlength="20"
      placeholder="请再次输入密码"
      type="password"
    />
  </div>
</template>

<script>
import clearInput from "@/components/libs/xiaowu-input/clear-input";
export default {
  components: { clearInput },
  data() {
    return {
      name: "",
      pwd: "",
      confirm_pwd: "",
    };
  },
};
</script>

<style></style>
