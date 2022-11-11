<template>
    <div class="barrage-list">
        <img class="avatar" :src="avatar||'https://i0.hdslb.com/bfs/face/member/noface.jpg'">
        <div class="msg-box">
            <span class="msg">{{message}}</span>
            <img v-if="img" class="user-img" :src="img" :style="size">
            <!-- <div class="deep-style" v-html="aa"></div> -->
        </div>
    </div>
</template>
<script lang='ts' setup>
import { computed } from 'vue';
interface BarrageList {
    avatar: string;
    message: string;
    img?: string;
    discolor?: boolean; // 是否高亮
    width?: number;
    height?: number;
}
const props = withDefaults(defineProps<BarrageList>(), {
    width: 255, //312
    height: 170, //205
    discolor: false, // 不高亮
});
const size = computed(() => ({
    width: props.width + 'px',
    height: props.height + 'px',
}))

const changeColor = computed(() => props.discolor ? '#e4ab0e' : "#08b6f5");

</script>
<style lang='scss' scoped>
.barrage-list {
    position: relative;
    display: flex;
    flex-direction: row;
    font-size: 24px;
    padding: 10px 0px;
    color: white;
    text-shadow: 1px -1px 5px v-bind(changeColor), -1px 1px 5px v-bind(changeColor), -1px -1px 5px v-bind(changeColor), 1px 1px 5px v-bind(changeColor);

    .avatar {
        width: 40px;
        height: 40px;
        margin: 5px 0px;
        border-radius: 50%;
    }

    &::before {
        position: absolute;
        content: '';
        display: block;
        background-image: url(/assets/images/world-cup/avatar.png);
        width: 60px;
        height: 60px;
        transform: translate(-10px, -5px); // 头像位置
    }

    .msg-box {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 5px 40px;
        border-image-slice: 26 8 18 45 fill;
        border-image-width: 20px 20px 20px 20px;
        border-image-outset: 3px 3px 3px 3px;
        border-image-repeat: stretch stretch;
        border-image-source: url(/assets/images/world-cup/msgbox.png);

        // 如果是v-html渲染也可以设置样式
        // .deep-style {
        //     &:deep(img) {
        //         width: v-bind('props.width' +px);
        //         height: v-bind('props.height' +px);
        //         padding: 0px 9px 9px;
        //         object-fit: fill;
        //     }

        //     &:deep(span) {
        //         display: inline-block;
        //         padding: 6px 8px;
        //         word-break: break-all; //英文换行
        //         white-space: pre-wrap; //中文换行
        //         transform: translateY(-2px);
        //     }
        // }

        .msg {
            display: inline-block;
            padding: 6px 8px;
            word-break: break-all; //英文换行
            white-space: pre-wrap; //中文换行
            transform: translateY(-2px);
        }

        .user-img {
            padding: 0px 9px 9px;
            object-fit: fill;
        }
    }
}
</style>