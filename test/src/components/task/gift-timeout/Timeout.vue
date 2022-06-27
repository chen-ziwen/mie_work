<template>
    <div class="gift-timeout">
        <div class="title-double-box">
            <TitleDouble :theme="theme">
                <div class="timeout-content" :style="textStyle">
                    <span>距离下播时间</span>
                    <span>{{ handleTime(time) }}<i class="twinkle">”</i></span>
                </div>
            </TitleDouble>
        </div>
        <div class="nine-slice-simple-box">
            <NineSliceSimple :theme="theme" :width="270">
                <div class="nine-plain-box">
                    <NinePlain :theme="theme" v-for="(item, index) in listData" :key="index" :parity="change">
                        <div class="text-content">
                            <div class="gift-count">
                                <img :src="item.gift">
                            </div>
                            <div class="change-time">
                                <span class="amount" :style="textStyle">{{ item.songName }}</span>
                                <div class="time-message">
                                    <span :style="judgeStyle(item.type)">{{ item.type === 'add' ? '+' : '-' }}{{ item.count }}s</span>
                                </div>
                            </div>
                        </div>
                    </NinePlain>
                    <NinePlain :theme="theme" :width="262" :height="34">
                        <span class="user-message" :style="textStyle">@用户ID昵称比较长，<span class="gift-score">+{{ 60 }}</span></span>
                    </NinePlain>
                </div>
            </NineSliceSimple>
        </div>
    </div>

</template>
<script lang='ts' setup>
import { computed, watch, ref } from "vue";
import TitleDouble from "@/components/common/title-double/TitleDouble.vue";
import NineSliceSimple from '@/components/common/nine-slice-simple/NineSliceSimple.vue';
import NinePlain from "@/components/common/nine-plain/NinePlain.vue";
import { themeColor } from './themeColor'

//基本数据,可以随意更改
interface ListDataType {
    songName: string; //歌名
    count: number;// 每次增加减少的时间
    type: string; //判断显示加号还是显示减号的字符串
    gift: string; // 加时减时礼物的icon图标
}
interface Timeout {
    theme: string;
    time: number;
    listData: ListDataType[];
}
const props = defineProps<Timeout>();

//将秒数转换为对应的小时、分钟、秒。 
function handleTime(time: number) {
    if (time === 0) {
        return '任务完成';
    } else {
        let newTime = '';
        const hours = ~~(time / (60 * 60));
        const minute = ~~(time / 60 % 60);
        const second = ~~(time % 60);
        if (second >= 0) {
            newTime = '' + addZero(second);
        }
        if (minute >= 0) {
            newTime = addZero(minute) + ':' + newTime;
        }
        if (hours >= 0) {
            newTime = addZero(hours) + ':' + newTime;
        }
        return newTime;
    }
}

// 补0函数
function addZero(num: number) {
    return num < 10 ? "0" + num : num;
}

//当数组长度为为奇数或偶数时，样式做出相应的变化。
const change = ref<string>('');
watch(() => props.listData.length, () => {
    if (props.listData.length % 2 === 0) {
        change.value = 'odd';
    } else {
        change.value = 'even';
    }
}, { immediate: true });

// 颜色集合
const addcolor = computed(() => {
    return themeColor[props.theme].add;
})
const cutcolor = computed(() => {
    return themeColor[props.theme].cut;
})
const gapcolor = computed(() => {
    return themeColor[props.theme].gap;
})
const othercolor = computed(() => {
    return themeColor[props.theme].other;
})
const addback = computed(() => {
    if (!themeColor[props.theme]?.addback) {
        return '0 0 0 transparent';
    }
    const backcolor = themeColor[props.theme].addback;
    if (props.theme === 'spring') {
        return `0px 0px 6px ${backcolor}`;
    } else {
        return `1px -1px 5px ${backcolor},-1px 1px 5px ${backcolor},-1px -1px 5px ${backcolor},1px 1px 5px ${backcolor}`;
    }
})
const cutback = computed(() => {
    if (!themeColor[props.theme]?.cutback) {
        return '0 0 0 transparent';
    }
    const backcolor = themeColor[props.theme].cutback;
    if (props.theme === 'spring' || props.theme === 'fire') {
        return `0px 0px 6px ${backcolor}`;
    } else {
        return `1px -1px 5px ${backcolor},-1px 1px 5px ${backcolor},-1px -1px 5px ${backcolor},1px 1px 5px ${backcolor}`;
    }
})
const otherback = computed(() => {
    if (!themeColor[props.theme]?.otherback) {
        return '0 0 0 transparent';
    }
    const backcolor = themeColor[props.theme].otherback;
    if (props.theme === 'spring') {
        return `0px 0px 6px ${backcolor}`;
    } else {
        return `1px -1px 5px ${backcolor},-1px 1px 5px ${backcolor},-1px -1px 5px ${backcolor},1px 1px 5px ${backcolor}`;
    }
})
const textStyle = computed(() => {
    return { color: othercolor.value, textShadow: otherback.value };
})
function judgeStyle(judge: string) {
    return {
        color: judge === 'add' ? addcolor.value : cutcolor.value,
        textShadow: judge === 'add' ? addback.value : cutback.value
    }
}

</script>

<style lang='scss' scoped>
.gift-timeout {
    display: flex;
    align-items: center;
    flex-direction: column;

    .title-double-box {
        .timeout-content {
            display: flex;
            height: 106px;
            align-items: center;
            flex-direction: column;

            >span {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                flex-grow: 1;

                &:first-child {
                    transform: translateY(8px);
                    font-size: 18px;
                }

                &:last-child {
                    font-size: 30px;
                    font-weight: 600;
                }
            }
        }
    }

    .nine-slice-simple-box {
        transform: translateY(-5px);

        .nine-plain-box {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            transform: translateY(3px);

            .text-content {
                display: flex;
                align-items: center;
                height: 100%;
                margin-left: 5px;

                .gift-count {
                    >img {
                        width: 44px;
                        height: 44px;
                        margin-right: 2px;
                    }
                }

                .change-time {
                    display: flex;
                    flex-direction: column;
                    transform: translateX(2px);

                    .amount {
                        font-size: 14px;
                        font-weight: 600;
                        overflow: hidden;

                        &::after {
                            display: block;
                            content: '';
                            width: 54px;
                            height: 1px;
                            background-color: v-bind('gapcolor');
                        }
                    }

                    .time-message {
                        font-size: 16px;
                        font-weight: 600;
                    }
                }
            }

            .user-message {
                font-size: 16px;
                padding: 0px 15px;

                .gift-score {
                    font-weight: 600;
                }
            }
        }
    }
}

@keyframes twinkle {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}

.twinkle {
    width: 0px;
    animation: twinkle 1s infinite;
}
</style>