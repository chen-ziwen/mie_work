<template>
    <div class="title-single">
        <div class="title border flex" v-show="display" :style="{ width: width + 'px' }">
            <slot name="head"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
interface TitleSingle {
    theme: string,
    display?: boolean,
    width?: number
}
const props = withDefaults(defineProps<TitleSingle>(), {
    display: true,
    width: 380
})
const src = computed(() => {
    if (props.theme !== 'none') {
        return `url(/assets/common/TitleSingle/${props.theme}.png)`;
    } else {
        return 'none';
    }
})

</script>

<style lang="scss" scoped>
.title-single {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
        display: inline-block;
        font-size: 30px;
        line-height: 30px;
        height: 90px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .border {
        border-image-source: v-bind(src);
        border-image-slice: 0 35 0 35 fill;
        border-image-width: 0px 35px 0px 35px;
        border-image-outset: 0px 30px 0px 30px;
        border-image-repeat: round;
    }

    .flex {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>