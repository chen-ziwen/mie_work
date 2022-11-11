<template>
    <div class="text-box">
        <div class="real-box">
            <LineBox class="line-box" :dashedOffset="20" v-if="textList && textList.length>0">
                <div class="barrage-msg-all">
                    <BarrageMsg :width="312" :height="205" v-for="(item,index) in textList" :key="index" :avatar="item.avatar" :message="item.message"></BarrageMsg>
                </div>
            </LineBox>
        </div>
    </div>
</template>
<script lang='ts' setup>
import LineBox from '../../worldcup/game-panel/LineBox.vue';
import BarrageMsg from '../../worldcup/game-panel/BarrageList.vue';
interface ListType {
    avatar: string;
    message: string;
}
interface TextBox {
    textList: ListType[]
}
const props = defineProps<TextBox>();
</script>
<style lang='scss' scoped>
.text-box {
    background-image: url(/assets/images/world-cup/textbox.png);
    background-repeat: no-repeat;
    width: 874px;
    height: 880px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    .real-box {
        width: 730px;
        height: 730px;
        transform: translateY(10px);
        // background-color: red;
        overflow: scroll;
        overflow-x: hidden;

        &::-webkit-scrollbar {
            width: 0px;
        }

        .line-box {
            margin-left: 65px;

            .barrage-msg-all {
                padding-top: 20px;
            }
        }

    }
}
</style>