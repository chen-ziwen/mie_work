<template>
    <div class="config-list ">
        <div class="main-content">
            <span>{{ zero(order + 1) }}</span>
            <span>{{ songName }}</span>
            <div class="message-icon" v-show="btnShow">
                <i class="i-img" @click="checked">
                    <img :src="icon.uncheck.checked" />
                    <img :src="icon.checked.checked" />
                </i>
                <i class="i-img" @click="del">
                    <img :src="icon.uncheck.delete" />
                    <img :src="icon.checked.delete" />
                </i>
                <i class="i-img" @click="top">
                    <img :src="icon.uncheck.top" />
                    <img :src="icon.checked.top" />
                </i>
                <i class="i-img" @click="copy">
                    <img :src="icon.uncheck.copy" />
                    <img :src="icon.checked.copy" />
                </i>
            </div>
            <div class="message-gift">
                <i class="i-gift">
                    <!-- 选中和未选中的图片一致，所以选取其中一张即可 -->
                    <img :src="icon.uncheck.gift" />
                    <span>{{ score }}</span>
                </i>
            </div>
        </div>
        <div class="vice-content">
            <!-- 这个是b站的图标 如果没有某个数值，隐藏fansmedal -->
            <FansMedal v-show="1" class="vice-fans" platform="bilibili" name="陈子文" :level="40" icon="" background=""></FansMedal>
            <span>{{ userName }}</span>
        </div>
    </div>
</template>

<script lang='ts' setup>
// 单条列表组件
import { inject, Ref, computed } from 'vue';
import type { MyTheme } from './dataInter';
import FansMedal from './FansMedal.vue';
// 导入主题图标
interface ConfigListProps {
    userName: string;
    songName: string;
    order: number;
    score: number | string;
    btnShow?: boolean;
}
function zero(num: number) {
    return num >= 10 ? num : '0' + num;
}
const props = withDefaults(defineProps<ConfigListProps>(), {
    btnShow: false,
});
const emit = defineEmits(['receive']);
const myTheme = inject('theme') as Ref<MyTheme>;

const color = computed(() => {
    return myTheme.value.color;
})
const icon = computed(() => {
    return myTheme.value.icon;
})

// 把相关字符串发送出去，告知后端应该对数据进行何种操作。

// 选中歌曲
function checked() {
    emit('receive', { key: 'checked', id: props.order });
}
// 删除
function del() {
    emit('receive', { key: 'del', id: props.order });
}
// 置顶
function top() {
    emit('receive', { key: 'top', id: props.order });
}
// 复制
function copy() {
    emit('receive', { key: 'copy', id: props.order });
}

</script>

<style lang='scss' scoped>
.config-list {
    width: 516px;
    height: 80px;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    &:nth-of-type(2n-1) {
        background: v-bind('color.uncheckedback');
    }

    &:hover .main-content .message-icon {
        display: block;
    }

    &:hover {
        background: v-bind('color.checkedback') !important;
    }

    .main-content {
        width: 480px;
        height: 18px;
        margin: 20px 0 0 16px;
        display: flex;
        justify-content: center;
        align-items: center;

        >span {

            &:first-child {
                display: inline-block;
                box-sizing: border-box;
                color: v-bind('color.tagtext');
                white-space: nowrap;

            }

            &:nth-of-type(2) {
                flex-grow: 1;
                margin-left: 27px;
                text-align: left;
                font-size: 15px;
                font-weight: 600;
                color: v-bind('color.songtext');
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }

        }

        .message-icon {
            position: relative;
            width: 140px;
            height: 18px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            display: none;

            .i-img {
                height: 18px;
                cursor: pointer;

                &:first-of-type {
                    margin-left: 40px;
                }

                &:nth-of-type(2),
                &:nth-of-type(3),
                &:nth-of-type(4) {
                    margin-left: 12px;
                }

                img {
                    width: 16px;
                    height: 16px;

                    &:last-of-type {
                        display: none;
                    }
                }

                &:hover img:first-of-type {
                    display: none;
                }

                &:hover img:last-of-type {
                    display: inline-block;
                }
            }
        }

        .message-gift {
            .i-gift {
                width: 55px;
                margin-left: 20px;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-wrap: nowrap;
                font-style: normal;
                color: v-bind('color.tagtext');
                visibility: visible;
                cursor: auto;

                >span {
                    margin-left: 5px;
                }

                >img {
                    width: 17px;
                    height: 19px;
                }
            }
        }
    }

    .vice-content {
        height: 18px;
        margin: 9px 0 20px 62px;
        display: flex;
        align-items: center;

        .vice-fans {
            margin-right: 6px;
        }

        >span {
            font-size: 13px;
            color: v-bind('color.tagtext');
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

    }

}
</style>