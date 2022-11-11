<template>
    <div class="mask-box flex-center" :class="ellipseTheme">
        <div class="cap-sule-blive flex-center">
            <div class="content-box">
                <el-avatar class="user-avatar" src="/assets/test/ava.jpeg" :size="32" fit="fill"></el-avatar>
                <el-image class="gift-logo" src="/assets/test/ava.jpeg" fit="contain"></el-image>
                1.2w
            </div>
            <div class="mask" :class="ellipseTheme" ref="maskMove"></div>
        </div>
    </div>
</template>
<script lang='ts' setup>
import { computed, ref, nextTick, onMounted } from 'vue';
interface BoxBlive {
    theme: string;
    back: string;
    second: number;
}
const props = defineProps<BoxBlive>();

const maskMove = ref<HTMLElement>();
// 需要椭圆遮罩的皮肤
const ellipseTheme = computed(() => {
    const ellipse: string[] = ['square', 'cat', 'rose', 'cute'];
    if (ellipse.includes(props.theme)) {
        return 'ellipse'
    }
    return;
})

function moveLL(time: number) {
    let timer: number | undefined = undefined;
    let step = 0;
    nextTick(() => {
        if (!maskMove.value) {
            return;
        }
        // 规定时间内每一步的步长
        step = (maskMove.value.offsetWidth / (time * 1000)) * 100;
        timer = setInterval(() => {
            if (!maskMove.value) {
                return;
            }
            const left = Number(maskMove.value.style.marginLeft.replace('px', ''));
            const moveWidth = maskMove.value.offsetWidth;
            maskMove.value.style.marginLeft = -step + left + 'px';
            if (-left >= moveWidth) {
                maskMove.value.style.marginLeft = -moveWidth + 'px';
                clearInterval(timer)
            }
        }, 100)
    })
}

onMounted(() => {
    moveLL(props.second)
})

const src = computed(() => {
    return `url(/assets/images/ComplexBoard/${props.theme}/small/${props.back}.png)`
})
</script>
<style lang='scss' scoped>
.ellipse {
    // 有一些皮肤需要椭圆遮罩
    border-radius: 24px !important;
}

.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;

}

.mask-box {
    padding: 0 18px;
    overflow: hidden;
    border-radius: 8px;
    height: 48px;

    .cap-sule-blive {
        position: relative;
        border-image-source: v-bind(src);
        border-image-slice: 0 34 0 34 fill;
        border-image-width: 0px 34px 0px 34px;
        border-image-outset: 0px 34px 0px 34px;
        border-image-repeat: round;
        height: 64px;
        font-size: 24px;

        .content-box {
            display: flex;
            align-items: center;

            .gift-logo {
                width: 25px;
                height: 25px;
                margin: 0px 3px;
            }
        }

        .mask {
            position: absolute;
            left: calc(100% + 20px);
            top: 8px;
            width: calc(100% + 40px);
            height: 48px;
            background-color: rgba(0, 0, 0, 0.4);
            border-radius: 8px;
        }
    }
}
</style>