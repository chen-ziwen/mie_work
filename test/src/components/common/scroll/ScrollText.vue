
<template>
    <div class="mask-content">
        <div class="move-content" ref="content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue';

interface ScrollBoxProps {
    text?: any, // 需要监听的数据
    width: number; // 外层盒子的宽度,一旦盒子宽度超过指定宽度，就会进行动画。
    scroll: string; //动画选择
    infinite: number | string; //动画的持续次数
    time: number; // 一次动画所花费的时间 单位s

}
const props = withDefaults(defineProps<ScrollBoxProps>(), {
    infinite: 'infinite',
    scroll: 'round',
    time: 10,
});


const content = ref<HTMLDivElement>();
const scrollWidth = ref<number>(0);
const scrollWidth2 = ref<number>(0);
const scrollWidth3 = ref<number>(0);
const animationStyle = ref<string>('ease-in-out');

function change() {
    if (!content.value) return;
    const classList = content.value.classList;
    animationStyle.value = 'ease-in-out';
    classList.remove('move-content');
    scrollWidth.value = content.value.scrollWidth - props.width;
    //不超出时 scrollWidth等于 clientWidth 相减为0
    if (props.scroll === 'scroll') {
        animationStyle.value = 'linear';
        if (content.value.scrollWidth > props.width) {
            scrollWidth2.value = content.value.clientWidth;
            scrollWidth3.value = content.value.scrollWidth;
        }
        else {
            scrollWidth2.value = 0;
            scrollWidth3.value = 0;
        }
    }
    window.requestAnimationFrame(() => {
        classList.add('move-content');
    })

}

watch([() => props.text, () => props.width], () => nextTick(change));
watch(() => props.scroll, () => change()); //切换动画时，重新执行该函数
onMounted(() => nextTick(change));

</script>

<style>
/* 加上scoped v-bind动画失效 */
.mask-content {
    width: v-bind(width + "px");
    overflow: hidden;
}

.move-content {
    white-space: nowrap;
    animation: v-bind("props.scroll") v-bind(time + "s") v-bind(animationStyle);
    animation-iteration-count: v-bind(infinite);
}

.move-content span {
    white-space: nowrap;
}

@keyframes round {
    0% {
        transform: translateX(0);
    }

    20% {
        transform: translateX(v-bind(-scrollWidth + "px"));
    }

    40% {
        transform: translateX(v-bind(-scrollWidth + "px"));
    }

    60% {
        transform: translate(0);
    }

    100% {
        transform: translateX(0);
    }
}

@keyframes scroll {
    0% {
        transform: translateX(v-bind(scrollWidth2 + "px"));
    }

    100% {
        transform: translateX(v-bind(-scrollWidth3 + "px"));
    }
}
</style>