<template>
    <div class="config">
        <el-select v-model="value" class="m-2" placeholder="皮肤选择" size="large" @change="getValue">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
    </div>
</template>

<script lang='ts' setup>
import { ref, reactive } from 'vue';

const value = ref('');
const theme = ref('neon');
const emit = defineEmits(['theme']);
function getValue(val: string) {
    theme.value = val;
    emit('theme', theme.value)
}

const options = [
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

]
</script>

<style lang='scss' scoped>
</style>