<template>
    <div class="barrage-box">
        <slot></slot>
    </div>
</template>
<script lang='ts' setup>
import { computed } from 'vue';

interface BarrageBox {
    dashedOffset?: number; // 控制虚线向右的偏移距离
    color?: string
}

const props = withDefaults(defineProps<BarrageBox>(), {
    dashedOffset: 20,
    color: '#85DFE3',
})

const offset = computed(() => {
    return props.dashedOffset + 'px';
})

</script>
<style lang='scss' scoped>
.barrage-box {
    position: relative;

    &::before {
        content: '';
        display: block;
        position: absolute;
        width: 2px;
        height: 100%; // 根据div长度来计算高度
        transition: height 0.8s ease;
        left: v-bind(offset);
        background-color: v-bind(color);
    }

}
</style>