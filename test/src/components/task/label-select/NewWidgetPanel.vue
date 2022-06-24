<template>
    <div class="widget-panel-card">
        <template v-for="(conf, key) in lists" :key="key">
            <el-card @click="create(key), $emit('hide')" class="conf-title" :body-style="{ padding: '0px' }" v-show="displayPlug(conf.plugkey, conf.oldplug)">
                <p class="conf-title-head ">
                    <i class="iconfont icon-add"></i>
                    {{ conf.data.title }}
                    <span class="conf-title-head-num" v-if="conf.num">({{ conf.num }})</span>
                </p>
                <div class="conf-title-img" :style="{ backgroundImage: pageImg(conf.data.store) }"></div>
            </el-card>
        </template>
    </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted, watch } from 'vue';
import { widgets2 as widgets } from "../../../const/screen";
import { WidgetDriver } from "@/config/widget";
import { WidgetConfigCore } from "@/config/widget/core";
import { config } from "@/renderer/config";

const props = defineProps(['create', 'widgets', 'selPlug', 'change']);
const emits = defineEmits(['hide']);
const allId: number = widgets.category[0].id;  // 默认选中全部插件
const lists: { [key: string]: { data: WidgetConfigCore; num?: number, plugkey: number, oldplug: boolean | undefined } } =
    reactive({});

function pageImg(msg: string | undefined) {
    if (typeof msg === undefined) {
        return 'none';
    } else {
        return `url(/src/renderer/assets/images/screen/plug-in/${msg}.png)`;
    }
}

for (let i = 0, l = widgets.plug.length; i < l; i++) {
    let conf = WidgetDriver.create(widgets.plug[i].en, config);
    if (conf) {
        if (conf.title) {
            lists[widgets.plug[i].en] = { data: conf, plugkey: widgets.plug[i].plugkey, oldplug: widgets.plug[i]?.oldplug };
        } else {
            console.warn(widgets.plug[i].en, "<======= not config mTitle");
        }
    } else {
        console.warn(widgets.plug[i].en, "<======= not exits");
    }
}

onMounted(listsNum);
watch(() => props.widgets.length, listsNum);

function listsNum() {
    if (!props.widgets) {
        return;
    }
    for (const key in lists) {
        if (Object.prototype.hasOwnProperty.call(lists, key)) {
            lists[key].num = (<any[]>props.widgets).filter(
                (x) => x.type == key
            ).length;
        }
    }
}
// 根据关键字展示插件
function displayPlug(plugkey: number, oldplug: boolean | undefined) {
    let judge: boolean = false;
    if (props.selPlug.indexOf(allId) > -1) {
        judge = true;
    }
    if (props.change) {
        return judge ? true : props.selPlug.indexOf(plugkey) > -1;
    } else if (!oldplug) {
        return judge ? true : props.selPlug.indexOf(plugkey) > -1;
    }
}

</script>

<style lang="scss" scoped>
$width: 240px;
$height: 138px;
$color: #65dacd;

.widget-panel-card {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    flex-direction: row;
    overflow: hidden auto;
    box-sizing: border-box;

    &::-webkit-scrollbar {
        width: 0px;
    }

    .conf-title {
        position: relative;
        background-color: #fff;
        width: $width - 12;
        height: $height;
        margin: 0 4px 4px;
        border-radius: 0;
        padding: 0 2px;
        box-sizing: border-box;
        cursor: pointer;
        border: solid 2px rgba(150, 148, 148, 0.212);

        &:hover {
            transition: all 0.5s;
            border-color: $color;

            .icon-add {
                transition: all 0.5s;
                color: $color;
            }
        }

        &-head {
            margin: 0px;
            box-sizing: border-box;
            padding: 5px;
            background-color: rgb(255, 255, 255);

            &-num {
                font-size: 14px;
                color: rgba(117, 117, 117, 0.712);
            }
        }

        &-img {
            position: relative;
            margin-top: 2px;
            width: $width - 20;
            background-color: aquamarine;
            height: $height - 40;
            background-size: 100% auto;
            background-repeat: no-repeat;
            background-position: top center;


        }
    }
}
</style>