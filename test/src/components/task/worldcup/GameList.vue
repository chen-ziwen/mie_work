<template>
    <li class="game-list">
        <ul class="head-tag">
            <li class="ball-team text-center">
                <img class="flag-img" :src="flagImg">
                <span class="team-name">{{team}}</span>
            </li>
            <li class="score text-center">{{outcome}}</li>
            <li class="gain-loss text-center">{{into}}</li>
            <li class="integral text-center">{{score}}</li>
        </ul>
    </li>
</template>
<script lang='ts' setup>
interface GameList {
    team: string; // 球队
    flagImg: string // 国旗
    outcome: string; //胜负
    into: string; // 进失
    score: string; // 积分
}
const props = defineProps<GameList>();

</script>

<style lang='scss' scoped>
$wprech: 18%; // 占位宽度
$wball-team: 34%; // 球队
$wscore: 32%; // 胜负宽度
$wgain-loss: 17%; //进失积分

.text-center {
    text-align: center;
}

* {
    padding: 0;
    margin: 0;
    list-style: none;
}

.game-list {
    .head-tag {
        display: flex;
        margin-bottom: 8px;
        font-size: 14px;

        .ball-team {
            display: flex;
            white-space: nowrap;
            width: $wball-team;

            .flag-img {
                width: 24px;
                height: 17px;
                margin-right: 5px;
            }

            .team-name {
                align-items: center;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        .score {
            width: $wscore;
        }

        .gain-loss,
        .integral {
            width: $wgain-loss;
        }
    }
}
</style>