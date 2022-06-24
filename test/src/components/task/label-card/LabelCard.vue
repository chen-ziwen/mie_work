
<template>
    <div class="tag">
        <div class="ul">
            <!-- :disabled="diff2.includes(item.id)" -->
            <!-- 'all-color': diff2.includes(item.id)  -->
            <el-button type="primary" v-for="(item, index) in widgets.origin" class="li" :key="index" @click="exit(item.allow); oneFn(index, item.id)" :class="{ 'change-color': index === originIndex }">
                {{ item.name }}
            </el-button>
        </div>
        <div class="ul">
            <!-- :disabled="diff.includes(item.id)" -->
            <!-- 'all-color': diff.includes(item.id)  -->
            <el-button type="primary" v-for="(item, index) in widgets.app" class="li" :key="index" @click="exit(item.allow); twoFn(index, item.id)" :class="{ 'change-color': index === appIndex }">
                {{ item.name }}
            </el-button>
        </div>
    </div>
    <div class="content">
        <template v-for="(item, index) in widgets.plug" :key="index">
            <div class="content-li" v-show="displayPlug(item.cate.origin.concat(item.cate.app))">
                {{ item.name }}
            </div>
        </template>
    </div>
</template>

<script lang='ts' setup>
import { ref, reactive } from 'vue';
import { widgets, allTag } from '@/config/label-card/config';

const originIndex = ref<number>(0);
const appIndex = ref<number>(0);
const diff = ref<string[]>([]);
const diff2 = ref<string[]>([]);
const keepKey = reactive<{ origin: string, app: string }>({
    origin: 'all-origin', //默认选中全部
    app: 'all-app',
})
function displayPlug(plugkey: (string | undefined)[]) {
    //类别数组
    const newArr = Object.values(keepKey);
    const judge = newArr.every(item => {
        //如果newArr中的每一项都包含在plugkey中的话，则返回true。
        return plugkey.includes(item);
    })
    return judge;
}
function exit(jude: (string | undefined)[]) {
    // 上下标签关联
    if (jude.includes('all-app')) {
        diff.value = allTag['all-origin'].filter(x => !jude.includes(x));

    } else {
        diff2.value = allTag['all-app'].filter(x => !jude.includes(x));

    }
}
function oneFn(index: number, id: string) {
    originIndex.value = index;
    keepKey.origin = id;
    if (diff2.value.includes(id)) {
        keepKey.app = 'all-origin';
        appIndex.value = 0;
    }
}

function twoFn(index: number, id: string) {
    appIndex.value = index;
    keepKey.app = id;
    if (diff.value.includes(id)) {
        keepKey.origin = 'all-app';
        originIndex.value = 0;
    }
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