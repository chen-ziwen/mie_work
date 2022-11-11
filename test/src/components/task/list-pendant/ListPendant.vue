<template>
    <config @theme="getTheme" />
    <div class="list-pendant">
        <!-- <list-widget :theme="theme" head="菜单大标题" :data="data"></list-widget> -->
        <Separation :theme="theme" head="菜单大标题" :data="data"></Separation>
    </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
import config from '../mplayer/config.vue';
import ListWidget from './ListWidget.vue';
import Separation from './Separation.vue';

const theme = ref<string>('neon');
function getTheme(val: string) {
    theme.value = val;
    console.log('主题' + theme.value)
}

const data = ref([
    '10点整准时开播',
    '18点整点下班',
    '喜欢主播的点点关注',
    '啦啦啦，我是卖报的小画家',
    // '啦啦啦，我是卖报的小画家',
    // '啦啦啦，我是卖报的小画家',
    // '啦啦啦，我是卖报的小画家',
    // '啦啦啦，我是卖报的小画家',
])

</script>
<style lang='scss' scoped>
</style>