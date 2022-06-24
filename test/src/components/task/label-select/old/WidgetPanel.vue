<template>
    <div class="com">
        <div class="com-tag">
                <div v-for="data in allPlug.category" @click="getIndex(data.id)" class="com-tag-ul-li" :plugkey="data.id" :class='{
                    "change-color": changeColor(data.id),
                    "all-color": allColor(data.id),
                }'>
                    {{ data.name }}
                </div>

            </div>
            <div class="com-tag-ul-li2">
                <span>旧版插件</span>
                <el-switch v-model="change" class="ml-2" active-color="lightblue" inactive-color="pink" />
            </div>
            <div class="plug-unit">
                <template v-for="skinData in allPlug.plug">
                    <div class="plug-unit-s" v-show="displayPlug(skinData.plugkey)">{{ skinData.name }}</div>
                </template>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { allPlug } from './allPlug';
// import { widgets } from './widgets'
const change = ref<boolean>(true);

// selPlug数组接收选中的id, 可以借助这个数组来判断需要展示哪些插件。
const allId: number = allPlug.category[0].id;  // 默认选中全部插件
const selPlug = reactive<number[]>([allId]);

// 插件标签的颜色展示
function changeColor(plugkey: number) {
    return selPlug.indexOf(plugkey) > -1;
}
// 全部标签的特殊颜色展示
function allColor(id: number) {
    return id === allId ? (changeColor(allId)) : false;
}

// 根据关键字展示插件
function displayPlug(plugkey: number) {
    let display: boolean = false;
    if (selPlug.indexOf(allId) > -1) {
        display = true;
    }
    return display ? true : changeColor(plugkey);
}

// 全选和单选判断
function getIndex(id: number) {
    const pId: number = selPlug.indexOf(id);
    const len: number = allPlug.category.length - 1;
    if (id === allId) {
        if (selPlug.indexOf(allId) === -1) {
            // 1.选中全部时，取消多余插件高亮
            selPlug.splice(0, selPlug.length, allId);
            // 2.选中全部时，不取消多余插件高亮
            // selPlug.push(allId);
        }
    } else if (pId != -1) {
        selPlug.splice(pId, 1);
        if (selPlug.length === 0) {
            selPlug.push(allId);
        } else if (selPlug.indexOf(allId) > -1 && selPlug.length !== 1) {
            selPlug.splice(selPlug.indexOf(allId), 1);
        }
    } else {
        selPlug.push(id);
        if (selPlug.indexOf(allId) > -1) {
            selPlug.splice(selPlug.indexOf(allId), 1);
        } else if (selPlug.length >= len) {
            selPlug.push(allId);
        }
    }
}

</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}

.com {
    width: 100%;
    min-width: 1400px;

    &-tag {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;

        &-ul {
            display: flex;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;

            span {
                display: inline-block;
                white-space: nowrap;
                font-size: 23px;
                font-weight: 700;
                margin-right: 5px;
                line-height: 23px;

            }

            &-li {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 10px;
                margin: 0px 3px;
                height: 26px;
                line-height: 26px;
                box-sizing: border-box;
                white-space: nowrap;
                cursor: pointer;
                color: #3e3f41;
                user-select: none;
                border: 1px solid #dedede;
                border-radius: 20px;

                &:nth-of-type(1) {
                    color: #b3b0b0;
                    border-radius: 1px solid #e7e7e7;
                }

                &:hover {
                    color: #3dada2;
                }
            }

            &-li2 {
                width: 100%;
                display: flex;
                justify-content: flex-end;
                align-items: center;

                .ml-2 {
                    margin-right: 20px;
                }

                span {
                    padding-right: 5px;
                }
            }
        }
    }
}


//标签选中样式
.change-color {
    color: #06C9B5 !important;
    border: 1px solid #06C9B5 !important;

}

.all-color {
    color: #ffffff !important;
    background-color: #06C9B5 !important;
    border: 1px solid #ffffff !important;
}

.plug-unit {
    width: 1200px;
    height: 1200px;
    background-color: lightblue;
    margin: 10px auto 0px auto;

    &-s {
        display: inline-block;
        text-align: center;
        line-height: 190px;
        width: 190px;
        height: 190px;
        box-sizing: border-box;
        border: 5px solid blue;
        margin: 5px;
    }
}
</style>