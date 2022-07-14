
<template>
    <div class="raffle-draw">
        <div class="card-back left-box">
            <div class="raffle-card-box">
                <div class="raffle-card">
                    <RaffleCard @rolling="rolling" v-for="data in cards" :data="data" :key="data.userName + data.userAvatar"></RaffleCard>
                </div>
                <div class="tip-text">
                    <span class="text-content">抽奖条件: 1.礼物名称X99，2.发送弹幕 “抽奖”</span>
                    <span class="text-amount">共10086人参与</span>
                </div>
            </div>
            <div class="lost-dialog" v-show="dislist"></div>
            <Transition name="slide-fade">
                <LostList class="lost-amite" @close="close" v-show="dislist"></LostList>
            </Transition>
        </div>
        <div class="right-box">
            <Choice @mod="getMod" v-bind="$attrs"></Choice>
        </div>
    </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
import RaffleCard from './RaffleCard.vue';
import LostList from './module/LostList.vue';
import Choice from './module/Choice.vue';

type ModType = 'luck' | 'reject' | 'half';

interface CardItem {
    id: number,
    stats: number;
    user?: any;
}
const props = defineProps(['cards']);
const emit = defineEmits(['luck', 'reject', 'half']);

const mod = ref<ModType>('luck');
const dislist = ref<boolean>(false);


// 拿到游戏的三个模式
function getMod(id: ModType) {
    mod.value = id;
}
// 根据模式触发相应的处理方法
function rolling(data: CardItem) {
    emit(mod.value, data.id);
    // 这边的拟态框出现要做动画
    if (mod.value == 'half') {
        dislist.value = true;
    }
}

function close() {
    dislist.value = false;
}

</script>

<style lang='scss' scoped>
.raffle-draw {
    position: relative;
    display: flex;
    flex-wrap: nowrap;

    .card-back {
        position: relative;
        background: url(/assets/images/raffle/raffleback.png) no-repeat;
        background-size: 890px 680px;
        width: 890px;
        height: 680px;

        .raffle-card-box {
            position: absolute;
            transform: translate(-15px, 25px);

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

            .raffle-card {
                height: 615px;
                margin-left: 35px;
                overflow-x: hidden;
            }

            .tip-text {
                display: flex;
                justify-content: space-between;
                margin-left: 46px;
                line-height: 22px;

                .text-content {
                    color: white;
                    font-size: 16px;
                }

                .text-amount {
                    color: #7EDCE8;
                    font-size: 22px;
                    margin-right: 38px;
                }
            }
        }

        .lost-dialog {
            position: absolute;
            width: 98%;
            height: 98%;
            transform: translate(10px, 8px);
            background-color: rgba(29, 17, 101, 0.6);
            border-radius: 15px;
            z-index: 10;
        }

        .lost-amite {
            position: absolute;
            z-index: 99;
            // 移动百分之五十，再减去自身的一半;
            left: calc(50% - 200px);
            top: calc(50% - 253px);
        }

    }


}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.8s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-120px);
    opacity: 0;
}
</style>