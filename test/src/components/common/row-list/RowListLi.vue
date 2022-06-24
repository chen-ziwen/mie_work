<template>
    <div class="list border flex">
        <img class="image" :src="avatar" alt="亲,图片丢失了~~" />
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

interface RowListLi {
    theme?: string,
    avatar?: string,
}
const props = defineProps<RowListLi>();

const src = computed(() => `url(/assets/common/RowList/${props.theme}2.png)`)
</script>

<style lang="scss" scoped>
.list {
    display: inline-block;
    font-size: 24px;
    line-height: 70px;
    white-space: nowrap;
    overflow: hidden;
    height: 70px;
    width: 340px;
    transform: translateY(-10px);
    margin: -5px 0px;
    box-sizing: border-box;

    .image {
        display: inline-block;
        margin-right: 5px;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        overflow: hidden;
        background-color: pink;
    }
}

.border {
    border-image-source: url(./fire2.png);
    border-image-slice: 0 35 0 35 fill;
    border-image-width: 0px 35px 0px 35px;
    border-image-outset: 0px 30px 0px 30px;
    border-image-repeat: round;
}

.flex {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
</style>