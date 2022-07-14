<template>
    <div class="choice-win" :class="{ border: checked }">
        <div class="box">
            <div class="choice-box size"></div>
            <img v-show="checked" class="choice-img size" src="/assets/images/raffle/checked.png">
        </div>
        <div class="title">
            <img class="title-img" :src="'/assets/images/raffle/' + img + '.png'">
            <div class="title-text">{{ text }}</div>
        </div>
    </div>
</template>


<script lang="ts" setup>
interface ChoiceProps {
    img: string;
    text: string;
    checked: boolean;
}

const props = withDefaults(defineProps<ChoiceProps>(), {})

</script>


<style lang="scss" scoped>
.choice-win {
    height: 80px;
    width: 340px;
    background-image: url(/assets/images/raffle/choice-off-bg.png);
    display: flex;
    cursor: pointer;

    .box {
        width: 70px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .size {
            width: 30px;
            height: 30px;
            border-radius: 4px;
        }

        .choice-box {
            background-color: #A5B0CC;
        }

        .choice-img {
            position: absolute;
            background-color: #139FD2;
        }
    }

    .title {
        width: 250px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        &-img {
            width: 99px;
            height: 25px;
        }

        &-text {
            font-size: 16px;
            color: #3D4E9A;
        }
    }
}

// 选中样式
.border {
    background-image: url(/assets/images/raffle/choice-on-bg.png);
}
</style>