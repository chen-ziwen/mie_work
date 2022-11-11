<template>
    <div id="world-cup-console" data-theme="white">
        <div class="header">我是头部按钮</div>
        <GameHeaderInfo class="top-box" lstate="沙特阿拉伯" rstate="哥斯达黎加" :limg="imgs.s" :rimg="imgs.t" score="14:0"></GameHeaderInfo>
        <div class="big-box-1">
            <LineBox :dashed-offset="33" :len="barMsg1.length">
                <div class="move-barrage">
                    <TransitionGroup name="pop">
                        <BarrageList v-for="(item,index) in barMsg1" :key="index" :avatar="item.avatar" :message="item.msg" :discolor="item.discolor"></BarrageList>
                    </TransitionGroup>
                </div>
            </LineBox>
            <div class="fun-model">
                <el-input class="gap-sides" v-model="message" placeholder="文本内容" style="width:480px">
                    <template #prepend>
                        <el-select v-model="select" placeholder="发言选择" style="width: 130px">
                            <el-option label="进球精彩时刻" value="1" />
                            <el-option label="精彩发言" value="2" />
                            <el-option label="决胜时刻" value="3" />
                        </el-select>
                    </template>
                </el-input>
                <div class="set-btn">
                    <el-checkbox v-model="checked" label="自动拉取" size="large" />
                    <div class="right-btn">
                        <el-button class="m-el-btn el-btn-style">发送</el-button>
                        <el-button class="m-el-btn el-btn-style">快捷&NonBreakingSpace;
                            <el-icon>
                                <ArrowDown />
                            </el-icon>
                        </el-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="big-box-2">
            <LineBox :len="barMsg2.length">
                <div class="move-barrage">
                    <TransitionGroup name="pop">
                        <BarrageList v-for="(item,index) in barMsg2" :key="index" :avatar="item.avatar" :message="item.msg" :img="item.img"></BarrageList>
                    </TransitionGroup>
                </div>
            </LineBox>
            <div class="fun-model">
                <el-input class="gap-sides" v-model="message2" placeholder="图片描述" style="width:340px"></el-input>
                <div class="set-btn">
                    <el-checkbox v-model="checked" label="自动拉取" size="large" />
                    <div class="right-btn">
                        <el-button class="m-el-btn el-btn-style">选择图片</el-button>
                        <el-button class="m-el-btn el-btn-style">发送</el-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="right-box">
            <GameListData :data="arr"></GameListData>
            <el-button class="show-against el-btn-style">展示对阵图</el-button>
        </div>
    </div>
    <button @click="add">添加数据</button>
</template>
<script lang='ts' setup>
import { ref, reactive } from 'vue';
import GameHeaderInfo from './GameHeaderInfo.vue';
import BarrageList from './BarrageList.vue';
import LineBox from './LineBox.vue';
import GameListData from './GameListData.vue';
import { ArrowDown } from '@element-plus/icons-vue';

const select = ref("1")
const message = ref('')
const message2 = ref('')
const checked = ref('')

const imgs = {
    s: '/assets/images/world-cup/1.jpeg',
    t: '/assets/images/world-cup/2.jpeg',
}
const barMsg1 = ref([
    { avatar: '/assets/images/world-cup/ava.jpeg', msg: '66666666666666', discolor: true },
    { avatar: '', msg: '湖人首发: 杰-胡夫，科尔-斯威得，帕里斯-巴斯，克里斯蒂，小皮蓬！！' },
    { avatar: '/assets/images/world-cup/ava.jpeg', msg: '66666666666666' },
    { avatar: '/assets/images/world-cup/ava2.jpeg', msg: '今天肯定能赢，我赌球非常非常的准！！！', img: '/assets/images/world-cup/zuqiu.jpeg' },
    { avatar: '/assets/images/world-cup/ava2.jpeg', msg: '今天肯定能赢，我赌球非常非常的准！！！', img: '/assets/images/world-cup/zuqiu.jpeg' },
    { avatar: '/assets/images/world-cup/ava.jpeg', msg: '66666666666666' },
    { avatar: '/assets/images/world-cup/ava2.jpeg', msg: '今天肯定能赢，我赌球非常非常的准！！！' },
    // { avatar: '/assets/images/world-cup/ava.jpeg', msg: '66666666666666' },
    // { avatar: '/assets/images/world-cup/ava2.jpeg', msg: '今天肯定能赢！！！' },
    // { avatar: '/assets/images/world-cup/ava2.jpeg', msg: '今天肯定能赢！！！' },
    // { avatar: '/assets/images/world-cup/ava2.jpeg', msg: '今天肯定能赢！！！' },
    // { avatar: '/assets/images/world-cup/ava2.jpeg', msg: '今天肯定能赢！！！' },
])
const add = () => {
    barMsg1.value.push({ avatar: '/assets/images/world-cup/ava2.jpeg', msg: '今天肯定能赢，我赌球非常非常的准！！！' },
    )
}
const barMsg2 = [
    { avatar: '/assets/images/world-cup/ava.jpeg', msg: '66666666666666', img: '/assets/images/world-cup/zuqiu.jpeg' },
    { avatar: '', msg: '湖人首发: 杰-胡夫，科尔-斯威得，帕里斯-巴斯，克里斯蒂，小皮蓬！！' },
    { avatar: '/assets/images/world-cup/ava2.jpeg', msg: '今天肯定能赢，我赌球非常非常的准！！！', img: '/assets/images/world-cup/zuqiu.jpeg' },
    // { avatar: '/assets/images/world-cup/ava2.jpeg', msg: '今天肯定能赢，我赌球非常非常的准！！！', img: '/assets/images/world-cup/zuqiu.jpeg' },
    // { avatar: '/assets/images/world-cup/ava2.jpeg', msg: '今天肯定能赢，我赌球非常非常的准！！！', img: '/assets/images/world-cup/zuqiu.jpeg' },
    // { avatar: '/assets/images/world-cup/ava2.jpeg', msg: '今天肯定能赢！！！' },
]

// 左侧的数据渲染
const arr = reactive([
    {
        group: "A组",
        open: false,
        data: [
            { team: '卡塔尔', flagImg: '/assets/images/world-cup/1.jpeg', outcome: '6/2/5', into: '2/2', score: '28' },
            { team: '厄瓜尔多666', flagImg: '/assets/images/world-cup/1.jpeg', outcome: '1/5/0', into: '3/2', score: '26' },
            { team: '荷兰', flagImg: '/assets/images/world-cup/1.jpeg', outcome: '4/2/5', into: '3/8', score: '34' },
            { team: '中国', flagImg: '/assets/images/world-cup/1.jpeg', outcome: '8/1/0', into: '10/2', score: '86' }
        ]
    },
    { group: "B组", open: false, data: [{ team: '厄瓜尔多', flagImg: '/assets/images/world-cup/1.jpeg', outcome: '1/5/0', into: '3/2', score: '26' }] },
    { group: "C组", open: true, data: [{ team: '塞内加尔', flagImg: '/assets/images/world-cup/1.jpeg', outcome: '2/2/3', into: '7/2', score: '12' }] },
    { group: "D组", open: false, data: [{ team: '荷兰', flagImg: '/assets/images/world-cup/1.jpeg', outcome: '4/2/5', into: '3/8', score: '34' }, { team: '荷兰', flagImg: '/assets/images/world-cup/1.jpeg', outcome: '4/2/5', into: '3/8', score: '34' },] },
    {
        group: "E组", open: false, data: [{ team: '希腊', flagImg: '/assets/images/world-cup/1.jpeg', outcome: '3/2/4', into: '5/5', score: '23' },
        { team: '荷兰', flagImg: '/assets/images/world-cup/1.jpeg', outcome: '4/2/5', into: '3/8', score: '34' },
        { team: '荷兰', flagImg: '/assets/images/world-cup/1.jpeg', outcome: '4/2/5', into: '3/8', score: '34' },
        ]
    },
    {
        group: "F组", open: false, data: [{ team: '希腊', flagImg: '/assets/images/world-cup/1.jpeg', outcome: '3/2/4', into: '5/5', score: '23' },
        { team: '荷兰', flagImg: '/assets/images/world-cup/1.jpeg', outcome: '4/2/5', into: '3/8', score: '34' },
        { team: '荷兰', flagImg: '/assets/images/world-cup/1.jpeg', outcome: '4/2/5', into: '3/8', score: '34' },
        ]
    },
    {
        group: "G组", open: false, data: [
            { team: '希腊', flagImg: '/assets/images/world-cup/1.jpeg', outcome: '3/2/4', into: '5/5', score: '23' },
            { team: '荷兰', flagImg: '/assets/images/world-cup/1.jpeg', outcome: '4/2/5', into: '3/8', score: '34' },
        ]
    },
    {
        group: "H组", open: false, data: [
            { team: '希腊', flagImg: '/assets/images/world-cup/1.jpeg', outcome: '3/2/4', into: '5/5', score: '23' },
            { team: '荷兰', flagImg: '/assets/images/world-cup/1.jpeg', outcome: '4/2/5', into: '3/8', score: '34' },
            { team: '荷兰', flagImg: '/assets/images/world-cup/1.jpeg', outcome: '4/2/5', into: '3/8', score: '34' },
        ]
    },
    // { group: "F组", open: false, data: [{ team: '中国', flagImg: '/assets/images/world-cup/1.jpeg', outcome: '8/1/0', into: '10/2', score: '86' }] },
])

</script>
<style lang='scss' scoped>
$box-height :560px;
$all-margin : 10px;

#world-cup-console {
    width: 1280px;
    height: 720px;
    display: grid;
    row-gap: 8px;
    grid-template: 36px 100px 1fr / 510px 368px 1fr;
    grid-template-areas:
        "head head head" // 给网格划分区域
        "nav nav side"
        "left right side";
    background-color: #E4E4E4;

    .header {
        height: 36px;
        width: 100%;
        grid-area: head;
        background-color: #F4F4F4;
    }

    .top-box {
        grid-area: nav;
        justify-self: end;
    }

    .big-box-1 {
        grid-area: left;
        width: 500px;

        .move-barrage {
            margin: 15px 0 0 13px;
        }
    }

    .big-box-2 {
        grid-area: right;
        width: 360px;
        justify-self: end;

        .move-barrage {
            margin: 15px 25px 0 25px;
        }
    }

    .big-box-1,
    .big-box-2 {
        border-radius: 5px;
        background-color: #F2F2F2;
        justify-self: end;
        margin-bottom: 8px;

        .fun-model {
            height: calc(100% - 450px);
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;

            &:deep(.el-input) {
                --el-input-focus-border-color: #28DBA4; // input 选中边框颜色

                .el-select {
                    --el-select-input-focus-border-color: #28DBA4;
                }
            }

            .gap-sides {
                margin: 5px 10px 0;

            }

            .set-btn {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 0 10px;

                :deep(.el-checkbox) {
                    // 改变对应的颜色变量
                    --el-checkbox-checked-text-color: #000000;
                    --el-checkbox-checked-bg-color: #ffffff;
                    --el-checkbox-checked-input-border-color: #cdcdcd;
                    --el-checkbox-checked-icon-color: #28DBA4;
                    --el-checkbox-input-border-color-hover: #28DBA4;
                }

                .m-el-btn {
                    width: 82px;
                    height: 35px;
                    box-sizing: border-box;
                }
            }
        }
    }

    .right-box {
        height: 665px;
        grid-area: side;
        display: flex;
        flex-direction: column;
        align-items: center;

        .show-against {
            width: 332px;
            height: 40px;
            margin-top: 10px;
            font-size: 16px;
        }
    }
}

// 按钮样式
.el-btn-style {
    color: #FFFFFF;
    background-color: #28DBA4;

    &:active {
        border: 1px solid #28DBA4;
    }
}

// 弹幕动画
.pop-move,
.pop-enter-active,
.pop-leave-active {
    transition: all 0.5s ease;
}

.pop-enter-from,
.pop-leave-to {
    opacity: 0;
    transform: translateX(40px);
}

.pop-leave-active {
    position: absolute;
}
</style>