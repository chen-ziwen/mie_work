<template>
    <div class="img-box">
        <div class="real-box">
            <LineBox class="line-box" :dashedOffset="20" v-if="imgList && imgList.length>0">
                <div class="barrage-msg-all">
                    <BarrageMsg :width="312" :height="205" v-for="(item,index) in imgList" :key="index" :avatar="item.avatar" :message="item.message" :img="item.image"></BarrageMsg>
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
    image: string;
}
interface ImgBox {
    imgList: ListType[];
}
const props = defineProps<ImgBox>();
</script>
<style lang='scss' scoped>
.img-box {
    background-image: url(/assets/images/world-cup/imgbox.png);
    background-repeat: no-repeat;
    width: 550px;
    height: 848px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    .real-box {
        width: 500px;
        height: 730px;
        transform: translateY(10px);
        overflow: scroll;
        overflow-x: hidden;

        &::-webkit-scrollbar {
            width: 0px;
        }

        .line-box {
            margin-left: 40px;

            .barrage-msg-all {
                padding-top: 70px;
            }
        }

    }
}
</style>