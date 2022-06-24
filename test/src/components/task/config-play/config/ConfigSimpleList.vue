<template>
    <div class="config-simple-list">
        <div class="main-content">
            <span>{{ zero(order + 1) }}</span>
            <span>{{ songName }}</span>
            <span>{{ userName }}</span>
        </div>
        <div class="vice-content">
            <div class="vice-time">{{ changeTime(time) }}</div>
            <div class="vice-icon" v-if="show.display">
                <el-icon :color="color.tick" :size="20">
                    <Check />
                </el-icon>
                <span class="vice-p">{{ show.msg }}</span>
            </div>
            <div class="vice-icon" v-else>
                <el-icon :color="color.cross" :size="20">
                    <Close />
                </el-icon>
                <span class="vice-p">{{ show.msg }}</span>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { inject, computed, Ref } from 'vue';
import type { MyTheme } from '@/config/config-play/dataInter';

interface ConfigSimpleListProps {
    order: number;
    songName: string;
    userName: string;
    time: number;
    show: { msg: string, display: boolean };
    demandMsg?: string;
}

const theme = inject('theme') as Ref<MyTheme>;
const color = computed(() => { return theme.value.color })
// 将时间转换为时分 同时补0
function zero(num: number) {
    return num < 10 ? '0' + num : num;
}
function changeTime(time: number) {
    const t = new Date(time);
    const hour = zero(t.getHours());
    const minute = zero(t.getMinutes())
    return `${hour}:${minute}`
}

const props = defineProps<ConfigSimpleListProps>();

</script>

<style lang='scss' scoped>
.config-simple-list {
    width: 516px;
    height: 80px;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    &:nth-of-type(2n-1) {
        background: v-bind('color.uncheckedback');
    }

    &:hover {
        background: v-bind('color.checkedback') !important;
    }

    .main-content {
        width: 480px;
        height: 18px;
        margin: 20px 0 0 16px;
        display: flex;
        justify-content: center;
        align-items: center;

        >span {
            &:first-child {
                display: inline-block;
                box-sizing: border-box;
                color: v-bind('color.tagtext');
                white-space: nowrap;
            }

            &:nth-child(2) {
                width: 240px;
                flex-shrink: 0;
                margin-left: 27px;
                margin-right: 45px;
                text-align: left;
                font-size: 15px;
                font-weight: 600;
                color: v-bind('color.songtext');
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }

            &:last-child {
                font-size: 13px;
                flex-grow: 1;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: v-bind('color.tagtext');
                overflow: hidden;
                text-align: left;
            }
        }
    }

    .vice-content {
        height: 16px;
        margin: 9px 0 20px 62px;
        display: flex;
        align-items: center;


        .vice-time {
            font-size: 13px;
            width: 40px;
            height: 18px;
            padding: 0px 5px;
            background-color: v-bind('color.timeback');
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .vice-icon {
            transform: translate(5px);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 13px;
            color: v-bind('color.tagtext');

            .vice-p {
                margin-left: 5px;
                margin-bottom: 2px;
            }
        }
    }

}
</style>