<template>
    <Config @theme="getTheme"></Config>
    <input type="text" v-model="inp">
    <div class="goals-simple">
        <TitleSingle :theme="theme" :width="290">
            <template v-slot:head><span :style="{ fontSize: 24 + 'px' }">心愿目标-简洁版</span></template>
            <NinePlain :theme="theme" :width="340" v-for="i in data" :style="{ marginBottom: 10 + 'px' }">
                <div class="goals-message">
                    <div class="content">
                        <div class="avatar-image-box img-size">
                            <!-- <img class="avatar img -size" src="" alt=""> -->
                            <div class="none-replace img-size"></div>
                        </div>
                        <span class="gift-name">
                            {{ i.gift }}
                        </span>
                        <span class="gift-count">
                            {{ i.val }}
                        </span>
                    </div>
                    <div class="bar">
                        <ProgressBar :theme="theme" :rate="i.rate"></ProgressBar>
                    </div>
                </div>
            </NinePlain>
        </TitleSingle>
    </div>
</template>
<script lang='ts' setup>
import { computed, ref } from 'vue';
import Config from '../mplayer/config.vue';
import TitleSingle from '@/components/common/TitleSingle.vue';
import NinePlain from '@/components/common/nine-plain/NinePlain.vue';
import ProgressBar from '@/components/common/progress-bar/ProgressBar.vue';

const theme = ref<string>('diamond');
const inp = ref<number>(0.5);
function getTheme(val: string) {
    theme.value = val;
}

const data = [
    { gift: '虎牙一号', rate: 888 / 999, val: '888 / 999' },
    { gift: '虎粮', rate: 14 / 100, val: '14 / 100' },
    // { gift: '良辰', rate: 685 / 999, val: '685 / 999' },
    // { gift: '霸天', rate: 542 / 999, val: ' 542 / 999' },
    { gift: '百分百', rate: 999 / 999, val: ' 999 / 999' },
    { gift: '百分零', rate: 0 / 999, val: ' 0 / 999' },
]
</script>
<style lang='scss' scoped>
.goals-simple {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .goals-message {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .content {
            width: 100%;
            height: 35px;
            padding: 0 18px 0 18px;
            box-sizing: border-box;
            display: flex;
            align-items: flex-end;
            font-size: 20px;

            .avatar-image-box {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 7px;

                .avatar {
                    position: absolute;
                }

                .none-replace {
                    z-index: -1;
                    position: absolute;
                    background-color: rgba(128, 128, 128);
                }
            }

            .gift-name {
                flex-grow: 1;
                width: 0px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            .gift-count {
                font-size: 20px;
                margin-left: 2px;

            }
        }



        .bar {
            transform: translateY(1px);
        }
    }
}

.img-size {
    width: 26px;
    height: 26px;
    border-radius: 50%;
}
</style>