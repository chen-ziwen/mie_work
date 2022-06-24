<template>
    <div class="nine-slice-simple" v-bind="$attrs">
        <div class="out-haed" v-if="display">
            <slot name="head"></slot>
        </div>
        <div class="main" :style="contentStyle">
            <slot name="avatar"></slot>
            <div class="border text-content" ref="textContent" :style="[whstyle, { maxWidth: maxWidth + 'px' }]">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, nextTick } from 'vue';

interface NineSlice {
    theme: string,  // 文本框皮肤和头像框皮肤
    display?: boolean, //外部文本
    width?: number,
    height?: number,
    maxWidth?: number, //文本框宽度
}
const props = withDefaults(defineProps<NineSlice>(), {
    display: true, // 外部文本默认展示
    maxWidth: 290,  //默认290 刚好可以存放12个24像素的中文
})

const textContent = ref<HTMLDivElement>();
const src = computed(() => {
    if (props.theme !== 'none') {
        return `url(/assets/common/NineSliceSimple/${props.theme}.png)`;
    } else {
        return 'none';
    }
})

const contentStyle = computed(() => {
    if (props.display) return;
    else {
        const contentStyle = {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
        }
        return contentStyle;
    }
})
const marginStyle = computed(() => {
    if (!props.display) {
        nextTick(() => {
            if (!textContent.value) return;
            else if (textContent.value.offsetHeight > 45) {
                textContent.value.style.margin = '20px 0px'
            }
            else if (textContent.value.offsetHeight > 100) {
                textContent.value.style.margin = '30px 0px'
            }
            else {
                textContent.value.style.margin = '10px 0px'
            }
        })
    }
    else return `0px 0px -30px 0px`;

})
const whstyle = computed(() => {
    const width = props.width + 'px' || 'auto';
    const height = props.height + 'px' || 'auto';
    return { width, height };
})
</script>

<style lang="scss" scoped>
.nine-slice-simple {
    margin: v-bind(marginStyle);

    .main {
        .border {
            border-image-source: v-bind(src);
            border-image-slice: 25 25 25 25 fill;
            border-image-width: 25px 25px 25px 25px;
            border-image-outset: 20px 25px 20px 25px;
            border-image-repeat: round;
        }

        .text-content {
            display: inline-block;
            word-wrap: break-word;
            overflow: hidden;
            height: auto;
            min-width: 35px;
            font-size: 24px;
        }
    }

    .out-haed {
        font-size: 18px;
    }
}
</style>