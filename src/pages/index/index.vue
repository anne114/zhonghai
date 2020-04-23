<template>
  <div>
    <div class="slider">slider</div>
    <ul class="title flex">
      <li class="t-item">
        <h4 class="t-h4">医疗讲座</h4>
        <p class="tip c-x-grey">专业名师讲解</p>
      </li>
      <li class="t-item" @click="handler_contact">
        <h4 class="t-h4">医疗讲座</h4>
        <p class="tip c-x-grey">最全的医药平台</p>
      </li>
    </ul>
    <div class="con">
      <div class="line c-blue">
        <span class="text">最新讲座</span>
      </div>
      <lectureItem :lectures="lecture_list" />
      <div class="c-grey t-r mt20">
        <span>
          更多讲座
          <img src="../../static/images/ico_right_into_sml@2x.png" class="r-tran" />
        </span>
      </div>
      <div class="line c-blue">
        <span class="text">药品推荐</span>
      </div>
      <div class="drug-box flex flex-jc-sb">
        <div class="d-item" v-for="(item,index) in drug_lists" :key="index">
          <drugItem />
        </div>
      </div>
    </div>
    <div class="contact" @click="handler_contact">
      <img class="c-img" src="../../static/images/ico_kefu@2x.png" />
    </div>
  </div>
</template>

<script>
import lectureItem from "@/components/index/lectureItem.vue";
import drugItem from "@/components/index/drugItem.vue";
import { nav_to_contact } from "@/static/script/routerLink";
export default {
  components: {
    lectureItem,
    drugItem
  },
  data() {
    return {
      lecture_list: [1, 2],
      drug_lists: [1, 2, 2, 3, 2]
    };
  },
  methods: {
    handler_contact() {
      nav_to_contact();
    }
  }
};
</script>

<style lang="scss">
.slider {
  @include WH(750, 400);
  background: #ccc;
}
.title {
  height: 58rpx;
  border-radius: 32rpx 32rpx 0 0;
  position: relative;
  top: -22rpx;
  padding: 50rpx 0;
  background: #fff;
  line-height: 200%;
  .t-item {
    width: 50%;
    text-align: center;
    .t-h4 {
      font-size: 28rpx;
    }
  }
}
.con {
  margin: 0 40rpx 30rpx 40rpx;
}
.line {
  text-align: center;
  border-bottom: 1px solid $color-blue;
  .text {
    display: inline-block;
    padding: 0 30rpx;
    background: #fff;
    position: relative;
    top: 14rpx;
  }
}
.drug-box {
  .d-item {
    width: 48%;
    overflow: hidden;
  }
}
.contact {
  position: fixed;
  right: 0rpx;
  bottom: 100rpx;
  .c-img {
    @include WH(132, 132);
  }
}
</style>
