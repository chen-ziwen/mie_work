<template>
    <div class="ch-tabs">
        <slot></slot>
    </div>
</template>
<script lang='ts' setup>
interface TabPane {
    label: string;
    name: string | number;
}
const props = defineProps<TabPane>();

</script>
<style lang='scss' scoped>
</style>