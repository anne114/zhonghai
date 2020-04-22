<template>
  <div>
    <div class="flex" v-for="(item, index) in lectures" :key="index">
        <div>
            <img src="../../static/images/people.png" class="head" alt="讲师">
        </div>
        <div>
            <h3>关于最新抗病毒药剂临床的报告</h3>
            <div class="des">20世纪80年代以前抗病毒药物的发展十分年代以前抗病毒药物的发展十分</div>
            <div class="people mt10">主讲人：陈宝国</div>
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
  },
};
</script>

<style lang="scss"></style>
