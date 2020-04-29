<template>
  <div class="page-con">
    <ul class="flex t-ul">
      <li
        class="t-li"
        :class="{ select: type === d_type.all }"
        @click="type = d_type.all"
      >
        全部讲座
      </li>
      <li
        class="t-li"
        :class="{ select: type === d_type.mine }"
        @click="type = d_type.mine"
      >
        我的讲座
      </li>
    </ul>
    <all-lecture v-if="type === d_type.all"/>
    <mine-lecture v-else-if="type === d_type.mine"/>
  </div>
</template>

<script>
import allLecture from '@/components/lecture/allLecture.vue';
import mineLecture from '@/components/lecture/mineLecture.vue';
export default {
  components:{allLecture,mineLecture},
  data() {
    return {
      d_type: {
        all: "all",
        mine: "mine",
      },
      type: 'all',
    };
  },
};
</script>

<style lang="scss" scoped>
.t-ul {
  border: solid 1rpx $color_blue;
  border-radius: 17rpx;
  height: 72rpx;
  line-height: 70rpx;
  font-size: 30rpx;
}
.t-li {
  width: 50%;
  text-align: center;
  color: $color_blue;
  &:nth-child(1){
    border-radius: 16rpx 0 0 16rpx;
  }
  &:nth-child(2){
    border-radius: 0 16rpx 16rpx 0;
  }
  &.select {
    background: $color_blue;
    color: #fff;
  }
}
</style>
