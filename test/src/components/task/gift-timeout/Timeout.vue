<template>
    <div class="gift-timeout">
        <div class="title-double-box">
            <TitleDouble :theme="theme">
                <div class="timeout-content">
                    <span>距离下播时间</span>
                    <span> 09:30:06<i class="twinkle">”</i></span>
                </div>
            </TitleDouble>
        </div>
        <div class="nine-slice-simple-box">
            <NineSliceSimple :theme="theme" :width="270">
                <div class="nine-plain-box">
                    <NinePlain :theme="theme" v-for="(item, index) in arr" :key="index" :parity="change">
                        <div class="text-content">
                            <div class="gift-count">
                                <img src="./ava.jpeg">
                            </div>
                            <div class="change-time">
                                <span class="amount">{{ item.name }}</span>
                                <div class="time-message">
                                    <span>{{ item.type === 'add' ? '+' : '-' }}{{ item.count }}s</span>
                                </div>
                            </div>
                        </div>
                    </NinePlain>
                    <NinePlain :theme="theme" :width="262" :height="34">
                        <span class="user-message">@用户ID昵称比较长，<span class="gift-score">+{{ 60 }}</span></span>
                    </NinePlain>
                </div>
            </NineSliceSimple>
        </div>
    </div>
    <!-- 皮肤选择组件 -->
    <ThemeChoose :options="skin" @theme="getTheme" title="皮肤选择"></ThemeChoose>
</template>
<script lang='ts' setup>
import { computed, watch, ref } from "vue";
// import { useToolkitGiftTimeout, useQueryGiftData } from "@/renderer/use";
import TitleDouble from "@/components/common/title-double/TitleDouble.vue";
import NineSliceSimple from '@/components/common/nine-slice-simple/NineSliceSimple.vue';
import NinePlain from "@/components/common/nine-plain/NinePlain.vue";

// 皮肤选择 （上线时删掉）
import ThemeChoose from '@/components/common/theme-choose/theme.vue';
import { skin } from '@/components/common/theme-choose/config';
const theme = ref<string>('neon');
function getTheme(key: string) {
    theme.value = key;
}
//皮肤选择 （上线时删掉）

const arr = ref([
    { type: 'add', name: '十年', count: 60, time: 20 },
    { type: 'sub', name: '孤勇者', count: 60, time: 20 },
    { type: 'add', name: '爱的供养', count: 60, time: 20 },
]);
// const { now, config, time, tend } = useToolkitGiftTimeout();
// // 抓取礼物信息
// const { gifts } = useQueryGiftData();

// function giftMsg(id: string) {
//     const giftId = id;
//     if (gifts?.value?.[giftId]) {
//         return { name: gifts.value[giftId].name, icon: gifts.value[giftId].icon };
//     }
//     return { name: '暂无', icon: 'none' };
// }

// const theme = computed(() => {
//     return config.theme.value;
// })
// // 获取礼物列表
// const giftList = computed(() => {
//     return config.list.value;
// })

// // 当数组长度为为奇数或偶数时，样式做出相应的变化。
const change = ref<string>('');
watch(() => arr.value.length, () => {
    if (arr.value.length % 2 === 0) {
        change.value = 'odd';
    } else {
        change.value = 'even';
    }
}, { immediate: true });

// // 将秒数转换为对应的小时、分钟、秒。
// function handleTime(time: number) {
//     if (time === 0 || tend.value) {
//         return '任务完成';
//     } else {
//         let newTime = '';
//         const hours = ~~(time / (60 * 60));
//         const minute = ~~(time / 60 % 60);
//         const second = ~~(time % 60);
//         if (second >= 0) {
//             newTime = '' + addZero(second);
//         }
//         if (minute >= 0) {
//             newTime = addZero(minute) + ':' + newTime;
//         }
//         if (hours >= 0) {
//             newTime = addZero(hours) + ':' + newTime;
//         }
//         return newTime;
//     }
// }
// // 补0函数
// function addZero(num: number) {
//     return num < 10 ? "0" + num : num;
// }

// // 颜色集合
// const addcolor = computed(() => {
//     return config[theme.value + '-add-color'].value;
// })
// const cutcolor = computed(() => {
//     return config[theme.value + '-cut-color'].value;
// })
// const gapcolor = computed(() => {
//     return config[theme.value + '-gap-color'].value;
// })
// const othercolor = computed(() => {
//     return config[theme.value + '-other-color'].value;
// })
// const addback = computed(() => {
//     if (!config?.[theme.value + '-addback-shadow-color']) {
//         return '0 0 0 transparent';
//     }
//     const backcolor = config[theme.value + '-addback-shadow-color'].value;
//     if (theme.value === 'spring') {
//         return `0px 0px 6px ${backcolor}`;
//     } else {
//         return `1px -1px 5px ${backcolor},-1px 1px 5px ${backcolor},-1px -1px 5px ${backcolor},1px 1px 5px ${backcolor}`;
//     }
// })
// const cutback = computed(() => {
//     if (!config?.[theme.value + '-cutback-shadow-color']) {
//         return '0 0 0 transparent';
//     }
//     const backcolor = config[theme.value + '-cutback-shadow-color'].value;
//     if (theme.value === 'spring' || theme.value === 'fire') {
//         return `0px 0px 6px ${backcolor}`;
//     } else {
//         return `1px -1px 5px ${backcolor},-1px 1px 5px ${backcolor},-1px -1px 5px ${backcolor},1px 1px 5px ${backcolor}`;
//     }
// })
// const otherback = computed(() => {
//     if (!config?.[theme.value + '-otherback-shadow-color']) {
//         return '0 0 0 transparent';
//     }
//     const backcolor = config[theme.value + '-otherback-shadow-color'].value;
//     if (theme.value === 'spring') {
//         return `0px 0px 6px ${backcolor}`;
//     } else {
//         return `1px -1px 5px ${backcolor},-1px 1px 5px ${backcolor},-1px -1px 5px ${backcolor},1px 1px 5px ${backcolor}`;
//     }
// })


</script>

<style lang='scss' scoped>
@import 'animate.scss';

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
                            background-color: red;
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

.twinkle {
    width: 0px;
    animation: twinkle 1s infinite;
}
</style>