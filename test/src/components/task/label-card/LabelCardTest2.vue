<template>
    <div class="tag">
        <div class="ul">
            <el-button type="primary" v-for="(item, index) in widgets.category" :disabled="diff.includes(item.id)" class="li" :key="index" @click="exit(item.id, widgets.category2); oneFn(index, item.id)"
                :class="{ 'change-color': index === oneTag, 'all-color': diff.includes(item.id) }">
                {{ item.name }}
            </el-button>
        </div>
        <div class="ul">
            <el-button type="primary" v-for="(item, index) in widgets.category2" :disabled="diff2.includes(item.id)" class="li" :key="index" @click="exit(item.id, widgets.category); twoFn(index, item.id)"
                :class="{ 'change-color': index === twoTag, 'all-color': diff2.includes(item.id) }">
                {{ item.name }}
            </el-button>
        </div>
    </div>
    <div class="content">
        <template v-for="(item, index) in widgets.plug" :key="index">
            <div class="content-li" v-show="displayPlug(item.plugkey)">
                {{ item.name }}
            </div>
        </template>
    </div>
</template>

<script lang='ts' setup>
import { ref, reactive } from 'vue';
import { widgets } from '@/config/label-card/widgets';
const oneTag = ref(0);
const twoTag = ref(0);
const diff = ref<number[]>([]);
const diff2 = ref<number[]>([]);
const keepKey = reactive<{ oneTag: number, twoTag: number }>({
    oneTag: widgets.category[0].id, //默认选中全部
    twoTag: widgets.category2[0].id,
})
function displayPlug(plugkey: (number | undefined)[]) {
    //类别数组
    const newArr = Object.values(keepKey);
    const judge = newArr.every(item => {
        //如果newArr中的每一项都包含在plugkey中的话，则返回true。
        return plugkey.includes(item);
    })
    return judge;
}
function exit(id: number, judeArr: any[]) {
    const lit: Set<number> = new Set();
    const plug: Set<number[]> = new Set(); // 拥有上或下标签中的id的剩余插件集合
    const category: Set<number> = new Set();
    const len = widgets.plug.length;
    let i = 0;
    for (let item of judeArr) {
        category.add(item.id);
    }
    while (i < len) {
        if (widgets.plug[i].plugkey.includes(id)) {
            plug.add(widgets.plug[i].plugkey);
        }
        i++;
    }
    plug.forEach(item => {
        Array.from(category).map(i => {
            if (item.includes(i)) {
                lit.add(i);
            }
        })
    })
    // 找出差集
    if (category.has(widgets.category[0].id)) {  //如果传入的值为第一个标签数组则执行
        diff.value = [...new Set([...category].filter(x => !lit.has(x)))];
    }
    else {
        diff2.value = [...new Set([...category].filter(x => !lit.has(x)))];
    }
}

function oneFn(index: number, id: number) {
    oneTag.value = index;
    keepKey.oneTag = id;
}

function twoFn(index: number, id: number) {
    twoTag.value = index;
    keepKey.twoTag = id;
}
</script>

<style lang='scss' scoped>
.change-color {
    color: #06C9B5 !important;
    border: 1px solid #06C9B5 !important;
}

.all-color {
    background-color: #dedede !important;
    cursor: no-drop !important;
    color: black !important;
    border: 1px solid transparent !important;
    opacity: 0.75;
}

.tag {
    .ul {
        margin-bottom: 15px;

        .li {
            display: flex;
            display: inline-block;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            padding: 5px 15px;
            margin: 0px 3px;
            box-sizing: border-box;
            white-space: nowrap;
            cursor: pointer;
            color: #3e3f41;
            user-select: none;
            background-color: white;
            border: 1px solid #dedede;
            border-radius: 20px;

        }
    }
}

.content {
    display: flex;
    flex-wrap: wrap;

    &-li {
        text-align: center;
        line-height: 200px;
        width: 200px;
        height: 200px;
        border: 2px solid #06C9B5;
        flex-shrink: 0;
        margin: 15px;
    }
}
</style>