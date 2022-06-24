<template>
    <div class="config">
        <el-select v-model="value" class="m-2" :placeholder="title" size="large" @change="getValue">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
    </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
interface choose {
    value: string;
    label: string;
}
interface Theme {
    options: choose[];
    title?: string

}
// 拿到传进来的配置项
const props = withDefaults(defineProps<Theme>(), {
    title: '主题选择'
})
const value = ref('');
const theme = ref('neon');
const emit = defineEmits(['theme']);
function getValue(val: string) {
    theme.value = val;
    emit('theme', theme.value)
}

</script>

<style lang='scss' scoped>
</style>