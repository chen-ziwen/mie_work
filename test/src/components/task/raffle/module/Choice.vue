<template>
    <div class="raffle-right">
        <img class="logo" src="/assets/images/raffle/logo.png" />
        <div class="choice">
            <ChoiceLi class="choice-li" v-for="item in ChoiceItemData" :key="item.img" :img="item.img" :text="item.text" :checked="checked == item.img" @click="changeTheme(item.img)" />
            <div class="buttom">
                <div class="size wash" @click="$emit('shuffle')"></div>
                <div class="size sort" @click="$emit('sort')"></div>
            </div>
        </div>

        <el-dropdown class="reset-box" trigger="click" placement="top">
            <div class="over-btn active"></div>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="$emit('reset')">放弃本局</el-dropdown-item>
                    <el-dropdown-item @click="$emit('end')">结束抽奖</el-dropdown-item>
                    <el-dropdown-item>取消</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
import ChoiceLi from './ChoiceLi.vue';
interface ChoiceItem {
    img: string;
    text: string;
}
const emit = defineEmits(['mod', 'reset', 'end', 'shuffle', 'sort']);

const ChoiceItemData: ChoiceItem[] = ([
    { img: "luck", text: "主播翻开一张牌，即中奖人员" },
    { img: "reject", text: "主播翻开一张牌，淘汰该人员" },
    { img: "half", text: "主播翻开一张牌，淘汰一半人员" },
]);

const checked = ref("luck");

function changeTheme(id: string) {
    emit('mod', id);
    checked.value = id;
}

</script>


<style lang="scss" scoped>
.raffle-right {
    width: 372px;
    height: 680px;
    display: flex;
    align-items: center;
    flex-direction: column;


    .choice {
        height: 355px;
        width: 361px;
        margin-top: 18px;
        display: flex;
        flex-direction: column;
        align-items: center;

        &-li {
            margin-bottom: 13px;
        }

        .buttom {
            height: 76px;
            width: 361px;
            display: flex;
            justify-content: space-between;

            .size {
                width: 172px;
                height: 76px;
                cursor: pointer;

                &:active {
                    transform: scale(1.01)
                }
            }

            .wash {
                background-image: url(/assets/images/raffle/wash-1.png);

                &:hover {
                    background-image: url(/assets/images/raffle/wash-2.png);
                }
            }

            .sort {
                background-image: url(/assets/images/raffle/sort-1.png);

                &:hover {
                    background-image: url(/assets/images/raffle/sort-2.png);
                }
            }
        }
    }

    .reset-box {

        .over-btn {
            width: 340px;
            height: 70px;
            margin-top: 122px;
            background-image: url(/assets/images/raffle/over-1.png);

            &:hover {
                background-image: url(/assets/images/raffle/over-2.png);
            }
        }

        .active {
            cursor: pointer;

            &:active {
                transform: scale(1.01)
            }
        }

    }
}

:deep(.el-dropdown-menu__item) {
    padding: 5px 35px !important;
    font-size: 17px !important;
}
</style>