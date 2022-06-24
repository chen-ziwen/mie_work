<template>
    <div class="config-content" :style="{ background: color.contentback }">
        <div class="config-option" :style="{ background: color.headback }">
            <ConfigIcon @config="config"></ConfigIcon>
        </div>
        <Tabs v-model:name="name" :height="633" :tagtext="color.tagtext" :contenttext="color.contenttext" :footline="color.footline">
            <TabPane label="已点歌曲" name="first">
                <transition-group name="list" tag="span" class="list-box">
                    <ConfigList btn-show v-for="(i, index) in data" :key="i.score + i.userName" :user-name="i.userName" :song-name="i.songName" :score="i.score" :order="index" @receive="receive" @click="topping(index)">
                    </ConfigList>
                </transition-group>
            </TabPane>
            <TabPane label="已播记录" name="second">
                <transition-group name="list" tag="span" class="list-box">
                    <ConfigList v-for="(i, index) in data2" :key="i.score + i.userName" :user-name="i.userName" :song-name="i.songName" :score="i.score" :order="index" @click="del(index)"></ConfigList>
                </transition-group>
            </TabPane>
            <TabPane label="点播记录" name="third">
                <transition-group name="list" tag="span" class="list-box">
                    <ConfigSimpleList v-for="(i, index) in data2" :key="i.score + i.userName" :user-name="i.userName" :song-name="i.songName" :order="index" :time="i.time" :show="i.show" @click="del(index)"></ConfigSimpleList>
                </transition-group>
            </TabPane>
        </Tabs>
    </div>
    <div class="position">
        <ThemeChoose :options="configPlay" @theme="getTheme"></ThemeChoose>
    </div>

</template>

<script lang='ts' setup>
import { ref, provide, watch, computed } from 'vue';
// 需要用到的五个组件
import Tabs from '@/components/task/config-play/tabs/tabs.vue';
import TabPane from '@/components/task/config-play/tabs/tab-pane.vue';
import ConfigList from '@/components/task/config-play/config/ConfigList.vue';
import ConfigIcon from '@/components/task/config-play/config/ConfigIcon.vue';
import ConfigSimpleList from '@/components/task/config-play/config/ConfigSimpleList.vue';
import ThemeChoose from '@/components/common/theme-choose/theme.vue';
import { configPlay } from '@/components/common/theme-choose/config';
// 数据结构
import { data, data2, topping, del, a } from '@/config/config-play/config'
// 三个主题的颜色和按钮
import { theme } from '@/config/config-play/theme';

//三个主题色加图标
const { white, black, pink } = theme;


// 默认选中白色主题,需要切换主题时只需要将上面解构出来的三个主题色赋值给newTheme即可。
const newTheme = ref(black);

function getTheme(key: string) {
    switch (key) {
        case "white":
            newTheme.value = white;
            break;
        case "black":
            newTheme.value = black;
            break;
        case "pink":
            newTheme.value = pink;
            break;
    }

}
// 将值传递给子孙组件
provide('theme', newTheme);

// 利用计算属性，减少模板上的数据
const color = computed(() => {
    return newTheme.value.color;
})

// 选中第一个tag列表
const name = ref<string>('first');


//#region 

// 换主题用的配置项 上线的时候需要删掉 下面不需要的
const skin = ref('');
watch(skin, () => {
    switch (skin.value) {
        case 'white':
            newTheme.value = white;
            break;
        case 'black':
            newTheme.value = black;
            break;
        case 'pink':
            newTheme.value = pink;
            break;
    }
})

const options = [
    {
        value: 'white',
        label: '白色主题'
    },
    {
        value: 'black',
        label: '黑色主题'
    },
    {
        value: 'pink',
        label: '粉色主题'
    }
];
//上面不需要

//#endregion

// 将关键字传到后端，告知后端将要进行何种操作。
function receive(key: any) {
    console.log('我是点歌列表触发按钮', key);
}
function config(key: any) {
    console.log('我是配置项列表触发按钮', key);
}

</script>

<style lang='scss' scoped>
.config-content {
    width: 540px;
    height: 720px;
    border: 1px solid rgba(144, 144, 144, 0.25);

    .config-option {
        width: 540px;
        height: 36px;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }
}

// 已点歌曲列表动画
.list-box {
    position: relative;
}

.list-move,
.list-enter-active,
.list-leave-active {
    transition: all 0.8s cubic-bezier(0.55, 0, 0.1, 1);
}


.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30%);
}

.list-leave-active {
    position: absolute;
}

.position {
    position: fixed;
    top: 30%;
    left: 50%;
}
</style>