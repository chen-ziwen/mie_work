<template>
    <div class="game-against">
        <div class="real-size">
            <div class="left-box">
                <div class="flex-column round">
                    <TeamInfo class="team" v-for="i in 4"></TeamInfo>
                </div>
                <div class="flex-column round round2">
                    <TeamInfo :is-msg="false" class="team" v-for="i in 2"></TeamInfo>
                </div>
                <div class="flex-column round round3">
                    <TeamInfo :is-msg="false" class="team"></TeamInfo>
                </div>
            </div>
            <div class="center-box">
                <TeamInfo :is-msg="false" class="team" type="red"></TeamInfo>
                <TeamInfo :is-msg="false" class="team"></TeamInfo>
            </div>
            <div class="right-box">
                <div class="flex-column round round3">
                    <TeamInfo :is-msg="false" class="team"></TeamInfo>
                </div>
                <div class="flex-column round round2">
                    <TeamInfo class="team" v-for="i in 2"></TeamInfo>
                </div>
                <div class="flex-column round">
                    <TeamInfo class="team" v-for="i in 4"></TeamInfo>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
import TeamInfo from '../against/TeamInfo.vue';
</script>
<style lang='scss' scoped>
.game-against {
    width: 1920px;
    height: 1080px;
    background-image: url(/assets/images/world-cup/against.png);
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;

    .flex-column {
        display: flex;
        flex-direction: column;
    }

    .real-size {
        position: relative;
        display: flex;
        height: 870px;
        width: 1850px;
        justify-content: space-between;

        .left-box,
        .right-box {
            height: inherit;
            display: flex;
        }

        .center-box {
            position: absolute;
            left: 50%;
            bottom: 0%;
            transform: translateX(calc(-50% + 2px));

            .team:first-child {
                margin-bottom: 130px;
            }

            .team:last-child {
                margin-bottom: 70px;
            }
        }
    }

    .left-box {
        transform: translate(40px, 16px);
    }

    .right-box {
        transform: translate(-40px, 16px);
    }

    .left-box .round {
        margin-right: 42px;
        margin-top: 30px;
        justify-content: space-around
    }

    .right-box .round {
        margin-left: 42px;
        margin-top: 30px;
        justify-content: space-around;
    }

    .left-box .round2 {
        transform: translate(6px, 1.5px);
    }

    .right-box .round2 {
        transform: translate(-6px, 1.5px);
    }

    .left-box .round3 {
        transform: translate(calc(-50% + 8px), 3px);
    }

    .right-box .round3 {
        transform: translate(calc(50% - 8px), 3px);
    }
}
</style>