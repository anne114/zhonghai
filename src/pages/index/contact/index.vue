<template>
  <div class="content-box">
    <div class="time t-c">12:02</div>
    <div class="flex c-item self">
      <img
        src="../../../static//images/ico_kefu_head@2x.png"
        class="head-img"
        alt="头像"
      />
      <div class="c-con">请问，预定你们的药品 可以开增值税发票吗？可以开增值税发票吗？可以开增值税发票吗？</div>
    </div>
    <div class="flex c-item other">
      <img
        src="../../../static//images/ico_kefu_head@2x.png"
        class="head-img"
        alt="头像"
      />
      <div class="c-con">请问，预定你们的药品 可以开增值税发票吗？</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact_list: [
        {
          type: 1,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content-box {
  height: 100vh;
  background: #f2f5f4;
  padding: 40rpx 0 100rpx;
  overflow: auto;
}
.head-img {
  @include WH(80, 80);
  margin: 0 32rpx;
}
.c-item {
  margin-top: 40rpx;
  margin-bottom: 16rpx;
  .c-con {
    padding: 24rpx;
    border-radius: 24rpx;
    max-width: 460rpx;
    @include after();
    &::after {
      top: 24rpx;
    }
  }
  &.self {
    justify-content: flex-end;
    .head-img {
      order: 3;
    }
    .c-con {
      background: $color_blue;
      color: #fff;
      order: 2;
      &::after {
        right: -20rpx;
        border-top: 16rpx solid transparent;
        border-left: 32rpx solid $color_blue;
        border-bottom: 16rpx solid transparent;
      }
    }
  }
  &.other {
    .c-con {
      background: #fff;
      &::after {
        left: -20rpx;
        border-top: 16rpx solid transparent;
        border-right: 32rpx solid #fff;
        border-bottom: 16rpx solid transparent;
      }
    }
  }
}
</style>
