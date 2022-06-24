<template>
    <div class="config-box">
        <svg @click="theme" data-name="皮肤" class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
            <path
                d="M8.42,1.15l-.05.49a1.38,1.38,0,0,1-2.75,0l0-.48h-5V6.26H2.42v5A1.61,1.61,0,0,0,4,12.85H10a1.61,1.61,0,0,0,1.61-1.6v-5h1.86V1.15Zm3.95,4H10.51v6.06a.54.54,0,0,1-.54.53H4a.54.54,0,0,1-.54-.53V5.19H1.63v-3h3a2.45,2.45,0,0,0,4.7,0h3v3Z" />
        </svg>
        <svg @click="list" data-name="列表" class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
            <path
                d="M1.32,6a1.05,1.05,0,1,0,0,2.1,1.05,1.05,0,1,0,0-2.1ZM4.57,2.63h8.65a.53.53,0,0,0,.54-.52.54.54,0,0,0-.54-.53H4.57A.54.54,0,0,0,4,2.11.53.53,0,0,0,4.57,2.63ZM1.32,10.85a1,1,0,1,0,0,2.09,1,1,0,1,0,0-2.09Zm11.9-4.37H4.57a.52.52,0,1,0,0,1h8.65a.52.52,0,1,0,0-1ZM1.32,1.06a1.06,1.06,0,0,0-1.08,1,1.06,1.06,0,0,0,1.08,1,1.06,1.06,0,0,0,1.08-1A1.06,1.06,0,0,0,1.32,1.06Zm11.9,10.31H4.57a.53.53,0,0,0-.54.52.54.54,0,0,0,.54.53h8.65a.54.54,0,0,0,.54-.53A.53.53,0,0,0,13.22,11.37Z" />
        </svg>
        <svg data-name="分隔" class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
            <path d="M7.52,12.57V2.47a.52.52,0,1,0-1,0v10.1a.52.52,0,1,0,1,0Z" />
        </svg>
        <svg @click="top" data-name="置顶" class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
            <path
                d="M7.49,3.9a.49.49,0,0,0-.28-.21.54.54,0,0,0-.19,0H7a.52.52,0,0,0-.18,0,.54.54,0,0,0-.28.21l-4,4a.49.49,0,0,0-.15.35.56.56,0,0,0,.18.41.52.52,0,0,0,.4.17.51.51,0,0,0,.36-.14l0,0,0,0L6.44,5.59V13a.51.51,0,0,0,.55.49A.53.53,0,0,0,7.57,13V5.6l3.07,3.06,0,0h0a.51.51,0,0,0,.36.15.6.6,0,0,0,.4-.17.55.55,0,0,0,0-.77Z" />
            <path d="M13,1.52H1a.51.51,0,0,0,0,1H13a.51.51,0,0,0,0-1" />
        </svg>
        <svg @click="shrink" data-name="缩小" class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
            <path d="M12.05,6H2a.54.54,0,0,0-.54.53A.53.53,0,0,0,2,7h10.1a.53.53,0,0,0,.54-.52A.54.54,0,0,0,12.05,6Z" />
        </svg>
        <svg @click="close" data-name="关闭" class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
            <path d="M7.79,7l4.63-4.6a.56.56,0,1,0-.79-.79L7,6.19,2.41,1.59a.56.56,0,0,0-.79.79L6.21,7l-4.63,4.6a.56.56,0,0,0,.4.95.54.54,0,0,0,.39-.16L7,7.77l4.63,4.64a.56.56,0,1,0,.79-.79Z" />
        </svg>
    </div>
</template>

<script lang='ts' setup>
import type { MyTheme } from './dataInter';
import { inject, computed, Ref } from 'vue';
const myTheme = inject('theme') as Ref<MyTheme>;
const color = computed(() => {
    return myTheme.value.color;
})
const emit = defineEmits(['config']);

// 将信息发送出去
function theme() {
    emit('config', 'theme')
}
function list() {
    emit('config', 'list')
}
function top() {
    emit('config', 'top')
}
function shrink() {
    emit('config', 'shrink')
}
function close() {
    emit('config', 'close')
}
</script>

<style lang='scss' scoped>
.config-box {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 128px;
    height: 25px;
    margin-right: 10px;

    .svg-icon {
        fill: v-bind('color.conf');
        stroke-width: 5px;
        width: 15px;
        height: 15px;

        &:not(:nth-child(3)) {
            cursor: pointer;
        }
    }

}
</style>