<template>
    <div class="music-play">
        <div class="content">
            <MusicContent :theme="theme" :width="431" :height="493">
                <div class="base-message">
                    <ul class="base-message-ul">
                        <transition-group name="animate">
                            <li v-for="(item, index) in record" :key="item.userId + item.songName">
                                <div class="song-order">
                                    <span :style="{ color: getColor.user, textShadow: userShadow }">{{ index + 1 }}</span>
                                </div>
                                <ScrollText :width="330" scroll="round" :time="10" infinite="infinite">
                                    <div class="song-detial">
                                        <span :style="{ color: getColor.song, textShadow: songShadow }">{{ item.songName }}</span>
                                        <span :style="{ color: getColor.user, textShadow: userShadow }">{{ item.userName }}</span>
                                    </div>
                                </ScrollText>
                            </li>
                        </transition-group>
                    </ul>
                </div>
            </MusicContent>
        </div>
        <div class="tips" :style="{ transform: display ? 'translateY(0)' : 'translateY(120px)' }">
            <MusicTips :theme="theme" :width="420" :height="58">
                <div class="base-tips">
                    <div class="base-content">
                        <img src="/assets/icon/success.png">
                        <img src="/assets/icon/tips.png">
                        <img src="/assets/icon/error.png">
                        <span :style="{ color: getColor.song, textShadow: songShadow }"><span class="song-name">{{ event.songName }}</span>，{{ event.message }}</span>
                    </div>
                </div>
            </MusicTips>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { computed } from '@vue/reactivity';
import { ref, watch } from 'vue';
//组件
import MusicContent from './MusicContent.vue';
import MusicTips from './MusicTips.vue';
import ScrollText from './ScrollText.vue';
// 颜色数据
import color from './color';
// 后台数据
// 数据类型
interface MyColor {
    song: string;
    user: string;
    userShadow: string;
    songShadow: string;
}
interface PlayListRecord {
    userId: string;
    userName: string;
    songName: string;

}
interface EventContext {
    songName: string;
    message: string;
    messageId: string | number;
}

interface MusicPlayerProps {
    record: PlayListRecord[];
    event: EventContext;
    theme: string;
    delay?: number;
}
const props = withDefaults(defineProps<MusicPlayerProps>(), {
    theme: 'neon',
    delay: 5000,
});

const display = ref(false);
let timeout: NodeJS.Timeout;
// 颜色配置  默认霓虹
const getColor = ref<MyColor>(color.neon);

// 两个阴影色
const songShadow = computed(() => {
    const s = getColor.value.songShadow;
    return `1px -1px 3px ${s},-1px 1px 3px ${s},1px 1px 3px ${s},-1px -1px 3px ${s}`;
})
const userShadow = computed(() => {
    const u = getColor.value.userShadow;
    return `1px -1px 3px ${u},-1px 1px 3px ${u},1px 1px 3px ${u},-1px -1px 3px ${u}`;
})

// 显示弹窗，在规定时间内没有新的弹窗生成，则隐藏弹窗。
function displayList(delay: number) {
    display.value = true;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        display.value = false;
    }, delay)
}


// val会拿到关键字 例如 neon 拿到名字后进行下一步处理。
watch(() => props.theme, () => {
    getColor.value = color[props.theme];
}, { immediate: true })

// 监听数据的变化，如果变化就弹出弹窗,
watch(() => props.event.messageId, () => {
    displayList(props.delay);
}, { deep: true });

</script>

<style lang='scss' scoped>
@mixin useAnimate ($name: 'animate', $time: 0.35s, $move: (30%, 0%)) {

    .#{$name}-move,
    .#{$name}-enter-active,
    .#{$name}-leave-active {
        transition: all $time ease;
    }

    .#{$name}-enter-from {
        transform: translate($move);
    }

    .#{$name}-leave-to {
        opacity: 0;
    }

    .#{$name}-leave-active {
        position: absolute;
        z-index: -10;
    }
}

@include useAnimate();

.el-tips {
    background-color: #ffffff;
    border-radius: 50%;
    box-shadow: inset 1px 1px 1px v-bind('getColor.songShadow'), inset -1px -1px 1px v-bind('getColor.songShadow'), inset -1px 1px 1px v-bind('getColor.songShadow'), inset 1px -1px 1px v-bind('getColor.songShadow');
    transform: translateY(-1.4px);
    vertical-align: text-bottom;
}

//element-icon  上面为el-icon的样式

.music-play {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 620px;
    width: 470px;
    overflow: hidden;

    .content {
        padding-top: 20px;

        .base-message {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            &-ul {
                position: relative;
                list-style: none;
                padding: 0px;
                width: 370px;
                height: 410px;
                overflow: hidden;

                >li {
                    font-size: 24px;
                    display: flex;
                    align-items: center;
                    flex-wrap: nowrap;

                    .song-order {
                        margin-bottom: 10px;

                        >span {
                            font-size: 24px;
                            display: inline-block;
                            width: 26px;
                            padding-right: 12px;
                            text-align: right;

                        }
                    }

                    .song-detial {
                        >span {
                            display: inline-block;
                            color: #ffffff;
                            margin-bottom: 10px;

                            &:first-of-type {
                                padding-left: 2px;
                                white-space: nowrap;
                                margin-right: 13px;
                            }

                            &:nth-of-type(2) {
                                font-size: 20px;
                            }
                        }
                    }
                }
            }
        }
    }

    .tips {
        width: 420px;
        margin-top: 25px;
        position: relative;
        transition: all 250ms ease-in;
        transform: translateY(120px);

        .base-tips {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 48px;

            .base-content {
                width: 380px;
                font-size: 18px;
                overflow: hidden;
                max-height: 48px;

                >img {
                    width: 23px;
                    height: 23px;
                    background-color: #ffffff;
                    border-radius: 50%;
                    box-shadow: inset 1px 1px 1px v-bind('getColor.songShadow'), inset -1px -1px 1px v-bind('getColor.songShadow'), inset -1px 1px 1px v-bind('getColor.songShadow'), inset 1px -1px 1px v-bind('getColor.songShadow');
                    vertical-align: text-bottom;
                }

                >span {
                    margin-left: 5px;
                    letter-spacing: 2px;

                    .song-name {
                        font-weight: 600;
                    }
                }
            }
        }
    }
}
</style>