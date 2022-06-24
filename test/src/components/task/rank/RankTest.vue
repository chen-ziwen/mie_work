<template>
    <!-- 外层图片 -->
    <div class=""></div>
    <VoteRank v-if="showRank">
        <transition-group name="anime-list">
            <!-- 列表 -->
            <VoteRankLi v-for="(data, index) in newArr" :key="data.id" :index="data.rank" :name="data.name" :score="data.total" :rank="((data.rank) + '').padStart(2, '0')">
            </VoteRankLi>
        </transition-group>
    </VoteRank>

    <button @click="Reshuff">点击替换</button>
    <button @click="pushData">点击增加数据</button>
    <button @click="delData">点击删除数据</button>
    <button @click="showRank = !showRank">反转</button>
    <!-- <button @click="touch">触发</button> -->

</template>

<script setup lang="ts">

import VoteRank from './VoteRank.vue';
import { ref, watch, nextTick, computed, reactive, onMounted } from 'vue';
import VoteRankLi from './VoteRankLi.vue';

const i = ref(0);
let moni = ref(
    [
        { name: '哈哈哈哈哈', total: 6.9, id: 1, rank: 1 },
        { name: '野王', total: 8.8, id: 6, rank: 2 },
        { name: 'dsadsadasdasd', total: 1.1, id: 7, rank: 3 },
        { name: '不知道没事', total: 10, id: 8, rank: 4 },
        { name: '你是我的好兄弟好哥们', total: 9.8, id: 9, rank: 5 },
        { name: '你是我的好兄弟好哥们', total: 4.3, id: 10, rank: 6 },
        { name: '6666', total: 9.8, id: 11, rank: 7 },
        { name: '7777', total: 4.3, id: 12, rank: 8 },
        { name: '你是我的好兄弟好哥们', total: 4.3, id: 10, rank: 9 },
        { name: '6666', total: 9.8, id: 11, rank: 10 },
        { name: '7777', total: 4.3, id: 12, rank: 11 },
    ]);

const newArr = ref<any>([]);
const groupArr = ref<any>([]);
const showRank = ref<boolean>(true);

let timeout: NodeJS.Timeout;
let timeout2: NodeJS.Timeout;

function display(msg: boolean) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
        showRank.value = msg;
    }, 1500)
}

function dealy() {
    newArr.value.push(moni.value.shift());
    clearTimeout(timeout2)
    if (moni.value.length > 0) {
        if (newArr.value.length == 8) {
            timeout2 = setTimeout(() => {
                newArr.value.splice(0, newArr.value.length);
                dealy();
            }, 2500);
        } else {
            timeout2 = setTimeout(dealy, 60);
        }
    }
    else {
        setTimeout(() => {
            showRank.value = true;
        }, 3000)
    }
}
dealy();

//切割成多个数组

function Reshuff() {
    let i = Math.floor(Math.random() * newArr.value.length);
    let a = Math.floor(Math.random() * newArr.value.length);
    [newArr.value[i], newArr.value[a]] = [newArr.value[a], newArr.value[i]];
}
function pushData() {
    newArr.value.push({ name: 'hhhh', total: 5.5, id: new Date().valueOf() });
}
function delData() {
    if (newArr.value.length > 3) {
        newArr.value.pop()
    }
}

watch(() => moni, () => nextTick(() => {
    //删除20名以后的数据
    if (newArr.value.length >= 20) { newArr.value.splice(20) }
    console.log(moni)
}), { deep: true });
(function MyValueOf() {
    console.log('lallalal', new Date().valueOf())
})()
</script>


<style lang="scss" scoped>
.anime-list-move,
.anime-list-enter-active {
    transition: all 1s ease-in-out;
}

.anime-list-enter-from,
.anime-list-leave-to {
    opacity: 0;
    z-index: -10;
    transform: translate(40%, 0px) scale(0.5);
}

.hidden-enter-active,
.hidden-leave-active {
    transition: all 0.5s ease;
}

.hidden-enter-from,
.hidden-leave-to {
    opacity: 0;
}
</style>
