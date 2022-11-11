<template>
    <div class="game-header-info">
        <div class="base-msg flex-align">
            <span>{{getNow()}}</span>
            <span>{{getTime()}}</span>
        </div>
        <div class="team-msg flex-align">
            <div class="left-img-text flex-align">
                <img class="img-size" :src="limg">
                <span class="text-hidden">{{lstate}}</span>
            </div>
            <span class="score">{{score}}</span>
            <div class="right-img-text flex-align">
                <span class="text-hidden adaptive">{{rstate}}</span>
                <img class="img-size" :src="rimg">
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
import { reactive, toRefs, onMounted, onUnmounted } from 'vue';

interface GameHeaderInfo {
    lstate: string,
    rstate: string,
    limg: string,
    rimg: string,
    score: string,
}

defineProps<GameHeaderInfo>()

// 日期定时器
let timer: number;

// 初始化日期和当天时间
const currentTime = reactive<{ data: string, time: string }>({
    data: '00-00',
    time: '00:00',
})
const { data, time } = toRefs(currentTime);

// 不到10 补一个0
function addZero(time: number) {
    return time < 10 ? "0" + time : time;
}

// 获取年月
function getNow(): string {
    let date = new Date(),
        month: string | number = date.getMonth() + 1, //获取当前月份(0-11,0代表1月)
        strDate: string | number = date.getDate(); // 获取当前日(1-31)
    data.value = addZero(month) + '-' + addZero(strDate);
    return data.value;
}

// 获取时分
function getTime(): string {
    let date = new Date(),
        hour = date.getHours(),
        minute = date.getMinutes();
    time.value = addZero(hour) + ":" + addZero(minute);
    return time.value;
}

// 计算时间，组件销毁时，清除定时器
onMounted(() => {
    getNow();
    getTime();
    timer = window.setInterval(() => {
        getNow();
        getTime();
    }, 1000)
})
onUnmounted(() => {
    clearInterval(timer)
})


</script>
<style lang='scss' scoped>
.flex-align {
    display: flex;
    align-items: center;
}

.text-hidden {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.game-header-info {
    width: 870px; // 固定宽度即可
    height: 100px;
    background-color: var(--main-box-color, #FFFFFF);
    font: normal 700 24px 'Microsoft YaHei';
    display: flex;
    flex-direction: row;
    border-radius: 5px;

    .base-msg {
        margin-left: 30px;
        height: inherit;
        width: 180px;

        span:last-child {
            margin-left: 16px;
        }
    }

    .team-msg {

        .left-img-text,
        .right-img-text {
            width: 260px;

            .img-size {
                flex-shrink: 0;
                width: 50px;
                height: 30px;
            }
        }

        .left-img-text .img-size {
            margin: 0px 20px 0 35px;
        }

        .right-img-text .img-size {
            margin: 0px 35px 0 20px;
        }

        .right-img-text {
            .adaptive {
                flex-grow: 1;
                text-align: end;
            }
        }

        .score {
            display: inline-block;
            width: 110px;
            text-align: center;
        }
    }
}
</style>