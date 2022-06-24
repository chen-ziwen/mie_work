<template>
  <div class="row-single">
    <div class="border style flex" v-bind="$attrs">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

interface RowSingle {
  theme: string
}
const props = defineProps<RowSingle>();
const src = computed(() => {
  if (props.theme !== 'none') {
    return `url(/assets/common/RowSingle/${props.theme}.png)`;
  } else {
    return 'none';
  }
})
</script>
<style lang="scss" scoped>
.row-single {
  .border {
    border-image-source: v-bind(src);
    border-image-slice: 0 40 80 40 fill;
    border-image-width: 0px 400px 800px 400px;
    border-image-outset: 0px 20px 0px 20px;
    border-image-repeat: round;
  }

  .style {
    display: inline-block;
    white-space: nowrap;
    font-size: 24px;
  }

  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>