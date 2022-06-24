<template>
    <div class="sortList">
        <transition-group name="anime-list" tag="p">
            <div class="item" v-for="item, index in list" :key="item" :style="{ width: (item / max * 100) + '%' }">
                <span class="value">{{ item }}</span>
            </div>
        </transition-group>
        <button @click="bubble">点击排序</button>
    </div>
</template>

<script lang='ts' setup>
import { ref, reactive, computed, onMounted, toRef } from 'vue';
const list = reactive([10, 43, 23, 65, 343, 75, 100, 34, 45, 3, 56, 22]);

onMounted(() => {
    console.log(list)
    bubble()
    // bubbleSort();
})
const max = computed(() => {
    let max = 0;
    list.forEach(item => {
        if (item > max) {
            max = item;
        }
    });
    return max;
})
// function bubbleSort() {
//     console.log('hello')
//     let len = list.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             if (list[j] > list[j + 1]) {
//                 [list[j], list[j + 1]] = [list[j + 1], list[j]];
//             }
//         }
//     }
// }
function bubble() {
    let len = list.length;
    let i = 0;
    let j = 0;
    let timeout: NodeJS.Timeout
    let innerloop = () => {
        if (j >= len - i - 1) {
            j = 0;
            i++;
            outloop();
            return false
        }
        if (list[j] > list[j + 1]) {
            [list[j], list[j + 1]] = [list[j + 1], list[j]];
        }
        timeout = setTimeout(() => {
            j++;
            innerloop()
        }, 800)
    }
    let outloop = () => {
        if (i > len - i - 1) {
            // clearTimeout(timeout)
            return false
        }
        innerloop()
    }
    outloop()
}

</script>

<style lang='scss' scoped>
// .anime-list-move {
//     transition: transform 0.5s;
// }

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

.item {
    background-color: orange;
    height: 30px;
    line-height: 30px;
    margin: 15px 0px;
}
</style>