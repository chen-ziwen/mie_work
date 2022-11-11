<template>
    <div id="team-info" :data-theme="type">
        <div class="game-date">
            <span>12月03日</span>
            <span>23:00</span>
        </div>
        <div class="game-team">
            <div class="game-team-detail">
                <img v-if="isMsg" class="team-img" src="/assets/images/world-cup/1.jpeg" />
                <span v-if="isMsg" class="team-name">厄瓜多尔</span>
                <div v-else class="no-team">?</div>
            </div>
            <!-- <span class="vs-text">VS</span> -->
            <div class="game-team-detail">
                <img v-if="isMsg" class="team-img" src="/assets/images/world-cup/2.jpeg" />
                <span v-if="isMsg" class="team-name">英格兰</span>
                <div v-else class="no-team">?</div>
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>

interface TeamInfo {
    type?: string;
    isMsg?: boolean
}
const props = withDefaults(defineProps<TeamInfo>(), {
    type: 'blue', // 蓝，红
    isMsg: true,
});

</script>

<style lang='scss' scoped>
#team-info {
    width: 254px;
    height: 148px;
    // border: 1px solid var(--common-color);
    // border-radius: 8px;
    // box-shadow: 0px 0px 8px 3px var(--common-color);
    // background-color: var(--back-color);

    .game-date {
        height: 40px;
        width: 95%;
        text-align: center;
        margin: 5px auto 15px auto;
        border-radius: 4px;
        // background-color: var(--head-color);
        font: normal 500 20px/2 '微软雅黑';
        color: #ffffff;

        span:first-child {
            padding-right: 12px;
        }
    }

    .game-team {
        display: flex;
        align-items: center;

        .game-team-detail {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 0;
            flex-grow: 1;
            overflow: hidden;
            white-space: nowrap;
            color: #ffffff;

            .team-img {
                width: 70px;
                height: 45px;
                margin-bottom: 8px;
            }

            .no-team {
                width: 70px;
                height: 45px;
                margin-bottom: 8px;
                background-color: var(--game-box);
                display: flex;
                align-items: center;
                justify-content: center;
                font: normal 700 30px '黑体';
                color: var(--common-color);
            }

            .team-name {
                color: var(--team-name);
            }
        }

        .vs-text {
            transform: translateY(-14px);
            font-size: 18px;
            color: var(--common-color);
        }
    }
}

// 普通
#team-info[data-theme='blue'] {
    --common-color: #2AD6EE;
    --head-color: #10235F;
    --back-color: #10235F;
    --team-name: #ffffff;
    --game-box: #06467D;
}

// 决赛
#team-info[data-theme='red'] {
    --common-color: #C40036;
    --head-color: #C40036;
    --back-color: #ffffff;
    --team-name: #C40036;
    --game-box: #E5E5E5;
}
</style>