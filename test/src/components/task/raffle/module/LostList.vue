<template>
    <div class="lost-list">
        <div class="lost-content">
            <div class="lost-roster">
                <div class="user-list" v-for="i in 40">
                    <el-avatar class="user-avatar" :size="20" src="/assets/images/raffle/ava.jpeg" @error="error">
                        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
                    </el-avatar>
                    <span class="user-name">可爱小熊</span>
                </div>
            </div>
            <div class="lost-bottom">
                <div class="lost-btn" @click="$emit('close')">
                    <span class="lost-time">（{{ num }}）</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
import { ref, watch } from 'vue';
interface LostListProps {
    data?: {
        userName?: string;
        userAvatar?: string;
    }[];
    timeshow: boolean;

}
const props = defineProps<LostListProps>();
const emit = defineEmits(['close']);
let timer: NodeJS.Timer | undefined = undefined;
const num = ref<number>(10);
// 图片加载失败显示裂开图片
const error = () => true;

function closeL() {
    num.value = 10;
    if (timer) {
        clearInterval(timer);
    }
    timer = setInterval(() => {
        num.value--;
        if (num.value <= 0) {
            emit('close');
            clearInterval(timer);
        }
    }, 1000);
}

watch(() => props.timeshow, () => {
    if (props.timeshow) {
        closeL();
    }
})

</script>
<style lang='scss' scoped>
.lost-list {
    background: url(/assets/images/raffle/lostlist.png) no-repeat;
    background-size: 400px 506px;
    width: 400px;
    height: 506px;
    display: flex;
    justify-content: center;

    .lost-content {
        transform: translateY(83px);
        width: 340px;
        height: 405px;
        display: flex;
        flex-direction: column;

        .lost-roster {
            height: 325px;
            overflow-x: hidden;

            .user-list {
                display: flex;
                align-items: center;
                height: 29.3px;
                color: white;
                font-size: 18px;

                .user-avatar {
                    margin-left: 3px;
                    margin-right: 10px;
                }

                .user-name {
                    width: 0;
                    flex-grow: 1;
                    margin-right: 10px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }
        }

        .lost-bottom {
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;

            .lost-btn {
                position: relative;
                width: 170px;
                height: 60px;
                background: url(/assets/images/raffle/lostbtn-1.png) no-repeat;

                &:hover {
                    background: url(/assets/images/raffle/lostbtn-2.png) no-repeat;
                    cursor: pointer;
                }

                .lost-time {
                    position: absolute;
                    left: 65%;
                    top: 50%;
                    transform: translate(-50%, -55%);
                    color: #337700;
                    font-size: 22px;
                }
            }
        }
    }
}

::-webkit-scrollbar {
    width: 4px;
}

::-webkit-scrollbar-track {
    height: 30px;
    -webkit-border-radius: 10px;
    border-radius: 10px;

}

::-webkit-scrollbar-track-piece {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #1C2655;
}

::-webkit-scrollbar-thumb {
    background: #9BB5FF;
    -webkit-border-radius: 10px;
    border-radius: 10px;
}
</style>