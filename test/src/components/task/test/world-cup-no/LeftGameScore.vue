<template>
    <div class="left-score">
        <div class="game-date">09-11 12:00</div>
        <div class="game-team">
            <div class="left-team">
                <div class="team-msg">
                    <img class="team-img" src="/assets/images/world-cup/1.jpeg" alt="">
                    <span class="team-name">哥斯达黎加</span>
                </div>
                <span class="team-score">5</span>
            </div>
            <div class="game-vs">VS</div>
            <div class="right-team">
                <span class="team-score">5</span>
                <div class="team-msg">
                    <img class="team-img" src="/assets/images/world-cup/1.jpeg" alt="">
                    <span class="team-name">哥斯达黎加</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
// interface LeftGameScore {

// }
// const props = defineProps<LeftGameScore>();

</script>
<style lang='scss' scoped>
.left-score {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 934px;
    height: 192px;
    background-image: url(/assets/images/world-cup/cscore.png);
    background-repeat: no-repeat;
    margin-top: 40px;

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
        height: 130px;
        width: 790px;

        .left-team,
        .right-team {
            width: 300px;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            padding-bottom: 15px;
            font-size: 24px;
            color: #ffffff;

            .team-score {
                display: inline-block;
                width: 50px;
                font-weight: 700;
                font-size: 40px;
                text-align: center;
            }

            .team-msg {
                display: flex;
                flex-direction: column;
                align-items: center;

                .team-name {
                    display: inline-block;
                    width: 140px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    text-align: center;
                    transform: translateY(8px);
                }

                .team-img {
                    width: 68px;
                    height: 44px;
                }
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
            padding-bottom: 25px;
        }
    }
}
</style>