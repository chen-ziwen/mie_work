<template>
    <div class="line-box" :style="{height:height+'px'}" ref="lineBox">
        <div class="inner-line-box">
            <slot></slot>
        </div>
    </div>
</template>
<script lang='ts' setup>
import { ref, watch, computed, nextTick } from 'vue';

interface LineBox {
    dashedOffset?: number; // 控制虚线向右的偏移距离
    height?: number;
    len: number;
}

const props = withDefaults(defineProps<LineBox>(), {
    dashedOffset: 45,
    height: 450
})
const lineBox = ref<HTMLElement>();

const offset = computed(() => {
    return props.dashedOffset + 'px';
})

// 监听长度变化 使进度条始终保持在最底部
watch(() => props.len, () => {
    if (!lineBox.value) return;
    lineBox.value.scrollTop = lineBox.value.scrollHeight;
}, { flush: 'post' })

</script>
<style lang='scss' scoped>
.line-box {
    position: relative;
    overflow: scroll;
    overflow-x: hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: var(--main-box-color, #FFFFFF);

    &::-webkit-scrollbar {
        width: 0px;
    }

    .inner-line-box {
        position: relative;

        // 绘制虚线，可自定义虚线间距
        &::before {
            content: '';
            display: block;
            position: absolute;
            width: 2px;
            height: 100%;
            left: v-bind(offset);
            background-image: linear-gradient(to bottom, #d5d8d8 0%, #d5d8d8 50%, transparent 60%);
            background-size: 2px 15px;
            background-repeat: repeat-y;
        }
    }
}
</style>