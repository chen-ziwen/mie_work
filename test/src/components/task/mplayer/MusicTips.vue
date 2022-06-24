<template>
    <div class="music-tips">
        <div class="border style flex" :style="{ width: width + 'px', height: height + 'px' }">
            <slot></slot>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { computed } from 'vue';

interface MusicTips {
    theme: string;
    width: number;
    height: number;
}
const props = defineProps<MusicTips>();
// 图片地址为public下的mplay文件夹
const src = computed(() => `url(/assets/mplay/${props.theme}2.png)`)
</script>

<style lang='scss' scoped>
.border {
    border-image-source: v-bind(src);
    border-image-slice: 25 25 25 25 fill;
    border-image-width: 25px 25px 25px 25px;
    border-image-outset: 15px 5px 15px 5px;
    border-image-repeat: round;
}
</style>