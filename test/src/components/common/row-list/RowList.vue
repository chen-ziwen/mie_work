<template>
    <div class="row-list">
        <div class="title border flex" v-show="display">
            <slot name="head"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
interface RowList {
    theme?: string,
    display?: boolean,
}
const props = withDefaults(defineProps<RowList>(), {
    display: true
})
const src = computed(() => `url(/assets/common/RowList/${props.theme}.png)`)
let czw: Array<number> | number;
czw = [5, 6, 1, 2];
(<Array<number>>czw).filter(() => { })
</script>

<style lang="scss" scoped>
.row-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title {
        display: inline-block;
        font-size: 30px;
        line-height: 30px;
        height: 90px;
        width: 340px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .border {
        border-image-source: url(./fire.png);
        border-image-slice: 0 35 0 35 fill;
        border-image-width: 0px 35px 0px 35px;
        border-image-outset: 0px 30px 0px 30px;
        border-image-repeat: round;
    }
    .flex {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>