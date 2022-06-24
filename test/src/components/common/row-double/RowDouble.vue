<template>
    <div class="row-double">
        <div class="border style">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
const props = defineProps({
    theme: {
        type: String,
        require: true
    },
})

const src = computed(() => {
    if (props.theme !== 'none') {
        return `url(/assets/common/RowDouble/${props.theme}.png)`;
    } else {
        return 'none';
    }
})

</script>

<style lang="scss" scoped>
.border {
    border-image-source: v-bind(src);
    border-image-slice: 0 45 0 45 fill;
    border-image-width: 0px 45px 0px 45px;
    border-image-outset: 0px 20px 0px 20px;
    border-image-repeat: round;
}

.row-double .style {
    display: inline-block;
    white-space: nowrap;
    height: 120px;
    font-size: 24px;
    margin-top: -10px;
}
</style>