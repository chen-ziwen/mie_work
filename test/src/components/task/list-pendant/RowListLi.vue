<template>
    <div class="row-list-component">
        <div class="list border2 flex2" :style="{ width: width + 'px', height: height + 'px' }">
            <img class="image" :src="avatar" v-if="headshow && (avatar ? true : false)" :style="{ width: size + 'px', height: size + 'px' }" />
            <div class="image-box" v-if="headshow" :style="{ width: size + 'px', height: size + 'px' }"></div>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
interface RowListLi {
    theme: string; // 皮肤
    avatar?: string;  // 头像
    headshow?: boolean; // 是否展示头像 
    width?: number; // 盒子的宽度
    height?: number;
    size?: number; // 头像为圆形，size代表宽高
    mask?: boolean;
}
const props = withDefaults(defineProps<RowListLi>(), {
    headshow: false,  // 只要为布尔值，直接写名字默认为 true
    width: 380,
    height: 70,
    size: 28,
    mask: false,
})

const src = computed(() => {
    if (props.theme !== 'none') {
        return `url(/assets/common/RowList/${props.theme}2.png)`;
    } else {
        return 'none';
    }
})

</script>

<style lang="scss" scoped>
.row-list-component {
    position: relative;

    .list {
        display: flex;
        font-size: 24px;
        height: 70px;
        line-height: 70px;
        white-space: nowrap;
        overflow: hidden;
        transform: translateY(-5px);
        margin: -10px 0px;

        .image,
        .image-box {
            flex-shrink: 0;
            margin-right: 5px;
            border-radius: 50%;
        }

        .image {
            position: absolute;
            z-index: 9;
        }

        .image-box {
            background-color: #c0c4cc;
        }


    }

    .border2 {
        border-image-source: v-bind(src);
        border-image-slice: 0 35 0 35 fill;
        border-image-width: 0px 35px 0px 35px;
        border-image-outset: 0px 35px 0px 35px;
        border-image-repeat: round;
    }

    .flex2 {
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        z-index: 9;
    }

    // .mask {
    //     position: absolute;
    //     display: block;
    //     left: -20px;
    //     top: 0px;
    //     content: '';
    //     height: 40px;
    //     width: 242px;
    //     background-color: #f3f5f7ee;
    //     z-index: 1;
    // }
}
</style>