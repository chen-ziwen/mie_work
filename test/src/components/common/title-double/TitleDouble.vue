<template>
    <div class="title-double">
        <div class="title-double-style">
            <slot>我是双行标题</slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
interface TitleDouble {
    theme: string
}
const props = defineProps<TitleDouble>();

const src = computed(() => `url(/assets/images/common/TitleDouble/${props.theme}.png)`)

</script>

<style lang="scss" scoped>
.title-double {

    &-style {
        background: v-bind(src) no-repeat;
        background-size: 360px 130px;
        width: 360px;
        height: 130px;
    }

}
</style>