<template>
    <div class="barrage-list">
        <img class="avatar" :src="avatar||'https://i0.hdslb.com/bfs/face/member/noface.jpg'">
        <div class="msg-box">
            <span class="msg">{{message}}</span>
            <img v-if="img" class="user-img" :src="img">
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
}
const props = withDefaults(defineProps<BarrageList>(), {
    discolor: false,
});

const changeColor = computed(() => props.discolor ? '#ff0000' : '#000000');

</script>
<style lang='scss' scoped>
.barrage-list {
    display: flex;
    flex-direction: row;
    color: v-bind(changeColor);

    .avatar {
        width: 40px;
        height: 40px;
        margin: 5px 0px;
        border-radius: 50%;
        transform: translateY(1.2px);
    }

    .msg-box {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 9px 18px;
        background-color: #f4f4f4;

        .msg {
            display: inline-block;
            padding: 6px 8px;
            word-break: break-all; //英文换行
            white-space: pre-wrap; //中文换行
        }

        .user-img {
            padding: 0px 9px 9px;
            width: 220px;
            height: 144px;
            object-fit: fill;
        }
    }
}
</style>