<template>
    <div class="raffle-start">
        <div class="card-back left-box">
            <Transition name="scale">
                <el-image v-if="noPlay" class="no-start" :src="'/assets/images/raffle/gamestart.png'" fit="contain" />
                <div class="add-card-box" v-else>
                    <div class="add-card">
                        <AddCard v-for="data in cards" :data="data" :key="data.userName + data.userAvatar"></AddCard>
                    </div>
                    <span class="tip-text">正在统计中...</span>
                </div>
            </Transition>
        </div>
        <div class="right-box">
            <div class="raffle-right">
                <img class="logo" src="/assets/images/raffle/logo.png" />
                <Draw class="draw" v-for="item in drawItemData" :key="item.giftName" :giftIcon="item.giftIcon" :giftName="item.giftName" :giftCount="item.giftCount" :barrage="item.barrage" />
                <div class="history">
                    <div class="history-main">
                        <div class="join">尚未有人参与，请稍等~</div>
                        <TransitionGroup name="list" tag="div">
                            <History v-for="item in historyItemData" :key="item.fansHeadImg" :fansHeadImg="item.fansHeadImg" :fansId="item.fansId" />
                        </TransitionGroup>
                    </div>
                </div>
                <div v-if="buttom" class="buttom start active" @click="$emit('start'); start(), noPlay = false"></div>
                <div v-if="playShow" class="buttom play active" @click="$emit('stop'); play(); $emit('boo')"></div>
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
import { ref, Ref, computed } from 'vue';
import AddCard from './AddCard.vue';
import Draw from './module/Draw.vue';
import History from './module/History.vue';
interface DrawItem {
    giftIcon: string;
    giftName: string;
    giftCount: number;
    barrage: string;
}

interface HistoryItem {
    fansHeadImg: string;
    fansId: string;
}
const noPlay = ref<boolean>(true);
const props = defineProps(['cards']);
const emit = defineEmits(['start', 'stop', 'boo'])
const historyItemData: Ref<HistoryItem[]> = ref([]);
const buttom = ref(true) //开始统计按钮选中状态
const playShow = ref(false) //游戏按钮选中状态
const startButtom = ref(false) //统计按钮选中状态

const drawItemData: Ref<DrawItem[]> = ref([
    { giftIcon: "/assets/images/raffle/captain-demo.png", giftName: '礼物名称', giftCount: 20, barrage: '抽奖' }
]);

function start() {
    startButtom.value = true;
    buttom.value = false;
    playShow.value = true;
}
function play() {

}

</script>
<style lang='scss' scoped>
.raffle-start {
    position: relative;
    display: flex;
    flex-wrap: nowrap;

    .card-back {
        position: relative;
        background: url(/assets/images/raffle/raffleback.png) no-repeat;
        background-size: 890px 680px;
        width: 890px;
        height: 680px;

        .add-card-box {
            position: relative;
            left: -15px;
            top: 25px;

            ::-webkit-scrollbar {
                width: 8px;
            }

            ::-webkit-scrollbar-track {
                height: 30px;
                -webkit-border-radius: 10px;
                border-radius: 10px;
            }

            ::-webkit-scrollbar-track-piece {
                background: #3E3C9F;
                -webkit-border-radius: 10px;
                border-radius: 10px;
            }

            ::-webkit-scrollbar-thumb {
                background: #9BB5FF;
                -webkit-border-radius: 10px;
                border-radius: 10px;
            }

            .add-card {
                height: 615px;
                margin-left: 35px;
                overflow-x: hidden;
            }

            .tip-text {
                position: absolute;
                right: 35px;
                bottom: -25px;
                font-size: 22px;
                color: #7EDCE8;
            }
        }

        .no-start {
            position: absolute;
            left: calc(50% - 228px);
            top: calc(50% - 87px);
        }
    }

    .right-box {
        .raffle-right {
            width: 372px;
            height: 680px;
            display: flex;
            align-items: center;
            flex-direction: column;

            .logo {
                width: 226px;
                height: 92px;
            }

            .draw {
                margin-top: 18px;
            }

            .history {
                width: 346px;
                height: 246px;
                margin-top: 18px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-image: url(/assets/images/raffle/history.png);

                .join {
                    font-size: 16px;
                    color: #fff;
                }

                &-main {
                    width: 318px;
                    height: 210px;
                    display: flex;
                    flex-direction: column;
                }
            }

            .buttom {
                width: 350px;
                height: 80px;
                margin-top: 20px;
            }

            .active {
                cursor: pointer;

                &:active {
                    transform: scale(1.01)
                }
            }

            .start {
                background-image: url(/assets/images/raffle/start-1.png);

                &:hover {
                    background-image: url(/assets/images/raffle/start-2.png);
                }
            }

            .play {
                background-image: url(/assets/images/raffle/play-1.png);

                &:hover {
                    background-image: url(/assets/images/raffle/play-2.png);
                }
            }

            .over-btn {
                width: 340px;
                height: 70px;
                margin-top: 122px;
                background-image: url(/assets/images/raffle/over-1.png);

                &:hover {
                    background-image: url(/assets/images/raffle/over-2.png);
                }
            }
        }
    }
}

.list-move,
.list-enter-active,
.list-leave-active {
    transition: transform 1s ease, opacity 1s ease;
}

.scale-enter-active {
    transition: opacity 1s ease-in-out;
}

.scale-leave-active {
    animation: scale 0.8s ease-in-out;
}

.scale-enter-from,
.scale-leave-to {
    opacity: 0;
}

@keyframes scale {
    0% {
        transform: scale(1);
        opacity: 1;
    }

    40% {
        transform: scale(1.15);
        opacity: 0.8;
    }

    100% {
        transform: scale(0.35);
        opacity: 0;
    }
}
</style>