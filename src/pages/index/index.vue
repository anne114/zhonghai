<template>
  <div>
    <lectureItem :lectures="[1, 2]" />
  </div>
</template>

<script>
import lectureItem from "@/components/index/lectureItem.vue";
export default {
  components: {
    lectureItem,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
