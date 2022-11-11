<template>
    <div class="config">
        <el-select v-model="value" class="m-2" :placeholder="tag" size="large" @change="getValue">
            <el-option v-for="item in opts" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
    </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';

const value = ref('');
const theme = ref('neon');

interface option {
    value: string;
    label: string;
}
interface optionsArr {
    tag?: string
    opts?: option[];
}

withDefaults(defineProps<optionsArr>(), {
    tag: '皮肤选择',
    // 默认值为数组或对象时，必须写为函数的形式
    opts: () => [
        {
            value: 'square',
            label: '方角',
        },
        {
            value: 'round',
            label: '圆角',
        },
        {
            value: 'diamond',
            label: '菱形',
        },
        {
            value: 'neon',
            label: '霓虹',
        },
        {
            value: 'technology',
            label: '科技',
        },
        {
            value: 'cat',
            label: '趴趴猫',
        },
        {
            value: 'spring',
            label: '春和',
        },
        {
            value: 'winter',
            label: '冬雪',
        },
        {
            value: 'magic',
            label: '魔法',
        },
        {
            value: 'fire',
            label: '火焰',
        },
        {
            value: 'genshin',
            label: '原神',
        },
        {
            value: 'rose',
            label: '蔷薇',
        },
        {
            value: 'constellation',
            label: '星座',
        },
        {
            value: 'cute',
            label: '可爱',
        },

    ],
});

const emit = defineEmits(['theme']);
function getValue(val: string) {
    theme.value = val;
    emit('theme', theme.value)
}


</script>

<style lang='scss' scoped>
</style>