<template>
  <div class="nine-slice">
    <div class="boder style" v-bind="$attrs">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
interface NineSlice {
  theme: String
}
const props = defineProps<NineSlice>()
const src = computed(() => {
  if (props.theme !== 'none') {
    return `url(/assets/common/NineSlice/${props.theme}.png)`;
  } else {
    return 'none';
  }
})
</script>

<style lang="scss" scoped>
.nine-slice {
  .boder {
    border-image-source: v-bind(src);
    border-image-slice: 64 64 64 64 fill;
    border-image-width: 64px 64px 64px 64px;
    border-image-outset: 55px 50px 55px 50px;
    border-image-repeat: round round;
  }

  .style {
    display: inline-block;
    white-space: nowrap;
    font-size: 24px;
    overflow: hidden;
  }
}
</style>