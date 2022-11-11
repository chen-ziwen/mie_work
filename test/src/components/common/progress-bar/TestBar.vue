<template>
    <div>
        <Config @theme="getTheme"></Config>
        <ProgressBar :theme="theme" :rate="test"></ProgressBar>
    </div>
</template>
<script lang='ts' setup>
import { ref, computed } from 'vue';
import Config from '../../task/mplayer/config.vue';
import ProgressBar from './ProgressBar.vue';

const theme = ref<string>('neon');

function getTheme(val: string) {
    theme.value = val;
}
// 测试数据 规定999份礼物，送了88份
const test = computed(() => {
    return 50 / 999;
})
</script>
<style lang='scss' scoped>
</style>