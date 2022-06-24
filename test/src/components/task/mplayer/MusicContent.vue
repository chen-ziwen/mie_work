<template>
    <div class="music-content">
        <div class="boder style" v-bind="$attrs" :style="{ width: width + 'px', height: height + 'px' }">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
interface MusicContent {
    theme: string;
    width: number;
    height: number;
}
const props = defineProps<MusicContent>();

// 图片地址为public下的mplay文件夹
const src = computed(() => {
    if (props.theme !== 'none') {
        return `url(/assets/mplay/${props.theme}.png)`;
    } else {
        return 'none';
    }
})
</script>

<style lang="scss" scoped>
.music-content {

    .boder {
        border-image-source: v-bind(src);
        border-image-slice: 64 64 64 64 fill;
        border-image-width: 64px 64px 64px 64px;
        border-image-outset: 30px 10px 35px 10px;
        border-image-repeat: round;
    }

    .style {
        display: inline-block;
        white-space: nowrap;
        font-size: 24px;
        overflow: hidden;
    }
}
</style>