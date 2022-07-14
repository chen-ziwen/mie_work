<template>
    <div class="rank-list">
        <div class="rank-medal">
            <img src="/assets/images/rank/medal.png" v-if="rank == 1">
            <img src="/assets/images/rank/medal2.png" v-if="rank == 2">
            <img src="/assets/images/rank/medal3.png" v-if="rank == 3">
            <span class='rank-medal-text' v-show="rank > 3">{{ rank }}</span>
        </div>
        <div class="rank-avatar">
            <img src="/assets/images/rank/ava.png">
            <!-- <div class="rank-avatar-mask" v-else></div> -->
        </div>
        <div class="rank-content">
            <span>{{ name }}</span>
            <span>{{ score }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface MieRankLi {
    // avatar?: string; //用户头像
    name: string;  //用户名
    score: number;  //得分
    rank: string | number; // 排名的值
    index: number; // 索引值
}
const porps = defineProps<MieRankLi>();

</script>

<style lang="scss" scoped>
$lhight: 68px;
$tcolor: #14887b;

@mixin _flex ($just, $align) {
    display: flex;
    justify-content: $just;
    align-items: $align;
}

@mixin _text () {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.rank-list {
    @include _flex(flex-start, center);
    flex-shrink: 0;
    width: 440px;
    height: 68px;
    background: url(/assets/images/rank/list.png) no-repeat;
    background-size: 440px;
    border-radius: 10px;

    .rank-medal {
        >img {
            margin: 0px 18px;
        }

        &-text {
            @include _flex(center, center);
            width: 42px;
            height: 42px;
            margin: 0px 18px;
            text-align: center;
            font: 700 25px '江城圆体';
            color: $tcolor;
        }
    }

    .rank-avatar {
        position: relative;
        width: 36px;
        height: 36px;
        margin-right: 25px;

        >img {
            position: absolute;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            z-index: 9;

        }

        &-mask {
            position: absolute;
            z-index: 1;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-color: gainsboro;
        }
    }

    .rank-content {
        position: relative;
        flex-grow: 1;
        width: 100%;
        height: 100%;

        >span {
            &:nth-of-type(1) {
                display: inline-block;
                width: 190px;
                height: 100%;
                @include _text();
                font: 700 26px '江城圆体';
                line-height: $lhight;
                color: $tcolor;
            }

            &:nth-of-type(2) {
                position: absolute;
                right: 25px;
                font: 700 26px '江城圆体';
                color: #fd6990;
                text-align: end;
                line-height: $lhight;
            }
        }
    }
}
</style>