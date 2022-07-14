<template>
    <div class="card-show touchable" @click="rotateClick">
        <div class="rotate-box touchable" :class="{ 'rotate-true': t }">
            <div class="front-box box">
                <el-image src='/assets/images/raffle/verso.png' fit="contain" />
            </div>
            <div class="verso-box box" :class="stats" v-if="t">
                <el-image :src="'/assets/images/raffle/' + stats + '.png'" fit="contain" />
                <div class="text-box">
                    <el-image src="/assets/images/raffle/ava.jpeg" class="user-avatar" fit="cover" :lazy="true" />
                    <div class="name-box">
                        <span class="user-name">llala</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>

import { ref, computed } from "vue";

interface RaffleCardProps {
    data: {
        userName: string;
        userAvatar: string;
        flag: number;
    }
    visiable?: boolean;
}
const props = defineProps<RaffleCardProps>();
const emit = defineEmits(['rolling'])
const t = ref<boolean>(false);
function rotateClick() {
    t.value = true;   // 测试用 正式的上面判断要改为deg
    // if (props.data?.flag == 1) {
    emit('rolling', props.data)
    // }
}

const deg = computed(() => {
    return props.visiable || props.data?.flag > 1;
})
const stats = computed(() => {
    return props.data?.flag == 3 ? 'win' : 'lost';
})

</script>
<style lang='scss' scoped>
.card-show {
    // flex: 1;
    display: inline-block;
    position: relative;
    transform-style: preserve-3d;
    perspective: 800px;
    transform-origin: 50% 50% 0px;
    padding: 0px 6px;
    cursor: pointer;
    transform: scale(0.96);
    transition: 0.5s all;

    &:hover {
        transform: scale(1);
    }

    .rotate-box {
        &.rotate-true {
            transform: rotateY(180deg);
        }

        font-size: inherit;
        transform-style: preserve-3d;
        transform-origin: 50% 50% 0px;
        transition: all 600ms;

        .el-image {
            width: 100%;
            height: auto;
        }

        .box {
            left: 0;
            top: 0;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
        }

        .front-box {
            position: relative;
            font-size: inherit;
        }

        .verso-box {
            position: absolute;
            width: 100%;
            z-index: 19;
            transform: rotateY(180deg);

            .text-box {
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: -5px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-size: inherit;

                .user-avatar {
                    position: absolute;
                    z-index: -1;
                    width: 79px;
                    height: 79px;
                }

                .name-box {
                    position: absolute;
                    font-size: 15px;
                    text-align: center;
                    width: 125px;
                    height: 24px;
                    line-height: 24px;
                    border-radius: 14px;
                    overflow: hidden;
                    bottom: 25px;
                    color: white;
                }
            }
        }
    }
}
</style>