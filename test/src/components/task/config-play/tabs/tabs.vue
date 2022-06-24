<template>
    <div class="tabs" :style="{ height: height + 'px' }">
        <!-- tab-pane的标签名 -->
        <div class="tags">
            <div class="tag-select" v-for="i in tags" :key="i.label" @click="select(i)" :style="{ color: tagtext, fontSize: 17 + 'px', marginTop: marginTop + 'px' }" :class="{ selected: i.label === display }">{{ i.label }}</div>
        </div>
        <div class="tabs-content">
            <!-- tab-pane的内容 符合条件的内容显示 -->
            <component v-for="(def, index) in defaultSlots" :key="index" :is="def" v-show="def?.props?.label === display"></component>
        </div>
    </div>
</template>
<script lang='ts' setup>
import { useSlots, ref, onMounted, } from 'vue';
import TabPane from './tab-pane.vue';

interface TabsProps {
    height: number;
    name?: string | number;
    marginTop?: number;
    tagtext?: string;
    contenttext?: string;
    footline?: string;
}
interface Tags {
    [key: string]: any;
}
const props = withDefaults(defineProps<TabsProps>(), {
    marginTop: 20,
    tagtext: 'rgba(153,153,153)',
    contenttext: 'rgba(51,51,51)',
    footline: 'rgba(46, 204, 156)',
});

const emit = defineEmits(['update:name']);
const defaultSlots = useSlots().default?.(); // 拿到插槽内部的组件列表
const tags: Tags[] = [];

// 判断tabs组件内部的子组件是否为tab-pane,如果不是则抛出错误。
defaultSlots?.forEach(item => {
    if (item.type !== TabPane) {
        throw new Error(`tabs组件的子组件必须是tab-pane组件,但是当前子组件是${String(item.type)}组件,这将会抛出错误`)
    }
    const props = item.props;
    if (!props) {
        return;
    } else {
        tags.push({ label: props.label, name: props.name });
    }
})

function select(i: { [key: string]: string }) {
    display.value = i.label;
    //完成双向绑定
    emit('update:name', i.name);
}

// 如果没有传入name,默认选中第一个tag
const display = ref<string>(tags[0].label);

// 加载时根据传入的name来决定选中的tag
function choose() {
    for (let i in tags) {
        if (props.name === tags[i].name) {
            display.value = tags[i].label;
        }
    }
}
onMounted(choose);

</script>
<style lang='scss' scoped>
.tabs {
    overflow: hidden;

    .tags {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        .tag-select {
            height: 30px;
            display: flex;
            justify-content: center;
            cursor: pointer;
            user-select: none;

            &:first-of-type {
                margin-left: 29px;
                margin-right: 20px;
            }

            &:not(:first-of-type) {
                margin: 0px 20px;
            }
        }

    }

    .selected {
        position: relative;
        color: v-bind('props.contenttext') !important;
        font-size: 17px;
        font-weight: 600;

        &::after {
            position: absolute;
            content: '';
            display: block;
            width: 34px;
            height: 3px;
            border-radius: 3px;
            background: v-bind('props.footline');
            top: 30px;
        }
    }

    .tabs-content {
        margin-top: 20px;
        overflow: auto;
        height: 560px; // 刚好
    }
}

::-webkit-scrollbar {
    width: 0px;
}
</style>