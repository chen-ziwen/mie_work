<template>
    <config @theme="getTheme" />
    <button @click="big" style="user-select:none">点击变大</button>
    <RowListLi :theme="theme" headshow :width="width" avatar="/assets/hello.jpeg" :size="30">
        <div class="gift-carousel">
            <!-- 用户名 -->
            <span class="user-name">爱吃小熊饼干</span>
            <span>赠送</span>
            <!-- <i><img src alt/></i> -->
        </div>
    </RowListLi>
</template>

<script lang='ts' setup>
import RowSingle from '../RowSingle/RowSingle.vue';
import RowListLi from '../row-list/RowListLi.vue';
import config from '../config.vue'
import { ref, reactive } from 'vue';
const width = ref<number>(300);
const theme = ref<string>('neon');
function getTheme(val: string) {
    theme.value = val;
}
function big() {
    width.value = width.value + 50;
    console.log(width.value);

}
</script>

<style lang='scss' scoped>
.gift-carousel {
    display: flex;
    justify-content: center;
    align-items: center;

    .avator {
        width: 38px;
        height: 38px;

        >img {
            width: 38px;
            height: 38px;
            border-radius: 50%;
        }
    }

    .user-name {
        margin-left: 5px;
    }
}
</style>