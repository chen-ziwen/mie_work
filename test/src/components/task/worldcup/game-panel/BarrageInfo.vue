<template>
    <div :class="type+'-box'" class="flex-center">
        <div class="real-box over-scroll" ref="realBox">
            <LineBox class="line-box" :dashedOffset="20" v-if="list && list.length>0">
                <div class="barrage-msg-all">
                    <TransitionGroup name="pop">
                        <BarrageList :width="width" :height="height" v-for="(item,index) in list" :key="index" :avatar="item.avatar" :message="item.message" :img="item.image" :discolor="item.discolor"></BarrageList>
                    </TransitionGroup>
                </div>
            </LineBox>
        </div>
    </div>
</template>
<script lang='ts' setup>
import { ref, watch } from 'vue';
import LineBox from './LineBox.vue'; // 动态线条盒子组件
import BarrageList from './BarrageList.vue'; // 内部弹幕信息组件

interface MsgType {
    avatar: string;
    message: string;
    image?: string;
    discolor?: boolean; // 文字是否黄色高亮
}

interface BarrageInfo {
    type: "text" | "img" | "imgtext"; // 三种类型 三个背景与样式
    list: MsgType[]; // 弹幕列表
    width?: number; // 盒子内部图片高度
    height?: number; // 盒子内部图片宽度
}

const props = defineProps<BarrageInfo>();
const realBox = ref<HTMLElement>();

watch(() => props.list.length, () => {
    if (!realBox.value) return;
    realBox.value.scrollTop = realBox.value.scrollHeight;
}, { flush: "post" }) // 需要等到dom更新后再去操作

</script>
<style lang='scss' scoped>
@import './barrageinfo.scss';

.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.over-scroll {
    overflow: hidden scroll;
}

.pop-move,
.pop-enter-active,
.pop-leave-active {
    transition: all 0.5s ease;
}

.pop-enter-from,
.pop-leave-to {
    opacity: 0;
    transform: translateX(40px);
}

.pop-leave-active {
    position: absolute;
}
</style>