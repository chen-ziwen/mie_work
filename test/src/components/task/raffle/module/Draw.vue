<template>
    <div class="draw">
        <div class="draw-main">
            <div class="choice">
                <i class="iconfont icon-arrow-right-filling"></i>
                <span>“{{ barrage }}”</span>
            </div>
            <ul class="condition-box">
                <li class="condition draw-gift">
                    <img class="gift-icon" :src="giftIcon">
                    <span class="gift-name">{{ giftName }} X{{ giftCount }}</span>
                </li>
                <li class="condition">
                    发送弹幕<span>“{{ barrage }}”</span>
                </li>
                <li class="condition">
                    发送弹幕<span>“{{ barrage }}”</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface DrawProps {
    giftIcon: string;
    giftName: string;
    giftCount: number;
    barrage: string;
}

const props = withDefaults(defineProps<DrawProps>(), {})

</script>

<style lang="scss" scoped>
.draw {
    background-image: url(/assets/images/raffle/draw-bg.png);
    width: 346px;
    height: 196px;
    display: flex;
    align-items: flex-end;

    .draw-main {
        width: 340px;
        height: 128px;
        margin-bottom: 8px;
        color: #fff;

        .choice {
            padding-left: 5px;

            .iconfont icon-arrow-right-filling {
                font-size: 18px;
                color: #ffc43e;
            }
        }

        .condition-box {
            margin: 0px;

            .condition {
                width: 304px;
                height: 35px;
                line-height: 35px;
                font-size: 16px;
                list-style-type: decimal;
            }

            .draw-gift {
                .gift-icon {
                    width: 30px;
                    height: 30px;
                    border-radius: 5px;
                    vertical-align: middle;
                }

                .gift-name {
                    margin-left: 10px;
                }
            }
        }
    }
}

.icon-arrow-right-filling:before {
    content: "\e68b";
}
</style>