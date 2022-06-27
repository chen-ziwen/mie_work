<template>
    <div class="all-timeout">
        <!-- listData 包含基本信息 -->
        <!-- time 表示剩余时间 -->
        <Timeout :theme="theme" :list-data="listData" :time="72515"></Timeout>
        <!-- 皮肤选择组件 -->
        <ThemeChoose :options="skin" @theme="getTheme" title="皮肤选择"></ThemeChoose>
    </div>
</template>
<script lang='ts' setup>
import Timeout from './Timeout.vue';
import { ref } from 'vue';
// 皮肤选择 （上线时删掉）
import ThemeChoose from '@/components/common/theme-choose/theme.vue';
import { skin } from '@/components/common/theme-choose/config';
const theme = ref<string>('neon');
function getTheme(key: string) {
    theme.value = key;
}

const listData = ref([
    { type: 'add', songName: '十年', count: 60, time: 20, gift: '/assets/image/timeout/ava.jpeg' },
    { type: 'sub', songName: '孤勇者', count: 60, time: 20, gift: '/assets/image/timeout/ava.jpeg' },
    { type: 'add', songName: '爱的供养', count: 60, time: 20, gift: '/assets/image/timeout/ava.jpeg' },
]);
//皮肤选择 （上线时删掉）


</script>
<style lang='scss' scoped>
</style>