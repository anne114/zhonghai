<template>
  <div>
    <div v-for="(item, index) in lectures" :key="index">
      <div class="flex item">
        <div class="head">
          <img src="../../static/images/people.png" class="h-img" alt="讲师" />
          <img
            src="../../static/images/ico_voice@2x.png"
            class="voice-img"
            alt="喇叭"
          />
        </div>
        <div class="right">
          <h3 class="fs-16">关于最新抗病毒药剂临床的报告</h3>
          <div class="des c-grey elli mt-2">
            20世纪80年代以前抗病毒药物的发展十分年代以前抗病毒药物的发展十分
          </div>
          <div class="people mt10 c-grey">主讲人：陈宝国</div>
        </div>
      </div>
      <div class="flex" v-if="operate_visible">
        <div class="zan op-item">
          <img class="op-img" src="../../static/images/ico_agree_sml@2x.png" />
          <span class="op-t">333</span>
        </div>
        <div class="sc op-item">
          <img
            class="op-img"
            src="../../static/images/ico_favorites_sml@2x.png"
          />
          <span class="op-t">333</span>
        </div>
        <div class="date op-item">
          <img class="op-img" src="../../static/images/ico_time_sml@2x.png" />
          <span class="op-t">2020-12-12</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lectures: {
      default: [],
    },
    optionVisible: {
      default: false,
    },
    operate_visible: {
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.item {
  margin-top: 60rpx;
  .head {
    @include WH(144, 144);
    border-radius: 72rpx;
    margin-right: 32rpx;
    position: relative;
    .h-img {
      width: 100%;
      height: 100%;
    }
    .voice-img {
      @include WH(36, 36);
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
  .right {
    width: 490rpx;
  }
}
.op-item {
  padding-top: 20rpx;
  width: 33.33%;
  line-height: 36rpx;
  padding-left: 20rpx;
  .op-img {
    vertical-align: middle;
    @include WH(36, 36);
    margin-right: 5rpx;
  }
  .op-t {
    margin-top: 5rpx;
  }
}
</style>
