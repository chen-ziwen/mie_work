<template>
    <div class="progress-bar">
        <div class="bar" :class="barStyle">
            <div class="overlying"></div>
            <div class="floatSrc"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
interface ProgressBarProps {
    theme: string;
    rate: number; // 接收的值为0-1之间
}
const props = defineProps<ProgressBarProps>();

// 斜角切割皮肤的特殊处理
const barMinWidth = ref<string>('');
// 进度条主体
const barSrc = computed(() => {
    return `url(/assets/images/ProgressBar/bar/${props.theme}.png)`;
})

// 进度条叠加层
const overlyingSrc = computed(() => {
    // 有叠加层的皮肤
    const pic: string[] = ['cat', 'cute', 'spring', 'winter'];
    if (pic.includes(props.theme)) {
        return `url(/assets/images/ProgressBar/overlying/${props.theme}.png)`;
    }
    return 'none';
})

// 进度条背景
const backSrc = computed(() => {
    return `url(/assets/images/ProgressBar/back/${props.theme}.png)`;
})

// 漂浮物
const floatSrc = computed(() => {
    const pic: string[] = ['cat', 'cute', 'genshin', 'magic', 'rose', 'spring', 'winter'];
    if (pic.includes(props.theme)) {
        return `url(/assets/images/ProgressBar/float/${props.theme}.png)`;
    }
    return 'none';
})

const barWidth = computed(() => {
    // 两个有斜角的皮肤单独处理
    const skew: string[] = ['diamond', 'technology'];
    if (skew.includes(props.theme)) {
        barMinWidth.value = "17.5px";
        return props.rate * (337 - 17.5) + 17.5 + 'px';
    }
    else {
        barMinWidth.value = "14px";
        return props.rate * (337 - 14) + 14 + 'px';
    }
})

const barStyle = computed(() => {
    switch (props.theme) {
        case 'diamond':
            return 'diamond';
        case 'technology':
            return 'technology';
        default:
            return;
    }
})

</script>

<style lang="scss">
.progress-bar {
    width: 350px;
    height: 30px;
    background: v-bind(backSrc) no-repeat;

    .bar {
        position: relative;
        width: v-bind(barWidth);
        max-width: 337px;
        min-width: v-bind(barMinWidth);
        transition: width 1.5s ease-in-out;
        height: 30px;
        background-image: v-bind(barSrc);

        .overlying {
            width: 100%;
            height: 100%;
            z-index: 1;
            position: absolute;
            background-image: v-bind(overlyingSrc);
        }

        .floatSrc {
            z-index: 9;
            position: absolute;
            right: -15px;
            bottom: -4px;
            width: 70px;
            height: 38px;
            background-image: v-bind(floatSrc);
        }
    }

    .diamond {
        clip-path: polygon(0 10px, 100% 10px, calc(100% - 5.2px) calc(100% - 10px), 0 calc(100% - 10px));
    }

    .technology {
        clip-path: polygon(0 10px, 100% 10px, calc(100% - 7.2px) calc(100% - 10px), 0 calc(100% - 10px));
    }
}
</style>