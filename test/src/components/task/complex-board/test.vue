<template>
    <div class="test">
        <Config @theme="getTheme"></Config>
        <Config @theme="getColor" :opts="color" tag="颜色选择"></Config>
        <BoxBlive :theme="theme" :back="isColor"></BoxBlive>
        <CapsuleBlive :theme="theme" :back="isColor" :second="5"></CapsuleBlive>
        <CapsuleBlive theme="neon" back="red" :second="30"></CapsuleBlive>
        <CapsuleBlive theme="cat" back="blue" :second="8"></CapsuleBlive>
        <CapsuleBlive theme="spring" back="green" :second="25"></CapsuleBlive>
        <CapsuleBlive theme="fire" back="yellow" :second="20"></CapsuleBlive>
    </div>
</template>
<script lang='ts' setup>
import { ref, computed } from 'vue';
import BoxBlive from './BoxBlive.vue';
import CapsuleBlive from './CapsuleBlive.vue';
import Config from '../mplayer/config.vue';
let theme = ref<string>('diamond');
let isColor = ref<string>('blue');

function getTheme(val: string) {
    console.log('theme', theme.value);
    theme.value = val;
}

function getColor(val: string) {
    console.log('color', isColor.value)
    isColor.value = val
}
class Debounce {
    public use: (fun: Function, immediate?: boolean) => Function;
    constructor() {
        this.use = (fun, immediate = false) => {
            let tiemout: number;
            return (delay: number, ...args: any) => {
                if (immediate) {
                    fun.apply(this, args)
                    immediate = false;
                    return;
                }
                clearTimeout(tiemout);
                tiemout = setTimeout(() => {
                    fun.apply(this, args);
                }, delay)
            }
        }
    }
}

function mprint(...args: any) {
    
}

let a = '';
console.log(a = '陈子文')
// 这个console会输出 陈子文
// 我才知道这样也能打印出来
const fun = new Function()

const color = [
    {
        value: 'blue',
        label: '蓝色',
    },
    {
        value: 'green',
        label: '绿色',
    },
    {
        value: 'yellow',
        label: '黄色',
    },
    {
        value: 'orange',
        label: '橘色',
    },
    {
        value: 'pink',
        label: '粉色',
    },
    {
        value: 'red',
        label: '红色',
    },
]

</script>
<style lang='scss' scoped>
.test {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
}
</style>