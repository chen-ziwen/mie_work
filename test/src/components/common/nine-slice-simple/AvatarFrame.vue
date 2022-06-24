<template>
    <div class="avatar-image">
        <div class="avatar-image-box" :style="{ width: borderSize + 'px', height: borderSize + 'px', backgroundSize: `${borderSize}px ${borderSize}px` }">
            <img class="avatar" v-if="avatar" :src="avatar" :style="{ width: size + 'px', height: size + 'px' }" art="~~亲，图片丢失啦" />
            <div class="none-replace" :style="{ width: size + 'px', height: size + 'px' }"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
interface Avatar {
    avatar: string,
    theme: string,
    borderSize?: number,
    size?: number,
}
const props = withDefaults(defineProps<Avatar>(), {
    borderSize: 70, //头像框大小默认70px
    size: 48 //头像和头像遮罩默认大小
});
const backPic = computed(() => {
    if (props.theme !== 'none') {
        return `url(/assets/common/NineSliceSimple/${props.theme}2.png)`;
    } else {
        return 'none';
    }
})
</script>


<style lang="scss" scoped>
.avatar-image {

    &-box {
        position: relative;
        background: v-bind(backPic) no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;

        .avatar {
            position: absolute;
            border-radius: 50%;
            z-index: -1;
        }

        .none-replace {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(128, 128, 128);
            z-index: -2;
        }
    }
}
</style>