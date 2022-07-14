<template>
    <div class="draw">
        <div class="draw-main">
            <div class="condition draw-gift">
                1.&nbsp;
                <img class="gift-icon" :src="giftIcon">
                <span class="gift-name">{{ giftName }}&#215;{{ giftCount }}</span>
            </div>
            <div class="condition">
                2.发送弹幕<span>“{{ barrage }}”</span>
            </div>
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
    height: 190px;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    &-main {
        width: 341px;
        height: 134px;
        margin-bottom: 3px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        .condition {
            width: 304px;
            height: 50px;
            display: flex;
            align-items: center;
            font-size: 24px;
            color: #fff;
        }

        .draw-gift {

            .gift-icon {
                width: 45px;
                height: 45px;
            }

            .gift-name {
                margin-left: 21px;
            }
        }
    }
}
</style>