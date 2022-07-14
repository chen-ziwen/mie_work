<template>
    <div class="history-text">
        <img class="history-text-img" :src="fansHeadImg">
        <span class="history-text-name text">{{fansId}}</span>
        <span class="history-text-text text">加入翻牌</span>
    </div>
</template>

<script lang="ts" setup>
interface HistoryProps {
    fansHeadImg: string;
    fansId: string;
}

const props = withDefaults(defineProps<HistoryProps>(), { })

</script>

<style lang="scss" scoped>
.history-text {
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;

    .text {
        font-size: 16px;
        margin-left: 7px; 
    }

    &-img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }

    &-name {
        color: #fff;
        max-width: 216px;
        text-overflow: ellipsis; //让超出的用...实现
        white-space: nowrap; //禁止换行
        overflow: hidden; //超出的隐藏
    }

    &-text {
        color: #CBD1F0;
    }
}
</style>