<template>
    <div class="img-text-box">
        <div class="real-box">
            <LineBox class="line-box" :dashed-offset="20">
                <div class="barrage-msg-all">
                    <BarrageMsg v-for="(item,index) in list" :key="index" :avatar="item.avatar" :message="item.message" :img="item.image"></BarrageMsg>
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
    image?: string;
}
interface ImgTextBox {
    list: ListType[];
}
const props = defineProps<ImgTextBox>();
</script>
<style lang='scss' scoped>
.img-text-box {
    width: 972px;
    height: 1070px;
    background-image: url(/assets/images/world-cup/ptbox.png);
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    .real-box {
        width: 810px;
        height: 920px;
        transform: translateY(6px);
        overflow: scroll;
        overflow-x: hidden;

        &::-webkit-scrollbar {
            width: 0px;
        }

        .line-box {
            margin-left: 95px;

            .barrage-msg-all {
                padding-top: 25px;
            }
        }

    }
}
</style>