<template>
    <div class="start-raffle flex-column touchable">
        <div class="prize-box flex-row bg-white">
            <div class="prize-content flex-grow">
                <div class="head">
                    <i class="iconfont icon-arrow-right-filling"></i>奖品
                </div>
                <div class="text-box">{{ award }}</div>
            </div>
            <div class="options flex-column">
                <el-button size="mini" class="start" type="text" @click="$emit('back')">再来一局</el-button>
                <el-button size="mini" class="history" type="text" @click="showHistory">抽奖记录</el-button>
            </div>
        </div>
        <div class="box bg-white">
            <div class="head">
                <i class="iconfont icon-arrow-right-filling"></i>获奖名单
                <span class="win-length">{{ wins.length }}人</span>
            </div>
            <div class="win-box">
                <RaffleCard v-for="data in wins" :key="data.id" :data="data" />
            </div>
        </div>
        <div class="box flex-grow bg-white">
            <div class="head">
                <i class="iconfont icon-arrow-right-filling"></i>参与名单
                <span>{{ losts.length }}人</span>
            </div>
            <div class="lost-box">
                <RaffleCard v-for="data in losts" :key="data.id" :data="data" :visiable="true" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import RaffleCard from './RaffleCard.vue';

const props = defineProps(['cards', 'config', 'replied', 'collecting', 'award']);
const wins = computed(() => {
    if (props.cards) {
        const win = props.cards.filter((x: any) => {
            return x.flag == 3;
        })
        return win;
    }
    return [];
});

const losts = computed(() => {
    if (props.cards) {
        const lost = props.cards.filter((x: any) => {
            return x.flag != 3;
        })
        return lost;
    }
    return [];
});

function showHistory() {
    mbo.window.showToolkit('raffle', 'history');
}

</script>

<style lang="scss" scoped>
.start-raffle {
    padding: 8px 18px;
    font-size: 14px;
    height: 100%;
    width: 100%;
    overflow: hidden auto;

    .prize-box {
        height: 76px;

        // padding: 3px 10px;
        .prize-content {
            .text-box {
                padding: 8px 20px 0;
            }
        }

        .options {
            margin-right: 10px;
            margin-top: 10px;

            .el-button {
                width: 84px;
                height: 24px;
                color: #fff;

                &.start {
                    background: #38c4b7;
                    box-shadow: #38c4b7 0 0 6px;
                }

                &.history {
                    background: #758381;
                    box-shadow: #758381 0 0 6px;
                }
            }

            .el-button+.el-button {
                margin-left: 0px;
                margin-top: 6px;
            }
        }
    }

    .head {
        margin: 4px;

        .iconfont icon-arrow-right-filling {
            font-size: 18px;
            color: #ffc43e;
        }
    }

    .box {
        margin-top: 6px;

        .win-length {
            color: #fa3e25;
        }

        .lost-box,
        .win-box {
            overflow: hidden;

            .raffle-card {
                width: calc(100% / 8);
            }
        }

        .lost-box {
            overflow: hidden auto;
            max-height: 280px;
        }
    }
}
</style>