<!-- 气泡往上冒组件 -->
<template lang="pug">
.bubble
    .round.reset(ref="round")
button(@click="change")
    | 点击刷新
</template>
  
<script lang="ts" setup>
import { ref, nextTick } from 'vue';
const round = ref<HTMLDivElement>();
const moveIntance = ref<string>('0px');
const address = ref<string>('50%');

function change() {
    if (!round.value) return;
    const classList = round.value.classList;
    classList.remove('reset');
    moveIntance.value = (Math.random() > 0.5 ? 1 : -1) * (~~(Math.random() * 351)) + 'px'; //-350 ~350 之间变动
    // address.value = (~~(Math.random() * 7) + 2) * 10 + '%'; //20% ~ 80% | 一次跳10%
    address.value = (~~(Math.random() * 61) + 20) + '%'; //20% ~ 80% | 一次跳1%
    console.log(moveIntance.value)
    console.log(address.value)
    // 用来重置css动画的函数钩子 类似生命周期钩子，执行的时期在浏览器请求下一次重绘之前。
    window.requestAnimationFrame(() => {
        classList.add('reset');
    })
}
</script>

<style>
@keyframes animateBubble {
    0% {
        margin-top: 700px;
    }

    100% {
        margin-top: -200px;
    }
}


@keyframes sideWays {
    0% {
        margin-left: 0px;
    }

    100% {
        margin-left: v-bind(moveIntance);
    }
}


@keyframes scale {
    0% {
        transform: scale(0.45);
    }

    10% {
        transform: scale(1);
    }

    100% {
        transform: scale(1);
    }
}

* {
    margin: 0;
    padding: 0;
}

.bubble {
    position: relative;
    width: 100%;
    background-color: pink;
    font: 100% Arial, Serif;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    z-index: -1;
}

.round {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    left: v-bind(address);
    top: 0%;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
}

.reset {
    animation: animateBubble 7s linear infinite, sideWays 2s ease-in-out infinite alternate, scale 7s ease-in-out infinite;
}
</style>