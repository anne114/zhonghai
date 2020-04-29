<template>
  <div>
    <ul class="s-ul flex">
      <li
        class="s-li"
        :class="{ select: type === d_type.classic }"
        @click="handler_classic"
      >
        分类
      </li>
      <li
        class="s-li"
        :class="{ select: type === d_type.teacher }"
        @click="handler_teacher"
      >
        讲师
      </li>
      <li class="s-li time">
        时间
        <span class="up but select"></span>
        <span class="down but"></span>
      </li>
      <li class="s-but"></li>
    </ul>
    <div
      class="des"
      @click="type = ''"
      v-if="type === d_type.classic || type === d_type.teacher"
    >
      <div @click.stop="" v-if="type === d_type.classic" class="con classic">
        <div
          class="s-item"
          @click="hander_switch_all_classic"
          :class="{ select: all_classices_visible }"
        >
          全部分类
        </div>
        <ul class="flex">
          <li
            class="s-item"
            @click="handler_switch_slassic_item(item.id)"
            v-for="(item, index) in all_classices"
            :key="index"
            :class="{ select: select_classices.includes(item.id) }"
          >
            医疗动态
          </li>
          <li class="s-item">国际价格</li>
          <li class="s-item">药品分析</li>
          <li class="s-item">临床数据</li>
          <li class="s-item">市场动态</li>
        </ul>
      </div>
      <div @click.stop="" v-else-if="type === d_type.teacher" class="con flex flex-jc-sb">
        <div class="t-item" v-for="(item, index) in 6" :key="index">
          <div><img src="../../static/images/people.png" class="t-head" /></div>
          <div>名字名字</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      d_type: {
        classic: "classic",
        teacher: "teacher",
      },
      type: "",
      select_classices: [],
      all_classices: [{ id: 1 }, { id: 2 }, { id: 3 }],
    };
  },
  computed: {
    all_classices_visible() {
      return (
        this.select_classices.length > 0 &&
        this.select_classices.length === this.all_classices.length
      );
    },
  },
  methods: {
    hander_switch_all_classic() {
      if (this.select_classices.length > 0) {
        this.select_classices = [];
      } else {
        this.select_classices = this.all_classices.map((v) => v.id);
      }
    },
    handler_switch_slassic_item(id) {
      if (this.select_classices.includes(id)) {
        this.select_classices = this.select_classices.filter(
          (v) => v.id !== id
        );
      } else {
        this.select_classices.push(id);
      }
    },
    handler_classic() {
      if (this.type === this.d_type.classic) {
        this.type = "";
      } else {
        this.type = this.d_type.classic;
      }
    },
    handler_teacher() {
      if (this.type === this.d_type.teacher) {
        this.type = "";
      } else {
        this.type = this.d_type.teacher;
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.s-ul {
  margin: 30rpx 0;
  position: relative;
  .s-li {
    @include WH(80, 60);
    margin-right: 32rpx;
    padding-left: 14rpx;
    padding-right: 50rpx;
    background: #fafafa;
    border-radius: 30rpx;
    line-height: 60rpx;
    text-align: center;
    @include after();
    &.select {
      color: $color_blue;
      background: $color_x_blue;
    }
    &::after {
      @include WH(36, 36);
      top: 12rpx;
      right: 14rpx;
    }
    &:nth-child(1) {
      &::after {
        @include bg-img("ico_menu_def@2x.png");
      }
      &.select::after {
        @include bg-img("ico_menu_sel@2x.png");
      }
    }
    &:nth-child(2) {
      &::after {
        @include bg-img("ico_teacher_def@2x.png");
      }
      &.select::after {
        @include bg-img("ico_teacher_sel@2x.png");
      }
    }
    &.time {
      .but {
        position: absolute;
        right: 22rpx;
        display: inline-block;
        border-left: 10rpx solid transparent;
        border-right: 10rpx solid transparent;
        &.up {
          border-bottom: 11rpx solid $color_x_grey;
          top: 16rpx;
          &.select {
            border-bottom-color: $color_grey;
          }
        }
        &.down {
          border-top: 11rpx solid $color_x_grey;
          bottom: 16rpx;
          &.select {
            border-top-color: $color_grey;
          }
        }
      }
    }
  }
  .s-but {
    @include WH(36, 36);
    @include bg-img("ico_search@2x.png");
    position: absolute;
    right: 0;
    top: 10rpx;
  }
}
.des {
  height: calc(100vh - 100rpx);
  margin: 0 -34rpx;
  background: rgba($color: #000000, $alpha: 0.5);
  .con {
    background: #fff;
    padding: 0 48rpx 20rpx;
  }
  .classic {
    .s-item {
      width: 50%;
      height: 44rpx;
      line-height: 44rpx;
      padding-left: 65rpx;
      background-size: 44rpx 44rpx !important;
      background-position: 0rpx 0rpx;
      margin-top: 44rpx;
      box-sizing: border-box;
      &:not(.select) {
        @include bg-img("check_circle_def@2x.png");
      }
      &.select {
        @include bg-img("check_circle_sel@2x.png");
      }
    }
  }
}
.t-item {
  width: 33%;
  text-align: center;
  margin-bottom: 25rpx;
  .t-head {
    @include WH(144, 144);
    margin-bottom: 10rpx;
  }
}
</style>
