<template>
    <div class="game-list-data">
        <div class="game-data-content">
            <ul class="head-tag">
                <li class="ball-team text-center">球队</li>
                <li class="score text-center">胜/负/平</li>
                <li class="gain-loss text-center">进/失</li>
                <li class="integral text-center">积分</li>
            </ul>
            <div class="team-msg">
                <div class="detail-msg" v-for="(item,index) in data" :key="index">
                    <div class="group">
                        <span>{{item.group}}</span>
                        <el-switch v-model="item.open"></el-switch>
                    </div>
                    <ul class="game-msg">
                        <GameList v-for="i in item.data" :team="i.team" :flag-img="i.flagImg" :outcome="i.outcome" :into="i.into" :score="i.score"></GameList>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
import GameList from './GameList.vue';
interface GameListData {
    data: Record<string, any>
}
const prpos = defineProps<GameListData>();

</script>
<style lang='scss' scoped>
$mg-top: 9px;
$wprech: 19%; // 占位宽度
$wball-team: 34%; // 球队宽度
$wscore: 32%; // 胜负宽度
$wgain-loss: 17%; //进失积分宽度
$hbox: 615px; // 盒子高度
$htop: 35px; // 盒子顶部高度

.text-center {
    text-align: center;
}

* {
    padding: 0;
    margin: 0;
    list-style: none;
}

.game-list-data {
    width: 385px;
    height: $hbox;
    background-color: var(--main-box-color, #FFFFFF);
    border-radius: 5px;
    overflow: hidden;

    .game-data-content {
        width: 92%;
        margin: auto;

        .head-tag {
            display: flex;
            height: $htop;
            width: calc(100% - $wprech);
            line-height: 50px;
            font-size: 14px;
            margin-left: $wprech;
            color: #7a757e;

            .ball-team {
                width: $wball-team;
            }

            .score {
                width: $wscore;
            }

            .gain-loss,
            .integral {
                width: $wgain-loss;
            }
        }

        .team-msg {
            height: calc($hbox - $htop);
            overflow: scroll;
            overflow-x: hidden;

            &::-webkit-scrollbar {
                width: 0px;
            }

            .detail-msg {
                position: relative;
                display: flex;

                &::before {
                    position: absolute;
                    content: '';
                    display: block;
                    height: 1px;
                    width: 100%;
                    background-color: #dedede;
                }

                .group {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: $wprech;
                    height: 100%;
                    margin-top: $mg-top;

                    &:deep(.el-switch) {
                        --el-switch-on-color: var(--el-btn-color, #28DBA4);
                    }
                }

                .game-msg {
                    width: calc(100% - $wprech);
                    margin: $mg-top 0 4px 3px;
                }
            }
        }
    }
}
</style>