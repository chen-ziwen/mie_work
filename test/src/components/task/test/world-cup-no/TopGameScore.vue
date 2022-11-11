<template>
    <div class="top-score">
        <div class="game-date">09-11 12:00</div>
        <div class="game-team">
            <div class="left-team">
                <img class="team-img" src="/assets/images/world-cup/1.jpeg" alt="">
                <span class="team-name">哥斯达黎加</span>
                <span class="team-score">5</span>
            </div>
            <div class="game-vs">VS</div>
            <div class="right-team">
                <span class="team-score">5</span>
                <span class="team-name">哥斯达黎加</span>
                <img class="team-img" src="/assets/images/world-cup/1.jpeg" alt="">
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
// interface TopGameScore {
   
// }
// const props = defineProps<TopGameScore>();
</script>
<style lang='scss' scoped>
.top-score {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1092px;
    height: 140px;
    background-image: url(/assets/images/world-cup/fscore.png);
    background-repeat: no-repeat;
    margin: 20px auto;

    .game-date {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 5px;
        width: 240px;
        height: 50px;
        color: white;
        font-size: 24px;
    }

    .game-team {
        display: flex;
        height: 80px;
        width: 950px;

        .left-team,
        .right-team {
            width: 380px;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            padding-bottom: 15px;
            font-size: 24px;
            color: #ffffff;

            .team-img {
                width: 68px;
                height: 44px;
            }

            .team-name {
                display: inline-block;
                width: 140px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .team-score {
                display: inline-block;
                width: 50px;
                font-weight: 700;
                font-size: 35px;
                text-align: center;
            }
        }


        .game-vs {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 190px;
            font-weight: 700;
            font-size: 32px;
            color: #ffffff;
            padding-bottom: 5px;
        }

    }
}
</style>