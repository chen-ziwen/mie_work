<template>
    <div class="game-panel">
        <!-- 这三个组件合成一页 弹幕文本和弹幕图片分离 -->
        <div class="merge" v-if="value =='top'">
            <GameScore type="thin" :left="gamescore.left" :right="gamescore.right"></GameScore>
            <div class="cat-msg">
                <BarrageInfo type="text" :list="arr2"></BarrageInfo>
                <BarrageInfo type="img" :list="arr" :width="312" :height="205"></BarrageInfo>
            </div>
        </div>

        <!-- 这两个组件合成一页 弹幕文本和弹幕图片不分离 -->
        <div class="part" v-if="value=='center'">
            <BarrageInfo type="imgtext" :list="arr3"></BarrageInfo>
            <div class="right-box">
                <GameScore type="rough" :left="gamescore.left" :right="gamescore.right"></GameScore>
                <div class="img-msg-box">
                    <div class="real-size">
                        <span class="text-msg">冲刺最后一刻！！冲刺最后一刻！！冲刺最后一刻！！</span>
                        <img class="img-msg" src="/assets/images/world-cup/zuqiu.jpeg" />
                    </div>
                </div>
            </div>
        </div>

        <div class="center" v-if="value=='bottom'">
            <TeamRank :list="gameMsg"></TeamRank>
        </div>

        <div class="against" v-if="value=='against'">
            <GameAgainst></GameAgainst>
        </div>
        <div v-if="value=='console'">
            <WorldCupConsole></WorldCupConsole>
        </div>
    </div>

    <el-select v-model="value" placeholder="Select">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>

    <button @click="add">添加数据</button>
</template>
<script lang='ts' setup>
import { ref, computed } from 'vue';
import BarrageInfo from './BarrageInfo.vue';
import GameScore from './GameScore.vue';
import TeamRank from './TeamRank.vue';
import GameAgainst from './GameAgainst.vue';
import WorldCupConsole from '../WorldCupConsole.vue'

const value = ref('top');
const options = [
    {
        value: 'top',
        label: '插件界面1',
    },
    {
        value: 'center',
        label: '插件界面2',
    },
    {
        value: 'bottom',
        label: '队伍列表',
    },
    {
        value: 'against',
        label: '对阵图',
    },
    {
        value: 'console',
        label: '控制台',
    },
]

const arr = ref([
    { avatar: "/assets/images/world-cup/ava.jpeg", message: '你好呀', image: '/assets/images/world-cup/zuqiu.jpeg', discolor: true },
    { avatar: "/assets/images/world-cup/ava2.jpeg", message: '国足世界第一??', image: '/assets/images/world-cup/zuqiu.jpeg', discolor: false },
    // { avatar: "/assets/images/world-cup/ava.jpeg", message: '加油,帮我赢钱', image: '/assets/images/world-cup/zuqiu.jpeg', discolor: true },
])
const arr2 = ref([
    { avatar: "/assets/images/world-cup/ava2.jpeg", message: '你好呀,666666666666666666666677777777777777777777777777777777', discolor: true },
    { avatar: "/assets/images/world-cup/ava.jpeg", message: '国足世界第一??' },
    { avatar: "/assets/images/world-cup/ava2.jpeg", message: '加油,帮我赢钱' },
    { avatar: "/assets/images/world-cup/ava.jpeg", message: '加油,你觉得呢', discolor: true },
    { avatar: "", message: '加油,不可能的事情' },
])
const arr3 = ref([
    { avatar: "/assets/images/world-cup/ava2.jpeg", message: '国足世界第一??' },
    { avatar: "/assets/images/world-cup/ava.jpeg", message: '你好呀', image: '/assets/images/world-cup/zuqiu.jpeg' },
    // { avatar: "/assets/images/world-cup/ava2.jpeg", message: '你好呀,666666666666666666666677777777777777777777777777777777' },
    // { avatar: "/assets/images/world-cup/ava2.jpeg", message: '国足世界第一??', image: '/assets/images/world-cup/zuqiu.jpeg' },
    // { avatar: "/assets/images/world-cup/ava.jpeg", message: '你好呀', image: '/assets/images/world-cup/zuqiu.jpeg' },
    // { avatar: "/assets/images/world-cup/ava2.jpeg", message: '你好呀,666666666666666666666677777777777777777777777777777777' },
])
const gamescore = {
    left: {
        img: "/assets/images/world-cup/1.jpeg",
        name: '哥斯达黎加',
        score: 6,
    },
    right: {
        img: "/assets/images/world-cup/2.jpeg",
        name: '美国',
        score: 3,
    }
}

const gameMsg = [
    { img: '/assets/images/world-cup/1.jpeg', name: '哥斯达黎加', shengfu: '6/5/2', jinshi: '2/5', score: 5 },
    { img: '/assets/images/world-cup/2.jpeg', name: '美国', shengfu: '6/5/2', jinshi: '2/5', score: 5 },
    { img: '/assets/images/world-cup/1.jpeg', name: '哥斯达黎加', shengfu: '6/5/2', jinshi: '2/5', score: 5 },
    { img: '/assets/images/world-cup/2.jpeg', name: '美国', shengfu: '6/5/2', jinshi: '2/5', score: 5 },
]

// 添加数据测试
const add = () => {
    arr2.value.push({ avatar: "/assets/images/world-cup/ava.jpeg", message: '你好呀' },
    )
}
</script>
<style lang='scss' scoped>
.game-panel {
    display: flex;
    flex-direction: column;
    width: 1920px;
    height: 1080px;
    background-image: url(/assets/images/world-cup/bg.png);

    .merge {
        .cat-msg {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
        }
    }

    .part {
        display: flex;

        .right-box {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .img-msg-box {
            width: 563px;
            height: 450px;
            background-image: url(/assets/images/world-cup/popbox.png);
            background-repeat: no-repeat;
            align-self: flex-end;
            display: flex;
            justify-content: center;
            align-items: center;

            .real-size {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 510px;
                height: 390px;
                overflow: hidden;

                .text-msg {
                    width: 480px;
                    font-size: 20px;
                    padding: 15px 0;
                    color: #ffffff;
                }

                .img-msg {
                    width: 480px;
                    height: 320px;
                }
            }
        }
    }

    .center {
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>