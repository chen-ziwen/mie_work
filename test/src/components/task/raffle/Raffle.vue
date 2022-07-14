<template>
    <div class="raffle">
        <RaffleStart v-if="la" :cards="cards" @boo="change" @start="start" @stop="stop"></RaffleStart>
        <RaffleDraw v-else :cards="cards" @luck="luck" @half="half" @reject="reject" @reset="reset" @end="end" @shuffle="shuffle" @sort="sort"></RaffleDraw>

    </div>
</template>
<script lang='ts'>
import { defineComponent, ref } from 'vue';
// import { useToolkitRaffle } from '../use';
import RaffleDraw from './RaffleDraw.vue';
import RaffleStart from './RaffleStart.vue';
import RaffleResult from './RaffleResult.vue';
import RaffleHistory from './RaffleHistory.vue';

export default defineComponent({
    name: "NewRaffle",
    components: { RaffleDraw, RaffleStart },
    setup() {
        const la = ref<boolean>(true);
        function change() {
            la.value = !la.value;
        }
        const cards = [
            { userAvatar: '/assets/images/raffle/ava.jpeg', userName: '可爱小熊' },
            { userAvatar: '/assets/images/raffle/ava.jpeg', userName: '我是谁' },
            { userAvatar: '/assets/images/raffle/ava.jpeg', userName: '我是谁' },
            { userAvatar: '/assets/images/raffle/ava.jpeg', userName: '不懂你的话lalla的撒大' },
            { userAvatar: '/assets/images/raffle/ava.jpeg', userName: '我是谁' },
            { userAvatar: '/assets/images/raffle/ava.jpeg', userName: '我是谁' },
            { userAvatar: '/assets/images/raffle/ava.jpeg', userName: '我是谁' },
            { userAvatar: '/assets/images/raffle/ava.jpeg', userName: '我是谁' },
            { userAvatar: '/assets/images/raffle/ava.jpeg', userName: '我是谁' },
            { userAvatar: '/assets/images/raffle/ava.jpeg', userName: '我是谁' },
            { userAvatar: '/assets/images/raffle/ava.jpeg', userName: '我是谁' },
            { userAvatar: '/assets/images/raffle/ava.jpeg', userName: '我是谁' },
            { userAvatar: '/assets/images/raffle/ava.jpeg', userName: '我是谁' },
            { userAvatar: '/assets/images/raffle/ava.jpeg', userName: '我是谁' },
            { userAvatar: '/assets/images/raffle/ava.jpeg', userName: '我是谁' },
            { userAvatar: '/assets/images/raffle/ava.jpeg', userName: '我是谁' },
            { userAvatar: '/assets/images/raffle/ava.jpeg', userName: '我是谁' },
            { userAvatar: '/assets/images/raffle/ava.jpeg', userName: '我是谁' },
        ];
        function luck() {
            console.log('我是luck,我触发了');
        }
        function reject() {
            console.log('我是reject,我触发了');

        }
        function half() {
            console.log('我是half,我触发了');
        }
        function start() {
            console.log('我是start,我触发了');
        }
        function stop() {
            console.log('我是stop,我触发了');
        }
        function reset() {
            console.log('我是reset,我触发了');
        }
        function end() {
            console.log('我是end,我触发了');
        }
        function shuffle() {
            console.log('我是shuffle,我触发了');
        }
        function sort() {
            console.log('我是sort,我触发了');
        }
        return {
            cards,
            la,
            luck,
            reject,
            half,
            change,
            start,
            stop,
            reset,
            end,
            shuffle,
            sort,
            // ...useToolkitRaffle()
        }
    }
})

</script>
<style lang='scss' scoped>
.raffle {
    width: 1280px;
    height: 720px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(216, 234, 254);
}
</style>