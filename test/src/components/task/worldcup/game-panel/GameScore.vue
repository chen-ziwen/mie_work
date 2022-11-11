<template>
    <div :class="type+'-game-score'" v-if="type==='thin'">
        <div class="game-date">09-11 12:00</div>
        <div class="game-team">
            <div class="left-team">
                <img class="team-img" :src="left.img">
                <span class="team-name">{{left.name}}</span>
                <span class="team-score">{{left.score}}</span>
            </div>
            <div class="game-vs">VS</div>
            <div class="right-team">
                <span class="team-score">{{right.score}}</span>
                <span class="team-name">{{right.name}}</span>
                <img class="team-img" :src="right.img">
            </div>
        </div>
    </div>
    <div :class="type+'-game-score'" v-if="type==='rough'">
        <div class="game-date">09-11 12:00</div>
        <div class="game-team">
            <div class="left-team">
                <div class="team-msg">
                    <img class="team-img" :src="left.img">
                    <span class="team-name">{{left.name}}</span>
                </div>
                <span class="team-score">{{left.score}}</span>
            </div>
            <div class="game-vs">VS</div>
            <div class="right-team">
                <span class="team-score">{{right.score}}</span>
                <div class="team-msg">
                    <img class="team-img" :src="right.img">
                    <span class="team-name">{{right.name}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
interface MsgType {
    img: string;
    name: string;
    score: number;
}

interface GameScore {
    type: "rough" | "thin",
    left: MsgType,
    right: MsgType,
}

const props = withDefaults(defineProps<GameScore>(), {
    type: "thin",
})
</script>
<style lang='scss' scoped>
@import './gamescore.scss';
</style>