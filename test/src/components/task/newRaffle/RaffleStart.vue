<template>
    <div class="raffle-start">
        <div class="card-back">
            <el-image v-show="noPlay" class="no-start" :src="'/assets/images/newraffle/gamestart.png'" fit="contain"></el-image>
            <div class="add-card">
                <AddCard v-for="i in 5" :key="i"></AddCard>
            </div>
        </div>
        <div>
            赠送：
            <img :src="giftIcon" />
            {{ queued }}
            {{ collecting }}

        </div>

        <div class="base-message">
            <!-- <Right></Right> -->
            <el-button class="start" v-if="collecting < 1" type="text" @click="$emit('start'); noPlay = false">开始统计</el-button>
            <el-button class="start-out" v-else type="text">统计中...</el-button>
            <el-button class="stop" type="text" v-show="collecting == 1" @click="$emit('stop')">开始抽奖</el-button>
        </div>
    </div>

</template>
<script lang='ts' setup>
import { ref, watch } from 'vue';
import Right from '../newRaffle/Right.vue';
// import { useQueryGift } from '@/renderer/use';
const props = defineProps(['cards', 'collecting', 'explain', 'config', 'queued', 'stacks']);

const top = ref(0);
const cardslast = ref<any[]>([]);
const giftName = ref('');
const giftIcon = ref('');
const noPlay = ref<boolean>(true);

// function fetchGift(current: string) {
//     useQueryGift().then((gifts: any) => {
//         let data = gifts[current];
//         if (data) {
//             giftName.value = data.name;
//             giftIcon.value = data.icon;
//         }
//     });
// }

// fetchGift(props.config.giftId.value);
// watch(props.config.giftId, (current: string) => {
//     fetchGift(current);
// });

</script>
<style lang='scss' scoped>
.raffle-start {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;

    .card-back {
        position: relative;
        background: url(/assets/images/newraffle/raffleback.png) no-repeat;
        background-size: 841px 659px;
        width: 841px;
        height: 659px;

        .add-card {
            display: flex;
            flex-direction: row;
        }

        // background-size: 890px 680px;
        // width: 890px;
        // height: 680px;
        .no-start {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        .red {
            width: 100px;
            height: 100px;
            background-color: red;
        }
    }
}

button {
    -webkit-app-region: no-drag;
    -webkit-user-select: none;
}
</style>